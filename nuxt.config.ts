// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/i18n"],
  i18n: {
    vueI18n: {
      legacy: false,
      locale: "en",
      messages: {
        en: {
          welcome: "Welcome",
        },
        fr: {
          welcome: "Bienvenue",
        },
      },
    },
  },
  tailwindcss: {
    configPath: "./tailwind.config.js",
  },
  css: [
    "~/assets/styles/index.css",
    "@fortawesome/fontawesome-svg-core/styles.css",
  ],
  build: {
    transpile: [
      "@fortawesome/fontawesome",
      "@fortawesome/fontawesome-svg-core",
      "@fortawesome/free-solid-svg-icons",
      "@fortawesome/free-brands-svg-icons",
    ],
  },
});
