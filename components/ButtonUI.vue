<template>
  <button
    class="px-5 py-3 font-bold uppercase border-2 rounded-md border-secondary ring-2 transition-all after:w-0 after:h-[0.15rem] after:transition-all after:bg-primary after:block hover:after:w-full"
    :class="[mainClass]"
  >
    <slot />
  </button>
</template>

<script setup>
const props = defineProps({
  variant: {
    type: String,
    required: false,
    default: "solid",
    validator: (value) => ["solid", "outlined"].includes(value),
  },
});

const mainClass = computed(() => {
  let variantClass = {
    solid: "text-white bg-secondary hover:border-white ring-secondary",
    outlined: "text-secondary bg-white ring-transparent hover:ring-secondary",
  };

  return variantClass[props.variant];
});
</script>

<style scoped></style>
