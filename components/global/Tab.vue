<template>
  <div class="w-full lg:grid lg:grid-cols-2">
    <div class="lg:order-2 flex justify-center items-center mb-8">
      <img :src="image" class="max-h-[300px] md:max-h-[340px] lg:max-h-[300px] xl:max-h-[300px] w-full" />
    </div>
    <div>
      <div
        class="lg:order-1 lg:min-h-[370px] xl:min-h-[280px] text-lg font-light font-source-sans-pro leading-[26px] text-bs-text mb-4"
      >
        <ContentSlot />
      </div>
      <div v-if="isIcons" class="lg:order-3">
        <div class="lg:hidden text-lg font-light leading-[26px] font-source-sans-pro text-gray-400 mb-2">
          Technologies
        </div>
        <div class="flex flex-wrap items-center mb-4">
          <div v-for="(img, i) in icons" :key="i" class="px-4 py-2">
            <img :src="img" width="50" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  image: string;
  icons?: string[];
  isIcons?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  isIcons: false
});
</script>

<style scoped></style>
