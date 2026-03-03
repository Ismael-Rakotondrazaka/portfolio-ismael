import type { ReasonPhrases, StatusCodes } from 'http-status-codes';

export type ErrorResponse<TData> = {
  data: TData;
  message: string;
  stack: string;
  statusCode: StatusCodes;
  statusMessage: ReasonPhrases;
  url: string;
};

export type ErrorResponseData<TInput> = Partial<
  Record<Extract<keyof TInput, string>, string>
>;
