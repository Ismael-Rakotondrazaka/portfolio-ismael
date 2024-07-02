<template>
  <ul>
    <ExperienceListItem
      v-for="(experience, i) in experiences"
      :key="i"
      :period="experience.period"
      :company="experience.company"
      :description="experience.description"
      :technos="experience.technos"
      :post="experience.post"
      class="bg-secondary odd:bg-opacity-20 even:bg-opacity-10"
    />
  </ul>
</template>

<script lang="ts" setup>
import type { Experience } from "~/utils";

interface Props {
  experiences: Experience[];
}

withDefaults(defineProps<Props>(), {
  experiences: () => [],
});
</script>

<style scoped></style>
