import type { ReasonPhrases, StatusCodes } from "http-status-codes";

export type ErrorResponse<TData> = {
  url: string;
  statusCode: StatusCodes;
  statusMessage: ReasonPhrases;
  message: string;
  stack: string;
  data: TData;
};

export type ErrorResponseData<TInput> = Partial<
  Record<Extract<keyof TInput, string>, string>
>;
