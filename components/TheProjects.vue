<template>
  <div id="projects" class="min-h-screen py-20 bg-secondary">
    <h1 class="text-4xl font-bold text-center mb-7 text-tertiary">
      <span
        v-t="'theProjectsTitle'"
        class="inline-block after:w-0 after:h-[0.2rem] after:transition-all after:bg-tertiary after:block hover:after:w-full"
      />
    </h1>

    <div class="p-3">
      <ProjectList :projects="projects" />
    </div>
  </div>
</template>

<script setup>
const { t } = useI18n({
  useScope: "global",
  messages: {
    en: {
      theProjectsTitle: "Projects",
      miChatDescription:
        "mi-chat is an instant messaging web application.\nIt has some advanced features, like sending text message, video, and images. Messages can be deleted.\nUsers can send and receive friend requests.\nCreating group chats is also an interesting feature with mi-chat, many users can discuss together.\nSearch function is also available in each feature of the app.",
      agendappDescription:
        "Agendapp is a web application that manage schedules.\nUsers can create many events, update and delete them.\nThere are an overview per month and overview per year features, with statistics.",
      quizwizDescription:
        "QuizWiz is an engaging and educational web application that aims to combine learning and enjoyment through the world of Vue.js, a popular JavaScript framework. Designed with both beginners and seasoned developers in mind, QuizWiz offers an interactive and entertaining way to deepen your understanding of Vue.js concepts while having fun.",
      miniliDescription:
        "minili is a web app that give a short version of any links.\nThe given links can be reversed if needed.",
      hackerrankBadgeDescription:
        "The Hackerrank Badge API is a tool that allows users to obtain their Hackerrank badge images through a specific URL. Users can request badge images by providing their Hackerrank username and specifying the desired image format.",
      carSalesManagementDescription:
        "This user-friendly web application simplifies car sales for dealerships and sales professionals. It efficiently handles car inventory, client data, and purchase transactions. The platform offers stock tracking, a customer database, and downloadable bills for each transaction. With easy-to-understand data analytics and mobile compatibility, the web app streamlines car sales and boosts customer satisfaction.",
      materialsCrudDescription:
        "An efficient and practical application tailored for seamless material management. This powerful tool empowers you to add, modify, and remove data entries effortlessly. Stay organized with a structured table display of all material records. The application also provides a clear summary of the total material quantity, categorized for your convenience.",
      DHTML2022Description:
        "DHTML-2022 was created to put into practice the basic of Javascript for the web: functions, event handlers, DOM manipulation...\nIt is responsive and have the trendy glassmorphism look.",
      coffeeAromaDescription:
        "Inspired by a captivating monochrome design I discovered online, I brought it to life using React and Tailwind CSS. The project showcases the elegance of brown tones throughout the interface.",
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
      quizwizDescription:
        "QuizWiz est une application Web engageante et éducative qui vise à combiner apprentissage et plaisir à travers le monde de Vue.js, un framework JavaScript populaire. Conçu pour les développeurs débutants et chevronnés, QuizWiz offre un moyen interactif et divertissant d'approfondir votre compréhension des concepts de Vue.js tout en vous amusant.",
      miniliDescription:
        "minili est une application Web qui donne une version courte de tous les liens.\nLes liens donnés peuvent être inversés si nécessaire.",
      hackerrankBadgeDescription:
        "L'API Hackerrank Badge est un outil qui permet aux utilisateurs d'obtenir les images de leurs badges Hackerrank via une URL spécifique. Les utilisateurs peuvent demander les images de leurs badges en fournissant leur nom d'utilisateur Hackerrank et en spécifiant le format d'image souhaité.",
      carSalesManagementDescription:
        "Cette application web facilite les ventes de voitures pour les concessionnaires et les professionnels de la vente. Elle gère efficacement l'inventaire des voitures, les informations des clients et les transactions d'achat. La plateforme propose un suivi des stocks, une base de données client et des factures téléchargeables pour chaque transaction. Avec des analyses de données faciles à comprendre et une compatibilité mobile, cette application web optimise les ventes de voitures et améliore la satisfaction des clients.",
      materialsCrudDescription:
        "Une application efficace et pratique conçue pour une gestion fluide des matériels. Cet outil puissant vous permet d'ajouter, de modifier et de supprimer facilement des entrées de données. Restez organisé avec un affichage structuré sous forme de tableau de tous les enregistrements de matériel. L'application fournit également un résumé clair de la quantité totale de matériel, catégorisée pour votre commodité.",
      DHTML2022Description:
        "DHTML-2022 a été créé pour mettre en pratique les bases de Javascript pour le web : fonctions, gestion d'événements, manipulation du DOM...\nLe site est responsive et a l'aspect tendance glassmorphisme.",
      coffeeAromaDescription:
        "Inspiré par un captivant design monochrome découvert en ligne, je l'ai concrétisé en utilisant React et Tailwind CSS. Le projet met en valeur l'élégance des tons marron à travers l'interface.",
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
    imgSrc: "/images/illustrations/illustration-mi-chat.png",
    technos: ["Vue", "Tailwind CSS", "Express", "SocketIO", "MySql"],
    imgAlt: "Illustration mi-chat",
    source: "https://github.com/Ismael-Rakotondrazaka/mi-chat",
    demo: "https://mi-chat.onrender.com",
  },
  {
    name: "agendapp",
    description: t("agendappDescription"),
    imgSrc: "/images/illustrations/illustration-agendapp.png",
    imgAlt: "Illustration agendapp",
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
    name: "QuizWiz",
    description: t("quizwizDescription"),
    imgSrc: "/images/illustrations/illustration-quizwiz.png",
    imgAlt: "Illustration QuizWiz",
    technos: ["Vue", "Tailwind CSS", "Laravel", "MySQL"],
    source: "https://github.com/Ismael-Rakotondrazaka/quizwiz",
  },
  {
    name: "hackerrank-badge",
    description: t("hackerrankBadgeDescription"),
    imgSrc: "/images/illustrations/illustration-hackerrank-badge.webp",
    imgAlt: "Illustration hackerrank-badge",
    technos: ["Express", "Puppeteer", "node-cache-manager"],
    source: "https://github.com/Ismael-Rakotondrazaka/hackerrank-badge",
  },
  {
    name: "car-sales-management",
    description: t("carSalesManagementDescription"),
    imgSrc: "/images/illustrations/illustration-car-sales-management.png",
    imgAlt: "Illustration car-sales-management",
    technos: ["PHP", "MySQL", "Bootstrap"],
    source: "https://github.com/code-verse-unity/car-sales-management",
  },
  {
    name: "materials-crud",
    description: t("materialsCrudDescription"),
    imgSrc: "/images/illustrations/illustration-materials-crud.png",
    imgAlt: "Illustration materials-crud",
    technos: ["Vue", "Bootstrap"],
    source: "https://github.com/code-verse-unity/materials-crud",
    demo: "https://materials-crud.onrender.com",
  },
  {
    name: "minili",
    description: t("miniliDescription"),
    imgSrc: "/images/illustrations/illustration-minili.png",
    imgAlt: "Illustration minili",
    technos: ["Vue", "Tailwind CSS", "Express", "MongoDB"],
    source: "https://github.com/Ismael-Rakotondrazaka/minili",
    demo: "https://minili.onrender.com",
  },
  {
    name: "DHTML-2022",
    description: t("DHTML2022Description"),
    imgSrc: "/images/illustrations/illustration-dhtml-2022.png",
    imgAlt: "Illustration DHTML-2022",
    technos: ["HTML", "CSS", "Javascript"],
    source: "https://github.com/Ismael-Rakotondrazaka/dhtml-2022",
    demo: "https://dhtml-2022.onrender.com",
  },
  {
    name: "Coffee Aroma",
    description: t("coffeeAromaDescription"),
    imgSrc: "/images/illustrations/illustration-coffee-aroma.png",
    imgAlt: "Illustration Coffee Aroma",
    technos: ["React", "Tailwind CSS"],
    source: "https://github.com/Ismael-Rakotondrazaka/coffee-aroma",
    demo: "https://template-coffee-aroma.onrender.com/",
  },
  {
    name: "Foodies",
    description: t("foodiesDescription"),
    imgSrc: "/images/illustrations/illustration-foodies.png",
    imgAlt: "Illustration Foodies",
    technos: ["Vue", "Tailwind CSS"],
    source: "https://github.com/Ismael-Rakotondrazaka/foodies",
    demo: "https://template-foodies.onrender.com",
  },
  {
    name: "Nature Portfolio",
    description: t("naturePortfolioDescription"),
    imgSrc: "/images/illustrations/illustration-nature-portfolio.png",
    imgAlt: "Illustration Nature Portfolio",
    technos: ["Vue", "Bootstrap"],
    source: "https://github.com/Ismael-Rakotondrazaka/nature-portfolio",
    demo: "https://nature-portfolio.onrender.com",
  },
  {
    name: "Fiber",
    description: t("fiberDescription"),
    imgSrc: "/images/illustrations/illustration-fiber.png",
    imgAlt: "Illustration Fiber",
    technos: ["Vue", "Bootstrap"],
    source: "https://github.com/Ismael-Rakotondrazaka/fiber",
    demo: "https://template-fiber.onrender.com",
  },
]);
</script>

<style scoped></style>
