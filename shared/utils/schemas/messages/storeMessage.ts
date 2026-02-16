import type { Request, ResponseError } from '#shared/utils';

import { z } from 'zod';

export const StoreMessageBodySchema = z.object({
  content: z.string().min(1).max(20_000),
  email: z.string().email(),
  name: z.string().min(1).max(200),
  phoneNumber: z.string(),
});

export type StoreMessageBody = z.infer<typeof StoreMessageBodySchema>;

export type StoreMessageData = {
  message: string;
};

export type StoreMessageError = ResponseError<StoreMessageRequest>;

export type StoreMessageErrorData = StoreMessageError['data'];

export type StoreMessageRequest = Request<StoreMessageData, StoreMessageBody>;
