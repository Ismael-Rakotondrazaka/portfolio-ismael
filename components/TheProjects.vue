<template>
  <div id="projects" class="min-h-screen py-20 bg-secondary">
    <h1 class="text-4xl font-bold text-center mb-7 text-primary">
      <span
        class="inline-block after:w-0 after:h-[0.2rem] after:transition-all after:bg-primary after:block hover:after:w-full"
      >
        Projects
      </span>
    </h1>

    <div>
      <ProjectList :projects="projects" />
    </div>
  </div>
</template>

<script setup>
/* TODO add real illustration */
import IllustrationMiChat from "~/assets/images/illustrations/illustration-mi-chat.jpg";
import IllustrationAgendapp from "~/assets/images/illustrations/illustration-agendapp.jpg";
import IllustrationMinili from "~/assets/images/illustrations/illustration-minili.jpg";
import IllustrationFoodies from "~/assets/images/illustrations/illustration-foodies.jpg";

/* TODO add real description */
const projects = ref([
  {
    name: "mi-chat",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suntdeleniti unde explicabo atque quibusdam veniam hic itaquedignissimos? Labore tempore commodi veritatis ad non ipsum maioressint natus dolore aut. Lorem ipsum dolor sit amet consecteturadipisicing elit. Commodi obcaecati perspiciatis et ab! Aliquamdolor eveniet, optio molestiae asperiores voluptate. Lorem ipsumdolor sit amet consectetur adipisicing elit. Expedita errordignissimos hic consequatur dolore minima incidunt quibusdam sequisimilique quas.",
    imgSrc: IllustrationMiChat,
    technos: ["Vue", "Tailwind CSS", "Express", "MySql"],
    demo: "https://mi-chat.onrender.com",
  },
  {
    name: "agendapp",
    description:
      "Lorem ipsum dolor sit estiae asperiores voluptate. Lorem ipsumdolor sit amet consectetur adipisicing elit. Expedita errordignissimos hic consequatur dolore minima incidunt quibusdam sequisimilique quas.",
    imgSrc: IllustrationAgendapp,
    technos: [
      "Vue",
      "Tailwind CSS",
      "Express",
      "Typescript",
      "Jest",
      "MongoDB",
    ],
    source: "https://github.com/Ismael-Rakotondrazaka/agendapp.git",
    demo: "https://agendapp.onrender.com",
  },
  {
    name: "minili",
    description:
      "Lorem ipsum dolor sit estiae asperiores voluptate. Lorem ipsumdolor sit amet consectetur adipisicing elit. Expedita errordignissimos hic consequatur dolore minima incidunt quibusdam sequisimilique quas. t estiae asperiores voluptate. Lorem ipsumdolor sit amet consectetur adipisicing elit. Expedita errordignissimos hic consequatu",
    imgSrc: IllustrationMinili,
    technos: ["Vue", "Tailwind CSS", "Express", "MongoDB"],
    source: "https://github.com/Ismael-Rakotondrazaka/minili.git",
    demo: "https://minili.onrender.com",
  },
  {
    name: "Foodies",
    description:
      "Lorem ipsum dolor sit estiae asperiores voluptate. Lorem ipsumdolor sit amet consectetur adipisicing elit. Expedita errordignissimos.",
    imgSrc: IllustrationFoodies,
    technos: ["Vue", "Tailwind CSS"],
    source: "https://github.com/Ismael-Rakotondrazaka/foodies.git",
    demo: "https://foodies.onrender.com",
  },
  {
    name: "DHTML-2022",
    description:
      "Lorem ipsum dolor sit estiae asperiores voluptate. Lorem ipsumdolor sit amet consectetur adipisicing elit. Expedita errordignissimos.sit amet consectetur adipisicing elit. Expedita errordignissimos.",
    imgSrc: IllustrationMiChat,
    technos: ["HTML", "CSS", "Javascript"],
    source: "https://github.com/Ismael-Rakotondrazaka/dhtml-2022.git",
    demo: "https://dhtml-2022.onrender.com",
  },
]);
</script>

<style scoped></style>
