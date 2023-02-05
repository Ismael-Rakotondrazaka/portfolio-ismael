<template>
  <header class="border-b-4 bg-secondary border-primary">
    <nav
      class="flex flex-row flex-wrap items-center justify-center w-full h-full gap-x-3 md:gap-7 lg:gap-10"
    >
      <NuxtLink
        v-for="(link, index) in links"
        :key="index"
        :to="link.to"
        class="text-white text-base lg:text-lg py-3 after:block after:bg-primary after:h-[0.15rem] after:w-0 hover:text-primary hover:after:w-full transition-all after:transition-all"
      >
        {{ link.text }}
      </NuxtLink>

      <div class="whitespace-nowrap py-3">
        <span
          :class="[locale === 'fr' ? 'text-primary font-bold' : 'text-white']"
        >
          fr
        </span>

        <CustomSwitcher
          :isActive="isSwitcherActive"
          @on="switcherOnHandler"
          @off="switcherOffHandler"
          class="mx-1"
        />

        <span
          :class="[locale === 'en' ? 'text-primary font-bold' : 'text-white']"
        >
          en
        </span>
      </div>
    </nav>
  </header>
</template>

<script setup>
const { locale, t } = useI18n({
  useScope: "global",
  messages: {
    en: {
      aboutHeader: "About",
      skillsHeader: "Skills",
      projectsHeader: "Projects",
      educationHeader: "Education",
      contactHeader: "Contact",
    },
    fr: {
      aboutHeader: "À propos",
      skillsHeader: "Compétences",
      projectsHeader: "Projets",
      educationHeader: "Éducation",
      contactHeader: "Contact",
    },
  },
});

const isSwitcherActive = computed(() => locale.value === "en");
const switcherOnHandler = () => {
  locale.value = "en";
};
const switcherOffHandler = () => {
  locale.value = "fr";
};

const links = computed(() => [
  {
    text: t("aboutHeader"),
    to: "/#about",
  },
  {
    text: t("skillsHeader"),
    to: "/#skills",
  },
  {
    text: t("projectsHeader"),
    to: "/#projects",
  },
  {
    text: t("educationHeader"),
    to: "/#education",
  },
  {
    text: t("contactHeader"),
    to: "/#contact",
  },
]);
</script>

<style scoped></style>
