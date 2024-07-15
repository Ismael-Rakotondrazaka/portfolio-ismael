<template>
  <div
    id="education"
    class="relative flex min-h-screen flex-row items-center justify-center py-20"
  >
    <div
      class="absolute left-[20%] top-[5%] w-7 md:w-12 lg:left-auto lg:right-[20%] lg:w-20"
    >
      <Icon
        name="mdi:school"
        class="text-3xl text-secondary hover:animate-spin md:text-5xl"
      />
    </div>

    <div class="absolute bottom-[10%] right-[30%] w-7 md:w-12 lg:w-20">
      <Icon
        name="mdi-teach"
        class="text-3xl text-secondary hover:animate-bounce md:text-5xl"
      />
    </div>

    <div
      class="absolute right-[3%] top-[40%] w-7 md:w-12 lg:left-[3%] lg:right-auto lg:w-20"
    >
      <Icon
        name="mdi:office-building"
        class="text-3xl text-secondary hover:animate-ping md:text-5xl"
      />
    </div>

    <div class="w-full max-w-5xl">
      <n-h1 class="text-center text-tertiary">
        <span v-t="'educations.title'" class="underline-slide" />
      </n-h1>

      <EducationList :educations="educations" />
    </div>
  </div>
</template>

<script lang="ts" setup>
const { tm, rt } = useI18n({
  useScope: "global",
});

const educations: ComputedRef<Education[]> = computed(() => {
  const educationList = tm("educations.list") as Education[];

  return educationList.map((education) => ({
    title: rt(education.title),
    description: rt(education.description!),
    location: rt(education.location!),
    period: rt(education.period!),
  }));
});
</script>

<style scoped></style>
