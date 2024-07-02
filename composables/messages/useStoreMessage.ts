import type { AsyncDataExecuteOptions } from "#app/composables/asyncData";
import type { FetchError } from "ofetch";
import type { StoreMessageBody } from "~/utils";
import { useFormatFetchErrorData } from "../requests/useFormatFetchErrorData";

export const useStoreMessage = async () => {
  const formattedBody = ref<StoreMessageBody | undefined>();

  const { locale } = useI18n({
    useScope: "global",
  });
  const headers = computed(() => ({
    "accept-language": locale.value,
  }));

  const { data, error, status, execute } = await useFetch<
    StoreMessageData,
    FetchError<StoreMessageError>
  >("/api/messages", {
    method: "POST",
    headers,
    immediate: false,
    watch: false,
    body: formattedBody,
  });

  const formattedError = useFormatFetchErrorData(readonly(error));

  const _execute = (body: StoreMessageBody, opts?: AsyncDataExecuteOptions) => {
    formattedBody.value = body;

    return execute(opts);
  };

  const message: Ref<StoreMessageData["message"] | null> = ref(null);
  watch(
    () => data.value?.message,
    (newValue) => {
      if (newValue) message.value = newValue;
    },
  );

  return {
    data,
    message,
    error: formattedError,
    execute: _execute,
    status,
  };
};
