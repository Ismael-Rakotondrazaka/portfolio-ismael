<template>
  <p
    v-if="description"
    class="border-highlight bg-highlight/30 text-primary mb-3 border-l-4 p-2 text-base whitespace-pre-wrap"
  >
    {{ description }}
  </p>
</template>

<script lang="ts" setup>
interface Props {
  description?: null | string;
}

withDefaults(defineProps<Props>(), {
  description: null,
});
</script>

<style scoped></style>
