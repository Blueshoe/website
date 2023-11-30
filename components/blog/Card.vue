<template>
  <NuxtLink :to="src" class="navigation-card-shadow m-2">
    <div>
      <img :src="img" :alt="alt" class="object-cover max-w-full" />
    </div>
    <div class="p-6 blog">
      <h6 class="text-base font-oswald font-extralight text-bs-green">{{ preTitle }}</h6>
      <h5 class="text-xl font-oswald font-extralight text-bs-text uppercase my-2">{{ title }}</h5>
      <ContentRenderer v-if="description" :value="description">
        <ContentRendererMarkdown :value="description" />
      </ContentRenderer>
      <div class="text-lg font-source-sans-pro font-light text-bs-blue mb-1">
        <span v-for="(a, i) in author" :key="i">{{ a }}<span v-if="author?.length !== i + 1">, </span></span>
      </div>
      <div class="text-lg font-source-sans-pro font-light text-bs-text">{{ date }}</div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
interface Props {
  src: string;
  img: string;
  alt: string;
  preTitle: string;
  title: string;
  description: string;
  author: string[];
  date: string;
}

const props = withDefaults(defineProps<Props>(), {});
</script>

<style scoped></style>
