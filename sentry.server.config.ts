import * as Sentry from '@sentry/nuxt';

Sentry.init({
  dataCollection: {
    // To disable sending user data and HTTP bodies, uncomment the lines below. For more info visit:
    // https://docs.sentry.io/platforms/javascript/guides/nuxt/configuration/options/#dataCollection
    // userInfo: false,
    // httpBodies: [],
  },

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,

  dsn: useRuntimeConfig().public.sentryDsn,

  // Enable logs to be sent to Sentry
  enableLogs: true,
});
