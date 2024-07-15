<template>
  <footer
    id="contact"
    class="mt-32 w-full border-t-4 border-secondary bg-primary p-3"
  >
    <div
      class="flex w-full flex-row-reverse flex-wrap items-center justify-evenly"
    >
      <div class="w-full max-w-md -translate-y-16 lg:-translate-y-32">
        <CreateMessage class="w-full" />
      </div>

      <div class="flex w-full max-w-md flex-col items-start gap-3">
        <a
          v-for="(link, index) in contacts"
          :key="index"
          :href="link.href"
          target="_blank"
          class="group flex flex-row items-center justify-center text-white hover:text-secondary"
        >
          <Icon :name="link.icon" class="mr-3 text-4xl" />

          <span
            class="underline-slide-inactive group-hover:underline-slide-active"
          >
            {{ link.text }}
          </span>
        </a>
      </div>
    </div>

    <hr class="mx-auto my-7 block h-[0.15rem] w-2/3 bg-white md:w-1/2" />

    <div class="my-5 text-center text-white">
      &copy; Copyright
      <a
        href="https://github.com/Ismael-Rakotondrazaka"
        target="_blank"
        class="inline-block text-secondary underline-slide"
      >
        Ismael
      </a>
      {{ year }}
    </div>
  </footer>
</template>

<script lang="ts" setup>
import contacts from "~/assets/data/contacts.json";

const year = new Date().getFullYear();
</script>

<style scoped></style>
