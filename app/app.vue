<template>
  <div class="w-full">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>

    <Toaster position="top-center" />
  </div>
</template>

<script lang="ts" setup>
import 'vue-sonner/style.css';

import { Toaster } from '@/components/ui/sonner';

useSeoMeta({
  ogImage: '/card-rakotondrazaka-fitia-ismael.png',
  twitterCard: 'summary',
  twitterDescription:
    'RAKOTONDRAZAKA Fitia Ismael, un développeur professionnel',
  twitterImage: '/images/profiles/profile-circle-150x150.png',
  twitterTitle: 'RAKOTONDRAZAKA Fitia Ismael',
});

useHead({
  link: [
    {
      href: '/favicon.ico',
      rel: 'icon',
      type: 'image/x-icon',
    },
    {
      href: '/favicon.ico',
      rel: 'shortcut icon',
      type: 'image/x-icon',
    },
  ],
});
</script>

<style scoped></style>
