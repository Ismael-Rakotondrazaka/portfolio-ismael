<template>
  <ul>
    <ProjectItem
      v-for="(project, i) in projectsToShow"
      v-motion="{
        initial: {
          x: 50 * (i % 2 ? -1 : 1),
          opacity: 0,
        },
        visibleOnce: {
          x: 0,
          opacity: 1,
          transition: {
            duration: 500,
          },
        },
      }"
      :key="i"
      :name="project.name"
      :description="project.description"
      :imgSrc="project.imgSrc"
      :technos="project.technos"
      :source="project.source"
      :demo="project.demo"
      :isOdd="i % 2 === 1"
      class="mb-10 md:mb-16 lg:mb-20 last:mb-0"
    />

    <div class="flex flex-wrap gap-5 mx-auto w-fit">
      <button
        v-if="canShowMore"
        @click="showMoreHandler"
        class="px-5 py-3 font-bold uppercase border-2 border-white rounded-md transition-all after:w-0 after:h-[0.15rem] after:transition-all after:bg-primary after:block hover:after:w-full text-secondary bg-white"
      >
        Show more
      </button>

      <button
        v-if="canShowLess"
        @click="showLessHandler"
        class="px-5 py-3 font-bold uppercase border-2 border-white rounded-md transition-all after:w-0 after:h-[0.15rem] after:transition-all after:bg-primary after:block hover:after:w-full text-white bg-secondary"
      >
        Show less
      </button>
    </div>
  </ul>
</template>

<script setup>
const props = defineProps({
  projects: {
    type: Array,
    required: false,
    default: () => [],
  },
});

const step = 3;
const initial = 3;

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
