<template>
  <div class="md:grid md:grid-cols-2 px-11 pt-11" :class="bg">
    <div>
      <div class="mb-6">
        <slot name="title"></slot>
      </div>
      <div class="w-[150px] mb-6">
        <img v-if="logo && isStory" :src="logo.src" :alt="logo.alt" width="150" class="max-w-[150px]" />
        <booster-image v-if="logo && !isStory" :src="logo.src" :alt="logo.alt" width="150" class="max-w-[150px]" format="webp" />
        <div class="h-1 bg-bs-blue mt-6"></div>
      </div>
      <div class="mb-6 font-medium font-source-sans-pro text-lg text-bs-blue">
        <span v-for="(tag, i) in tags" :key="i">
          {{ tag }}
          <span v-if="tags?.length !== i + 1"> | </span>
        </span>
      </div>
      <div class="mb-6">
        <ContentSlot unwrap="p"></ContentSlot>
      </div>
    </div>
    <div v-if="isImage" class="relative hidden md:flex items-center justify-center p-4 lg:p-10 xl:p-20">
      <div v-if="desktopImage" class="desktop-scene">
        <div class="cube">
          <div
            class="desktop-image"
            :style="{
              backgroundImage: `url(${desktopImage.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }"
          ></div>
          <div class="face face-front">
            <div></div>
          </div>
          <div class="face face-right"></div>
          <div class="face face-bottom"></div>
        </div>
      </div>
      <div v-if="mobileImage" class="mobile-scene">
        <div class="cube">
          <div
            class="desktop-image"
            :style="{
              backgroundImage: `url(${mobileImage.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }"
          ></div>
          <div class="face face-front">
            <div></div>
          </div>
          <div class="face face-right"></div>
          <div class="face face-bottom"></div>
        </div>
      </div>
    </div>
    <div v-if="isButton">
      <slot name="button"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import BoosterImage from '#booster/components/BoosterImage';
interface Props {
  bg?: 'bg-white';
  logo?: { src: string; alt: string };
  tags?: string[];
  isImage?: boolean;
  isButton?: boolean;
  desktopImage?: { src: string; alt: string };
  mobileImage?: { src: string; alt: string };
  isStory?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  tags: () => [],
  isImage: true,
  isButton: true,
  bg: 'bg-white',
  isStory: false
});
</script>

<style scoped></style>