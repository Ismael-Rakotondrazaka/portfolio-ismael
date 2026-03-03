<template>
  <li
    class="group ring-primary hover:bg-primary! relative inline-block rounded-md border-2 border-white p-1 ring-2 transition-all hover:text-white! lg:p-3"
    :style="{
      backgroundColor: bgColor,
      color: color,
    }"
  >
    <Icon
      v-if="mastered"
      name="mdi:star"
      class="text-md absolute top-2 right-2"
    />

    <div class="flex flex-col items-center justify-center">
      <Icon v-if="type === 'icon'" :size="iconWidth" :name="iconName!" />

      <img
        v-else-if="type === 'image'"
        :src="imageSrc"
        :alt="title"
        class="mx-auto mb-1 block! h-auto! w-1/4 group-hover:text-white md:w-1/3 lg:w-1/2"
      />

      <span
        class="w-full text-center text-base group-hover:text-white! lg:text-lg"
        :style="{
          color: color,
        }"
      >
        {{ title }}
      </span>
    </div>
  </li>
</template>

<script lang="ts" setup>
import type { TechSkill } from '~/utils';

withDefaults(defineProps<TechSkill>(), {
  bgColor: 'var(--color-secondary)',
  color: '#fff',
  iconName: undefined,
  imageSrc: undefined,
  mastered: false,
});

const { isMobileOrTablet } = useWindowWidthStore();

const iconWidth = computed(() => (isMobileOrTablet ? '2rem' : '5rem'));
</script>

<style scoped></style>
