// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Portfolio Ismael | A professional web developer",
      meta: [
        {
          name: "title",
          content: "Portfolio Ismael | A professional web developer",
        },
        {
          name: "description",
          content:
            "The portfolio of Fitia Ismael Rakotondrazaka, a professional web developer.",
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          property: "og:url",
          content: "https://portfolio-ismael.onrender.com/",
        },
        {
          property: "og:title",
          content: "Portfolio Ismael | A professional web developer",
        },
        {
          property: "og:description",
          content:
            "The portfolio of Fitia Ismael Rakotondrazaka, a professional web developer.",
        },
        {
          property: "og:image",
          content:
            "https://portfolio-ismael.onrender.com/images/illustrations/illustration-portfolio-ismael.png",
        },
        {
          property: "twitter:card",
          content: "summary_large_image",
        },
        {
          property: "twitter:url",
          content: "https://portfolio-ismael.onrender.com/",
        },
        {
          property: "twitter:title",
          content: "Portfolio Ismael | A professional web developer",
        },
        {
          property: "twitter:description",
          content:
            "The portfolio of Fitia Ismael Rakotondrazaka, a professional web developer.",
        },
        {
          property: "twitter:image",
          content:
            "https://portfolio-ismael.onrender.com/images/illustrations/illustration-portfolio-ismael.png",
        },
      ],
    },
  },
  modules: [
    "@vueuse/motion/nuxt",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/i18n",
    "@nuxt/image",
  ],
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
