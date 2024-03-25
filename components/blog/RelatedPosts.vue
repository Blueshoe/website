<template>
  <div>
    <GlobalTitle size="lg" :tag="tag" class="mb-6">
      Here are a few articles that you might also find interesting:
    </GlobalTitle>
    <GlobalBlock class="ul-disk">
      <ul>
        <li v-for="(blog, i) in preparedBlogs" :key="i" class="cursor-pointer">
          <NuxtLink
            :to="blog.src + '/'"
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
  tag?: string;
}

const props = withDefaults(defineProps<Props>(), {
  number: 5,
  tag: 'h3'
});

const { data: blogs } = await useAsyncData('blogs', () => queryContent('/blog').find());

const preparedBlogs = computed(() => {
  if (!props.url) {
    return sortedItems?.slice(0, props.number);
  } else {
    return sortedItems?.filter((blog) => {
      return props.url?.includes(blog.src);
    });
  }
});

const sortedItems = blogs.value?.sort((a, b) => {
  return convertToDate(b.date) - convertToDate(a.date);
});
</script>

<style scoped></style>
