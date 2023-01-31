<template>
  <div
    class="relative bg-no-repeat bg-cover border border-white rounded-lg rounded-tr-none p-7 md:p-12 bg-sky-100"
    :style="{
      backgroundImage: `url(${IllustrationCode})`,
    }"
  >
    <FaIcon
      icon="fa-solid fa-quote-left"
      class="absolute top-[-2.5rem] left-[-0.2rem] text-primary text-[4rem]"
    />

    <div
      class="p-5 bg-opacity-50 bg-no-repeat bg-cover border border-white rounded-lg rounded-tr-none"
      :style="{
        backgroundImage: `url(${IllustrationStarryNight})`,
      }"
    >
      <p class="mb-3 text-3xl italic font-bold text-white md:text-4xl">
        Because codes are arts,
        <br />
        I'm also an artist.
      </p>

      <p class="text-sm text-right text-white">Fitia Ismael Rakotondrazaka</p>
    </div>
  </div>
</template>

<script setup>
import IllustrationStarryNight from "~/assets/images/illustrations/illustration-starry-night.jpg";
import IllustrationCode from "~/assets/images/illustrations/illustration-code.png";
</script>

<style scoped></style>
