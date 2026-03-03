import type { EventHandlerRequest, H3Event } from 'h3';
import type { z } from 'zod';

import type { Validator } from '../validations';

export class RequestInputGetter<Request extends EventHandlerRequest> {
  #event: H3Event<Request>;
  #validator: Validator;

  constructor(event: H3Event<Request>, validator: Validator) {
    this.#event = event;
    this.#validator = validator;
  }

  async getUnsafeBody(): Promise<Request['body']> {
    let result: unknown = {};

    const requestContentType: string | undefined = getHeader(
      this.#event,
      'Content-Type'
    );

    if (requestContentType !== undefined) {
      if (requestContentType.startsWith('application/json')) {
        try {
          const JSONBody: unknown = await readBody(this.#event);

          if (JSONBody !== undefined && JSONBody !== null) {
            result = JSONBody;
          }
        } catch {
          return result;
        }
      } else if (
        requestContentType.startsWith('application/x-www-form-urlencoded') ||
        requestContentType.startsWith('multipart/form-data')
      ) {
        result = await readFormData(this.#event);
      }
    }

    return result;
  }

  getUnsafeParams() {
    return getRouterParams(this.#event);
  }

  getUnsafeQueries() {
    return getQuery(this.#event);
  }

  async getValidatedBody<TSchema extends z.ZodType<Request['body']>>(
    schema: TSchema
  ): Promise<Request['body']> {
    const body = await this.getUnsafeBody();
    return this.#validator.validate(schema, body);
  }

  async getValidatedParams<TSchema extends z.ZodType<Request['routerParams']>>(
    schema: TSchema
  ) {
    return this.#validator.validate(schema, this.getUnsafeParams());
  }

  getValidatedQueries<TSchema extends z.ZodType<Request['query']>>(
    schema: TSchema
  ) {
    return this.#validator.validate(schema, this.getUnsafeQueries());
  }
}
