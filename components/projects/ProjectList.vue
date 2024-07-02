<template>
  <ul>
    <ProjectItem
      v-for="(project, i) in projectsToShow"
      :key="i"
      v-motion="{
        initial: {
          scale: 0.7,
          opacity: 0,
        },
        enter: {
          scale: 1,
          opacity: 1,
          transition: {
            duration: 500,
          },
        },
      }"
      :name="project.name"
      :description="project.description"
      :img-src="project.imgSrc"
      :img-alt="project.imgAlt"
      :technos="project.technos"
      :source="project.source"
      :demo="project.demo"
      :rank="i + 1"
      class="mb-10 last:mb-0 md:mb-16 lg:mb-20"
    />

    <div class="mx-auto flex w-fit flex-wrap gap-5">
      <ButtonUI v-if="canShowMore" variant="outlined" @click="showMoreHandler">
        Show More
      </ButtonUI>
      <ButtonUI v-if="canShowLess" variant="outlined" @click="showLessHandler">
        Show Less
      </ButtonUI>
    </div>
  </ul>
</template>

<script lang="ts" setup>
import type { Project } from "~/utils";

interface Props {
  projects?: Project[];
}

const props = withDefaults(defineProps<Props>(), {
  projects: () => [],
});

const step = 3;
const initial = 5;

const count = ref(initial);
const projectsToShow = computed(() => props.projects.slice(0, count.value));

const showMoreHandler = () => {
  count.value += step;
};

const showLessHandler = () => {
  count.value = initial;
};

const canShowMore = computed(() => props.projects.length > count.value);

const canShowLess = computed(() => count.value > initial);
</script>

<style scoped></style>
