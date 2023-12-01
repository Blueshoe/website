<template>
  <div class="bs-container mb-10">
    <GlobalTitle class="px-4 mt-6 mb-6"> Blog </GlobalTitle>

    <GlobalParagraph class="px-4 mb-10">
      We write about all things cloud native and let you have a look into our approaches to different challenges to
      occur when developing within cloud native infrastructures.
    </GlobalParagraph>

    <BlogFilter class="my-6" />

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <BlogCard
        v-for="blog in sortedBlogs"
        :key="blog.id"
        :src="blog.src"
        :img="blog.img"
        :alt="blog.alt"
        :pre-title="blog.preTitle"
        :description="blog.excerpt"
        :title="blog.title"
        :author="blog.author"
        :date="blog.date"
        :paragraphs="blog.paragraphs"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useGeneralStore } from '~/store';

const generalStore = useGeneralStore();
const { sortedBlogs } = storeToRefs(generalStore);

const { data: blogs } = await useAsyncData('blogs', () => queryContent('/blog').find());

sortedBlogs.value = blogs.value?.sort((a, b) => {
  return convertToDate(b.date) - convertToDate(a.date);
});

function convertToDate(dateString: string) {
  const [day, month, year] = dateString.split('.');
  return new Date(Number(year), Number(month) - 1, Number(day));
}
</script>
