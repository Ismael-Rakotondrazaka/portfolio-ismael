<template>
  <div class="inline-flex flex-nowrap items-center gap-2">
    <slot name="prefix" />

    <div
      class="inline-flex w-12 flex-row rounded-full px-1 py-1 leading-[0] transition-all hover:cursor-pointer"
      role="checkbox"
      :aria-checked="value"
      tabindex="0"
      :class="[mainClass]"
      @click="toggle"
      @keydown.space.prevent="toggle"
    >
      <span
        class="inline-block h-4 w-4 rounded-full bg-white transition-all duration-1000"
        :class="[]"
      ></span>
    </div>

    <slot name="suffix" />
  </div>
</template>

<script lang="ts" setup>
const value = defineModel<boolean>("value", {
  required: false,
  default: false,
});

const toggle = () => {
  value.value = !value.value;
};

const mainClass = computed(() =>
  value.value ? "bg-primary justify-end" : "bg-gray-400 justify-start",
);
</script>

<style scoped></style>
