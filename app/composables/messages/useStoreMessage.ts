import type { AsyncDataExecuteOptions } from '#app/composables/asyncData';
import type { StoreMessageBody } from '#shared/utils/schemas/messages/storeMessage';
import type { FetchError } from 'ofetch';

import { useFormatFetchErrorData } from '../requests/useFormatFetchErrorData';

export const useStoreMessage = async () => {
  const formattedBody = ref<StoreMessageBody | undefined>();

  const { locale } = useI18n({
    useScope: 'global',
  });
  const headers = computed(() => ({
    'accept-language': locale.value,
  }));

  const { data, error, execute, status } = await useFetch<
    StoreMessageData,
    FetchError<StoreMessageError>
  >('/api/messages', {
    body: formattedBody,
    headers,
    immediate: false,
    method: 'POST',
    watch: false,
  });

  const formattedError = useFormatFetchErrorData(readonly(error));

  const _execute = (body: StoreMessageBody, opts?: AsyncDataExecuteOptions) => {
    formattedBody.value = body;

    return execute(opts);
  };

  const message: Ref<null | StoreMessageData['message']> = ref(null);
  watch(
    () => data.value?.message,
    newValue => {
      if (newValue) message.value = newValue;
    }
  );

  return {
    data,
    error: formattedError,
    execute: _execute,
    message,
    status,
  };
};
