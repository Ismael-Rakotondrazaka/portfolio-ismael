<template>
  <li class="px-3 pt-2 pb-5">
    <h2
      class="mb-3 text-lg font-bold underline underline-offset-4 text-secondary"
    >
      {{ title }}
    </h2>

    <p v-if="description" class="mb-1 text-secondary">
      {{ description }}
    </p>

    <p v-if="location" class="mb-1 text-lg text-secondary">
      {{ location }}
    </p>

    <p v-if="period" class="text-sm text-secondary">
      {{ period }}
    </p>
  </li>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: [String, null],
    required: false,
    default: null,
  },
  location: {
    type: [String, null],
    required: false,
    default: null,
  },
  period: {
    type: [String, null],
    required: false,
    default: null,
  },
});
</script>

<style scoped></style>
