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

const servicesData = []
for (let i = 0; i < services.value.length; i++) {
  const data = await useAsyncData(`services ${i}`, () => queryContent(services.value[i]._path).find());
  servicesData.push(data);
}

const tools = await useAsyncData('tools', () => queryContent('/products').findOne());
const podcast = await useAsyncData('podcast', () => queryContent('/podcast').findOne());
const aboutUS = await useAsyncData('aboutUs', () => queryContent('/about-us').findOne());

const blogsData = []
const { data: blogs } = await useAsyncData('blog', () => queryContent('/blog').find());
for (let i = 0; i < blogs.value.length; i++) {
  const data = await useAsyncData(`blog ${i}`, () => queryContent(blogs.value[i]._path).find());
  blogsData.push(data);
}

const contacts = await useAsyncData('contacts', () => queryContent('/contact').findOne());
</script>
