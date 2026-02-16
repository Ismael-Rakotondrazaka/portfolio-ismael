import type { z } from 'zod';

import { zfd } from 'zod-form-data';

import type { Translator } from '../translations/translator';

import { Exception } from '../exceptions/exception';
import {
  type FormattedValidationError,
  ValidationErrorFormatter,
} from './validationErrorFormatter';
import { ValidationErrorTranslator } from './validationErrorTranslator';

export type ValidationSafeResult<T extends z.ZodTypeAny> =
  | {
      data: z.output<T>;
      isSuccess: true;
    }
  | {
      error: FormattedValidationError<z.input<T>>;
      isSuccess: false;
    };

export class Validator {
  #errorTranslator: ValidationErrorTranslator;
  #translator: Translator;

  constructor(translator: Translator) {
    this.#translator = translator;
    this.#errorTranslator = new ValidationErrorTranslator(this.#translator);
  }

  public async validate<T extends z.ZodTypeAny>(
    schema: T,
    input: unknown
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
      data: ValidationErrorFormatter.format(spr.error),
      translator: this.#translator,
    });
  }

  public async validateSafe<T extends z.ZodTypeAny>(
    schema: T,
    input: unknown
  ): Promise<ValidationSafeResult<T>> {
    const spr: z.SafeParseReturnType<z.input<T>, z.output<T>> = zfd
      .formData(schema)
      .safeParse(input, {
        errorMap: (err, ctx) => this.#errorTranslator.errorTranslator(err, ctx),
      });

    if (spr.success) {
      return {
        data: spr.data,
        isSuccess: true,
      };
    } else {
      return {
        error: ValidationErrorFormatter.format(spr.error),
        isSuccess: false,
      };
    }
  }
}
