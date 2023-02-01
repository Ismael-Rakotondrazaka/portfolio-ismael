<template>
  <div id="projects" class="min-h-screen py-20 bg-secondary">
    <h1 class="text-4xl font-bold text-center mb-7 text-primary">
      <span
        class="inline-block after:w-0 after:h-[0.2rem] after:transition-all after:bg-primary after:block hover:after:w-full"
      >
        Projects
      </span>
    </h1>

    <div class="p-3">
      <ProjectList :projects="projects" />
    </div>
  </div>
</template>

<script setup>
import IllustrationMiChat from "~/assets/images/illustrations/illustration-mi-chat.png";
import IllustrationAgendapp from "~/assets/images/illustrations/illustration-agendapp.png";
import IllustrationMinili from "~/assets/images/illustrations/illustration-minili.png";
import IllustrationFoodies from "~/assets/images/illustrations/illustration-foodies.png";
import IllustrationDHTML2022 from "~/assets/images/illustrations/illustration-dhtml-2022.png";
import IllustrationNaturePortfolio from "~/assets/images/illustrations/illustration-nature-portfolio.png";
import IllustrationFiber from "~/assets/images/illustrations/illustration-fiber.png";

const projects = ref([
  {
    name: "mi-chat",
    description:
      "mi-chat is an instant messaging web application.\nIt has some advanced features, like sending text message, video, and images. Messages can be deleted.\nUsers can send and receive friend requests.\nCreating group chats is also an interesting feature with mi-chat, many users can discuss together.\nSearch function is also available in each feature of the app.",
    imgSrc: IllustrationMiChat,
    technos: ["Vue", "Tailwind CSS", "Express", "SocketIO", "MySql"],
    source: "https://github.com/Ismael-Rakotondrazaka/mi-chat",
    demo: "https://mi-chat.onrender.com",
  },
  {
    name: "agendapp",
    description:
      "Agendapp is a web application that manage schedules.\nUsers can create many events, update and delete them.\nThere are an overview per month and overview per year features, with statistics.",
    imgSrc: IllustrationAgendapp,
    technos: [
      "Vue",
      "Tailwind CSS",
      "Typescript",
      "Express",
      "SocketIO",
      "Jest",
      "MongoDB",
    ],
    source: "https://github.com/Ismael-Rakotondrazaka/agendapp",
    demo: "https://agendapp.onrender.com",
  },
  {
    name: "minili",
    description:
      "minili is a webapp that give a short version of any links.\nThe given links can be reversed if needed.",
    imgSrc: IllustrationMinili,
    technos: ["Vue", "Tailwind CSS", "Express", "MongoDB"],
    source: "https://github.com/Ismael-Rakotondrazaka/minili",
    demo: "https://minili.onrender.com",
  },

  {
    name: "DHTML-2022",
    description:
      "DHTML-2022 was created to put into practice the basic of Javascript for the web: functions, event handlers, DOM manipulation...\nIt is responsive and have the trendy glassmorphism look.",
    imgSrc: IllustrationDHTML2022,
    technos: ["HTML", "CSS", "Javascript"],
    source: "https://github.com/Ismael-Rakotondrazaka/dhtml-2022",
    demo: "https://dhtml-2022.onrender.com",
  },
  {
    name: "Foodies",
    description:
      "This is an integration of a template I found on Dribble. The purpose is to test out Tailwind CSS, and it is very easy to associate with the Vue's syntax.",
    imgSrc: IllustrationFoodies,
    technos: ["Vue", "Tailwind CSS"],
    source: "https://github.com/Ismael-Rakotondrazaka/foodies",
    demo: "https://template-foodies.onrender.com",
  },
  {
    name: "Nature Portfolio",
    description:
      "This website is an integration of a template from W3Schools. I use Bootstrap and Vue to make it.",
    imgSrc: IllustrationNaturePortfolio,
    technos: ["Vue", "Bootstrap"],
    source: "https://github.com/Ismael-Rakotondrazaka/nature-portfolio",
    demo: "https://nature-portfolio.onrender.com",
  },
  {
    name: "Fiber",
    description:
      "I like the design, so I decided to integrate it with Vue and Bootstrap.",
    imgSrc: IllustrationFiber,
    technos: ["Vue", "Bootstrap"],
    source: "https://github.com/Ismael-Rakotondrazaka/fiber",
    demo: "https://template-fiber.onrender.com",
  },
]);
</script>

<style scoped></style>
