import type { ErrorResponseData } from '~~/shared/types/responses/errorResponse';
import type { ReasonPhrases, StatusCodes } from 'http-status-codes';

export interface Request<
  TOutput = Record<string, never>,
  TBody = Record<string, never>,
  TParams extends Record<string, string> = Record<string, never>,
  TQuery = Record<string, never>,
> {
  input: {
    body: TBody;
    params: TParams;
    query: TQuery;
  };
  output: Promise<TOutput>;
}

export interface ResponseError<
  TRequest extends Request<unknown, unknown, Record<string, never>, unknown>,
> {
  data: ErrorResponseData<TRequest['input']['body']>;
  message: string;
  stack: string;
  statusCode: StatusCodes;
  statusMessage: ReasonPhrases;
  url: string;
}

export type ResponseErrorData<TInput> = Partial<
  Record<Extract<keyof TInput, string>, string>
>;
