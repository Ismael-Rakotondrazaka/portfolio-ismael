import { StoreMessageBodySchema } from "~/utils";

const __handler__: ToEventHandler<StoreMessageRequest> = async (event) => {
  const translator = await Translator.new(event);

  try {
    const validator = new Validator(translator);
    const requestInputGetter = new RequestInputGetter(event, validator);

    const body = await requestInputGetter.getValidatedBody(
      StoreMessageBodySchema,
    );

    await MessageEmail.sendToInformation({
      email: body.email,
      content: body.content,
      name: body.name,
    });

    await MessageEmail.sendAcknowledgment({
      email: body.email,
      name: body.name,
    });

    return {
      // @ts-expect-error Type instantiation is excessively deep and possibly infinite
      message: translator.t("messages.store.success"),
    };
  } catch (error) {
    throw Exception.fromUnknown({
      error,
      event,
      translator,
    }).getNuxtError();
  }
};

export default defineEventHandler(__handler__);
