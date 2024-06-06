<template>
  <NuxtLink :to="src" class="navigation-card-shadow m-2">
    <div>
      <img v-if="isStory" :src="img" :alt="alt" class="object-cover max-w-full" />
      <booster-image v-if="!isStory" :src="img" :title="alt" :alt="alt" class="object-cover max-w-full" format="webp" />
    </div>
    <div class="p-6 blog">
      <h6 class="text-xl font-oswald font-extralight text-bs-green">{{ preTitle }}</h6>
      <h5 class="text-xl font-oswald font-extralight text-bs-text uppercase my-2">{{ title }}</h5>
      <ContentRenderer v-if="description" :value="description">
        <ContentRendererMarkdown :value="description" class="text-lg font-light font-source-sans-pro text-bs-text" />
      </ContentRenderer>
      <div class="text-lg font-source-sans-pro font-light text-bs-blue mb-1">
        <span v-for="(a, i) in author" :key="i">{{ a }}<span v-if="author?.length !== i + 1">, </span></span>
      </div>
      <div class="text-lg font-source-sans-pro font-light text-bs-text">{{ date }}</div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import BoosterImage from '#booster/components/BoosterImage';

interface Props {
  src: string;
  img: string;
  alt: string;
  preTitle: string;
  title?: string;
  description: any;
  author: string[];
  date: string;
  isStory?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  isStory: false
});
</script>

<style scoped></style>
