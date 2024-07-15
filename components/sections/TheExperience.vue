<template>
  <div
    id="experience"
    class="relative flex min-h-screen flex-row items-center justify-center py-20"
  >
    <div
      class="absolute bottom-[5%] right-[20%] w-7 md:w-12 lg:left-[20%] lg:right-auto lg:w-20"
    >
      <Icon
        name="mdi:medal"
        class="text-3xl text-secondary hover:animate-bounce md:text-5xl"
      />
    </div>

    <div class="absolute left-[30%] top-[10%] w-7 md:w-12 lg:w-20">
      <Icon
        name="mdi:briefcase"
        class="text-3xl text-secondary hover:animate-bounce md:text-5xl"
      />
    </div>

    <div
      class="absolute left-[3%] top-[40%] w-7 md:w-12 lg:left-auto lg:right-[3%] lg:w-20"
    >
      <Icon
        name="mdi:chart-line"
        class="text-3xl text-secondary hover:animate-ping md:text-5xl"
      />
    </div>

    <div class="w-full max-w-5xl">
      <n-h1 class="text-center text-tertiary">
        <span v-t="'experiences.title'" class="underline-slide" />
      </n-h1>

      <ExperienceList :experiences="experiences" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import experiencesRaw from "~/assets/data/experiences.json";
import type { Experience } from "~/utils";

const { t } = useI18n({
  useScope: "global",
});

const experiences: ComputedRef<Experience[]> = computed(() => {
  return experiencesRaw.map((experience) => ({
    company: experience.company,
    period: t(experience.period),
    description: t(experience.description),
    technos: experience.technos,
    post: t(experience.post),
  }));
});
</script>

<style scoped></style>
