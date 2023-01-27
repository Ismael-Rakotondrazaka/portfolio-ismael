<template>
  <div class="min-h-screen flex flex-row items-center justify-evenly">
    <div>
      <p class="mb-5">
        <span class="font-bold text-2xl text-gray-500">Hi, I am</span>
        <br />
        <span
          class="font-bold text-4xl text-primary after:w-0 after:h-[0.15rem] after:transition-all after:bg-primary after:block hover:after:w-full"
          >Fitia Ismael Rakotondrazaka</span
        >
      </p>

      <h1 class="font-bold text-[4rem] bg-move leading-[1]">
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

    <div class="w-full h-full max-w-[26rem] max-h-[26rem]">
      <img
        src="~/assets/images/profiles/profile.png"
        alt=""
        class="w-full h-full object-cover"
      />
    </div>
  </div>
</template>

<script setup></script>

<style scoped></style>
