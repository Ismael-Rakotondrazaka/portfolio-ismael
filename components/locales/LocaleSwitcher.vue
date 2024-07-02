<template>
  <n-dropdown
    trigger="hover"
    :options="options"
    placement="bottom-start"
    :theme-overrides="{
      optionColorHover: 'var(--color-secondary)',
      optionTextColorHover: '#fff',
    }"
    @select="handleSelect"
  >
    <n-button
      text
      :bordered="false"
      class="group text-white hover:text-secondary"
    >
      <Icon
        name="mdi:translate"
        size="24px"
        class="text-white group-hover:text-secondary"
      />
    </n-button>
  </n-dropdown>
</template>

<script lang="ts" setup>
import { type DropdownMixedOption } from "naive-ui/es/dropdown/src/interface";
const switchLocalePath = useSwitchLocalePath();

const options: DropdownMixedOption[] = [
  {
    label: "English",
    key: "en",
  },
  {
    label: "Français",
    key: "fr",
  },
];

const handleSelect = (key: string | number) => {
  const newPath = switchLocalePath(String(key));
  navigateTo(newPath);
};
</script>

<style></style>
