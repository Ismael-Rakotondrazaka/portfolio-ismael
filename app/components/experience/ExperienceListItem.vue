<template>
  <li class="px-3 pt-2 pb-5">
    <h2 class="text-primary mr-3 mb-3 inline-block text-xl font-bold">
      {{ company.name }}
    </h2>

    <NuxtLink
      :to="company.website"
      target="_blank"
      :external="true"
      class="text-primary"
      >({{ company.website }})</NuxtLink
    >

    <p class="text-primary mt-0! mb-3 text-base">
      {{ description }}
    </p>

    <p class="text-primary mb-3 text-base">
      {{ period }}
    </p>

    <TechnoList :technos="technos" />
  </li>
</template>

<script lang="ts" setup>
defineProps<{
  company: {
    name: string;
    website: string;
  };
  description: string;
  period: string;
  post: string;
  technos: string[];
}>();
</script>

<style scoped></style>
