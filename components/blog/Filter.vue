<template>
  <div class="bs-container">
    <div v-if="isDesktopFilter" class="">
      <div>Desktop</div>
    </div>
    <div ref="refMobileFilter" v-if="isMobileFilter" class="flex justify-center">
      <button
        v-if="!isMobileFilterOpen"
        class="font-oswald font-normal text-base text-bs-blue border-[3px] border-bs-blue px-4 py-[2px]"
        @click="isMobileFilterOpen = true"
      >
        Filter posts
      </button>
      <div v-if="isMobileFilterOpen" class="absolute top-[70px] bg-white w-full shadow">
        <div
          class="flex justify-between font-source-sans-pro font-light text-lg text-bs-text border-b-[3px] border-bs-gray py-2 px-4"
        >
          <div>Filters</div>
          <div @click="isMobileFilterOpen = false">
            <Icon name="material-symbols:close" width="22" height="22" class="text-bs-text" />
          </div>
        </div>
        <ul class="mx-2">
          <li
            v-for="(item, i) in filters"
            :key="i"
            class="flex justify-between font-source-sans-pro font-light text-lg text-bs-text border-b-[3px] border-bs-gray py-2 pr-2 pl-4"
            @click="handleFilterItems(item)"
          >
            <span>{{ item.label }}</span>
            <span><Icon name="solar:alt-arrow-right-line-duotone" width="34" height="34" class="text-bs-text" /></span>
          </li>
        </ul>
        <div class="flex justify-end">
          <button
            class="font-oswald font-normal text-base text-bs-blue border-[3px] border-bs-blue px-4 py-[2px] m-4"
            @click=""
          >
            Reset Filters
          </button>
        </div>
      </div>
      <div v-if="isMobileFilterItemsOpen" class="absolute top-[70px] bg-white w-full shadow">
        <div
          class="flex justify-start font-source-sans-pro font-light text-lg text-bs-text border-b-[3px] border-bs-gray py-2 px-4"
          @click="handleBack"
        >
          <div>
            <Icon name="solar:alt-arrow-left-line-duotone" width="34" height="34" class="text-bs-text" />
          </div>
          <div>{{ filterItemLabel }}</div>
        </div>
        <ul class="mx-2">
          <li
            v-for="(item, i) in filterItems"
            :key="i"
            class="flex justify-between font-source-sans-pro font-light text-lg text-bs-text border-b-[3px] border-bs-gray py-2 pr-2 pl-4"
          >
            <span>{{ item.name.toUpperCase() }}</span>
            <span><Icon name="solar:alt-arrow-right-line-duotone" width="34" height="34" class="text-bs-text" /></span>
          </li>
        </ul>
        <div class="flex justify-end">
          <button
            class="font-oswald font-normal text-base text-bs-blue border-[3px] border-bs-blue px-4 py-[2px] m-4"
            @click=""
          >
            Reset Filters
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useGeneralStore } from '~/store';

const generalStore = useGeneralStore();
const { filters } = storeToRefs(generalStore);

const isDesktopFilter = ref(false);
const isMobileFilter = ref(false);
const refMobileFilter = ref(null);
const isMobileFilterOpen = ref(false);
const isMobileFilterItemsOpen = ref(false);
const filterItemLabel = ref('');
const filterItems = ref([]);

const handleFilterItems = (item) => {
  filterItemLabel.value = item.label;
  filterItems.value = item.items;
  isMobileFilterOpen.value = false;
  isMobileFilterItemsOpen.value = true;
};

const handleBack = () => {
  isMobileFilterOpen.value = true;
  isMobileFilterItemsOpen.value = false;
};

const updateWidth = () => {
  isMobileFilter.value = window.innerWidth < 768;
  isDesktopFilter.value = window.innerWidth >= 768;
};

const handleClickOutside = (event: Event) => {
  if (refMobileFilter.value && !refMobileFilter.value.contains(event.target) && isDesktopFilter.value) {
    isMobileFilterOpen.value = false;
    filters.value.forEach((filter) => {
      filter.isOpen = false;
    });
  }
};

onMounted(() => {
  window.addEventListener('click', handleClickOutside);
  window.addEventListener('resize', updateWidth);
  updateWidth();
});
</script>

<style scoped></style>
