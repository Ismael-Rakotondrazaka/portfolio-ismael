<template>
  <div
    class="relative flex flex-row flex-wrap items-center min-h-screen py-20 lg:flex-nowrap justify-evenly"
  >
    <div class="absolute top-16 lg:top-1/5 left-[2%] w-7 md:w-12 lg:w-20">
      <FaIcon
        icon="fa-solid fa-code"
        class="text-primary w-full !h-auto hover:animate-spin"
      />
    </div>

    <div class="absolute top-[40%] right-[4%] w-7 md:w-12 lg:w-20 rotate-12">
      <FaIcon
        icon="fa-solid fa-globe"
        class="text-primary w-full !h-auto hover:animate-bounce"
      />
    </div>

    <div
      class="absolute bottom-[10%] right-[60%] w-7 md:w-12 lg:w-20 -rotate-12"
    >
      <FaIcon
        icon="fa-solid fa-terminal"
        class="text-primary w-full !h-auto hover:animate-ping"
      />
    </div>

    <div class="w-full p-3 mb-10 md:mb-0 lg:w-auto">
      <p class="mb-5">
        <span class="text-lg font-bold text-gray-500 md:text-2xl">
          Hi, I am
        </span>

        <br />

        <span
          class="font-bold text-2xl md:text-4xl text-primary after:w-0 after:h-[0.15rem] after:transition-all after:bg-primary after:block hover:after:w-full"
        >
          Fitia Ismael Rakotondrazaka
        </span>
      </p>

      <h1 class="font-bold text-5xl md:text-[4rem] bg-move leading-[1]">
        A professional
        <br />
        web developer
      </h1>

      <NuxtLink
        to="/#contact"
        class="mt-7 inline-block px-5 py-3 font-bold uppercase border-2 rounded-md border-secondary ring-2 transition-all after:w-0 after:h-[0.15rem] after:transition-all after:bg-primary after:block hover:after:w-full text-white bg-secondary hover:border-white ring-secondary"
      >
        Contact me
      </NuxtLink>
    </div>

    <div class="p-3 w-full h-full max-w-[26rem] max-h-[26rem]">
      <img
        src="~/assets/images/profiles/profile.png"
        alt=""
        class="object-cover w-full h-full"
      />
    </div>
  </div>
</template>

<script setup></script>

<style scoped></style>
