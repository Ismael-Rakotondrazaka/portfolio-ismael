import type { Logger as PinoLogger } from 'pino';
import pino from 'pino';

import { getRequestContext } from './async-local-context';

const pinoInstance = pino({
  level: process.env.NODE_ENV === 'production' ? 'info' : 'debug',
  ...(process.env.NODE_ENV !== 'production' && {
    transport: {
      options: {
        colorize: true,
        ignore: 'pid,hostname',
        translateTime: 'UTC:yyyy-mm-dd HH:MM:ss.l o',
      },
      target: 'pino-pretty',
    },
  }),
});

class ContextAwareLogger {
  child(bindings: object): PinoLogger {
    return this.getPinoLogger().child(bindings);
  }

  debug: PinoLogger['debug'] = (...args: Parameters<PinoLogger['debug']>) => {
    (this.getPinoLogger().debug as (...a: unknown[]) => void)(...args);
  };

  error: PinoLogger['error'] = (...args: Parameters<PinoLogger['error']>) => {
    (this.getPinoLogger().error as (...a: unknown[]) => void)(...args);
  };

  fatal: PinoLogger['fatal'] = (...args: Parameters<PinoLogger['fatal']>) => {
    (this.getPinoLogger().fatal as (...a: unknown[]) => void)(...args);
  };

  info: PinoLogger['info'] = (...args: Parameters<PinoLogger['info']>) => {
    (this.getPinoLogger().info as (...a: unknown[]) => void)(...args);
  };

  warn: PinoLogger['warn'] = (...args: Parameters<PinoLogger['warn']>) => {
    (this.getPinoLogger().warn as (...a: unknown[]) => void)(...args);
  };

  private getPinoLogger(): PinoLogger {
    const context = getRequestContext();
    return context ? pinoInstance.child(context) : pinoInstance;
  }
}

export const logger = new ContextAwareLogger();
