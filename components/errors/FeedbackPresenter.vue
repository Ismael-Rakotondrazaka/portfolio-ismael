<template>
  <p v-if="feedback" class="text-sm" :class="[mainClass]">{{ feedback }}</p>
</template>

<script lang="ts" setup>
interface Props {
  status?: "error";
  feedback?: string;
}

const props = withDefaults(defineProps<Props>(), {
  status: undefined,
  feedback: undefined,
});

const statusClassMap = {
  error: "text-red-600",
};

const mainClass = computed(() =>
  props.status ? statusClassMap[props.status] : "",
);
</script>

<style scoped></style>
