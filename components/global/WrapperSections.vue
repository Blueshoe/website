<template>
  <div ref="refWrapperMain" class="relative">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useGeneralStore } from '~/store';

const generalStore = useGeneralStore();
const { headingListData } = storeToRefs(generalStore);

const refWrapperMain = ref<HTMLElement | null>(null);

onMounted(() => {
  const headings = refWrapperMain.value?.querySelectorAll('[data-title]');

  if (!headings) return;

  for (let i = 0; i < headings.length; i++) {
    if (headings[i].hasAttribute('data-title')) {
      headings[i].setAttribute('id', 'heading' + i);
      const title = headings[i].getAttribute('data-title') as string;

      headingListData.value.push({
        id: 'heading' + i,
        title,
        active: false
      });
    }
  }
});

onBeforeUnmount(() => {
  headingListData.value = [];
});
</script>

<style scoped></style>
