// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/content'],
  ssr: true,
  nitro: {
      static: true,
      prerender: {
          crawlLinks: true,
          routes: ['/'],
          ignore: [],
      },
  }
})
