<template>
  <div id="projects" class="bg-primary min-h-screen py-20">
    <h1 class="text-gold mb-5 text-center text-2xl font-bold">
      {{ $t('projects.title') }}
    </h1>

    <div class="p-3">
      <ProjectList :projects="projects" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import rawProjects from '~/assets/data/projects.json';

const { t } = useI18n({
  useScope: 'global',
});

const projects = computed<Project[]>(() =>
  (rawProjects as Project[]).map(project => ({
    demo: project.demo,
    description: t(project.description!),
    imgAlt: project.imgAlt,
    imgSrc: project.imgSrc,
    name: project.name,
    source: project.source,
    technos: project.technos,
  }))
);
</script>

<style scoped></style>
