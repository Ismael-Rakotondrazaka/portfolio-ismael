<template>
  <div
    id="about"
    class="bg-primary flex min-h-screen flex-col items-center justify-center px-3 py-20"
  >
    <div class="mb-12 max-w-2xl">
      <h1 class="text-gold mb-3 inline-block text-2xl font-bold">
        {{ $t('about.title') }}
      </h1>

      <p class="mb-3 text-base tracking-wide text-white">
        {{ $t('about.p1') }}
      </p>

      <p class="mb-3 text-base tracking-wide text-white">
        <i18n-t
          keypath="about.p2"
          tag="span"
          class="mb-3 text-base tracking-wide whitespace-pre-wrap text-white"
          scope="global"
        >
          <template #helloWorld>
            <span class="text-white italic">{{
              $t('about.p2Args.helloWorld')
            }}</span>
          </template>

          <template #codingStart>
            <span class="text-white italic">{{
              $t('about.p2Args.codingStart')
            }}</span>
          </template>
        </i18n-t>
      </p>

      <p class="mb-3 text-base tracking-wide text-white">
        {{ $t('about.p3') }}
      </p>

      <h2 class="text-gold mb-3 text-xl font-bold">
        {{ $t('about.storyBegunTitle') }}
      </h2>

      <p class="mb-10 text-base tracking-wide text-white">
        <i18n-t keypath="about.p4" tag="span" class="" scope="global">
          <template #competitiveProgramming>
            <span class="text-highlight underline">{{
              $t('about.p4Args.competitiveProgramming')
            }}</span>
          </template>

          <template #artificialIntelligence>
            <span class="text-highlight underline">{{
              $t('about.p4Args.artificialIntelligence')
            }}</span>
          </template>

          <template #promises>
            <span class="text-highlight underline">{{
              $t('about.p4Args.promises')
            }}</span>
          </template>
        </i18n-t>
      </p>

      <Button as-child variant="outline" class="mb-3">
        <NuxtLink
          target="_blank"
          to="/documents/CV-RAKOTONDRAZAKA Fitia Ismael.pdf"
          :external="true"
        >
          <Icon name="mdi:file-pdf" />

          {{ $t('welcome.cv.text') }}
        </NuxtLink>
      </Button>
    </div>

    <AboutSectionQuote
      class="mt-10 w-full max-w-2xl md:mt-14 md:w-auto lg:mt-0 lg:mr-5"
    />
  </div>
</template>

<script lang="ts" setup></script>

<style scoped></style>
