<template>
  <ul
    v-if="technos.length > 0"
    class="flex flex-row flex-wrap items-baseline gap-2"
  >
    <TechnoItem v-for="(techno, i) in technos" :key="i" :techno="techno" />
  </ul>
</template>

<script lang="ts" setup>
interface Props {
  technos: string[];
}

withDefaults(defineProps<Props>(), {
  technos: () => [],
});
</script>

<style scoped></style>
