<template>
  <div :class="bg">
    <div class="bs-container">
      <div class="flex flex-col sm:grid sm:grid-cols-2 py-10 px-4 lg:px-0">
        <div :class="[imagePosition === 'left' ? 'sm:order-1' : 'sm:order-2']" class="mb-8">
          <speedkit-image
            :src="image"
            :alt="alt"
            class="mx-auto h-auto max-w-full sm:max-w-[200px] md:max-w-[270px] lg:max-w-[380px] xl:max-w-[420px] w-full"
            format="webp"
          />
        </div>
        <div :class="[imagePosition === 'left' ? 'sm:order-2' : 'sm:order-1']" class="">
          <div>
            <slot />
          </div>
          <div v-if="isButton" class="mt-8">
            <slot name="button" />
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
  alt: string;
  bg?: 'bg-bs-gray' | 'bg-white';
  imagePosition?: 'left' | 'right';
  isButton?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  isButton: false,
  imagePosition: 'left',
  bg: 'bg-white'
});
</script>

<style scoped></style>
