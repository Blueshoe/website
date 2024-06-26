// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/glide.scss'],
  modules: ['@nuxtjs/tailwindcss', '@nuxt/content']
})
