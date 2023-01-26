<template>
  <header
    class="fixed top-0 left-0 right-0 bg-secondary border-b-4 border-primary"
  >
    <nav class="w-full h-full flex flex-row items-center justify-center gap-10">
      <NuxtLink
        v-for="(link, index) in links"
        :key="index"
        :to="link.to"
        class="text-white text-lg py-3 after:block after:bg-primary after:h-[0.15rem] after:w-0 hover:text-primary hover:after:w-full transition-all after:transition-all"
      >
        {{ link.text }}
      </NuxtLink>
    </nav>
  </header>
</template>

<script setup>
const links = ref([
  {
    text: "Experience",
    to: "/#experience",
  },
  {
    text: "Projects",
    to: "/#projects",
  },
  {
    text: "Skills",
    to: "/#skills",
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
