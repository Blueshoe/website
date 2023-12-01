<template>
  <div
    class="hidden lg:block fixed z-10 -rotate-90 top-1/2 transform -translate-y-1/2 bg-white rounded-full navigation-card-shadow px-5"
    :style="{ left: `${props.left}px` }"
  >
    <div class="flex gap-8">
      <div
        v-for="(heading, i) in headingListData.slice().reverse()"
        :key="i"
        class="text-bs-blue uppercase py-[6px]"
        :class="[heading.active ? 'border-b-4 border-bs-green' : 'border-b-4 border-white']"
        @click="handleScroll(heading)"
      >
        <a class="text-lg font-source-sans-pro font-semibold cursor-pointer">{{ heading.title }}</a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { scrollToElement } from '~/utils/scrollHelpers';
import type { Heading } from '~/types';

const props = defineProps<{
  headings: Heading[];
  left: number;
}>();

const headingListData = ref(props.headings);

function handleScroll(heading: Heading) {
  scrollToElement(heading.id);
  headingListData.value.forEach((item) => {
    item.active = item.id === heading.id;
  });
}
</script>

<style scoped></style>
