// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  target: 'static',
  devtools: { enabled: true },
  css: ['@/assets/css/fonts.css', 'vue-final-modal/style.css'],
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
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
  content: {
    experimental: {
      clientDb: true
    }
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
    id: 'GTM-MGZWK6W',
    defer: false,
    compatibility: false,
    enabled: true,
    debug: true,
    loadScript: true,
    enableRouterSync: true,
    trackOnNextTick: false,
    devtools: true
  },
  image: {
    cloudflare: {
      baseURL: 'https://blueshoe-io.pages.dev/'
    }
  }
});
