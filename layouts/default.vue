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
      <img v-for="(img, i) in images" :key="i" :src="img.src" :alt="img.alt" />
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

const images = [
  { src: '/img/global/icons/cloud-storage.svg', alt: 'cloud storage icon' },
  { src: '/img/global/icons/cms_1.svg', alt: 'cms icon' },
  { src: '/img/global/icons/bird_1.svg', alt: 'bird icon' },
  { src: '/img/global/icons/python.svg', alt: 'python icon' },
  { src: '/img/global/icons/buy-online.svg', alt: 'buy online icon' },
  { src: '/img/global/icons/api_1.svg', alt: 'api icon' },
  { src: '/img/global/icons/shopping-cart.svg', alt: 'shopping cart icon' },
  { src: '/img/global/icons/data-transformation.svg', alt: 'data transformation icon' },
  { src: '/img/global/icons/consulting_1.svg', alt: 'consulting icon' },
  { src: '/img/global/icons/infrastructure_1.svg', alt: 'infrastructure icon' },
  { src: '/img/global/icons/migration.svg', alt: 'migration icon' },
  { src: '/img/global/icons/repair.svg', alt: 'repair icon' },
  { src: '/img/global/icons/cyber-security.svg', alt: 'cyber security icon' },
  { src: '/img/global/icons/cloud-computing.svg', alt: 'cloud computing icon' }
];
</script>

<style scoped></style>
