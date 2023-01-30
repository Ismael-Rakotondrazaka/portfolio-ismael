<template>
  <li
    class="flex items-center justify-center w-full max-w-5xl mx-auto overflow-hidden border border-white rounded-lg bg-sky-200"
    :class="[isOdd ? 'flex-row' : 'flex-row-reverse']"
  >
    <div class="w-2/3 h-full p-3">
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

    <div
      class="object-cover w-full max-h-[28rem] max-w-md overflow-hidden"
      :class="[isOdd ? 'rounded-r-lg' : 'rounded-l-lg']"
    >
      <img
        :src="imgSrc"
        alt=""
        class="object-cover w-full h-full transition-all duration-300 hover:scale-110"
      />
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
