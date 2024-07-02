<template>
  <n-layout class="">
    <n-menu
      :on-update:value="onSelect"
      :inverted="true"
      :collapsed-width="64"
      :collapsed-icon-size="22"
      :options="menuOptions"
    />
  </n-layout>
</template>

<script lang="ts" setup>
import { Icon } from "#components";
import { type MenuMixedOption } from "naive-ui/es/menu/src/interface";
import menus from "~/assets/data/menus.json";

const onSelect = (id: string) => {
  const element = document?.getElementById(id);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
    });
  }
};

const { t } = useI18n();

const menuOptions: ComputedRef<MenuMixedOption[]> = computed(() =>
  menus.map((menu) => ({
    label: () => h("span", t(menu.textKey)),
    key: menu.id,
    icon: () =>
      h(Icon, {
        name: menu.icon,
      }),
  })),
);
</script>

<style></style>
