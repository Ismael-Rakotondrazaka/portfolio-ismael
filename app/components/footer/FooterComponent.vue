<template>
  <footer
    id="contact"
    class="border-highlight bg-primary mt-32 w-full border-t-4 p-3"
  >
    <div
      class="flex w-full flex-row-reverse flex-wrap items-center justify-evenly"
    >
      <div class="w-full max-w-md -translate-y-16 lg:-translate-y-32">
        <MessageSendForm class="w-full" />
      </div>

      <div class="flex w-full max-w-md flex-col items-start gap-3">
        <Button
          v-for="(link, index) in contacts"
          :key="index"
          as-child
          variant="link"
          class="text-white"
        >
          <NuxtLink :href="link.href" target="_blank" class="">
            <Icon :name="link.icon" size="2rem" />
            <p class="">
              {{ link.text }}
            </p>
          </NuxtLink>
        </Button>
      </div>
    </div>

    <hr class="mx-auto my-7 block h-[0.15rem] w-2/3 bg-white md:w-1/2" />

    <div class="my-5 text-center text-white">
      &copy; Copyright
      <NuxtLink
        href="https://github.com/Ismael-Rakotondrazaka"
        target="_blank"
        class="text-secondary underline-slide inline-block"
      >
        Ismael
      </NuxtLink>
      {{ year }}
    </div>
  </footer>
</template>

<script lang="ts" setup>
import contacts from '~/assets/data/contacts.json';

const year = new Date().getFullYear();
</script>

<style scoped></style>
