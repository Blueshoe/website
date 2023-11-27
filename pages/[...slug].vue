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
const { data: services } = await useAsyncData('services', () => queryContent('/our-services').find());
console.log(services.value);

for (let i = 0; i < services.value.length; i++) {
  await useAsyncData(`services+ ${i}`, () => queryContent(services.value[i]._path).find());
}

const tools = await useAsyncData('tools', () => queryContent('/products').findOne());
const podcast = await useAsyncData('podcast', () => queryContent('/podcast').findOne());
const aboutUS = await useAsyncData('aboutUs', () => queryContent('/about-us').findOne());

const { data: blogs } = await useAsyncData('blog', () => queryContent('/blog').find());
for (let i = 0; i < blogs.value.length; i++) {
  await useAsyncData(`services+ ${i}`, () => queryContent(blogs.value[i]._path).find());
}

const contacts = await useAsyncData('contacts', () => queryContent('/contact').findOne());
</script>
