import type { ReasonPhrases, StatusCodes } from "http-status-codes";

export interface Request<
  TOutput = Record<string, never>,
  TBody = Record<string, never>,
  TParams extends Record<string, string> = Record<string, never>,
  TQuery = Record<string, never>,
> {
  input: {
    body: TBody;
    query: TQuery;
    params: TParams;
  };
  output: Promise<TOutput>;
}

export interface ResponseError<
  TRequest extends Request<unknown, unknown, Record<string, never>, unknown>,
> {
  url: string;
  statusCode: StatusCodes;
  statusMessage: ReasonPhrases;
  message: string;
  stack: string;
  data: ErrorResponseData<TRequest["input"]["body"]>;
}

export type ResponseErrorData<TInput> = Partial<
  Record<Extract<keyof TInput, string>, string>
>;
