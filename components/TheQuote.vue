<template>
  <div
    class="relative bg-no-repeat bg-cover border border-white rounded-lg rounded-tr-none p-7 md:p-12 bg-sky-100"
    :style="{
      backgroundImage: `url(/images/illustrations/illustration-code.png)`,
    }"
  >
    <FaIcon
      icon="fa-solid fa-quote-left"
      class="absolute top-[-2.5rem] left-[-0.2rem] text-primary text-[4rem]"
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
      class="p-5 bg-opacity-50 bg-no-repeat bg-cover border border-white rounded-lg rounded-tr-none"
      :style="{
        backgroundImage: `url(/images/illustrations/illustration-starry-night.jpg)`,
      }"
    >
      <p
        v-t="'theQuoteText'"
        class="mb-3 text-3xl italic font-bold text-white whitespace-pre-wrap md:text-4xl"
      />

      <p v-t="'fullName'" class="text-sm text-right text-white" />
    </div>
  </div>
</template>

<script setup>
useI18n({
  useScope: "global",
  messages: {
    en: {
      theQuoteText: "Since codes are arts, \nI'm also an artist.",
    },
    fr: {
      theQuoteText:
        "Puisque les codes sont des arts,\nje suis aussi un artiste.",
    },
  },
});
</script>

<style scoped></style>
