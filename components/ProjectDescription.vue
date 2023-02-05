<template>
  <p
    v-if="description"
    class="p-2 mb-3 whitespace-pre-wrap border-l-4 border-primary bg-primary/30"
  >
    {{ description }}
  </p>
</template>

<script setup>
defineProps({
  description: {
    type: [String, null],
    default: null,
    required: false,
  },
});
</script>

<style scoped></style>
