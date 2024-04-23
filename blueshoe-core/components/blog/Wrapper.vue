<template>
  <div ref="refWrapperBlog" class="bs-container py-10 px-8 lg:px-4 blog">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useGeneralStore } from '~/store';

const generalStore = useGeneralStore();
const { blogHeading } = storeToRefs(generalStore);

const refWrapperBlog = ref<HTMLElement | null>(null);

onMounted(() => {
  const headings = refWrapperBlog.value?.getElementsByTagName('h2');

  if (!headings) return;

  const toKebabCase = (string: string) => string.replace(/:/g, '').replace(/\s+/g, '-').toLowerCase();

  for (let i = 0; i < headings.length; i++) {
    headings[i].setAttribute('id', toKebabCase(headings[i].innerText));

    blogHeading.value.push({
      id: toKebabCase(headings[i].innerText),
      title: headings[i].innerText,
      visible: false,
      active: false
    });
  }
});

onBeforeUnmount(() => {
  blogHeading.value = [];
});
</script>

<style scoped></style>
