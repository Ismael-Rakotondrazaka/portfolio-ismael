// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite';
import type { NuxtConfig } from 'nuxt/schema';

const isDev = process.env.NODE_ENV === 'development';

export default defineNuxtConfig({
  $development: {
    runtimeConfig: {
      // https://developers.google.com/recaptcha/docs/faq#id-like-to-run-automated-tests-with-recaptcha.-what-should-i-do
      recaptchaSecretKey: '6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe',
    },
    scripts: {
      registry: {
        googleRecaptcha: {
          siteKey: '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI',
        },
      },
    },
  },

  compatibilityDate: '2025-07-15',

  components: {
    dirs: [
      {
        global: true,
        path: '~/components/global',
      },
      {
        path: '~/components/common',
        pathPrefix: false,
      },
      '~/components',
    ],
  },

  css: ['~/assets/css/tailwind.css', '~/assets/css/main.css'],

  devtools: { enabled: true },

  i18n: {
    defaultLocale: 'fr',
    detectBrowserLanguage: false,
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
    '@nuxt/icon',
    '@nuxt/image',
    'nuxt-zod-i18n',
    '@nuxtjs/i18n',
    '@vee-validate/nuxt',
    '@vueuse/motion/nuxt',
    'shadcn-nuxt',
    '@nuxtjs/seo',
    'nuxt-security',
    '@nuxt/scripts',
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
      appVersion: '1.0.0',
      contactEmail: '',
      contactFullName: '',
      contactPhoneNumber: '',
    },
    recaptchaSecretKey: '',
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

  scripts: {
    registry: {
      googleRecaptcha: {},
    },
  },

  security: {
    csrf: true,
    headers: {
      contentSecurityPolicy: {
        'connect-src': [
          "'self'",
          'wss:',
          'https://www.google.com',
          'https://www.recaptcha.net',
        ],
        'frame-src': ["'self'", 'https://www.google.com', 'https://www.recaptcha.net'],
        'img-src': ["'self'", 'data:'],
        // reCAPTCHA's badge widget sets one inline event handler attribute;
        // allow only that exact handler instead of loosening the directive.
        'script-src-attr': [
          "'unsafe-hashes'",
          "'sha256-bwK6T5wZVTANitXbrTsel7kl/PyCjCd/Dq5Qoz3imjM='",
        ],
        'upgrade-insecure-requests': !isDev,
      },
      crossOriginEmbedderPolicy: isDev ? 'unsafe-none' : 'credentialless',
    },
    requestSizeLimiter: {
      maxRequestSizeInBytes: 500_000,
      maxUploadFileRequestInBytes: 500_000,
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
    sitemaps: {
      index: [
        {
          sitemap: 'https://hello.ismaelrakoto.com/sitemap.xml',
        },
        {
          sitemap: 'https://openmind.ismaelrakoto.com/sitemap_index.xml',
        },
        {
          sitemap: 'https://campus-flow.ismaelrakoto.com/sitemap_index.xml',
        },
        {
          sitemap: 'https://minili.ismaelrakoto.com/sitemap.xml',
        },
      ],
    },
    zeroRuntime: true,
  },

  veeValidate: {
    // disable or enable auto imports
    autoImports: true,
    // Use different names for components
    componentNames: {
      ErrorMessage: 'VeeErrorMessage',
      Field: 'VeeField',
      FieldArray: 'VeeFieldArray',
      Form: 'VeeForm',
    },
  },

  vite: {
    optimizeDeps: {
      include: [
        '@vee-validate/zod',
        '@vue/devtools-core',
        '@vue/devtools-kit',
        '@vueuse/core',
        'class-variance-authority',
        'clsx',
        '@lucide/vue',
        'reka-ui',
        'tailwind-merge',
        'typed.js',
        'vee-validate',
        'vue-sonner',
        'zod',
        '@unhead/schema-org/vue',
      ],
    },
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