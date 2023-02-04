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
          class="inline-block mb-5 text-4xl font-bold text-center text-primary after:w-0 after:h-[0.15rem] after:transition-all after:bg-primary after:block hover:after:w-full"
        >
          About me
        </h1>

        <p class="mb-3 text-base tracking-wide text-white">
          I'm a young developer from Madagascar. I have a serious skills in
          backend development as well as in frontend development. My goal is to
          create a strong service for the web.
        </p>

        <p class="mb-3 text-base tracking-wide text-white">
          I started with basic HTML and CSS when I had 15 years old, wrote my
          first <i>"Hello World"</i> at 17 years old.
          <br />
          Now, I can build any webapp with ease, whatever its complexity.
        </p>

        <p class="mb-3 text-base tracking-wide text-white">
          I am open to any opportunity where I can contribute and grow. So, if
          you have a job or internship that aligns with my skill, don't hesitate
          to contact me.
        </p>

        <h2 class="text-lg font-bold text-primary">
          The story has just began...
        </h2>

        <p class="mb-3 text-base tracking-wide text-white">
          I developed a passion for the web development. Currently, I'm also
          attracted to the
          <span class="underline text-primary underline-offset-4"
            >Competitive Programming</span
          >, the
          <span class="underline text-primary underline-offset-4"
            >Artificial Intelligence</span
          >
          and their
          <span class="underline text-primary underline-offset-4">promises</span
          >. I'm still learning them. It is interesting to combine them with the
          web development.
        </p>
      </div>

      <TheQuote class="w-full mt-10 lg:mr-5 md:mt-14 lg:mt-0 md:w-auto" />
    </div>
  </div>
</template>

<script setup></script>

<style scoped></style>
