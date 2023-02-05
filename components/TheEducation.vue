<template>
  <div
    id="education"
    class="relative flex flex-row items-center justify-center min-h-screen py-20"
  >
    <div
      class="absolute top-[5%] left-[20%] lg:left-auto lg:right-[20%] w-7 md:w-12 lg:w-20"
    >
      <FaIcon
        icon="fa-solid fa-graduation-cap"
        class="text-primary w-full !h-auto hover:animate-spin"
      />
    </div>

    <div class="absolute bottom-[10%] right-[30%] w-7 md:w-12 lg:w-20">
      <FaIcon
        icon="fa-solid fa-chalkboard-user"
        class="text-primary w-full !h-auto hover:animate-bounce"
      />
    </div>

    <div
      class="absolute top-[40%] right-[3%] lg:right-auto lg:left-[3%] w-7 md:w-12 lg:w-20"
    >
      <FaIcon
        icon="fa-solid fa-school"
        class="text-primary w-full !h-auto hover:animate-ping"
      />
    </div>

    <div class="w-full max-w-5xl">
      <h1
        v-t="'theEducationTitle'"
        class="inline-block pl-3 lg:pl-0 mb-5 text-4xl font-bold text-center text-primary after:w-0 after:h-[0.15rem] after:transition-all after:bg-primary after:block hover:after:w-full"
      />

      <EducationList :educations="educations" />
    </div>
  </div>
</template>

<script setup>
const { t } = useI18n({
  useScope: "globale",
  messages: {
    en: {
      theEducationTitle: "Education",
      education0: {
        title: "Graduate from high school",
        description: "Serie C with honors",
        location: "Lycée Moderne Ampefiloha - Antananarivo",
        period: "2019",
      },
      education1: {
        title: "First year of professional license",
        description: '"Software Engineering and Database" course',
        location: "Ecole Nationale d'Informatique - University of Fianarantsoa",
        period: "2020 - 2021",
      },
      education2: {
        title: "Second year of professional license",
        description: '"Software Engineering and Database" course',
        location: "Ecole Nationale d'Informatique - University of Fianarantsoa",
        period: "2022 - Present",
      },
    },
    fr: {
      theEducationTitle: "Éducation",
      education0: {
        title: "Obtention du baccalauréat",
        description: 'Série C avec mention "Assez-Bien"',
        location: "Lycée Moderne Ampefiloha - Antananarivo",
        period: "2019",
      },
      education1: {
        title: "Première année de licence professionnelle",
        description: "Génie Logicielle et Base de Données",
        location: "Ecole Nationale d'Informatique - Université de Fianarantsoa",
        period: "2020 - 2021",
      },
      education2: {
        title: "Deuxième année de licence professionnelle",
        description: "Génie Logicielle et Base de Données",
        location: "Ecole Nationale d'Informatique - Université de Fianarantsoa",
        period: "2022 - Présent",
      },
    },
  },
});

const educations = computed(() =>
  [
    {
      title: t("education0.title"),
      description: t("education0.description"),
      location: t("education0.location"),
      period: t("education0.period"),
    },
    {
      title: t("education1.title"),
      description: t("education1.description"),
      location: t("education1.location"),
      period: t("education1.period"),
    },
    {
      title: t("education2.title"),
      description: t("education2.description"),
      location: t("education2.location"),
      period: t("education2.period"),
    },
  ].reverse()
);
</script>

<style scoped></style>
