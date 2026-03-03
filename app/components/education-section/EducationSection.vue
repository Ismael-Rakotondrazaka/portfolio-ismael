<template>
  <div
    id="education"
    class="relative flex min-h-screen flex-row items-center justify-center py-20"
  >
    <div
      class="absolute top-[5%] left-[20%] w-7 md:w-12 lg:right-[20%] lg:left-auto lg:w-20"
    >
      <Icon
        name="mdi:school"
        class="text-highlight text-3xl hover:animate-spin md:text-5xl"
      />
    </div>

    <div class="absolute right-[30%] bottom-[10%] w-7 md:w-12 lg:w-20">
      <Icon
        name="mdi-teach"
        class="text-highlight text-3xl hover:animate-bounce md:text-5xl"
      />
    </div>

    <div
      class="absolute top-[40%] right-[3%] w-7 md:w-12 lg:right-auto lg:left-[3%] lg:w-20"
    >
      <Icon
        name="mdi:office-building"
        class="text-highlight text-3xl hover:animate-ping md:text-5xl"
      />
    </div>

    <div class="w-full max-w-5xl">
      <h1 class="text-gold mb-5 text-center text-2xl font-bold">
        {{ $t('educations.title') }}
      </h1>

      <EducationList :educations="educations" />
    </div>
  </div>
</template>

<script lang="ts" setup>
const { rt, tm } = useI18n({
  useScope: 'global',
});

const educations: ComputedRef<Education[]> = computed(() => {
  const educationList = tm('educations.list') as Education[];

  return educationList.map(education => ({
    description: rt(education.description!),
    location: rt(education.location!),
    period: rt(education.period!),
    title: rt(education.title),
  }));
});
</script>

<style scoped></style>
