<template>
  <div class="w-full lg:grid lg:grid-cols-2">
    <div class="lg:order-2 flex justify-center items-start mb-8">
      <speedkit-image
        :src="image"
        class="max-h-[300px] md:max-h-[340px] lg:max-h-[300px] xl:max-h-[300px] w-full"
        alt="icon"
        format="webp"
        width="577"
        height="300"
      />
    </div>
    <div class="">
      <div class="lg:order-1 min-h-[320px] text-lg font-light font-source-sans-pro leading-[26px] text-bs-text mb-4">
        <ContentSlot />
      </div>
      <div v-if="isIcons" class="lg:order-3">
        <div class="lg:hidden text-lg font-light leading-[26px] font-source-sans-pro text-gray-400 mb-2">
          Technologies
        </div>
        <div class="flex flex-wrap items-center mb-4">
          <div v-for="(img, i) in icons" :key="i" class="px-4 py-2">
            <speedkit-image :src="img" width="50" height="50" class="max-w-[50px]" alt="icon" format="webp" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SpeedkitImage from '#speedkit/components/SpeedkitImage';
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
