import { z } from "zod";
import type { Request, ResponseError } from "~/utils/requests";

export const StoreMessageBodySchema = z.object({
  name: z.string().min(1).max(200),
  email: z.string().email(),
  phoneNumber: z.string(),
  content: z.string().min(1).max(20_000),
});

export type StoreMessageBody = z.infer<typeof StoreMessageBodySchema>;

export type StoreMessageData = {
  message: string;
};

export type StoreMessageRequest = Request<StoreMessageData, StoreMessageBody>;

export type StoreMessageError = ResponseError<StoreMessageRequest>;

export type StoreMessageErrorData = StoreMessageError["data"];
