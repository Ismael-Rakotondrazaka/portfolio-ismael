import type { NuxtError } from "#app";
import type { EventHandlerRequest, H3Event } from "h3";
import { ReasonPhrases, StatusCodes } from "http-status-codes";
import { Logger } from "../loggers/logger";
import type { Translator } from "../translations";

export class Exception<TData> extends Error {
  override readonly message: string;
  readonly statusCode: StatusCodes;
  readonly statusMessage: ReasonPhrases;
  readonly data: TData;
  #nuxtError: NuxtError<TData>;

  constructor(arg: {
    message: string;
    statusCode: StatusCodes;
    statusMessage: ReasonPhrases;
    data: TData;
  }) {
    super(arg.message);
    this.data = arg.data;
    this.message = arg.message;
    this.statusMessage = arg.statusMessage;
    this.statusCode = arg.statusCode;
    this.#nuxtError = createError(this);
  }

  getNuxtError(): NuxtError<TData> {
    return this.#nuxtError;
  }

  public static notFound<T>(arg: {
    data: T;
    message?: string;
    translator: Translator;
  }): Exception<T> {
    const { data, translator } = arg;
    const message =
      arg.message ?? translator.t("errors.requests.defaults.notFound");

    return new Exception({
      data,
      message,
      statusCode: StatusCodes.NOT_FOUND,
      statusMessage: ReasonPhrases.NOT_FOUND,
    });
  }

  public static badRequest<T>(arg: {
    translator: Translator;
    data: T;
    message?: string;
  }): Exception<T> {
    const { data, translator } = arg;
    const message =
      arg.message ?? translator.t("errors.requests.defaults.badRequest");

    return new Exception({
      data,
      message,
      statusCode: StatusCodes.BAD_REQUEST,
      statusMessage: ReasonPhrases.BAD_REQUEST,
    });
  }

  public static unauthorized<T>(arg: {
    data: T;
    message?: string;
    translator: Translator;
  }): Exception<T> {
    const { data, translator } = arg;
    const message =
      arg.message ?? translator.t("errors.requests.defaults.unauthorize");

    return new Exception({
      data,
      message,
      statusCode: StatusCodes.UNAUTHORIZED,
      statusMessage: ReasonPhrases.UNAUTHORIZED,
    });
  }

  public static forbidden<T>(arg: {
    data: T;
    message?: string;
    translator: Translator;
  }): Exception<T> {
    const { data, translator } = arg;
    const message =
      arg.message ?? translator.t("errors.requests.defaults.forbidden");

    return new Exception({
      data,
      message,
      statusCode: StatusCodes.FORBIDDEN,
      statusMessage: ReasonPhrases.FORBIDDEN,
    });
  }

  public static notImplemented<T>(arg: {
    data: T;
    message?: string;
    translator: Translator;
  }): Exception<T> {
    const { data, translator } = arg;
    const message =
      arg.message ?? translator.t("errors.requests.defaults.notImplemented");

    return new Exception({
      data,
      message,
      statusCode: StatusCodes.NOT_IMPLEMENTED,
      statusMessage: ReasonPhrases.NOT_IMPLEMENTED,
    });
  }

  public static internalServer<T>(arg: {
    event: H3Event<EventHandlerRequest>;
    data: T;
    message?: string;
    translator: Translator;
  }): Exception<T> {
    const { data, event, translator } = arg;
    const message =
      arg.message ?? translator.t("errors.requests.defaults.internalServer");

    Logger.getInstance().error("Internal Server error", {
      path: event.path,
    });

    return new Exception({
      data,
      message,
      statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
      statusMessage: ReasonPhrases.INTERNAL_SERVER_ERROR,
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
      Logger.getInstance().error(
        error instanceof Error ? error.message : translator.t("errors.default"),
        {
          path: event.path,
        },
      );

      return new Exception({
        data: {},
        message: translator.t("errors.default"),
        statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
        statusMessage: ReasonPhrases.INTERNAL_SERVER_ERROR,
      });
    }
  }
}
