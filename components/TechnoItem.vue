<template>
  <li
    class="inline-block p-1 px-3 text-sm text-black rounded-md bg-sky-500 whitespace-nowrap"
  >
    {{ techno }}
  </li>
</template>

<script setup>
defineProps({
  techno: {
    type: String,
    required: true,
  },
});
</script>

<style scoped></style>
