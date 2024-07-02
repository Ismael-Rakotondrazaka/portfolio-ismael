// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  experimental: {
    asyncContext: true,
  },

  devtools: {
    enabled: true,
  },

  typescript: {
    typeCheck: false,
  },

  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],

  css: ["~/assets/styles/main.css"],

  site: {
    indexable: true,
    name: "Portfolio",
    description: "RAKOTONDRAZAKA Fitia Ismael, un développeur professionnel",
    defaultLocale: "fr",
  },

  routeRules: {
    "/": { prerender: false },
    "/fr": { prerender: true },
    "/en": { prerender: true },
  },

  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "@nuxt/fonts",
    "@nuxt/eslint",
    "@nuxtjs/seo",
    "@vee-validate/nuxt",
    "@nuxt/icon",
    "@vueuse/motion/nuxt",
    "@nuxtjs/color-mode",
    "@bg-dev/nuxt-naiveui",
    "nuxt-zod-i18n",
    "@nuxtjs/i18n",
    "@pinia/nuxt",
  ],

  i18n: {
    strategy: "prefix",
    langDir: "locales",
    locales: [
      {
        name: "English",
        code: "en",
        iso: "en-US",
        file: "en.json",
      },
      {
        name: "Français",
        code: "fr",
        iso: "fr-FR",
        file: "fr.json",
      },
    ],
    defaultLocale: "fr",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      alwaysRedirect: true,
      fallbackLocale: "fr",
      redirectOn: "root",
    },
    experimental: {
      localeDetector: "./localeDetector.ts",
    },
  },

  zodI18n: {
    /**
     * Since we choose to use "en" and "fr" as locales' code,
     * we have to tell zod errors to use those codes.
     */
    localeCodesMapping: {
      "en-GB": "en",
      "fr-FR": "fr",
    },
    useModuleLocale: true,
  },

  icon: {
    customCollections: [
      {
        prefix: "internal",
        dir: "./assets/icons",
      },
    ],
  },

  colorMode: {
    preference: "light", // default value of $colorMode.preference
    fallback: "light", // fallback value if not system preference found
    componentName: "ColorScheme",
    classPrefix: "",
    classSuffix: "",
    storageKey: "color-mode",
  },

  tailwindcss: {
    exposeConfig: {
      write: true,
      level: 2,
    },
    config: {
      darkMode: "class",
    },
  },

  ogImage: {
    enabled: false,
  },

  runtimeConfig: {
    smtpHost: "",
    smtpPort: "",
    smtpUser: "",
    smtpPassword: "",
    public: {
      informationEmail: "",
      informationPhoneNumber: "",
      informationFullName: "",
      appUrl: "http://localhost:3000",
    },
  },

  compatibilityDate: "2024-07-02",
});
