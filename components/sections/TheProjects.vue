<template>
  <div id="projects" class="min-h-screen bg-primary py-20">
    <n-h1 class="text-center text-tertiary">
      <span v-t="'projects.title'" class="underline-slide" />
    </n-h1>

    <div class="p-3">
      <ProjectList :projects="projects" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import rawProjects from "~/assets/data/projects.json";

const { t } = useI18n({
  useScope: "global",
});

const projects = computed<Project[]>(() =>
  (rawProjects as Project[]).map((project) => ({
    name: project.name,
    description: t(project.description!),
    imgSrc: project.imgSrc,
    imgAlt: project.imgAlt,
    technos: project.technos,
    source: project.source,
    demo: project.demo,
  })),
);
</script>

<style scoped></style>
