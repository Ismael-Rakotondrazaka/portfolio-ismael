<template>
  <li class="px-3 pb-5 pt-2">
    <n-h2 class="mr-3 inline-block text-primary">{{ company.name }}</n-h2>
    <NuxtLink
      :to="company.website"
      target="_blank"
      :external="true"
      class="text-primary"
      >({{ company.website }})</NuxtLink
    >

    <n-p class="!mt-0 text-primary">
      {{ description }}
    </n-p>

    <n-p class="text-primary" depth="2">
      {{ period }}
    </n-p>

    <TechnoList :technos="technos" />
  </li>
</template>

<script lang="ts" setup>
defineProps<{
  company: {
    name: string;
    website: string;
  };
  period: string;
  description: string;
  technos: string[];
  post: string;
}>();
</script>

<style scoped></style>
