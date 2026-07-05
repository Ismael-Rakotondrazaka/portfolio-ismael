<template>
  <li class="">
    <Card>
      <CardHeader>
        <CardTitle>
          <h2 class="text-primary text-xl font-bold">
            {{ title }}
          </h2>
        </CardTitle>

        <CardAction v-if="period">
          <p
            class="inline-block rounded-full border border-slate-300 bg-slate-200 p-1 px-3 text-sm whitespace-nowrap text-black"
          >
            {{ period }}
          </p>
        </CardAction>
      </CardHeader>

      <CardContent v-if="description">
        <p class="text-primary text-base">
          {{ description }}
        </p>
      </CardContent>

      <CardFooter v-if="location">
        <p class="text-primary text-base">
          <Icon name="mdi:map-marker" size="1rem" />
          {{ location }}
        </p>
      </CardFooter>
    </Card>
  </li>
</template>

<script lang="ts" setup>
import type { Education } from '~/utils';

withDefaults(defineProps<Education>(), {
  description: null,
  location: null,
  period: null,
});
</script>

<style scoped></style>
