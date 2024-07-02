<template>
  <ul class="grid grid-cols-3 gap-4 md:grid-cols-4">
    <TechSkillItem
      v-for="(skill, index) in skills"
      :id="skill.title"
      :key="index"
      :type="skill.type"
      :icon-name="skill.iconName"
      :title="skill.title"
      :color="skill.color"
      :bg-color="skill.bgColor"
      :mastered="skill.mastered"
      class="w-full"
    />
  </ul>
</template>

<script lang="ts" setup>
import type { TechSkill } from "~/utils";

interface Props {
  skills: TechSkill[];
}

defineProps<Props>();
</script>

<style scoped></style>
