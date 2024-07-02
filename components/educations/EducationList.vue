<template>
  <ul>
    <EducationItem
      v-for="(education, i) in educations"
      :key="i"
      :title="education.title"
      :description="education.description"
      :location="education.location"
      :period="education.period"
      class="bg-secondary odd:bg-opacity-20 even:bg-opacity-10"
    />
  </ul>
</template>

<script lang="ts" setup>
interface Props {
  educations: Education[];
}

withDefaults(defineProps<Props>(), {
  educations: () => [],
});
</script>

<style scoped></style>
