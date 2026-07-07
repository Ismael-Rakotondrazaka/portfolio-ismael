import type { EventHandlerRequest, H3Event } from 'h3';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';
import type { NuxtError } from 'nuxt/app';

import { logger } from '../loggers/logger';
import type { Translator } from '../translations';

export class Exception<TData> extends Error {
  readonly data: TData;
  override readonly message: string;
  readonly statusCode: StatusCodes;
  readonly statusMessage: ReasonPhrases;
  #nuxtError: NuxtError<TData>;

  constructor(arg: {
    data: TData;
    message: string;
    statusCode: StatusCodes;
    statusMessage: ReasonPhrases;
  }) {
    super(arg.message);
    this.data = arg.data;
    this.message = arg.message;
    this.statusMessage = arg.statusMessage;
    this.statusCode = arg.statusCode;
    this.#nuxtError = createError(this);
  }

  public static badRequest<T>(arg: {
    data: T;
    message?: string;
    translator: Translator;
  }): Exception<T> {
    const { data, translator } = arg;
    const message =
      arg.message ?? translator.t('errors.requests.defaults.badRequest');

    return new Exception({
      data,
      message,
      statusCode: StatusCodes.BAD_REQUEST,
      statusMessage: ReasonPhrases.BAD_REQUEST,
    });
  }

  public static forbidden<T>(arg: {
    data: T;
    message?: string;
    translator: Translator;
  }): Exception<T> {
    const { data, translator } = arg;
    const message =
      arg.message ?? translator.t('errors.requests.defaults.forbidden');

    return new Exception({
      data,
      message,
      statusCode: StatusCodes.FORBIDDEN,
      statusMessage: ReasonPhrases.FORBIDDEN,
    });
  }

  public static fromUnknown(arg: {
    error: unknown;
    event: H3Event<EventHandlerRequest>;
    translator: Translator;
  }): Exception<unknown> {
    const { error, event, translator } = arg;

    if (error instanceof Exception) {
      return error;
    } else {
      const normalizedError =
        error instanceof Error
          ? error
          : new Error(translator.t('errors.default'));
      logger.error(
        {
          err: normalizedError,
          event: 'http.server.error',
          path: event.path,
        },
        `Unhandled server error: ${normalizedError.message}`
      );

      return new Exception({
        data: {},
        message: translator.t('errors.default'),
        statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
        statusMessage: ReasonPhrases.INTERNAL_SERVER_ERROR,
      });
    }
  }

  public static internalServer<T>(arg: {
    data: T;
    event: H3Event<EventHandlerRequest>;
    message?: string;
    translator: Translator;
  }): Exception<T> {
    const { data, event, translator } = arg;
    const message =
      arg.message ?? translator.t('errors.requests.defaults.internalServer');

    logger.error(
      { event: 'http.server.error', path: event.path },
      `Internal server error: ${message}`
    );

    return new Exception({
      data,
      message,
      statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
      statusMessage: ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }

  public static notFound<T>(arg: {
    data: T;
    message?: string;
    translator: Translator;
  }): Exception<T> {
    const { data, translator } = arg;
    const message =
      arg.message ?? translator.t('errors.requests.defaults.notFound');

    return new Exception({
      data,
      message,
      statusCode: StatusCodes.NOT_FOUND,
      statusMessage: ReasonPhrases.NOT_FOUND,
    });
  }

  public static notImplemented<T>(arg: {
    data: T;
    message?: string;
    translator: Translator;
  }): Exception<T> {
    const { data, translator } = arg;
    const message =
      arg.message ?? translator.t('errors.requests.defaults.notImplemented');

    return new Exception({
      data,
      message,
      statusCode: StatusCodes.NOT_IMPLEMENTED,
      statusMessage: ReasonPhrases.NOT_IMPLEMENTED,
    });
  }

  public static unauthorized<T>(arg: {
    data: T;
    message?: string;
    translator: Translator;
  }): Exception<T> {
    const { data, translator } = arg;
    const message =
      arg.message ?? translator.t('errors.requests.defaults.unauthorize');

    return new Exception({
      data,
      message,
      statusCode: StatusCodes.UNAUTHORIZED,
      statusMessage: ReasonPhrases.UNAUTHORIZED,
    });
  }

  getNuxtError(): NuxtError<TData> {
    return this.#nuxtError;
  }
}
