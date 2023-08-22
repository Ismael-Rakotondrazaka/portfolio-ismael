<template>
  <div id="skills" class="relative min-h-screen py-20">
    <div class="absolute top-[3%] left-[10%] w-7 md:w-12 lg:w-20">
      <FaIcon
        icon="fa-solid fa-star"
        class="text-primary w-full !h-auto hover:animate-spin"
      />
    </div>

    <div class="absolute top-[40%] right-[10%] w-7 md:w-12 lg:w-20">
      <FaIcon
        icon="fa-solid fa-code"
        class="text-primary w-full !h-auto hover:animate-spin"
      />
    </div>

    <div class="absolute bottom-[2%] left-[3%] w-7 md:w-12 lg:w-20">
      <FaIcon
        icon="fa-solid fa-id-card-alt"
        class="text-primary w-full !h-auto hover:animate-ping"
      />
    </div>

    <h1 class="mb-5 text-4xl font-bold text-center text-tertiary">
      <span
        v-t="'theSkillsTitle'"
        class="inline-block after:w-0 after:h-[0.2rem] after:transition-all after:bg-tertiary after:block hover:after:w-full"
      />
    </h1>

    <div class="w-full max-w-5xl mx-auto mb-10">
      <h2
        v-t="'technicalSkillsTitle'"
        class="px-3 py-5 text-xl font-bold underline bg-secondary text-tertiary underline-offset-4"
      />

      <div
        v-for="(skillGroup, i) in technicalSkills"
        :key="i"
        class="px-3 pt-2 pb-5 bg-primary odd:bg-opacity-10 even:bg-opacity-20"
      >
        <h3
          class="mb-3 text-lg font-bold underline underline-offset-4 text-secondary"
        >
          {{ skillGroup.title }}
        </h3>

        <TechSkillList :skills="skillGroup.skills" />
      </div>
    </div>

    <div class="w-full max-w-5xl mx-auto">
      <h2
        v-t="'softSkillsTitle'"
        class="px-3 py-5 text-xl font-bold underline bg-secondary text-tertiary underline-offset-4"
      />

      <div
        v-for="(skill, i) in softSkills"
        :key="i"
        class="px-3 pt-2 pb-5 bg-primary odd:bg-opacity-10 even:bg-opacity-20"
      >
        <h3
          class="mb-3 text-lg font-bold underline underline-offset-4 text-secondary"
        >
          {{ skill.title }}
        </h3>

        <p class="whitespace-pre-wrap text-secondary">
          {{ skill.text }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import LogoNuxtComponent from "~/components/LogoNuxt.vue";
import LogoMySqlComponent from "~/components/LogoMySql.vue";
import LogoMongoDBComponent from "~/components/LogoMongoDB.vue";
import LogoSQLiteComponent from "~/components/LogoSQLite.vue";
import LogoTypeScriptComponent from "~/components/LogoTypeScript.vue";
import LogoExpressComponent from "~/components/LogoExpress.vue";
import LogoNPMComponent from "~/components/LogoNPM.vue";
import LogoPostmanComponent from "~/components/LogoPostman.vue";
import LogoLinuxComponent from "~/components/LogoLinux.vue";
import LogoTailwindCSSComponent from "~/components/LogoTailwindCSS.vue";
import LogoSocketIOComponent from "~/components/LogoSocketIO.vue";

const LogoNuxt = markRaw(LogoNuxtComponent);
const LogoMySql = markRaw(LogoMySqlComponent);
const LogoMongoDB = markRaw(LogoMongoDBComponent);
const LogoSQLite = markRaw(LogoSQLiteComponent);
const LogoTypeScript = markRaw(LogoTypeScriptComponent);
const LogoExpress = markRaw(LogoExpressComponent);
const LogoNPM = markRaw(LogoNPMComponent);
const LogoPostman = markRaw(LogoPostmanComponent);
const LogoLinux = markRaw(LogoLinuxComponent);
const LogoTailwindCSS = markRaw(LogoTailwindCSSComponent);
const LogoSocketIO = markRaw(LogoSocketIOComponent);

const { t } = useI18n({
  useScope: "global",
  messages: {
    en: {
      theSkillsTitle: "Skills",
      technicalSkillsTitle: "Technical skills",
      softSkillsTitle: "Soft skills",
      programmingLanguagesTitle: "Programming languages",
      frameworksLibrariesTitle: "Frameworks and libraries",
      databasesTitle: "Databases",
      toolsExtraTitle: "Tools and extras",
      dynamicOrganizedTitle: "Dynamic and organized",
      dynamicOrganizedDescription:
        'I am very active when there is a task assigned to me. But it doesn\'t mean that I am doing it disorderly, I am able to make the stuff in "the rules of art".',
      teamworkTitle: "Teamwork and collaboration",
      teamWorkDescription:
        "I understand the importance of teamwork, and I can contribute to any team I am a part of. I can also be autonomous and act on my own when needed.",
      adaptabilityTitle: "Adaptability",
      adaptabilityDescription:
        "I am like water that can fit into any shape of container. It means I am able to adapt in every situation. And if it is new to me, I can learn it easily.",
    },
    fr: {
      theSkillsTitle: "Compétences",
      technicalSkillsTitle: "Compétences techniques",
      softSkillsTitle: "Aptitudes générales",
      programmingLanguagesTitle: "Languages de programmation",
      frameworksLibrariesTitle: "Frameworks et bibliothèques",
      databasesTitle: "Bases de données",
      toolsExtraTitle: "Outils et suppléments",
      dynamicOrganizedTitle: "Dynamique et organisé",
      dynamicOrganizedDescription:
        "Je suis très actif lorsqu'il y a une tâche qui m'est assignée. Mais ça ne veut pas dire que je le fais dans le désordre, je suis capable de faire les choses dans \"les règles de l'art\".",
      teamworkTitle: "Travail d'équipe et collaboration",
      teamWorkDescription:
        "Je comprends l'importance du travail d'équipe et je peux contribuer à n'importe quelle équipe dont je fais partie. Je sais aussi être autonome et agir seul quand la situation le requiert.",
      adaptabilityTitle: "Adaptabilité",
      adaptabilityDescription:
        "Je suis comme de l'eau qui peut se tenir dans n'importe quelle forme de récipient. Cela signifie que je suis capable de m'adapter à toutes les situations. Et si c'est nouveau pour moi, je peux l'apprendre facilement.",
    },
  },
});

const technicalSkills = computed(() => [
  {
    title: t("programmingLanguagesTitle"),
    skills: [
      {
        type: "icon",
        text: "JavaScript (ES6+)",
        icon: "fa-brands fa-js",
        bgColor: "#F0DB4F",
        color: "#000",
        mastered: true,
      },
      {
        type: "icon",
        text: "PHP (7+)",
        icon: "fa-brands fa-php",
        bgColor: "#6181B6",
        color: "#000",
        mastered: true,
      },
      {
        type: "component",
        text: "TypeScript",
        component: LogoTypeScript,
        bgColor: "#007acc",
        color: "#fff",
        mastered: true,
      },
    ],
  },
  {
    title: t("frameworksLibrariesTitle"),
    skills: [
      {
        type: "icon",
        text: "Nodejs",
        icon: "fa-brands fa-node-js",
        bgColor: "#83CD29",
        color: "#000",
        mastered: true,
      },
      {
        type: "icon",
        text: "Vue (2, 3)",
        icon: "fa-brands fa-vuejs",
        bgColor: "#41b883",
        color: "#000",
        mastered: true,
      },
      {
        type: "component",
        text: "Express",
        component: LogoExpress,
        bgColor: "#000",
        color: "#fff",
        mastered: true,
      },
      {
        type: "icon",
        text: "React (16+)",
        icon: "fa-brands fa-react",
        bgColor: "#61DAFB",
        color: "#000",
      },
      {
        type: "icon",
        text: "Laravel (8+)",
        icon: "fa-brands fa-laravel",
        bgColor: "#FD4F31",
        color: "#000",
      },
      {
        type: "component",
        text: "Nuxt (2, 3)",
        component: LogoNuxt,
        bgColor: "#00c58e",
        color: "#000",
        mastered: true,
      },
      {
        type: "component",
        text: "Tailwind CSS",
        component: LogoTailwindCSS,
        bgColor: "#0ea5e9",
        color: "#000",
        mastered: true,
      },
      {
        type: "component",
        text: "SocketIO",
        component: LogoSocketIO,
        bgColor: "#000",
        color: "#fff",
        mastered: true,
      },
    ],
  },
  {
    title: t("databasesTitle"),
    skills: [
      {
        type: "component",
        text: "MySql",
        component: LogoMySql,
        bgColor: "#00618A",
        color: "#fff",
        mastered: true,
      },
      {
        type: "component",
        text: "MongoDB",
        component: LogoMongoDB,
        bgColor: "#4FAA41",
        color: "#000",
        mastered: true,
      },
      {
        type: "component",
        text: "SQLite",
        component: LogoSQLite,
        bgColor: "#95d7f4",
        color: "#000",
        mastered: true,
      },
    ],
  },
  {
    title: t("toolsExtraTitle"),
    skills: [
      {
        type: "icon",
        text: "Git",
        icon: "fa-brands fa-git-alt",
        bgColor: "#F34F29",
        color: "#000",
        mastered: true,
      },
      {
        type: "icon",
        text: "GitHub",
        icon: "fa-brands fa-github",
        bgColor: "#000",
        color: "#fff",
        mastered: true,
      },
      {
        type: "component",
        text: "Linux",
        component: LogoLinux,
        bgColor: "#FFCE14",
        color: "#000",
      },
      {
        type: "component",
        text: "Postman",
        component: LogoPostman,
        bgColor: "#ff6c37",
        color: "#000",
        mastered: true,
      },
      {
        type: "component",
        text: "NPM",
        component: LogoNPM,
        bgColor: "#cb3837",
        color: "#fff",
        mastered: true,
      },
    ],
  },
]);

const softSkills = computed(() => [
  {
    title: t("dynamicOrganizedTitle"),
    text: t("dynamicOrganizedDescription"),
  },
  {
    title: t("teamworkTitle"),
    text: t("teamWorkDescription"),
  },
  {
    title: t("adaptabilityTitle"),
    text: t("adaptabilityDescription"),
  },
]);
</script>

<style scoped></style>
