<template>
  <div ref="refWrapperBlog" class="bs-container py-10 blog">
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

  for (let i = 0; i < headings.length; i++) {
    headings[i].setAttribute('id', 'heading' + i);

    blogHeading.value.push({
      id: 'heading' + i,
      title: headings[i].innerText,
      active: false
    });
  }
});

onBeforeUnmount(() => {
  blogHeading.value = [];
});
</script>

<style scoped></style>
