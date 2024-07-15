<template>
  <n-page-header
    class="border-b-4 border-secondary bg-primary p-3"
    @back="menuSiderStore.toggle"
  >
    <template #back>
      <Icon :name="menuIconName" class="text-white hover:text-secondary" />
    </template>

    <template #title>
      <n-text class="!text-ellipsis text-white">{{
        $t("author.fullName")
      }}</n-text>
    </template>

    <template v-if="!windowWidthStore.isMobileOrTablet" #subtitle>
      <n-text class="text-white">{{ $t("author.status") }}</n-text>
    </template>

    <template #extra>
      <LocaleSwitcher />
    </template>
  </n-page-header>
</template>

<script lang="ts" setup>
const windowWidthStore = useWindowWidthStore();
const menuSiderStore = useMenuSiderStore();

const menuIconName = computed(() =>
  menuSiderStore.isShown ? "mdi:menu-open" : "mdi:menu-close",
);
</script>

<style scoped></style>
