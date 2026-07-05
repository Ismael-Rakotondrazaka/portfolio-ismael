<template>
  <ul class="space-y-5">
    <EducationItem
      v-for="(education, i) in educations"
      :key="i"
      :title="education.title"
      :description="education.description"
      :location="education.location"
      :period="education.period"
    />
  </ul>
</template>

<script lang="ts" setup>
interface Props {
  educations?: Education[];
}

withDefaults(defineProps<Props>(), {
  educations: () => [],
});
</script>

<style scoped></style>
