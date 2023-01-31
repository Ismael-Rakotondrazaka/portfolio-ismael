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

    <h1 class="mb-5 text-4xl font-bold text-center text-primary">
      <span
        class="inline-block after:w-0 after:h-[0.2rem] after:transition-all after:bg-primary after:block hover:after:w-full"
      >
        Skills
      </span>
    </h1>

    <div class="w-full max-w-5xl mx-auto mb-10">
      <h2
        class="px-3 py-5 text-xl font-bold underline bg-secondary text-primary underline-offset-4"
      >
        Technical skills
      </h2>

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
        class="px-3 py-5 text-xl font-bold underline bg-secondary text-primary underline-offset-4"
      >
        Soft skills
      </h2>

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

const technicalSkills = ref([
  {
    title: "Programming languages",
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
    title: "Frameworks and libraries",
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
    ],
  },
  {
    title: "Databases",
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
    title: "Tools and extras",
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

// TODO add real content
const softSkills = ref([
  {
    title: "Dynamic and organized",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore ex accusantium similique explicabo sed iste praesentium, corrupti obcaecati maiores eligendi.",
  },
  {
    title: "Teamwork",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore ex accusantium similique explicabo sed iste praesentium, corrupti obcaecati maiores eligendi. Consectetur adipisicing elit. Inventore ex accusantium similique explicabo sed iste praesentium, corrupti obcaecati maiores eligendi.",
  },
  {
    title: "Adaptability",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore ex accusantium similique explicabo sed iste praesentium, corrupti obcaecati maiores eligendi. Consectetur adipisicing elit. Inventore ex accusantium similique.",
  },
]);
</script>

<style scoped></style>
