<template>
  <div>
    <GlobalTitle size="lg" class="mb-6"> Some of our other articles you may like: </GlobalTitle>
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
interface Props {
  number?: string;
  url?: string[];
}

const props = withDefaults(defineProps<Props>(), {
  number: '5'
});
const { data: blogs } = await useAsyncData('blogs', () => queryContent('/blog').find());

const preparedBlogs = computed(() => {
  if (!props.url) {
    return blogs.slice(0, props.number);
  } else {
    return blogs.value.filter((blog) => {
      return props.url?.includes(blog.src);
    });
  }
});
</script>

<style scoped></style>
