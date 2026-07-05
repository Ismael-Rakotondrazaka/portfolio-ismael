<template>
  <li
    class="inline-block rounded-md border border-slate-300 bg-slate-200 p-1 px-3 text-sm whitespace-nowrap text-black"
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
