<template>
  <div class="flex flex-col min-h-screen">
    <GlobalHeader />

    <div class="flex-grow mt-[70px]">
      <ContentDoc />
    </div>

    <GlobalFooter />
    <div class="hidden">
      <a v-for="(link, i) in servicesData" :key="i" :href="link._path">{{ link._id }}</a>
      <a v-for="(link, i) in blogssData" :key="i" :href="link._path">{{ link._id }}</a>
    </div>
  </div>
</template>

<script setup lang="ts">
const { data: services } = await useAsyncData('services', () => queryContent('/our-services').find());
const servicesData = ref(services.value);

const tools = await useAsyncData('tools', () => queryContent('/products').findOne());
const podcast = await useAsyncData('podcast', () => queryContent('/podcast').findOne());
const aboutUS = await useAsyncData('aboutUs', () => queryContent('/about-us').findOne());

const { data: blogs } = await useAsyncData('blogs', () => queryContent('/blog').find());
const blogssData = ref(blogs.value);

const contacts = await useAsyncData('contacts', () => queryContent('/contact').findOne());
</script>
