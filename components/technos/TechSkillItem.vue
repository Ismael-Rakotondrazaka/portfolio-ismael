<template>
  <li
    class="group relative inline-block rounded-md border-2 border-white p-1 ring-2 ring-primary transition-all hover:!bg-primary hover:!text-white lg:p-3"
    :style="{
      backgroundColor: bgColor,
      color: color,
    }"
  >
    <Icon
      v-if="mastered"
      name="mdi:star"
      class="text-md absolute right-2 top-2"
    />

    <n-flex vertical size="large" justify="center" align="center">
      <Icon v-if="type === 'icon'" size="5rem" :name="iconName!" />

      <img
        v-else-if="type === 'image'"
        :src="imageSrc"
        alt=""
        class="mx-auto mb-1 !block !h-auto w-1/3 group-hover:text-white lg:w-1/2"
      />

      <span
        class="w-full text-center text-lg group-hover:!text-white"
        :style="{
          color: color,
        }"
      >
        {{ title }}
      </span>
    </n-flex>
  </li>
</template>

<script lang="ts" setup>
import type { TechSkill } from "~/utils";

withDefaults(defineProps<TechSkill>(), {
  color: "#fff",
  bgColor: "var(--color-secondary)",
  mastered: false,
  iconName: undefined,
  imageSrc: undefined,
});
</script>

<style scoped></style>
