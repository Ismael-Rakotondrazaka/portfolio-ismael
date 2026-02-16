<template>
  <h1
    class="mb-5 text-xl leading-normal font-bold whitespace-pre-wrap md:text-[3rem]"
  >
    <span
      id="auto-typed"
      ref="autoTypedRef"
      class="bg-move inline-block whitespace-pre-wrap"
    />
  </h1>
</template>

<script lang="ts" setup>
import Typed from 'typed.js';

const autoTypedRef = ref<HTMLDivElement | null>(null);

const typed: Ref<null | Typed> = ref(null);

const { locale, rt, tm } = useI18n({
  useScope: 'global',
});

const recomputeTyped = () => {
  const professions = tm('welcome.professions.list') as string[];

  if (typed.value) {
    typed.value.destroy();
  }

  typed.value = new Typed('#auto-typed', {
    backDelay: 2000,
    backSpeed: 25,
    loop: true,
    strings: professions.map(profession => rt(profession)),
    typeSpeed: 50,
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
