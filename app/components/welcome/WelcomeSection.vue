<template>
  <div class="relative">
    <div class="absolute top-10 left-[2%] w-7 md:w-12 lg:top-1/5 lg:w-20">
      <Icon
        name="mdi:code-tags"
        class="text-highlight text-3xl hover:animate-spin md:text-5xl"
      />
    </div>

    <div class="absolute top-[40%] right-[5%] w-7 rotate-12 md:w-12 lg:w-20">
      <Icon
        name="mdi:earth"
        class="text-highlight text-3xl hover:animate-bounce md:text-5xl"
      />
    </div>

    <div
      class="absolute right-[60%] bottom-[10%] w-7 -rotate-12 md:w-12 lg:w-20"
    >
      <Icon
        name="mdi:code-block-tags"
        class="text-highlight text-3xl hover:animate-ping md:text-5xl"
      />
    </div>

    <div
      id="home"
      class="mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl items-center justify-center xl:justify-between"
    >
      <div class="mb-10 w-full p-3 md:mb-0 lg:w-auto">
        <div class="mb-5">
          <p
            id="welcome.greeting"
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
            class="text-lg md:text-2xl"
          >
            {{ $t('welcome.greeting') }}
          </p>

          <br />

          <h1
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
            class="text-highlight text-2xl font-bold md:text-4xl"
          >
            {{ $t('author.fullName') }}
          </h1>
        </div>

        <WelcomeProfessionAutoTyped />

        <div class="flex flex-wrap items-center justify-start gap-5">
          <Button
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
            @click="onContactClickHandler"
          >
            <Icon name="mdi:phone" />

            {{ $t('welcome.cta.text') }}
          </Button>

          <Button variant="outline" as-child>
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
              class="text-nowrap"
            >
              <Icon name="mdi:file-pdf" />
              {{ $t('welcome.cv.text') }}
            </NuxtLink>
          </Button>
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
    </div>
  </div>
</template>

<script lang="ts" setup>
const onContactClickHandler = () => {
  const element = document?.getElementById('contact');
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
    });
  }
};
</script>

<style scoped></style>
