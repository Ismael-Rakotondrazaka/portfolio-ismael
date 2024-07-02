<template>
  <n-p
    v-if="description"
    class="whitespace-pre-wrap border-l-4 border-secondary bg-secondary/30 p-2 text-primary"
  >
    {{ description }}
  </n-p>
</template>

<script lang="ts" setup>
interface Props {
  description?: string | null;
}

withDefaults(defineProps<Props>(), {
  description: null,
});
</script>

<style scoped></style>
