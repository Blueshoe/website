<template>
  <div :class="bg" class="relative">
    <div class="bs-container">
      <div class="flex flex-col sm:grid sm:grid-cols-2 py-10 px-4 lg:px-0">
        <div :class="[imagePosition === 'left' ? 'sm:order-1' : 'sm:order-2']">
          <img
            v-if="isStory"
            :src="image"
            :alt="alt"
            class="mx-auto h-auto max-w-full sm:max-w-[200px] md:max-w-[270px] lg:max-w-[380px] xl:max-w-[420px] w-full"
            format="webp"
          />
          <booster-image
            critical 
            v-if="!isStory"
            :src="image"
            :alt="alt"
            :title="alt"
            class="mx-auto h-auto max-w-full sm:max-w-[200px] md:max-w-[270px] lg:max-w-[380px] xl:max-w-[420px] w-full p-10 transition ease-in-out delay-50 duration-200 hover:-translate-1 hover:scale-105"
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
import BoosterImage from '#booster/components/BoosterImage';
interface Props {
  image: string;
  alt: string;
  bg?: 'bg-bs-gray' | 'bg-white';
  imagePosition?: 'left' | 'right';
  isButton?: boolean;
  isStory?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  isButton: false,
  imagePosition: 'left',
  bg: 'bg-white',
  isStory: false
});
</script>

<style scoped></style>
