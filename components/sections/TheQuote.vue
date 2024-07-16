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
      class="absolute left-[-0.2rem] top-[-4rem] text-[4rem] text-secondary"
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
      class="rounded-lg rounded-tr-none border border-white bg-opacity-50 bg-cover bg-no-repeat p-3 md:p-5"
      :style="{
        backgroundImage: `url(/images/illustrations/illustration-starry-night.jpg)`,
      }"
    >
      <n-flex>
        <n-p
          v-t="'quote.content'"
          class="whitespace-pre-wrap text-xl font-bold italic text-white md:text-2xl lg:text-3xl"
        />

        <n-p v-t="'author.fullName'" class="self-end text-white" />
      </n-flex>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped></style>
