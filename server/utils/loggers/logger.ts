import type { Logger as WinstonLogger } from 'winston';

import { createLogger, format, transports } from 'winston';

const { colorize, combine, printf, timestamp } = format;

/**
 * Custom log format
 */
const logFormat = printf(({ level, message, path, timestamp }) => {
  return `timestamp=${timestamp} level=${level} path="${path}" message="${message}"`;
});

export interface LogEntry {
  level: 'debug' | 'error' | 'info' | 'warn';
  message: string;
  metadata: LogMetadata;
}

export interface LogMetadata extends Record<string, unknown> {
  path: string;
}

export class Logger {
  private static instance: Logger;
  private logger: WinstonLogger;

  private constructor() {
    this.logger = createLogger({
      format: combine(timestamp(), logFormat),
      level: 'info',
      transports: [
        // Console transport for all logs
        new transports.Console({
          format: combine(colorize(), timestamp(), logFormat),
        }),
      ],
    });
  }

  public static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  debug(message: string, metadata: LogMetadata): void {
    this.log({ level: 'debug', message, metadata });
  }

  error(message: string, metadata: LogMetadata): void {
    this.log({ level: 'error', message, metadata });
  }

  info(message: string, metadata: LogMetadata): void {
    this.log({ level: 'info', message, metadata });
  }

  log({ level, message, metadata }: LogEntry): void {
    this.logger.log(level, message, metadata);
  }

  warn(message: string, metadata: LogMetadata): void {
    this.log({ level: 'warn', message, metadata });
  }
}
