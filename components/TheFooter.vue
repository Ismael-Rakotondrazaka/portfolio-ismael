<template>
  <footer class="w-full bg-secondary p-3 mt-32 border-t-4 border-primary">
    <div id="contact" class="w-full flex flex-row items-center justify-evenly">
      <div class="w-full max-w-md flex flex-col items-start gap-3">
        <a
          v-for="(link, index) in links"
          :key="index"
          :href="link.href"
          target="_blank"
          class="flex flex-row items-center justify-center text-white hover:text-primary transition-colors"
        >
          <FaIcon :icon="link.icon" class="text-4xl mr-3" />

          <span
            class="inline-block after:block after:w-0 hover:after:w-full after:h-[0.15rem] after:bg-primary after:transition-all"
          >
            {{ link.text }}
          </span>
        </a>
      </div>

      <div class="-translate-y-32">
        <CreateMessage class="w-full" />
      </div>
    </div>

    <hr class="block w-1/2 mx-auto bg-white h-[0.15rem] my-7" />

    <div class="text-center text-white my-5">
      &copy; copyright
      <a
        href="https://github.com/Ismael-Rakotondrazaka"
        target="_blank"
        class="inline-block text-primary font-bold after:w-0 after:block after:h-[0.10rem] after:bg-primary hover:after:w-full after:transition-all"
      >
        Ismael
      </a>
      {{ year }}
    </div>
  </footer>
</template>

<script setup>
const links = ref([
  {
    text: "Ismael-Rakotondrazaka",
    icon: "fa-brands fa-github",
    href: "https://www.github.com/Ismael-Rakotondrazaka",
  },
  {
    text: "Fitia Ismael Rakotondrazaka",
    icon: "fa-brands fa-linkedin",
    href: "https://www.linkedin.com/in/ismaelrakotondrazaka",
  },
  {
    text: "Ismael Rakotondrazaka",
    icon: "fa-brands fa-facebook",
    href: "https://www.facebook.com/ismaelrakotondrazaka",
  },
  {
    text: "ismaelrakotondrazaka@gmail.com",
    icon: "fa-solid fa-envelope",
    href: "mailto:ismaelrakotondrazaka@gmail.com",
  },
  {
    text: "+261 34 92 989 78",
    icon: "fa-solid fa-phone",
    href: "tel:+261 34 92 989 78",
  },
]);

const date = ref(new Date());

const year = computed(() => date.value.getFullYear());

const dateIntervalId = ref(-1);

onMounted(() => {
  dateIntervalId.value = setInterval(() => {
    date.value = new Date();
  }, 3600000); // 1h
});

onBeforeUnmount(() => {
  if (dateIntervalId.value !== -1) {
    clearInterval(dateIntervalId.value);
  }
});
</script>

<style scoped>
.parent {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
}

.div1 {
  grid-area: 1 / 1 / 2 / 2;
}
.div2 {
  grid-area: 1 / 2 / 2 / 3;
}
.div3 {
  grid-area: 2 / 1 / 3 / 2;
}
.div4 {
  grid-area: 2 / 2 / 3 / 3;
}
</style>
