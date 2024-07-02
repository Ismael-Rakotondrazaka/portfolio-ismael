import type { z } from "zod";
import { zfd } from "zod-form-data";
import { Exception } from "../exceptions/exception";
import type { Translator } from "../translations/translator";
import {
  ValidationErrorFormatter,
  type FormattedValidationError,
} from "./validationErrorFormatter";
import { ValidationErrorTranslator } from "./validationErrorTranslator";

export type ValidationSafeResult<T extends z.ZodTypeAny> =
  | {
      isSuccess: true;
      data: z.output<T>;
    }
  | {
      isSuccess: false;
      error: FormattedValidationError<z.input<T>>;
    };

export class Validator {
  #translator: Translator;
  #errorTranslator: ValidationErrorTranslator;

  constructor(translator: Translator) {
    this.#translator = translator;
    this.#errorTranslator = new ValidationErrorTranslator(this.#translator);
  }

  public async validate<T extends z.ZodTypeAny>(
    schema: T,
    input: unknown,
  ): Promise<z.output<T>> {
    const spr: z.SafeParseReturnType<z.input<T>, z.output<T>> = await zfd
      .formData(schema)
      .safeParseAsync(input, {
        errorMap: (err, ctx) => this.#errorTranslator.errorTranslator(err, ctx),
      });

    if (spr.success) {
      return spr.data;
    }

    throw Exception.badRequest({
      translator: this.#translator,
      data: ValidationErrorFormatter.format(spr.error),
    });
  }

  public async validateSafe<T extends z.ZodTypeAny>(
    schema: T,
    input: unknown,
  ): Promise<ValidationSafeResult<T>> {
    const spr: z.SafeParseReturnType<z.input<T>, z.output<T>> = zfd
      .formData(schema)
      .safeParse(input, {
        errorMap: (err, ctx) => this.#errorTranslator.errorTranslator(err, ctx),
      });

    if (spr.success) {
      return {
        isSuccess: true,
        data: spr.data,
      };
    } else {
      return {
        isSuccess: false,
        error: ValidationErrorFormatter.format(spr.error),
      };
    }
  }
}
