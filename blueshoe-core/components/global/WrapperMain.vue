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

const scrollPosition = ref(0);
const scrollDirectionTop = ref();

onMounted(() => {
  window.addEventListener('scroll', () => {
    if (scrollPosition.value < document.documentElement.scrollTop) {
      scrollDirectionTop.value = false;
    } else {
      scrollDirectionTop.value = true;
    }
    scrollPosition.value = document.documentElement.scrollTop;
    handleScroll();
  });

  const headings = refWrapperMain.value?.querySelectorAll('[data-title]');
  if (!headings) return;

  for (let i = 0; i < headings.length; i++) {
    if (headings[i].hasAttribute('data-title')) {
      headings[i].setAttribute('id', 'heading' + i);
      headings[i].setAttribute('ref', 'heading' + i);
      const title = headings[i].getAttribute('data-title') as string;

      headingListData.value.push({
        id: 'heading' + i,
        title,
        visible: false,
        active: false
      });
    }
  }

  function handleScroll() {
    for (let i = 0; i < headingListData.value.length; i++) {
      const element = headingListData.value[i];
      const el = document.getElementById(element.id);
      element.active = isElementInViewport(el);
    }

    const activeHeadings = headingListData.value.filter((obj) => obj.active);
    if (activeHeadings.length) {
      const activeHeading = activeHeadings[0].id;
      headingListData.value.map((obj) => {
        if (obj.id === activeHeading) {
          obj.active = true;
        } else {
          obj.active = false;
        }
      });
    }
  }

  function isElementInViewport(el: HTMLElement): boolean {
    const rect = el.getBoundingClientRect();
    if (!scrollDirectionTop.value) {
      return (
        (rect.top >= 0 && rect.top < window.innerHeight) ||
        (rect.top < window.innerHeight && rect.bottom > window.innerHeight)
      );
    }
    return (
      (rect.bottom >= 0 && rect.bottom < window.innerHeight) ||
      (rect.top < window.innerHeight && rect.bottom > window.innerHeight)
    );
  }
});
</script>

<style scoped></style>
