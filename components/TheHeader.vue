<template>
  <header class="border-b-4 bg-secondary border-primary">
    <nav
      class="flex flex-row items-center justify-center w-full h-full gap-3 md:gap-7 lg:gap-10"
    >
      <NuxtLink
        v-for="(link, index) in links"
        :key="index"
        :to="link.to"
        class="text-white lg:text-lg py-3 after:block after:bg-primary after:h-[0.15rem] after:w-0 hover:text-primary hover:after:w-full transition-all after:transition-all"
      >
        {{ link.text }}
      </NuxtLink>
    </nav>
  </header>
</template>

<script setup>
const links = ref([
  {
    text: "About",
    to: "/#about",
  },
  {
    text: "Skills",
    to: "/#skills",
  },
  {
    text: "Projects",
    to: "/#projects",
  },
  {
    text: "Education",
    to: "/#education",
  },
  {
    text: "Contact",
    to: "/#contact",
  },
]);
</script>

<style scoped></style>
