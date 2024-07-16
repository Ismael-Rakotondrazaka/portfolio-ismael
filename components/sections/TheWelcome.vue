<template>
  <div class="relative">
    <div class="lg:top-1/5 absolute left-[2%] top-10 w-7 md:w-12 lg:w-20">
      <Icon
        name="mdi:code-tags"
        class="text-3xl text-secondary hover:animate-spin md:text-5xl"
      />
    </div>

    <div class="absolute right-[5%] top-[40%] w-7 rotate-12 md:w-12 lg:w-20">
      <Icon
        name="mdi:earth"
        class="text-3xl text-secondary hover:animate-bounce md:text-5xl"
      />
    </div>

    <div
      class="absolute bottom-[10%] right-[60%] w-7 -rotate-12 md:w-12 lg:w-20"
    >
      <Icon
        name="mdi:code-block-tags"
        class="text-3xl text-secondary hover:animate-ping md:text-5xl"
      />
    </div>

    <n-flex
      id="home"
      :justify="justify"
      align="center"
      class="mx-auto min-h-[calc(100vh-4rem)] max-w-7xl"
    >
      <div class="mb-10 w-full p-3 md:mb-0 lg:w-auto">
        <div class="mb-5">
          <n-text
            id="welcome.greeting"
            v-t="'welcome.greeting'"
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
            type="default"
            depth="1"
            class="text-lg md:text-2xl"
          />

          <br />

          <n-h1
            v-t="'author.fullName'"
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
            class="text-2xl text-secondary md:text-4xl"
          />
        </div>

        <ProfessionAutoTyped />

        <div class="flex flex-wrap items-center justify-start gap-5">
          <ButtonUI
            v-motion="{
              initial: {
                scale: 0,
                opacity: 0,
              },
              visibleOnce: {
                scale: 1,
                opacity: 1,
                transition: {
                  delay: 700 + 500,
                },
              },
            }"
            class="mr-3"
            @click="onContactClickHandler"
          >
            <Icon name="internal:phone-square" class="mr-3" />

            {{ $t("welcome.cta.text") }}
          </ButtonUI>

          <NuxtLink
            v-motion="{
              initial: {
                scale: 0,
                opacity: 0,
              },
              visibleOnce: {
                scale: 1,
                opacity: 1,
                transition: {
                  delay: 700 + 500,
                },
              },
            }"
            target="_blank"
            to="/documents/CV-RAKOTONDRAZAKA Fitia Ismael.pdf"
            :external="true"
            class="group inline-block text-nowrap !text-primary button-outlined"
          >
            <span
              class="text-nowrap underline-slide-inactive group-hover:underline-slide-active"
            >
              <Icon name="mdi:file-pdf" class="mr-3" />

              {{ $t("welcome.cv.text") }}</span
            >
          </NuxtLink>
        </div>
      </div>

      <NuxtImg
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
        format="webp"
        alt="Ismael profile image"
      />
    </n-flex>
  </div>
</template>

<script lang="ts" setup>
const windowWidthStore = useWindowWidthStore();

const justify = computed<"center" | "space-between">(() =>
  windowWidthStore.isMobileOrTablet ? "center" : "space-between",
);

const onContactClickHandler = () => {
  const element = document?.getElementById("contact");
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
    });
  }
};
</script>

<style scoped></style>
