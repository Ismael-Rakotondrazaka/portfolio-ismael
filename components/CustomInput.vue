<template>
  <div class="mb-5">
    <label v-if="label" :for="id" class="inline-block mb-1">
      {{ label }}
    </label>

    <input
      class="block w-full px-3 py-3 text-black border-2 rounded-md outline-none border-secondary focus:border-primary"
      :class="[
        {
          '!border-red-500': error,
        },
      ]"
      @input="$emit('update:modelValue', $event.target.value)"
      :placeholder="placeholder"
      :value="modelValue"
      :type="type"
      :id="id"
    />

    <ErrorPresenter :error="error" />
  </div>
</template>

<script setup>
defineProps({
  label: {
    type: String,
    required: false,
    default: "",
  },
  modelValue: {
    required: true,
  },
  placeholder: {
    type: String,
    required: false,
    default: "",
  },
  type: {
    type: String,
    required: false,
    default: "text",
  },
  id: {
    type: String,
    required: true,
  },
  error: {
    type: [String, null],
    required: false,
    default: null,
  },
});
</script>

<style scoped></style>
