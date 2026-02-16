<template>
  <SidebarProvider>
    <SidebarComponent />
    <SidebarInset>
      <HeaderComponent />
      <slot />
      <FooterComponent />
    </SidebarInset>
  </SidebarProvider>
</template>

<script lang="ts" setup>
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
</script>

<style scoped></style>
