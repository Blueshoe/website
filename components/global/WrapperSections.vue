<template>
  <div ref="refWrapperMain" class="relative">
    <slot :data="headingListData" />
    <ServicesNavigationCard :headings="headingListData" />
  </div>
</template>

<script setup lang="ts">
import type { Heading } from '~/types';
import ServicesNavigationCard from '~/components/global/ServicesNavigationCard.vue';

const refWrapperMain = ref<HTMLElement | null>(null);
const headingListData = ref<Heading[]>([]);

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
});
</script>

<style scoped></style>
