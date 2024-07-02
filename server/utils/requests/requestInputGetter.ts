import type { EventHandlerRequest, H3Event } from "h3";
import type { z } from "zod";
import type { Validator } from "../validations";

export class RequestInputGetter<Request extends EventHandlerRequest> {
  #event: H3Event<Request>;
  #validator: Validator;

  constructor(event: H3Event<Request>, validator: Validator) {
    this.#event = event;
    this.#validator = validator;
  }

  async getUnsafeBody(): Promise<Request["body"]> {
    let result: unknown = {};

    const requestContentType: string | undefined = getHeader(
      this.#event,
      "Content-Type",
    );

    if (requestContentType !== undefined) {
      if (requestContentType.startsWith("application/json")) {
        try {
          const JSONBody: unknown = await readBody(this.#event);

          if (JSONBody !== undefined && JSONBody !== null) {
            result = JSONBody;
          }
          // eslint-disable-next-line no-unused-vars
        } catch (error) {
          return result;
        }
      } else if (
        requestContentType.startsWith("application/x-www-form-urlencoded") ||
        requestContentType.startsWith("multipart/form-data")
      ) {
        result = await readFormData(this.#event);
      }
    }

    return result;
  }

  async getValidatedBody<TSchema extends z.ZodType<Request["body"]>>(
    schema: TSchema,
  ): Promise<Request["body"]> {
    const body = await this.getUnsafeBody();
    return this.#validator.validate(schema, body);
  }

  getUnsafeParams() {
    return getRouterParams(this.#event);
  }

  async getValidatedParams<TSchema extends z.ZodType<Request["routerParams"]>>(
    schema: TSchema,
  ) {
    return this.#validator.validate(schema, this.getUnsafeParams());
  }

  getUnsafeQueries() {
    return getQuery(this.#event);
  }

  getValidatedQueries<TSchema extends z.ZodType<Request["query"]>>(
    schema: TSchema,
  ) {
    return this.#validator.validate(schema, this.getUnsafeQueries());
  }
}
