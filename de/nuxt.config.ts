// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ['../blueshoe-core'],
  devtools: { enabled: true },
  css: ['@/assets/css/fonts.css', 'vue-final-modal/style.css'],
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    'nuxt-swiper',
    'nuxt-icon',
    '@nuxtjs/i18n',
    'nuxt-booster'
  ],
  components: {
    global: true,
    dirs: ['~/components', '../blueshoe-core/components']
  },
  content: {
    experimental: {
      clientDB: true
    },
    highlight: {
      theme: {
        default: 'monokai'
      },
      langs: [
        'javascript',
        'typescript',
        'json',
        'bash',
        'shell',
        'yaml',
        'markdown',
        'html',
        'css',
        'scss',
        'xml',
        'graphql',
        'sql',
        'python',
        'java',
        'php',
        'ruby',
        'docker'
      ]
    }
  },
  tailwindcss: {
    cssPath: ['~/assets/css/tailwind.css', { injectPosition: 'first' }],
    configPath: 'tailwind.config',
    exposeConfig: {
      level: 2
    },
    config: {},
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
  delayHydration: {
    mode: false,
    debug: process.env.NODE_ENV === 'development'
  },
  booster: {
    detection: {
      performance: true,
      browserSupport: true,
      battery: true
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
  ssr: true,
  nitro: {
    static: true,
    prerender: {
      routes: ['/sitemap.xml', '/'],
      crawlLinks: true,
      // ignore external links that break github action
      ignore: [
        '/[https://www.ampproject.org/roadmap/',
        '/[https://www.ampproject.org/case-studies/wired/',
        '/[https://www.ampproject.org/case-studies/washingtonpost/'
      ],
      failOnError: false
    }
  },
  router: {
    options: {
      scrollBehaviorType: 'smooth',
    }

  }
});
