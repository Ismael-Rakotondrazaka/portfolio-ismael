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

        <i18n-t
          keypath="aboutP2.part1"
          tag="p"
          class="mb-3 text-base tracking-wide text-white whitespace-pre-wrap"
        >
          <template v-slot:helloWorld>
            <i v-t="'aboutP2.helloWorld'" />
          </template>
        </i18n-t>

        <p v-t="'aboutP3'" class="mb-3 text-base tracking-wide text-white" />

        <h2 v-t="'storyBegunTitle'" class="text-lg font-bold text-primary" />

        <i18n-t
          keypath="storyP1.part1"
          tag="p"
          class="mb-3 text-base tracking-wide text-white whitespace-pre-wrap"
        >
          <template v-slot:competitiveProgramming>
            <span
              v-t="'storyP1.competitiveProgramming'"
              class="underline text-primary underline-offset-4"
            />
          </template>

          <template v-slot:artificialIntelligence>
            <span
              v-t="'storyP1.artificialIntelligence'"
              class="underline text-primary underline-offset-4"
            />
          </template>

          <template v-slot:promises>
            <span
              v-t="'storyP1.promises'"
              class="underline text-primary underline-offset-4"
            />
          </template>
        </i18n-t>
      </div>

      <TheQuote class="w-full mt-10 lg:mr-5 md:mt-14 lg:mt-0 md:w-auto" />
    </div>
  </div>
</template>

<script setup>
useI18n({
  useScope: "global",
  messages: {
    en: {
      theAboutTitle: "About me",
      aboutP1:
        "I am a young developer from Madagascar. I have a serious skills in backend development as well as in frontend development. My goal is to create strong services for the web.",
      aboutP2: {
        part1:
          "I started with basic HTML and CSS when I had 15 years old, wrote my first {helloWorld} at 17 years old.\nNow, I can build any web app with ease, whatever its complexity.",
        helloWorld: '"Hello world"',
      },
      aboutP3:
        "I am open to any opportunity where I can contribute and grow. So, if you have a job or internship that aligns with my skill, don't hesitate to contact me.",
      storyBegunTitle: "The story has just begun...",
      storyP1: {
        part1:
          "I developed a passion for the web development. Currently, I'm also attracted to the {competitiveProgramming}, the {artificialIntelligence} and their {promises}. I'm still learning them. It is interesting to combine them with the web development.",
        competitiveProgramming: "Competitive Programming",
        artificialIntelligence: "Artificial Intelligence",
        promises: "promises",
      },
    },
    fr: {
      theAboutTitle: "À propos de moi",
      aboutP1:
        "Je suis un jeune développeur de Madagascar. J'ai de sérieuses compétences en développement backend ainsi qu'en développement frontend. Mon objectif est de créer des services puissants pour le Web.",
      aboutP2: {
        part1:
          "J'ai commencé avec HTML et CSS de base quand j'avais 15 ans, écrit mon premier {helloWorld} à 17 ans.\nMaintenant, je peux créer facilement n'importe quelle application Web, quelle que soit sa complexité.",
        helloWorld: '"Hello world"',
      },
      aboutP3:
        "Je suis ouvert à toutes opportunités où je peux contribuer et évoluer. Alors, si vous avez un emploi ou un stage qui correspond à mes compétences, n'hésitez pas à me contacter.",
      storyBegunTitle: "L'histoire ne fait que commencer...",
      storyP1: {
        part1:
          "J'ai développé une passion pour le développement web. Actuellement, je suis également attiré par la {competitiveProgramming}, l'{artificialIntelligence} et leurs {promises}. Je suis encore en train de les apprendre. Il est intéressant de les combiner avec le développement web.",
        competitiveProgramming: "Programmation Compétitive",
        artificialIntelligence: "Intelligence Artificielle",
        promises: "promesses",
      },
    },
  },
});
</script>

<style scoped></style>
