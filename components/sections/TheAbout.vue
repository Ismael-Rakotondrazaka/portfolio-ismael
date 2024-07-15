<template>
  <div
    id="about"
    class="flex min-h-screen flex-col items-center justify-center bg-primary px-3 py-20"
  >
    <div class="mb-12 max-w-2xl">
      <n-h1
        v-t="'about.title'"
        class="inline-block text-tertiary underline-slide"
      />

      <n-p v-t="'about.p1'" class="mb-3 text-base tracking-wide text-white" />

      <n-p>
        <i18n-t
          keypath="about.p2"
          tag="span"
          class="mb-3 whitespace-pre-wrap text-base tracking-wide text-white"
        >
          <template #helloWorld>
            <n-text v-t="'about.p2Args.helloWorld'" class="text-white" italic />
          </template>

          <template #codingStart>
            <n-text
              v-t="'about.p2Args.codingStart'"
              class="text-white"
              italic
            />
          </template>
        </i18n-t>
      </n-p>

      <n-p v-t="'about.p3'" class="mb-3 text-base tracking-wide text-white" />

      <n-h2 v-t="'about.storyBegunTitle'" class="text-tertiary" />

      <n-p class="mb-10">
        <i18n-t keypath="about.p4" tag="span" class="text-white">
          <template #competitiveProgramming>
            <n-text
              v-t="'about.p4Args.competitiveProgramming'"
              underline
              class="text-secondary"
            />
          </template>

          <template #artificialIntelligence>
            <n-text
              v-t="'about.p4Args.artificialIntelligence'"
              underline
              class="text-secondary"
            />
          </template>

          <template #promises>
            <n-text
              v-t="'about.p4Args.promises'"
              underline
              class="text-secondary"
            />
          </template>
        </i18n-t>
      </n-p>

      <NuxtLink
        target="_blank"
        to="/documents/CV-RAKOTONDRAZAKA Fitia Ismael.pdf"
        :external="true"
        class="group button-outlined"
      >
        <span
          class="underline-slide-inactive group-hover:underline-slide-active"
        >
          <Icon name="mdi:file-pdf" class="mr-3" />

          {{ $t("welcome.cv.text") }}</span
        >
      </NuxtLink>
    </div>

    <TheQuote
      class="mt-10 w-full max-w-2xl md:mt-14 md:w-auto lg:mr-5 lg:mt-0"
    />
  </div>
</template>

<script lang="ts" setup></script>

<style scoped></style>
