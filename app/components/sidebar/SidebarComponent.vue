<script setup lang="ts">
import { Icon } from '#components';

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import menus from '~/assets/data/menus.json';

const onSelect = (id: string) => {
  const element = document?.getElementById(id);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
    });
  }
};

const { t } = useI18n({
  useScope: 'global',
});

const menuOptions = computed(() =>
  menus.map(menu => ({
    icon: menu.icon,
    key: menu.id,
    label: t(menu.textKey),
  }))
);

const config = useRuntimeConfig();
</script>

<template>
  <Sidebar collapsible="icon">
    <SidebarHeader>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton size="lg">
            <div
              class="flex aspect-square size-8 items-center justify-center rounded-lg"
            >
              <Icon name="internal:i-letter" size="1.5rem" />
            </div>
            <div class="flex flex-col gap-0.5 leading-none">
              <span class="font-semibold">Portfolio</span>
              <span class="">v{{ config.public.appVersion }}</span>
            </div>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarHeader>

    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem v-for="menu in menuOptions" :key="menu.key">
              <SidebarMenuButton as-child>
                <button @click="onSelect(menu.key)">
                  <Icon :name="menu.icon" size="16px" class="shrink-0" />
                  <span>{{ menu.label }}</span>
                </button>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
  </Sidebar>
</template>
