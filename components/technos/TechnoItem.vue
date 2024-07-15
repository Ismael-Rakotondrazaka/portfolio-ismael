<template>
  <li
    class="inline-block whitespace-nowrap rounded-md bg-sky-500 p-1 px-3 text-sm text-black"
  >
    {{ techno }}
  </li>
</template>

<script lang="ts" setup>
interface Props {
  techno: string;
}

defineProps<Props>();
</script>

<style scoped></style>
