<template>
  <div ref="refWrapperMain" class="relative">
    <slot />
    <MainNavigationCard :left="leftNavigationCard" :headings="headingListData" />
  </div>
</template>

<script setup lang="ts">
import MainNavigationCard from '~/components/global/MainNavigationCard.vue';
import type { Heading } from '~/types';

const props = defineProps<{
  leftNavigationCard: number;
}>();

const refWrapperMain = ref<HTMLElement | null>(null);
const headingListData = ref<Heading[]>([]);
let observer: IntersectionObserver;

onMounted(() => {
  const headings = refWrapperMain.value.querySelectorAll('[data-title]');

  for (let i = 0; i < headings.length; i++) {
    if (headings[i].hasAttribute('data-title')) {
      headings[i].setAttribute('id', 'heading' + i);
      const title = headings[i].getAttribute('data-title');

      headingListData.value.push({
        id: 'heading' + i,
        title: title,
        active: false
      });
    }
  }

  const elements = document.querySelectorAll('div[data-title]');
  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const title = entry.target.getAttribute('data-title');
        headingListData.value.forEach((obj) => {
          if (obj.title === title) {
            console.log(1, obj.title);
            obj.active = true;
          } else {
            console.log(2, obj.title);
            obj.active = false;
          }
        });
      }
    });
  }, {});

  elements.forEach((element) => {
    observer.observe(element);
  });
});
</script>

<style scoped></style>
