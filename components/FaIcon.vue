<template>
  <!-- ! hydratation node mismatch error even after transpiling fa packages -->
  <ClientOnly>
    <font-awesome-icon :icon="icon" v-bind="$attrs" />
  </ClientOnly>
</template>

<script>
export default {
  inheritAttrs: false,
};
</script>

<script setup>
defineProps({
  icon: {
    required: true,
  },
});
</script>

<style scoped></style>
