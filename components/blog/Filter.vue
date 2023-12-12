<template>
  <div>
    <div v-if="isDesktopFilter">
      <div
        ref="refDesktopFilter"
        v-click-outside="onClickOutsideDesktopFilter"
        class="flex justify-around navigation-card-shadow"
      >
        <ul v-for="(filter, i) in filters" :key="i" class="relative border-[3px] border-white py-2 px-8">
          <li class="flex items-center cursor-pointer" @click="handleDesktopFilterItems(filter)">
            <span class="text-lg font-oswald font-normal text-bs-blue uppercase">{{ filter.label }}</span>

            <span class="ml-2"><Icon name="ri:arrow-down-s-fill" width="20" height="20" /></span>
          </li>
          <ul
            v-if="filter.isOpen"
            class="absolute top-[47px] left-0 bg-bs-gray max-h-[350px] w-max overflow-y-scroll shadow-lg"
          >
            <li
              v-for="(item, i) in filter.items"
              :key="i"
              class="border cursor-pointer w-full py-[14px] px-6"
              @click="handleSelect(item, filter)"
            >
              <span>
                <Icon
                  name="mingcute:check-fill"
                  width="20"
                  height="20"
                  class="text-white p-[2px] mr-2"
                  :class="[item.isSelected ? 'bg-bs-blue border-bs-blue' : 'bg-white border-gray-400']"
                />
              </span>
              <span>{{ item.name.toUpperCase() }}</span>
            </li>
          </ul>
        </ul>
      </div>
      <div class="flex justify-end">
        <GlobalButton label="Reset Filters" class="px-8 py-2 my-6" @click="resetFilters" />
      </div>
    </div>
    <div v-if="isMobileFilter" class="flex justify-center">
      <transition name="button">
        <GlobalButton
          label="Filter posts"
          v-if="!isMobileFilterOpen && !isMobileFilterItemsOpen"
          class="px-4 py-[2px] transition-all duration-300 delay-300"
          @click="isMobileFilterOpen = true"
        />
      </transition>
      <div
        class="absolute top-[70px] bg-white w-full shadow transition-all duration-300 delay-300"
        :class="[isMobileFilterOpen ? 'left-0' : '-left-[100%]']"
      >
        <div
          class="flex justify-between font-source-sans-pro font-light text-lg text-bs-text border-b-[3px] border-bs-gray py-2 px-4"
        >
          <div>Filters</div>
          <div @click="isMobileFilterOpen = false">
            <Icon name="material-symbols:close" width="22" height="22" class="text-bs-text" />
          </div>
        </div>
        <ul class="w-[95%] mx-auto">
          <li
            v-for="(item, i) in filters"
            :key="i"
            class="flex justify-between font-source-sans-pro font-light text-lg text-bs-text border-b-[3px] border-bs-gray py-2 pr-2 pl-4"
            @click="handleMobileFilterItems(item)"
          >
            <span>{{ item.label }}</span>
            <span><Icon name="solar:alt-arrow-right-line-duotone" width="34" height="34" class="text-bs-text" /></span>
          </li>
        </ul>
        <div class="flex justify-end">
          <GlobalButton label="Reset Filters" class="px-4 py-[2px] m-4" @click="resetFilters" />
        </div>
      </div>
      <div
        class="absolute top-[70px] bg-white w-full shadow transition-all duration-300 delay-300"
        :class="[isMobileFilterItemsOpen ? 'left-0' : '-left-[100%]']"
      >
        <div
          class="flex justify-start font-source-sans-pro font-light text-lg text-bs-text border-b-[3px] border-bs-gray py-2 px-4"
          @click="handleMobileBack"
        >
          <div>
            <Icon name="solar:alt-arrow-left-line-duotone" width="34" height="34" class="text-bs-text" />
          </div>
          <div>{{ filterItemLabel }}</div>
        </div>
        <ul class="mx-2">
          <li
            v-for="(item, ii) in filterMobile.items"
            :key="ii"
            class="flex justify-between font-source-sans-pro font-light text-lg text-bs-text border-b-[3px] border-bs-gray py-2 pr-2 pl-4"
            @click="handleSelect(item, filterMobile)"
          >
            <span :class="[item.isSelected ? 'text-bs-blue' : 'text-bs-text']">{{ item.name.toUpperCase() }}</span>
            <span>
              <Icon
                name="mingcute:check-fill"
                width="24"
                height="24"
                class="text-white rounded-full border-2 p-[2px]"
                :class="[item.isSelected ? 'bg-bs-blue border-bs-blue' : 'bg-white border-gray-400']"
              />
            </span>
          </li>
        </ul>
        <div class="flex justify-end">
          <GlobalButton label="Reset Filters" class="px-4 py-[2px] m-4" @click="resetFilters" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useGeneralStore } from '~/store';

const generalStore = useGeneralStore();
const { filters, sortedBlogs } = storeToRefs(generalStore);

const isDesktopFilter = ref(false);
const isMobileFilter = ref(false);
const isMobileFilterOpen = ref(false);
const isMobileFilterItemsOpen = ref(false);
const filterItemLabel = ref('');
const filterMobile = ref([]);
const refDesktopFilter = ref([]);
const initialSorting = ref(sortedBlogs.value);
const filterArray = ref([]);

const handleDesktopFilterItems = (filter) => {
  filters.value.forEach((filter) => {
    filter.isOpen = false;
  });
  filter.isOpen = true;
};

const handleMobileFilterItems = (item) => {
  filterItemLabel.value = item.label;
  filterMobile.value = item;
  isMobileFilterOpen.value = false;
  isMobileFilterItemsOpen.value = true;
};

const handleMobileBack = () => {
  isMobileFilterOpen.value = true;
  isMobileFilterItemsOpen.value = false;
};

const handleSelect = (item, filter) => {
  console.log('filter', filter);
  item.isSelected = !item.isSelected;
  prepareFilterArray(item, filter);

  sortedBlogs.value = initialSorting.value.filter((arr1Item) => {
    return filterArray.value.every((arr2Item) => {
      return arr1Item[arr2Item.filter] && arr1Item[arr2Item.filter].includes(arr2Item.item);
    });
  });
};

const prepareFilterArray = (item, filter) => {
  if (item.isSelected) {
    filterArray.value.push({ filter: filter.name, item: item.name });
  } else {
    filterArray.value = filterArray.value.filter((i) => i.item !== item.name);
  }
};

const resetFilters = () => {
  filters.value.forEach((filter) => {
    filter.items.forEach((item) => {
      item.isSelected = false;
    });
  });
  sortedBlogs.value = initialSorting.value;
};

const updateWidth = () => {
  isMobileFilter.value = window.innerWidth < 768;
  isDesktopFilter.value = window.innerWidth >= 768;
};

const onClickOutsideDesktopFilter = (event) => {
  filters.value.forEach((filter) => {
    filter.isOpen = false;
  });
};

onMounted(() => {
  window.addEventListener('resize', updateWidth);
  updateWidth();
});
</script>

<style scoped>
.button-enter-active,
.button-leave-active {
  opacity: 0;
}
.button-enter,
.button-leave-to {
  transition: opacity 0.3s;
}
</style>
