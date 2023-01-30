<template>
  <ul>
    <EducationItem
      v-for="(education, i) in educations"
      :key="i"
      :title="education.title"
      :description="education.description"
      :location="education.location"
      :period="education.period"
      class="bg-primary even:bg-opacity-10 odd:bg-opacity-20"
    />
  </ul>
</template>

<script setup>
defineProps({
  educations: {
    type: Array,
    required: false,
    default: () => [],
  },
});
</script>

<style scoped></style>
