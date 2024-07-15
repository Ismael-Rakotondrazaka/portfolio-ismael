<template>
  <div>
    <NaiveConfig>
      <NMessageProvider
        placement="top"
        :duration="5000"
        :keep-alive-on-hover="true"
      >
        <NuxtLayout>
          <NuxtPage />
        </NuxtLayout>
      </NMessageProvider>
    </NaiveConfig>
  </div>
</template>

<script lang="ts" setup>
useSeoMeta({
  twitterTitle: "RAKOTONDRAZAKA Fitia Ismael",
  twitterDescription:
    "RAKOTONDRAZAKA Fitia Ismael, un développeur professionnel",
  ogImage: "/card-RAKOTONDRAZAKA Fitia Ismael.png",
  twitterImage: "/images/profiles/profile-circle-150x150.png",
  twitterCard: "summary",
});

useHead({
  link: [
    {
      rel: "icon",
      type: "image/x-icon",
      href: "/favicon.ico",
    },
    {
      rel: "shortcut icon",
      type: "image/x-icon",
      href: "/favicon.ico",
    },
  ],
});
</script>

<style>
html {
  font-family: "Fira Code", monospace;
}
</style>
