<template>
  <ul
    v-if="technos.length > 0"
    class="flex flex-row flex-wrap items-baseline gap-2 mb-3"
  >
    <TechnoItem v-for="(techno, i) in technos" :key="i" :techno="techno" />
  </ul>
</template>

<script setup>
defineProps({
  technos: {
    type: Array,
    required: false,
    default: () => [],
  },
});
</script>

<style scoped></style>
