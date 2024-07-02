<template>
  <div
    v-if="success"
    class="rounded-md border border-green-600 bg-green-100 p-2 text-sm"
  >
    <p class="text-lg text-green-600">
      <Icon name="mdi:check-circle" class="mr-1" />
      {{ success }}
    </p>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  success?: string | null;
}

withDefaults(defineProps<Props>(), {
  success: null,
});
</script>

<style scoped></style>
