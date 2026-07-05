import { z } from 'zod';

import type { Request, ResponseError } from '#shared/utils';

import { PhoneNumberSchema } from '../phoneNumber';

export const StoreMessageBodySchema = z.object({
  content: z.string().min(1).max(20_000),
  email: z.string().email(),
  name: z.string().min(1).max(200),
  phoneNumber: PhoneNumberSchema,
  recaptchaToken: z.string().min(1),
});

export type StoreMessageBody = z.infer<typeof StoreMessageBodySchema>;

export type StoreMessageData = {
  message: string;
};

export type StoreMessageError = ResponseError<StoreMessageRequest>;

export type StoreMessageErrorData = StoreMessageError['data'];

export type StoreMessageRequest = Request<StoreMessageData, StoreMessageBody>;
