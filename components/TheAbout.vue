<template>
  <div
    id="about"
    class="flex flex-row items-center justify-center min-h-screen py-20 bg-secondary"
  >
    <div
      class="flex flex-row-reverse flex-wrap items-center w-full p-3 lg:flex-nowrap justify-evenly"
    >
      <div class="max-w-2xl">
        <h1
          v-t="'theAboutTitle'"
          class="inline-block mb-5 text-4xl font-bold text-center text-primary after:w-0 after:h-[0.15rem] after:transition-all after:bg-primary after:block hover:after:w-full"
        />

        <p v-t="'aboutP1'" class="mb-3 text-base tracking-wide text-white" />

        <p class="mb-3 text-base tracking-wide text-white whitespace-pre-wrap">
          {{ t("aboutP2.part1.part1_1") }}

          <i v-t="'aboutP2.part1.part1_2'" />

          {{ t("aboutP2.part1.part1_3") }}
        </p>

        <p v-t="'aboutP3'" class="mb-3 text-base tracking-wide text-white" />

        <h2 v-t="'storyBegunTitle'" class="text-lg font-bold text-primary" />

        <p class="mb-3 text-base tracking-wide text-white whitespace-pre-wrap">
          {{ t("storyP1.part1") }}

          <span
            v-t="'storyP1.part2'"
            class="underline text-primary underline-offset-4"
          />

          {{ t("storyP1.part3") }}

          <span
            v-t="'storyP1.part4'"
            class="underline text-primary underline-offset-4"
          />

          {{ t("storyP1.part5") }}

          <span
            v-t="'storyP1.part6'"
            class="underline text-primary underline-offset-4"
          />

          {{ t("storyP1.part7") }}
        </p>
      </div>

      <TheQuote class="w-full mt-10 lg:mr-5 md:mt-14 lg:mt-0 md:w-auto" />
    </div>
  </div>
</template>

<script setup>
const { t } = useI18n({
  useScope: "global",
  messages: {
    en: {
      theAboutTitle: "About me",
      aboutP1:
        "I am a young developer from Madagascar. I have a serious skills in backend development as well as in frontend development. My goal is to create strong services for the web.",
      aboutP2: {
        part1: {
          part1_1:
            "I started with basic HTML and CSS when I had 15 years old, wrote my first",
          part1_2: '"Hello world"',
          part1_3: "at 17 years old.",
        },
        part2:
          "Now, I can build any web app with ease, whatever its complexity.",
      },
      aboutP3:
        "I am open to any opportunity where I can contribute and grow. So, if you have a job or internship that aligns with my skill, don't hesitate to contact me.",
      storyBegunTitle: "The story has just begun...",
      storyP1: {
        part1:
          "I developed a passion for the web development. Currently, I'm also attracted to the",
        part2: "Competitive Programming",
        part3: ", the",
        part4: "Artificial Intelligence",
        part5: "and their",
        part6: "promises.",
        part7:
          "I'm still learning them. It is interesting to combine them with the web development.",
      },
    },
    fr: {
      theAboutTitle: "?? propos de moi",
      aboutP1:
        "Je suis un jeune d??veloppeur de Madagascar. J'ai de s??rieuses comp??tences en d??veloppement backend ainsi qu'en d??veloppement frontend. Mon objectif est de cr??er des services puissants pour le Web.",
      aboutP2: {
        part1: {
          part1_1:
            "J'ai commenc?? avec HTML et CSS de base quand j'avais 15 ans, ??crit mon premier",
          part1_2: '"Hello world"',
          part1_3: "?? 17 ans.",
        },
        part2:
          "Maintenant, je peux cr??er facilement n'importe quelle application Web, quelle que soit sa complexit??.",
      },
      aboutP3:
        "Je suis ouvert ?? toutes opportunit??s o?? je peux contribuer et ??voluer. Alors, si vous avez un emploi ou un stage qui correspond ?? mes comp??tences, n'h??sitez pas ?? me contacter.",
      storyBegunTitle: "L'histoire ne fait que commencer...",
      storyP1: {
        part1:
          "J'ai d??velopp?? une passion pour le d??veloppement web. Actuellement, je suis ??galement attir?? par la",
        part2: "Programmation Comp??titive",
        part3: ", l'",
        part4: "Intelligence Artificielle",
        part5: "et ses",
        part6: "promesses.",
        part7:
          "Je suis encore en train de les apprendre. Il est int??ressant de les combiner avec le d??veloppement web.",
      },
    },
  },
});
</script>

<style scoped></style>
