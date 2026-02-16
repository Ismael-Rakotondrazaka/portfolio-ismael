import type { FetchError } from 'ofetch';

export const useFormatFetchErrorData = <T>(
  error: Readonly<Ref<FetchError<T> | undefined>>
): Ref<T | undefined> => {
  const errorData = ref<T | undefined>(undefined) as Ref<T | undefined>;

  watch(error, newValue => {
    if (
      newValue === undefined ||
      newValue.data === undefined ||
      newValue.data === null
    ) {
      errorData.value = undefined;
    } else {
      errorData.value = newValue.data;
    }
  });

  return errorData;
};
