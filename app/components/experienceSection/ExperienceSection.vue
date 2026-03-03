<template>
  <div
    id="experience"
    class="relative flex min-h-screen flex-row items-center justify-center py-20"
  >
    <div
      class="absolute right-[20%] bottom-[5%] w-7 md:w-12 lg:right-auto lg:left-[20%] lg:w-20"
    >
      <Icon
        name="mdi:medal"
        class="text-highlight text-3xl hover:animate-bounce md:text-5xl"
      />
    </div>

    <div class="absolute top-[10%] left-[30%] w-7 md:w-12 lg:w-20">
      <Icon
        name="mdi:briefcase"
        class="text-highlight text-3xl hover:animate-bounce md:text-5xl"
      />
    </div>

    <div
      class="absolute top-[40%] left-[3%] w-7 md:w-12 lg:right-[3%] lg:left-auto lg:w-20"
    >
      <Icon
        name="mdi:chart-line"
        class="text-highlight text-3xl hover:animate-ping md:text-5xl"
      />
    </div>

    <div class="w-full max-w-5xl">
      <h1 class="text-gold mb-5 text-center text-2xl font-bold">
        {{ $t('experiences.title') }}
      </h1>

      <ExperienceList :experiences="experiences" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Experience } from '~/utils';

import experiencesRaw from '~/assets/data/experiences.json';

const { t } = useI18n({
  useScope: 'global',
});

const experiences: ComputedRef<Experience[]> = computed(() => {
  return experiencesRaw.map(experience => ({
    company: experience.company,
    description: t(experience.description),
    period: t(experience.period),
    post: t(experience.post),
    technos: experience.technos,
  }));
});
</script>

<style scoped></style>
