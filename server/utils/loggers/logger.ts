import type { Logger as WinstonLogger } from "winston";
import { createLogger, format, transports } from "winston";
import DailyRotateFile from "winston-daily-rotate-file";

const { combine, timestamp, printf, colorize } = format;

/**
 * Custom log format
 */
const logFormat = printf(({ level, message, timestamp, path }) => {
  return `timestamp=${timestamp} level=${level} path="${path}" message="${message}"`;
});

export interface LogMetadata {
  path: string;
}

export interface LogEntry {
  level: "info" | "warn" | "error" | "debug";
  message: string;
  metadata: LogMetadata;
}

export class Logger {
  private static instance: Logger;
  private logger: WinstonLogger;

  private constructor() {
    this.logger = createLogger({
      level: "info",
      format: combine(timestamp(), logFormat),
      transports: [
        // Console transport for all logs
        new transports.Console({
          format: combine(colorize(), timestamp(), logFormat),
        }),
        // File transport for error logs
        new DailyRotateFile({
          filename: "error-%DATE%.log",
          datePattern: "YYYY-MM-DD",
          level: "error",
          dirname: "./logs",
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

  log({ level, message, metadata }: LogEntry): void {
    this.logger.log(level, message, metadata);
  }

  info(message: string, metadata: LogMetadata): void {
    this.log({ level: "info", message, metadata });
  }

  warn(message: string, metadata: LogMetadata): void {
    this.log({ level: "warn", message, metadata });
  }

  error(message: string, metadata: LogMetadata): void {
    this.log({ level: "error", message, metadata });
  }

  debug(message: string, metadata: LogMetadata): void {
    this.log({ level: "debug", message, metadata });
  }
}
