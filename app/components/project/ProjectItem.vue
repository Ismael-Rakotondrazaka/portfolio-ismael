<template>
  <li
    class="mx-auto flex w-full max-w-md flex-wrap items-center justify-center overflow-hidden rounded-lg border border-white bg-sky-200 md:max-w-lg lg:max-w-5xl lg:flex-nowrap"
    :class="[isOdd ? 'flex-row-reverse' : 'flex-row']"
  >
    <div
      class="max-h-80 w-full overflow-hidden object-cover md:max-h-112"
      :class="[
        isOdd ? 'rounded-lg lg:rounded-l-none' : 'rounded-lg lg:rounded-r-none',
      ]"
    >
      <img
        :src="srcUrl"
        :srcset="_srcset.srcset"
        :sizes="_srcset.sizes"
        :alt="imgAlt"
      />
    </div>

    <div class="h-full w-full p-3 lg:w-2/3">
      <div class="mb-6">
        <h2 class="text-primary mb-2 text-xl font-bold">
          {{ rank }}. {{ name }}
        </h2>

        <ProjectDescription :description="description" />

        <TechnoList :technos="technos" />
      </div>

      <ButtonGroup class="w-full">
        <Button v-if="source" variant="default" class="w-1/2!" as-child>
          <NuxtLink :href="source" target="_blank" class="text-base">
            <Icon name="mdi:code-tags" />

            Source
          </NuxtLink>
        </Button>

        <Button v-if="demo" variant="default" class="w-1/2!" as-child>
          <NuxtLink :href="demo" target="_blank" class="text-base">
            <Icon name="mdi:earth" />

            Demo
          </NuxtLink>
        </Button>
      </ButtonGroup>
    </div>
  </li>
</template>

<script lang="ts" setup>
import { ButtonGroup } from '~/components/ui/button-group';

const props = withDefaults(
  defineProps<{
    demo?: null | string;
    description?: null | string;
    imgAlt?: string;
    imgSrc: string;
    name: string;
    rank: number;
    source?: null | string;
    technos?: string[];
  }>(),
  {
    demo: null,
    description: null,
    imgAlt: '',
    source: null,
    technos: () => [],
  }
);

const isOdd = computed(() => props.rank % 2 === 1);

const img = useImage();

const srcUrl = computed(() => img(props.imgSrc));

const _srcset = computed(() => {
  return img.getSizes(props.imgSrc, {
    sizes: 'sm:500px md:800px lg:100%',
  });
});
</script>

<style scoped></style>
