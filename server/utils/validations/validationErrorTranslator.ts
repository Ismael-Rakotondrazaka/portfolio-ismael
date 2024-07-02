/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import type { ErrorMapCtx, ZodIssueOptionalMessage } from "zod";
import { defaultErrorMap, z } from "zod";
import type { Translator } from "../translator/translator";

export class ValidationErrorTranslator {
  #translator: Translator;

  constructor(translator: Translator) {
    this.#translator = translator;
  }

  #joinValues(array: unknown[], separator = " | ") {
    return array
      .map((val) => (typeof val === "string" ? `'${val}'` : val))
      .join(separator);
  }

  #jsonStringifyReplacer(_: unknown, value: unknown) {
    if (typeof value === "bigint") {
      return value.toString();
    }
    return value;
  }

  public errorTranslator(error: ZodIssueOptionalMessage, ctx: ErrorMapCtx) {
    const t = this.#translator.t;
    const d = this.#translator.d;

    let message: string = defaultErrorMap(error, ctx).message;

    switch (error.code) {
      case z.ZodIssueCode.invalid_type:
        if (error.received === z.ZodParsedType.undefined) {
          message = t("zodI18n.errors.invalid_type_received_undefined");
        } else {
          message = t("zodI18n.errors.invalid_type", {
            expected: error.expected,
            received: error.received,
          });
        }
        break;
      case z.ZodIssueCode.invalid_literal:
        message = t("zodI18n.errors.invalid_literal", {
          expected: JSON.stringify(error.expected, this.#jsonStringifyReplacer),
        });
        break;
      case z.ZodIssueCode.unrecognized_keys:
        message = t("zodI18n.errors.unrecognized_keys", {
          keys: this.#joinValues(error.keys, ", "),
        });
        break;
      case z.ZodIssueCode.invalid_union:
        message = t("zodI18n.errors.invalid_union");
        break;
      case z.ZodIssueCode.invalid_union_discriminator:
        message = t("zodI18n.errors.invalid_union_discriminator", {
          options: this.#joinValues(error.options),
        });
        break;
      case z.ZodIssueCode.invalid_enum_value:
        message = t("zodI18n.errors.invalid_enum_value", {
          options: this.#joinValues(error.options),
          received: error.received,
        });
        break;
      case z.ZodIssueCode.invalid_arguments:
        message = t("zodI18n.errors.invalid_arguments");
        break;
      case z.ZodIssueCode.invalid_return_type:
        message = t("zodI18n.errors.invalid_return_type");
        break;
      case z.ZodIssueCode.invalid_date:
        message = t("zodI18n.errors.invalid_date");
        break;
      case z.ZodIssueCode.invalid_string:
        if (typeof error.validation === "object") {
          if ("startsWith" in error.validation) {
            message = t("zodI18n.errors.invalid_string.startsWith", {
              startsWith: error.validation.startsWith,
            });
          } else if ("endsWith" in error.validation) {
            message = t("zodI18n.errors.invalid_string.endsWith", {
              endsWith: error.validation.endsWith,
            });
          }
        } else {
          message = t(`zodI18n.errors.invalid_string.${error.validation}`, {
            validation: t(`zodI18n.validations.${error.validation}`),
          });
        }
        break;
      case z.ZodIssueCode.too_small:
        message = t(
          `zodI18n.errors.too_small.${error.type}.${error.exact ? "exact" : error.inclusive ? "inclusive" : "not_inclusive"}`,
          {
            minimum:
              error.type === "date"
                ? d(new Date(error.minimum))
                : error.minimum,
          },
        );
        break;
      case z.ZodIssueCode.too_big:
        message = t(
          `zodI18n.errors.too_big.${error.type}.${error.exact ? "exact" : error.inclusive ? "inclusive" : "not_inclusive"}`,
          {
            maximum:
              error.type === "date"
                ? d(new Date(error.maximum))
                : error.maximum,
          },
        );
        break;
      case z.ZodIssueCode.custom:
        message = t("zodI18n.errors.custom");
        break;
      case z.ZodIssueCode.invalid_intersection_types:
        message = t("zodI18n.errors.invalid_intersection_types");
        break;
      case z.ZodIssueCode.not_multiple_of:
        message = t("zodI18n.errors.not_multiple_of", {
          multipleOf: error.multipleOf,
        });
        break;
      case z.ZodIssueCode.not_finite:
        message = t("zodI18n.errors.not_finite");
        break;
      default:
        break;
    }
    return { message };
  }
}
