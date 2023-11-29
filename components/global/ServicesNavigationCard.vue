<template>
  <div class="relative transition-all duration-500" :class="bg" :style="`height: ${navigationCardHeight - 40}px;`">
    <div
      ref="refNavigationCard"
      class="absolute z-10 left-1/2 transform -translate-x-1/2 bottom-12 lg:bottom-9 bg-white w-[80%] sm:w-[60%] md:w-[575px] lg:w-[775px] xl:w-[925px] md:h-auto border-t-[6px] border-t-bs-green px-4 pt-2 pb-12 md:pb-4 overflow-hidden transition-all duration-500"
      :class="[isMinimizedMenu ? 'h-[180px]' : 'h-auto']"
    >
      <h3 v-if="title" class="text-[20px] leading-[26px] text-bs-text font-oswald font-extralight pl-5 mb-3">
        {{ title }}
      </h3>
      <ClientOnly>
        <ul ref="refNavigationList" class="md:grid md:grid-cols-2">
          <li
            v-for="(heading, i) in headingListData"
            :key="i"
            @click="handleScroll(heading)"
            class="flex text-lg font-source-sans-pro font-light leading-6 text-bs-text cursor-pointer"
          >
            <div class="pr-4"><Icon name="el:ok-circle" width="16" height="16" class="text-bs-green" /></div>
            <a :class="{ 'underline underline-offset-2 text-bs-green': heading.active }">{{ heading.title }}</a>
          </li>
        </ul>
      </ClientOnly>
      <div
        v-if="isMinimizedMenu"
        class="md:hidden absolute z-0 left-0 bottom-[38px] w-full bg-gradient-to-t from-neutral-50 h-12"
      ></div>
      <div
        class="md:hidden absolute z-20 left-1/2 transform -translate-x-1/2 bottom-0 cursor-pointer w-full bg-neutral-50 p-1"
        @click="handleNavigation"
      >
        <span class="w-full flex justify-center"
          ><Icon name="simple-line-icons:arrow-down" width="30" height="30" class="text-bs-green" :class="animateArrow"
        /></span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useGeneralStore } from '~/store';
import type { Heading } from '~/types';
import { scrollToElement } from '~/utils/scrollHelpers';

interface Props {
  bg?: 'bg-bs-green' | 'bg-bs-blue' | 'bg-white';
  title?: string;
}

const props = withDefaults(defineProps<Props>(), {
  bg: 'bg-bs-green'
});

const generalStore = useGeneralStore();
const { headingListData } = storeToRefs(generalStore);

const refNavigationCard = ref<HTMLElement | null>(null);
const refNavigationList = ref<HTMLElement | null>(null);
const navigationCardHeight = ref(0);
const isMinimizedMenu = ref(true);
const animateArrow = ref('');

watch(
  async () => isMinimizedMenu.value,
  () => {
    setTimeout(() => {
      getHeightBlock();
    }, 10);
  }
);

function handleScroll(heading: Heading) {
  scrollToElement(heading.id);
  headingListData.value.map((item) => {
    item.active = item.id === heading.id;
  });
}

function handleNavigation() {
  isMinimizedMenu.value = !isMinimizedMenu.value;
  if (!isMinimizedMenu.value) {
    animateArrow.value = 'rotate-180 ease-in-out duration-500';
  } else {
    animateArrow.value = 'rotate-360 ease-in-out duration-500';
  }
}

const handleClickOutside = (event: Event) => {
  if (refNavigationCard.value && !refNavigationCard.value.contains(event.target)) {
    headingListData.value.forEach((heading) => {
      heading.active = false;
    });
  }
};

function getHeightBlock() {
  navigationCardHeight.value = refNavigationCard.value?.offsetHeight || 0;
}

onMounted(async () => {
  await nextTick();
  window.addEventListener('resize', getHeightBlock);
  window.addEventListener('click', handleClickOutside);
  navigationCardHeight.value = refNavigationCard.value?.offsetHeight || 0;
});
</script>

<style scoped></style>
