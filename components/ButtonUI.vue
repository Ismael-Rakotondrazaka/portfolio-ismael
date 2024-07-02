<template>
  <button class="group" :class="[mainClass]">
    <span class="underline-slide-inactive group-hover:underline-slide-active">
      <slot />
    </span>
  </button>
</template>

<script lang="ts" setup>
interface Props {
  variant?: "solid" | "outlined";
}

const props = withDefaults(defineProps<Props>(), {
  variant: "solid",
});

const mainClass = computed(() => {
  const variantClass = {
    solid: "button-solid",
    outlined: "button-outlined",
  };

  return variantClass[props.variant];
});
</script>

<style scoped></style>
