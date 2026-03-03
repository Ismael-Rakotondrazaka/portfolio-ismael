<template>
  <div
    class="relative rounded-lg rounded-tr-none border border-white bg-sky-100 bg-cover bg-no-repeat p-3 md:p-7 lg:p-12"
    :style="{
      backgroundImage: `url(/images/illustrations/illustration-code.png)`,
    }"
  >
    <Icon
      name="mdi:format-quote-open"
      size="7rem"
      class="text-secondary absolute -top-16 left-[-0.2rem] text-[4rem]"
    />

    <div
      v-motion="{
        initial: {
          y: 5,
        },
        enter: {
          y: 0,
          transition: {
            repeat: Infinity,
            repeatType: 'reverse',
            duration: 1200,
          },
        },
      }"
      class="bg-opacity-50 rounded-lg rounded-tr-none border border-white bg-cover bg-no-repeat p-3 md:p-5"
      :style="{
        backgroundImage: `url(/images/illustrations/illustration-starry-night.jpg)`,
      }"
    >
      <div class="flex flex-col gap-3">
        <p
          class="text-xl font-bold whitespace-pre-wrap text-white italic md:text-2xl lg:text-3xl"
        >
          {{ $t('quote.content') }}
        </p>

        <p class="text-right text-base text-white">
          {{ $t('author.fullName') }}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped></style>
