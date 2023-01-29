<template>
  <li
    class="inline-block p-3 rounded-lg border-2 border-white ring-2 ring-secondary transition-all group hover:!bg-secondary hover:!text-white relative"
    :style="{
      backgroundColor: bgColor,
      color: color,
    }"
  >
    <FaIcon v-if="mastered" icon="fa-solid fa-star" class="absolute right-2 top-2" />

    <div class="flex flex-col items-center justify-between h-full">
      <FaIcon
        v-if="type === 'icon'"
        :icon="icon"
        class="mx-auto mb-1 !block w-1/2 !h-auto"
      />

      <img
        v-else-if="type === 'image'"
        :src="src"
        alt=""
        class="mx-auto mb-1 !block w-1/2 !h-auto group-hover:text-white"
      />

      <component
        v-else-if="type === 'component'"
        :is="component"
        class="mx-auto mb-1 !block w-1/2 !h-auto"
      />

      <p
        class="font-bold w-full text-center after:w-0 after:h-[0.15rem] after:transition-all after:bg-primary after:block group-hover:after:w-full group-hover:!text-white"
        :style="{
          color: color,
        }"
      >
        {{ text }}
      </p>
    </div>
  </li>
</template>

<script setup>
defineProps({
  type: {
    type: String,
    required: true,
    validator: (value) => ["icon", "image", "component"].includes(value),
  },
  icon: {
    required: false,
    default: null,
  },
  src: {
    required: false,
    default: null,
  },
  component: {
    required: false,
    default: true,
  },
  text: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: false,
    default: "#fff",
  },
  bgColor: {
    type: String,
    required: false,
    default: "var(--color-primary)",
  },
  mastered: {
    type: Boolean,
    required: false,
    default: false,
  },
});
</script>

<style scoped></style>
