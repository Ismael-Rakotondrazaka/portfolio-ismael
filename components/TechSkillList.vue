<template>
  <ul class="flex flex-row flex-wrap items-stretch gap-2 lg:gap-3">
    <TechSkillItem
      v-for="(skill, index) in skills"
      v-motion="{
        initial: {
          scale: 0,
        },
        visibleOnce: {
          scale: 1,
          transition: {
            delay: index * 50,
          },
        },
      }"
      :key="index"
      :icon="skill.icon"
      :src="skill.src"
      :component="skill.component"
      :text="skill.text"
      :bgColor="skill.bgColor"
      :color="skill.color"
      :type="skill.type"
      :mastered="skill.mastered"
      class="w-full max-w-[6rem] lg:max-w-[10rem]"
    />
  </ul>
</template>

<script setup>
defineProps({
  skills: {
    type: Array,
    required: false,
    default: () => [],
  },
});
</script>

<style scoped></style>
