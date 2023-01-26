<template>
  <div>
    <label v-if="label" :for="id" class="inline-block mb-1">
      {{ label }}
    </label>

    <input
      class="block w-full border-2 outline-none border-secondary rounded-md focus:border-primary px-3 py-3 text-secondary"
      @input="$emit('update:modelValue', $event.target.value)"
      :placeholder="placeholder"
      :value="modelValue"
      :type="type"
      :id="id"
    />
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
});
</script>

<style scoped></style>
