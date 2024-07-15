<template>
  <n-layout :has-sider="true" position="absolute" class="">
    <MenuSider v-model:show-menu="showMenu" />

    <n-layout>
      <n-layout-header position="absolute" class="z-[1]" bordered>
        <TheHeader @menu:clicked="onMenuClickedHandler" />
      </n-layout-header>

      <n-layout-content content-style="" class="my-16" :native-scrollbar="true">
        <slot />
      </n-layout-content>

      <n-layout-footer bordered class="z-[1]">
        <TheFooter />
      </n-layout-footer>
    </n-layout>
  </n-layout>
</template>

<script lang="ts" setup>
const showMenu = ref(false);

const onMenuClickedHandler = () => {
  showMenu.value = !showMenu.value;
};
</script>

<style scoped></style>
