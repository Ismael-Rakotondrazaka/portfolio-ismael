<template>
  <div
    class="relative flex flex-row flex-wrap items-center min-h-screen pt-24 pb-20 lg:flex-nowrap justify-evenly"
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
        <span
          v-t="'greetingPre'"
          v-motion="{
            initial: {
              x: -20,
              opacity: 0,
            },
            visibleOnce: {
              x: 0,
              opacity: 1,
              transition: {
                duration: 500,
              },
            },
          }"
          class="inline-block text-lg font-bold text-gray-500 md:text-2xl"
        />

        <br />

        <span
          v-t="'fullName'"
          v-motion="{
            initial: {
              x: -100,
              opacity: 0,
            },
            visibleOnce: {
              x: 0,
              opacity: 1,
              transition: {
                delay: 400,
                duration: 500,
              },
            },
          }"
          class="font-bold inline-block text-2xl md:text-4xl text-primary after:w-0 after:h-[0.15rem] after:transition-all after:bg-primary after:block hover:after:w-full"
        />
      </p>

      <h1
        class="font-bold text-4xl md:text-[4rem] leading-[1] whitespace-pre-wrap"
      >
        <span
          class="inline-block bg-move"
          v-motion="{
            initial: {
              y: 100,
              opacity: 0,
            },
            visibleOnce: {
              y: 0,
              opacity: 1,
              transition: {
                delay: i * 50 + 500,
              },
            },
          }"
          v-for="(letter, i) in professionSplitted1"
          :key="i + locale"
        >
          {{ letter }}
        </span>

        <br />

        <span
          class="inline-block bg-move"
          v-motion="{
            initial: {
              y: 100,
              opacity: 0,
            },
            visibleOnce: {
              y: 0,
              opacity: 1,
              transition: {
                delay: i * 50 + 700 + 500,
              },
            },
          }"
          v-for="(letter, i) in professionSplitted2"
          :key="i + locale"
        >
          {{ letter }}
        </span>
      </h1>

      <NuxtLink
        v-t="'contactButtonText'"
        v-motion="{
          initial: {
            scale: 0,
          },
          visibleOnce: {
            scale: 1,
            transition: {
              delay: 7 * 50 + 700 + 500,
            },
          },
        }"
        to="/#contact"
        class="mt-7 inline-block px-5 py-3 font-bold uppercase border-2 rounded-md border-secondary ring-2 transition-all after:w-0 after:h-[0.15rem] after:transition-all after:bg-primary after:block hover:after:w-full text-white bg-secondary hover:border-white ring-secondary"
      />
    </div>

    <nuxt-img
      v-motion="{
        initial: {
          scale: 0,
        },
        visibleOnce: {
          scale: 1,
          transition: {
            type: 'spring',
            stiffness: 300,
            damping: 20,
            mass: 1,
            delay: 500,
          },
        },
      }"
      sizes="sm:90vw md:50vw lg:400px"
      src="/images/profiles/profile.png"
    />
  </div>
</template>

<script setup>
const { t, locale } = useI18n({
  useScope: "global",
  messages: {
    en: {
      greetingPre: "Hi, I am",
      fullName: "Fitia Ismael Rakotondrazaka",
      professionPart1: "A professional",
      professionPart2: "web developer",
      contactButtonText: "Contact me",
    },
    fr: {
      greetingPre: "Bonjour, je suis",
      fullName: "Rakotondrazaka Fitia Ismael",
      professionPart1: "Un développeur",
      professionPart2: "web professionnel",
      contactButtonText: "Me contacter",
    },
  },
});

const professionSplitted1 = computed(() => t("professionPart1").split(""));
const professionSplitted2 = computed(() => t("professionPart2").split(""));
</script>

<style scoped></style>
