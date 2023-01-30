<template>
  <div
    id="education"
    class="flex flex-row items-center justify-center min-h-screen py-20"
  >
    <div class="w-full max-w-5xl">
      <h1
        class="inline-block mb-5 text-4xl font-bold text-center text-primary after:w-0 after:h-[0.15rem] after:transition-all after:bg-primary after:block hover:after:w-full"
      >
        Education
      </h1>

      <EducationList :educations="educations" />
    </div>
  </div>
</template>

<script setup>
const educations = ref([
  {
    title: "Second year of professional license",
    description: '"Software Engineering and Database" course',
    location: "Ecole Nationale d'Informatique - University of Fianarantsoa",
    period: "2022 - Present",
  },
  {
    title: "First year of professional license",
    description: '"Software Engineering and Database" course',
    location: "Ecole Nationale d'Informatique - University of Fianarantsoa",
    period: "2020 - 2021",
  },
  {
    title: "Graduate from high school",
    description: "Serie C with honors",
    location: "Lycée Moderne Ampefiloha - Antananarivo",
    period: "2019",
  },
]);
</script>

<style scoped></style>
