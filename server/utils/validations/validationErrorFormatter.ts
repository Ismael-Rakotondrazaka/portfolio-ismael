import type { z } from "zod";
import type { ErrorResponseData } from "../responses/errorResponse";

export type FormattedValidationError<TInput> = Partial<
  Record<Extract<keyof TInput, string>, string>
>;

export abstract class ValidationErrorFormatter {
  public static format<T extends z.ZodTypeAny>(
    error: z.ZodError<T>,
  ): FormattedValidationError<T> {
    const getEventQuerySuccessParseResult: z.typeToFlattenedError<T, string> =
      error.flatten((issue: z.ZodIssue) => issue.message);

    const result: ErrorResponseData<T> = {} as ErrorResponseData<T>;

    const fieldErrors = getEventQuerySuccessParseResult.fieldErrors;

    for (const key in fieldErrors) {
      if (Object.prototype.hasOwnProperty.call(fieldErrors, key)) {
        const messageValue: string[] | undefined =
          fieldErrors[key as keyof typeof fieldErrors];

        if (messageValue !== undefined) {
          // @ts-expect-error - No index signature 'string' on 'Partial<Record<Extract<keyof T, string>, string>>'
          result[key] = messageValue[0];
        }
      }
    }

    return result;
  }
}
