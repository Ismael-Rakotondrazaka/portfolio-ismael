// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@vueuse/motion/nuxt", "@nuxtjs/tailwindcss", "@nuxtjs/i18n"],
  i18n: {
    vueI18n: {
      legacy: false,
      locale: "en",
      fallbackLocale: "fr",
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
  runtimeConfig: {
    smtpHost: process.env.SMTP_HOST,
    smtpPort: process.env.SMTP_PORT,
    smtpUser: process.env.SMTP_USER,
    smtpPass: process.env.SMTP_PASS,
    emailDefaultReceiver: process.env.EMAIL_DEFAULT_RECEIVER,
    emailDefaultSubject: process.env.EMAIL_DEFAULT_SUBJECT,
    isServiceAvailable: process.env.IS_SERVICE_AVAILABLE,
  },
});
