import { type FetchError } from "ofetch";

export const useFormatFetchErrorData = <T>(
  error: Readonly<Ref<FetchError<T> | null>>,
): Ref<T | null> => {
  const errorData = ref<T | null>(null) as Ref<T | null>;

  watch(error, (newValue) => {
    if (
      newValue === null ||
      newValue.data === undefined ||
      newValue.data === null
    ) {
      errorData.value = null;
    } else {
      errorData.value = newValue.data;
    }
  });

  return errorData;
};
