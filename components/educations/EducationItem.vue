<template>
  <li class="px-3 pb-5 pt-2">
    <n-h2 class="text-primary">
      {{ title }}
    </n-h2>

    <p v-if="description" class="mb-1 text-primary">
      {{ description }}
    </p>

    <p v-if="location" class="mb-1 text-lg text-primary">
      {{ location }}
    </p>

    <p v-if="period" class="text-sm text-primary">
      {{ period }}
    </p>
  </li>
</template>

<script lang="ts" setup>
import type { Education } from "~/utils";

withDefaults(defineProps<Education>(), {
  description: null,
  location: null,
  period: null,
});
</script>

<style scoped></style>
