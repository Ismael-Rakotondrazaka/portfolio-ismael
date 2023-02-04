<template>
  <p v-if="error" class="text-sm text-red-600">{{ error }}</p>
</template>

<script setup>
defineProps({
  error: [String, null],
  required: false,
  default: null,
});
</script>

<style scoped></style>
