<template>
  <li
    class="mx-auto flex w-full max-w-md flex-wrap items-center justify-center overflow-hidden rounded-lg border border-white bg-sky-200 md:max-w-lg lg:max-w-5xl lg:flex-nowrap"
    :class="[isOdd ? 'flex-row-reverse' : 'flex-row']"
  >
    <div
      class="max-h-[20rem] w-full overflow-hidden object-cover md:max-h-[28rem]"
      :class="[
        isOdd ? 'rounded-lg lg:rounded-l-none' : 'rounded-lg lg:rounded-r-none',
      ]"
    >
      <n-image
        :src="srcUrl"
        :img-props="{
          srcset: _srcset.srcset,
          sizes: _srcset.sizes,
        }"
      >
      </n-image>
    </div>

    <div class="h-full w-full p-3 lg:w-2/3">
      <div class="mb-6">
        <n-h2 class="text-primary">{{ rank }}. {{ name }}</n-h2>

        <ProjectDescription :description="description" />

        <TechnoList :technos="technos" />
      </div>

      <div class="flex flex-row items-center">
        <a
          v-if="source"
          :href="source"
          target="_blank"
          class="group button-solid"
          :class="[demo ? '!w-1/2 !rounded-r-none !border-r-0' : '!w-full']"
        >
          <Icon name="mdi:code-tags" class="mr-2 align-text-bottom text-base" />
          <span
            class="underline-slide-inactive group-hover:underline-slide-active"
          >
            Source
          </span>
        </a>

        <a
          v-if="demo"
          :href="demo"
          target="_blank"
          class="group button-solid"
          :class="[source ? '!w-1/2 !rounded-l-none !border-l-0' : '!w-full']"
        >
          <Icon name="mdi:earth" class="mr-2 align-text-bottom text-base" />
          <span
            class="underline-slide-inactive group-hover:underline-slide-active"
          >
            Demo
          </span>
        </a>
      </div>
    </div>
  </li>
</template>

<script lang="ts" setup>
import type { Project } from "~/utils";

interface Props extends Project {
  rank: number;
}

const props = withDefaults(defineProps<Props>(), {
  description: null,
  imgAlt: "",
  technos: () => [],
  source: null,
  demo: null,
  isOdd: false,
});

const isOdd = computed(() => props.rank % 2 === 1);

const img = useImage();

const srcUrl = computed(() => img(props.imgSrc));

const _srcset = computed(() => {
  return img.getSizes(props.imgSrc, {
    sizes: "sm:500px md:800px lg:100%",
  });
});
</script>

<style scoped></style>
