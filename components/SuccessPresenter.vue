<template>
  <div
    v-if="success"
    class="p-2 text-sm bg-green-100 border border-green-600 rounded-md"
  >
    <p class="text-lg text-green-600">
      <FaIcon icon="fa-solid fa-check-circle" class="mr-1" />
      {{ success }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  success: [String, null],
  required: false,
  default: null,
});
</script>

<style scoped></style>
