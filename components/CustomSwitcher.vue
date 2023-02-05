<template>
  <div
    class="inline-flex flex-row transition-all px-1 py-1 leading-[0] w-12 rounded-full hover:cursor-pointer"
    role="checkbox"
    :aria-checked="isActive.toString()"
    tabindex="0"
    @click="toggle"
    @keydown.space.prevent="toggle"
    :class="[mainClass]"
  >
    <span
      class="inline-block w-4 h-4 transition-all duration-1000 bg-white rounded-full"
      :class="[]"
    ></span>
  </div>
</template>

<script setup>
const props = defineProps({
  isActive: {
    type: Boolean,
    required: false,
    default: false,
  },
});

const emit = defineEmits(["on", "off"]);

const toggle = () => {
  emit(props.isActive ? "off" : "on");
};

const mainClass = computed(() =>
  props.isActive ? "bg-primary justify-end" : "bg-gray-400 justify-start"
);
</script>

<style scoped></style>
