// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['@/assets/css/fonts.css'],
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
    '@pinia/nuxt',
    'nuxt-swiper',
    'nuxt-icon',
    '@nuxtjs/i18n',
    'nuxt-simple-robots',
    '@zadigetvoltaire/nuxt-gtm',
    '@nuxt/image'
  ],
  components: {
    global: true,
    dirs: ['~/components']
  },
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config',
    exposeConfig: false,
    exposeLevel: 2,
    config: {},
    injectPosition: 'first',
    viewer: true
  },
  content: {
    // ... options
  },
  i18n: {
    vueI18n: './translations/i18n.config.ts',
    baseUrl: 'http://localhost:3000',
    locales: [
      {
        code: 'en',
        name: 'English',
        iso: 'en-US',
        isCatchallLocale: true
      }
    ],
    defaultLocale: 'en'
  },
  gtm: {
    id: 'GTM-XXXXXXX',
    queryParams: {
      gtm_auth: 'AB7cDEf3GHIjkl-MnOP8qr',
      gtm_preview: 'env-4',
      gtm_cookies_win: 'x'
    },
    defer: false,
    compatibility: false,
    nonce: '2726c7f26c',
    enabled: true,
    debug: true,
    loadScript: true,
    enableRouterSync: true,
    ignoredViews: ['homepage'],
    trackOnNextTick: false,
    devtools: true
  },
  image: {
    // Options
  }
});
