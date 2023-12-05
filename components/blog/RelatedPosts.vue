<template>
  <div>
    <GlobalTitle size="lg" tag="h3" class="mb-6"> Some of our other articles you may like: </GlobalTitle>
    <GlobalBlock class="ul-disk">
      <ul>
        <li v-for="(blog, i) in preparedBlogs" :key="i" class="cursor-pointer">
          <NuxtLink
            :to="blog.src"
            class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid"
            >{{ blog.title }}</NuxtLink
          >
        </li>
      </ul>
    </GlobalBlock>
  </div>
</template>

<script setup lang="ts">
import { convertToDate } from '~/utils/convertToDate';
interface Props {
  number?: number;
  url?: string[];
}

const props = withDefaults(defineProps<Props>(), {
  number: 5
});

const { data: blogs } = await useAsyncData('blogs', () => queryContent('/blog').find());

const preparedBlogs = computed(() => {
  if (!props.url) {
    return sortedBlogs?.slice(0, props.number);
  } else {
    return blogs.value?.filter((blog) => {
      return props.url?.includes(blog.src);
    });
  }
});

const sortedBlogs = blogs.value?.sort((a, b) => {
  return convertToDate(b.date) - convertToDate(a.date);
});
</script>

<style scoped></style>
