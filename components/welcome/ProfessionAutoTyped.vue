<template>
  <h1
    class="mb-5 whitespace-pre-wrap text-xl font-bold leading-[1.5] md:text-[3rem]"
  >
    <span
      id="auto-typed"
      ref="autoTypedRef"
      class="bg-move inline-block whitespace-pre-wrap"
    ></span>
  </h1>
</template>

<script lang="ts" setup>
import Typed from "typed.js";

const autoTypedRef = ref<HTMLDivElement | null>(null);

const typed: Ref<Typed | null> = ref(null);

const { locale, tm, rt } = useI18n({
  useScope: "global",
});

const recomputeTyped = () => {
  const professions = tm("welcome.professions.list") as string[];

  if (typed.value) {
    typed.value.destroy();
  }

  typed.value = new Typed("#auto-typed", {
    strings: professions.map((profession) => rt(profession)),
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 2000,
    loop: true,
  });

  typed.value.start();
};

watch(locale, () => {
  if (autoTypedRef.value) {
    recomputeTyped();
  }
});

onMounted(() => {
  recomputeTyped();
});

onUnmounted(() => {
  typed.value?.stop();
});
</script>

<style lang="scss" scoped></style>
