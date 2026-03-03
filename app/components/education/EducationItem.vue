<template>
  <li class="px-3 pt-2 pb-5">
    <h2 class="text-primary mb-3 text-xl font-bold">
      {{ title }}
    </h2>

    <p v-if="description" class="text-primary mb-1 text-base">
      {{ description }}
    </p>

    <p v-if="location" class="text-primary mb-1 text-base">
      {{ location }}
    </p>

    <p v-if="period" class="text-primary text-sm">
      {{ period }}
    </p>
  </li>
</template>

<script lang="ts" setup>
import type { Education } from '~/utils';

withDefaults(defineProps<Education>(), {
  description: null,
  location: null,
  period: null,
});
</script>

<style scoped></style>
