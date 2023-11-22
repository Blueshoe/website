<template>
  <div
    class="hidden lg:block fixed z-10 -rotate-90 top-1/2 -left-[180px] transform -translate-y-1/2 bg-white rounded-full px-5"
  >
    <div class="flex gap-8">
      <div
        v-for="(heading, i) in headingListData.slice().reverse()"
        :key="i"
        class="text-bs-blue uppercase py-[6px]"
        :class="{ 'border-b-4 border-bs-green': heading.active }"
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
}>();

const headingListData = ref(props.headings);

function handleScroll(heading: Heading) {
  scrollToElement(heading.id);
  headingListData.value.map((item) => {
    item.active = item.id === heading.id;
  });
}
</script>

<style scoped></style>
