<template>
  <header
    class="bg-primary border-highlight text-primary-foreground sticky top-0 right-0 left-0 z-2 flex h-16 shrink-0 items-center gap-2 border-b-4 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 dark:border-gray-800 dark:bg-gray-900"
  >
    <div class="flex w-full items-center justify-between gap-2 px-4">
      <div class="flex items-center gap-2">
        <SidebarTrigger class-name="-ml-1" />
        <span class="block font-bold text-ellipsis">{{
          $t('author.fullName')
        }}</span>
        <span class="hidden text-ellipsis xl:block">
          {{ $t('author.status') }}
        </span>
      </div>

      <LocaleSwitcher />
    </div>
  </header>
</template>

<script lang="ts" setup>
import { SidebarTrigger } from '@/components/ui/sidebar';
</script>

<style scoped></style>
