<template>
  <div class="flex flex-col min-h-screen">
    <GlobalHeader />

    <div class="flex-grow mt-[70px]">
      <slot />
    </div>

    <div class="hidden">
      <a v-for="(link, i) in servicesData" :key="i" :href="link._path">{{ link._id }}</a>
      <a v-for="(link, i) in blogssData" :key="i" :href="link._path">{{ link._id }}</a>
      <a v-for="(link, i) in projectsData" :key="i" :href="link._path">{{ link._id }}</a>
    </div>

    <GlobalFooter />

    <button v-if="toTopBtn" class="back-to-top" @click="scrollToTop">
      <Icon name="ri:arrow-up-s-fill" width="30" height="30" />
    </button>
  </div>
</template>

<script setup lang="ts">
const toTopBtn = ref(false);

function scrollToTop() {
  if (process.browser) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

onMounted(() => {
  if (process.client) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 150) {
        toTopBtn.value = true;
      } else {
        toTopBtn.value = false;
      }
    });
  }
});

const { data: services } = await useAsyncData('services', () => queryContent('/our-services').find());
const servicesData = ref(services.value);

const { data: projects } = await useAsyncData('projects', () => queryContent('/our-services').find());
const projectsData = ref(projects.value);

const tools = await useAsyncData('tools', () => queryContent('/products').findOne());
const podcast = await useAsyncData('podcast', () => queryContent('/podcast').findOne());
const aboutUS = await useAsyncData('aboutUs', () => queryContent('/about-us').findOne());

const { data: blogs } = await useAsyncData('blogs', () => queryContent('/blog').find());
const blogssData = ref(blogs.value);

const contacts = await useAsyncData('contacts', () => queryContent('/contact').findOne());

useHead({
  titleTemplate: (titleChunk: string) => {
    return titleChunk ? `${titleChunk} | BLUESHOE` : 'BLUESHOE';
  }
});
</script>

<style scoped></style>
