export default defineNuxtConfig({
  extends: ['blueshoe'],
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
    '@zadigetvoltaire/nuxt-gtm',
    'nuxt-speedkit'
  ],
  components: {
    global: true,
    dirs: ['~/components', 'node_modules/blueshoe/components']
  },
  content: {
    experimental: {
      clientDb: true
    },
    highlight: {
      theme: {
        default: 'monokai'
      }
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
  delayHydration: {
    mode: 'mount',
    debug: process.env.NODE_ENV === 'development'
  },
  speedkit: {
    detection: {
      performance: true,
      browserSupport: true
    },

    performanceMetrics: {
      device: {
        hardwareConcurrency: { min: 2, max: 48 },
        deviceMemory: { min: 2 }
      },
      timing: {
        fcp: 800,
        dcl: 1200
      }
    },

    targetFormats: ['webp', 'avif', 'jpg|jpeg|png|gif'],

    componentAutoImport: false,
    componentPrefix: undefined,

    lazyOffset: {
      component: '0%',
      asset: '0%'
    }
  },

  image: {
    targetFormats: ['webp', 'jpg|jpeg|png|gif'],

    screens: {
      default: 320,
      xxs: 480,
      xs: 576,
      sm: 768,
      md: 996,
      lg: 1200,
      xl: 1367,
      xxl: 1600,
      '4k': 1921
    },
    cloudflare: {
      baseURL: 'https://that-test.site'
    },
    domains: ['img.youtube.com', 'i.vimeocdn.com'],
    alias: {
      youtube: 'https://img.youtube.com',
      vimeo: 'https://i.vimeocdn.com'
    }
  },
  nitro: {
    prerender: {
      routes: ['/sitemap.xml'],
      failOnError: false
    }
  },
  experimental: { defaults: { nuxtLink: { trailingSlash: 'append' } } },
  routeRules: {
    '^.*(?<!/)$': { redirect: '/new-page' }
  }
});
