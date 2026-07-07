<template>
  <span class="bg-foreground/20 flex h-4 w-6 overflow-hidden rounded-sm">
    <img
      v-if="country"
      :src="flagUrl"
      :alt="countryName"
      :title="countryName"
    />
  </span>
</template>

<script lang="ts" setup>
interface Props {
  country: string;
  countryName?: string;
}

const props = withDefaults(defineProps<Props>(), {
  countryName: undefined,
});

const flagUrl = computed(() => {
  return `https://flagcdn.com/w40/${props.country.toLowerCase()}.png`;
});
</script>
