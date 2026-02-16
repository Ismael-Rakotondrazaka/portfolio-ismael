import type { NuxtConfig } from 'nuxt/schema';

// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  css: ['~/assets/css/tailwind.css', '~/assets/css/main.css'],

  devtools: { enabled: true },

  i18n: {
    defaultLocale: 'fr',
    detectBrowserLanguage: {
      alwaysRedirect: true,
      cookieKey: 'i18n_redirected',
      fallbackLocale: 'fr',
      redirectOn: 'root',
      useCookie: true,
    },
    experimental: {
      localeDetector: './localeDetector.ts',
    },
    langDir: 'locales',
    locales: [
      {
        code: 'en',
        file: 'en.json',
        iso: 'en-US',
        name: 'English',
      },
      {
        code: 'fr',
        file: 'fr.json',
        iso: 'fr-FR',
        name: 'Français',
      },
    ],
    strategy: 'prefix_and_default',
  },

  icon: {
    customCollections: [
      {
        dir: './app/assets/icons',
        prefix: 'internal',
      },
    ],
  },

  modules: [
    '@nuxt/a11y',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/hints',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxtjs/color-mode',
    '@pinia/nuxt',
    'nuxt-zod-i18n',
    '@nuxtjs/i18n',
    '@vee-validate/nuxt',
    '@vueuse/motion/nuxt',
    'shadcn-nuxt',
    '@nuxtjs/seo',
  ],

  ogImage: {
    enabled: false,
  },

  routeRules: {
    '/': { prerender: true },
    '/en': { prerender: true },
    '/fr': { prerender: true },
  },

  runtimeConfig: {
    brevoSmtpKey: '',
    public: {
      appVersion: '',
      contactEmail: '',
      contactFullName: '',
      contactPhoneNumber: '',
    },
  },

  schemaOrg: {
    identity: {
      description:
        'Développeur Full-Stack spécialisé en applications web et mobile modernes et scalables',
      email: 'contact@ismaelrakoto.com',
      image: '/images/profiles/profile-circle-150x150.png',
      name: 'RAKOTONDRAZAKA Fitia Ismael',
      sameAs: [
        'https://www.linkedin.com/in/ismael-rakotondrazaka',
        'https://www.github.com/Ismael-Rakotondrazaka',
        'https://www.facebook.com/ismaelrakotondrazaka',
        'mailto:contact@ismaelrakoto.com',
        'tel:+261 34 92 989 78',
      ],
      telephone: '+261 34 92 989 78',
      type: 'Person',
      url: 'https://ismaelrakoto.com',
    },
  },

  shadcn: {
    /**
     * Directory that the component lives in.
     * Will respect the Nuxt aliases.
     * @link https://nuxt.com/docs/api/nuxt-config#alias
     * @default "@/components/ui"
     */
    componentDir: '@/components/ui',
    /**
     * Prefix for all the imported component.
     * @default "Ui"
     */
    prefix: '',
  },

  site: {
    defaultLocale: 'fr',
    description:
      'Développeur Full-Stack spécialisé en applications web et mobile modernes et scalables',
    indexable: true,
    name: 'Portfolio',
  },

  sitemap: {
    zeroRuntime: true,
  },

  vite: {
    plugins: [
      tailwindcss() as Exclude<NuxtConfig['vite'], undefined>['plugins'],
    ],
  },

  zodI18n: {
    /**
     * Since we choose to use "en" and "fr" as locales' code,
     * we have to tell zod errors to use those codes.
     */
    localeCodesMapping: {
      'en-GB': 'en',
      'fr-FR': 'fr',
    },
    useModuleLocale: true,
  },
});
