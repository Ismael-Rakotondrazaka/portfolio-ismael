<template>
  <ul class="space-y-5">
    <ExperienceListItem
      v-for="(experience, i) in experiences"
      :key="i"
      :period="experience.period"
      :company="experience.company"
      :description="experience.description"
      :technos="experience.technos"
      :post="experience.post"
    />
  </ul>
</template>

<script lang="ts" setup>
import type { Experience } from '~/utils';

interface Props {
  experiences?: Experience[];
}

withDefaults(defineProps<Props>(), {
  experiences: () => [],
});
</script>

<style scoped></style>
