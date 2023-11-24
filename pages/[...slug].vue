<template>
  <div class="flex flex-col min-h-screen">
    <GlobalHeader />

    <div class="flex-grow mt-[70px]">
      <ContentDoc />
    </div>

    <GlobalFooter />
  </div>
</template>

<script setup lang="ts">
const services = await useAsyncData('services', () => queryContent('/services').find());
// TODO: loop through the services pages and get (query) the content

const tools = await useAsyncData('tools', () => queryContent('/products').findOne());
const podcast = await useAsyncData('podcast', () => queryContent('/podcast').findOne());
const aboutUS = await useAsyncData('aboutUs', () => queryContent('/about-us').findOne());

const blogs = await useAsyncData('blog', () => queryContent('/blog').find());
// TODO: loop through the blog pages and get (query) the content
const contacts = await useAsyncData('contacts', () => queryContent('/contact').findOne());
</script>
