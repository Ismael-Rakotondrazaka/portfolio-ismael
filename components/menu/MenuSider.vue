<template>
  <n-drawer
    v-if="windowWidthStore.isMobileOrTablet"
    v-model:show="menuSiderStore.isShown"
    :placement="'left'"
    class=""
  >
    <n-layout-sider
      :native-scrollbar="false"
      :collapsed-width="0"
      :collapsed="false"
      trigger-style="top: 240px;"
      collapsed-trigger-style="top: 240px; right: -30px;"
      :collapse-mode="'transform'"
      bordered
      :default-collapsed="true"
      position="absolute"
      class="z-[2]"
    >
      <MenuSiderContent />
    </n-layout-sider>
  </n-drawer>
  <n-layout-sider
    v-else
    :native-scrollbar="false"
    :collapsed-width="0"
    :collapsed="!menuSiderStore.isShown"
    trigger-style="top: 240px;"
    collapsed-trigger-style="top: 240px; right: -20px;"
    :collapse-mode="'transform'"
    bordered
    :default-collapsed="true"
    position="static"
    class="z-[2]"
  >
    <MenuSiderContent />
  </n-layout-sider>
</template>

<script lang="ts" setup>
const menuSiderStore = useMenuSiderStore();

const windowWidthStore = useWindowWidthStore();
</script>

<style></style>
