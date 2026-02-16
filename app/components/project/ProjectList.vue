<template>
  <div>
    <ul class="mb-10">
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
    </ul>

    <div class="mx-auto flex w-fit flex-wrap gap-5">
      <Button v-if="canShowMore" variant="outline" @click="showMoreHandler">
        Show More
      </Button>
      <Button v-if="canShowLess" variant="outline" @click="showLessHandler">
        Show Less
      </Button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Project } from '~/utils';

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
