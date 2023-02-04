<template>
  <div
    v-if="error"
    class="p-2 text-sm bg-red-100 border border-red-600 rounded-md"
  >
    <p class="text-lg text-red-600">
      <FaIcon icon="fa-solid fa-exclamation-circle" class="mr-1" />
      {{ errorMessage }}
    </p>
  </div>
</template>

<script setup>
import { FetchError } from "ofetch";

const props = defineProps({
  error: {
    type: [Error, null],
    required: false,
    default: null,
  },
});

const errorMessage = computed(() => {
  let result = "Something is not working properly. Please, try again.";

  if (
    props.error &&
    props.error instanceof FetchError &&
    [400, 503].includes(props.error?.statusCode) &&
    props.error?.data?.message
  ) {
    result = props.error.data.message;
  }

  return result;
});
</script>

<style scoped></style>
