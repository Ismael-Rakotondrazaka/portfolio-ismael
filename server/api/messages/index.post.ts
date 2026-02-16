import { StoreMessageBodySchema } from '#shared/utils';

const __handler__: ToEventHandler<StoreMessageRequest> = async event => {
  const translator = await Translator.new(event);

  try {
    const validator = new Validator(translator);
    const requestInputGetter = new RequestInputGetter(event, validator);

    const body = await requestInputGetter.getValidatedBody(
      StoreMessageBodySchema
    );

    const [contactEmailResult] = await Promise.allSettled([
      sendContactEmail({
        content: body.content,
        email: body.email,
        name: body.name,
        phoneNumber: body.phoneNumber,
      }),
      sendContactedAcknowledgementEmail({
        email: body.email,
        name: body.name,
      }),
    ]);

    if (
      contactEmailResult.status === 'fulfilled' &&
      contactEmailResult.value.success
    ) {
      return {
        message: translator.t('messages.store.success'),
      };
    } else {
      throw Exception.internalServer({
        data: {},
        event,
        message: translator.t('messages.store.error'),
        translator,
      });
    }
  } catch (error) {
    throw Exception.fromUnknown({
      error,
      event,
      translator,
    }).getNuxtError();
  }
};

export default defineEventHandler(__handler__);
