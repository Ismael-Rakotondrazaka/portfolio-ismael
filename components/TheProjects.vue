<template>
  <div id="projects" class="min-h-screen py-20 bg-secondary">
    <h1 class="text-4xl font-bold text-center mb-7 text-primary">
      <span
        v-t="'theProjectsTitle'"
        class="inline-block after:w-0 after:h-[0.2rem] after:transition-all after:bg-primary after:block hover:after:w-full"
      />
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

const { t } = useI18n({
  useScope: "global",
  messages: {
    en: {
      theProjectsTitle: "Projects",
      miChatDescription:
        "mi-chat is an instant messaging web application.\nIt has some advanced features, like sending text message, video, and images. Messages can be deleted.\nUsers can send and receive friend requests.\nCreating group chats is also an interesting feature with mi-chat, many users can discuss together.\nSearch function is also available in each feature of the app.",
      agendappDescription:
        "Agendapp is a web application that manage schedules.\nUsers can create many events, update and delete them.\nThere are an overview per month and overview per year features, with statistics.",
      miniliDescription:
        "minili is a web app that give a short version of any links.\nThe given links can be reversed if needed.",
      DHTML2022Description:
        "DHTML-2022 was created to put into practice the basic of Javascript for the web: functions, event handlers, DOM manipulation...\nIt is responsive and have the trendy glassmorphism look.",
      foodiesDescription:
        "This is an integration of a template I found on Dribble. The purpose is to test out Tailwind CSS, and it is very easy to associate with the Vue's syntax.",
      naturePortfolioDescription:
        "This website is an integration of a template from W3Schools. I use Bootstrap and Vue to make it.",
      fiberDescription:
        "I like the design, so I decided to integrate it with Vue and Bootstrap.",
    },
    fr: {
      theProjectsTitle: "Projets",
      miChatDescription:
        "mi-chat est une application web de messagerie instantanée.\nElle possède des fonctionnalités avancées, telles que l'envoi de messages, de vidéos et de photos.\nLes utilisateurs peuvent envoyer et recevoir des demandes d'amis.\nLa création de discussions de groupe est également une fonctionnalité intéressante avec mi-chat, de nombreux utilisateurs peuvent discuter ensemble.\nLa fonction de recherche est aussi disponible pour chaque fonctionnalité de l'application.",
      agendappDescription:
        "Agendapp est une application web qui gère les tâches et les horaires.\nLes utilisateurs peuvent créer de nombreux événements, les mettre à jour et les supprimer. Il y a un aperçu par mois, un aperçu par année avec des statistiques, d'autres fonctionnalités.",
      miniliDescription:
        "minili est une application Web qui donne une version courte de tous les liens.\nLes liens donnés peuvent être inversés si nécessaire.",
      DHTML2022Description:
        "DHTML-2022 a été créé pour mettre en pratique les bases de Javascript pour le web : fonctions, gestion d'événements, manipulation du DOM...\nLe site est responsive et a l'aspect tendance glassmorphisme.",
      foodiesDescription:
        "Ceci est une intégration d'un modèle que j'ai trouvé sur Dribble. Le but est de tester Tailwind CSS, et il est très facile à associer à la syntaxe de Vue.",
      naturePortfolioDescription:
        "Ce site Web est une intégration d'un modèle de W3Schools. J'ai utilisé Bootstrap et Vue.",
      fiberDescription:
        "J'aime le design, j'ai donc décidé de l'intégrer avec Vue et Bootstrap.",
    },
  },
});

const projects = computed(() => [
  {
    name: "mi-chat",
    description: t("miChatDescription"),
    imgSrc: IllustrationMiChat,
    technos: ["Vue", "Tailwind CSS", "Express", "SocketIO", "MySql"],
    source: "https://github.com/Ismael-Rakotondrazaka/mi-chat",
    demo: "https://mi-chat.onrender.com",
  },
  {
    name: "agendapp",
    description: t("agendappDescription"),
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
    description: t("miniliDescription"),
    imgSrc: IllustrationMinili,
    technos: ["Vue", "Tailwind CSS", "Express", "MongoDB"],
    source: "https://github.com/Ismael-Rakotondrazaka/minili",
    demo: "https://minili.onrender.com",
  },
  {
    name: "DHTML-2022",
    description: t("DHTML2022Description"),
    imgSrc: IllustrationDHTML2022,
    technos: ["HTML", "CSS", "Javascript"],
    source: "https://github.com/Ismael-Rakotondrazaka/dhtml-2022",
    demo: "https://dhtml-2022.onrender.com",
  },
  {
    name: "Foodies",
    description: t("foodiesDescription"),
    imgSrc: IllustrationFoodies,
    technos: ["Vue", "Tailwind CSS"],
    source: "https://github.com/Ismael-Rakotondrazaka/foodies",
    demo: "https://template-foodies.onrender.com",
  },
  {
    name: "Nature Portfolio",
    description: t("naturePortfolioDescription"),
    imgSrc: IllustrationNaturePortfolio,
    technos: ["Vue", "Bootstrap"],
    source: "https://github.com/Ismael-Rakotondrazaka/nature-portfolio",
    demo: "https://nature-portfolio.onrender.com",
  },
  {
    name: "Fiber",
    description: t("fiberDescription"),
    imgSrc: IllustrationFiber,
    technos: ["Vue", "Bootstrap"],
    source: "https://github.com/Ismael-Rakotondrazaka/fiber",
    demo: "https://template-fiber.onrender.com",
  },
]);
</script>

<style scoped></style>
