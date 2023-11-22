<template>
  <div :class="bg">
    <div class="bs-container">
      <div class="py-10 px-4 lg:px-0">
        <div>
          <slot></slot>
        </div>
        <div class="flex flex-col">
          <div
            class="flex flex-col items-center sm:flex-row bg-white rounded-3xl border-4 border-white shadow-md md:w-fit mb-8"
          >
            <div
              v-for="(tab, index) in tabs"
              :key="index"
              @click="selectTab(index)"
              class="text-lg font-normal leading-[26px] font-source-sans-pro uppercase text-center w-full md:w-fit rounded-full py-2 px-8"
              :class="activeTab === index ? 'bg-bs-green text-white' : 'text-gray-400'"
            >
              {{ tab.label }}
            </div>
          </div>

          <div>
            <slot :name="`tab-${activeTab}`"></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  labels: string[];
  bg?: 'bg-bs-gray' | 'bg-white';
}

const props = withDefaults(defineProps<Props>(), {
  bg: 'bg-bs-gray'
});

const activeTab = ref(0);
const tabs = reactive(props.labels.map((label, index) => ({ label, index })));

const selectTab = (index: number) => {
  activeTab.value = index;
};
</script>
