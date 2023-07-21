<template>
  <li
    class="flex flex-wrap items-center justify-center w-full max-w-md mx-auto overflow-hidden border border-white rounded-lg lg:flex-nowrap md:max-w-lg lg:max-w-5xl bg-sky-200"
    :class="[isOdd ? 'flex-row-reverse' : 'flex-row']"
  >
    <div
      class="object-cover w-full max-h-[20rem] md:max-h-[28rem] overflow-hidden"
      :class="[
        isOdd ? 'rounded-lg lg:rounded-l-none' : 'rounded-lg lg:rounded-r-none',
      ]"
    >
      <nuxt-img
        :src="imgSrc"
        :alt="imgAlt"
        sizes="sm:500px md:800px lg:100%"
        class="duration-300 hover:scale-110"
        format="webp"
      />
    </div>

    <div class="w-full h-full p-3 lg:w-2/3">
      <div class="mb-6">
        <h2 class="mb-3 text-2xl font-bold text-secondary">{{ name }}</h2>

        <ProjectDescription :description="description" />

        <TechnoList :technos="technos" />
      </div>

      <div class="flex flex-row items-center">
        <a
          v-if="source"
          :href="source"
          target="_blank"
          class="block px-5 py-3 font-bold text-center text-white uppercase transition-all border-2 rounded-md border-secondary ring-2 bg-secondary hover:border-white ring-secondary group"
          :class="[demo ? 'w-1/2 border-r-0 rounded-r-none' : 'w-full']"
        >
          <FaIcon icon="fa-solid fa-code" class="mr-2" />
          <span
            class="after:w-0 after:h-[0.15rem] after:transition-all after:bg-primary after:block group-hover:after:w-full"
          >
            Source
          </span>
        </a>

        <a
          v-if="demo"
          :href="demo"
          target="_blank"
          class="block px-5 py-3 font-bold text-center text-white uppercase transition-all border-2 rounded-md border-secondary ring-2 bg-secondary hover:border-white ring-secondary group"
          :class="[source ? 'w-1/2 border-l-0 rounded-l-none' : 'w-full']"
        >
          <FaIcon icon="fa-solid fa-globe" class="mr-2" />
          <span
            class="after:w-0 after:h-[0.15rem] after:transition-all after:bg-primary after:block group-hover:after:w-full"
          >
            Demo
          </span>
        </a>
      </div>
    </div>
  </li>
</template>

<script setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: [String, null],
    required: false,
    default: null,
  },
  imgSrc: {
    type: String,
    required: true,
  },
  imgAlt: {
    type: String,
    required: false,
    default: "",
  },
  technos: {
    type: Array,
    required: false,
    default: () => [],
  },
  source: {
    type: [String, null],
    required: false,
    default: null,
  },
  demo: {
    type: [String, null],
    required: false,
    default: null,
  },
  isOdd: {
    type: Boolean,
    required: false,
    default: false,
  },
});
</script>

<style scoped></style>
