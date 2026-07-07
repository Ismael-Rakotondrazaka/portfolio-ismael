import * as Sentry from '@sentry/nuxt';
import type { Logger as PinoLogger } from 'pino';
import pino from 'pino';

import { getRequestContext } from './async-local-context';

// pino calls are either (msg, ...) or (bindings, msg, ...); pull both shapes
// apart and fold everything into the message string as JSON, since GlitchTip's
// Logs view only renders level + message, not structured attributes.
function toSentryLogMessage(args: unknown[]): string {
  const [first, second] = args;
  const bindings = typeof first === 'object' && first ? first : undefined;
  const message = String(bindings ? (second ?? '') : (first ?? ''));

  const details: Record<string, unknown> = {};
  const context = getRequestContext();
  if (context?.requestId) details.requestId = context.requestId;
  if (context?.method) details.method = context.method;
  if (context?.path) details.path = context.path;

  for (const [key, value] of Object.entries(bindings ?? {})) {
    details[key] =
      key === 'err' && value instanceof Error
        ? { message: value.message, name: value.name }
        : value;
  }

  return Object.keys(details).length
    ? `${message}: ${JSON.stringify(details)}`
    : message;
}

const pinoInstance = pino({
  level: process.env.NODE_ENV === 'production' ? 'info' : 'debug',
  ...(process.env.NODE_ENV !== 'production' && {
    transport: {
      options: {
        colorize: true,
        ignore: 'pid,hostname',
        singleLine: true,
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
    Sentry.logger.error(toSentryLogMessage(args));
  };

  fatal: PinoLogger['fatal'] = (...args: Parameters<PinoLogger['fatal']>) => {
    (this.getPinoLogger().fatal as (...a: unknown[]) => void)(...args);
    Sentry.logger.fatal(toSentryLogMessage(args));
  };

  info: PinoLogger['info'] = (...args: Parameters<PinoLogger['info']>) => {
    (this.getPinoLogger().info as (...a: unknown[]) => void)(...args);
  };

  warn: PinoLogger['warn'] = (...args: Parameters<PinoLogger['warn']>) => {
    (this.getPinoLogger().warn as (...a: unknown[]) => void)(...args);
    Sentry.logger.warn(toSentryLogMessage(args));
  };

  private getPinoLogger(): PinoLogger {
    const context = getRequestContext();
    return context ? pinoInstance.child(context) : pinoInstance;
  }
}

export const logger = new ContextAwareLogger();
