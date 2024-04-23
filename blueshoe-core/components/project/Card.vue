<template>
  <div class="flex flex-col justify-between navigation-card-shadow bg-white">
    <div>
      <div class="border-b p-6">
        <img :src="img" :alt="alt" class="h-[50px]" />
      </div>
      <div class="p-6">
        <h3 class="text-[22.4px] leading-[28px] text-bs-text font-oswald font-extralight uppercase mb-4">
          {{ title }}
        </h3>
        <p class="text-[17.6px] leading-[24px] text-bs-text font-light">{{ text }}</p>
      </div>
    </div>
    <div v-if="buttonLabel" class="px-6 pb-4">
      <GlobalButton :url="buttonLink" :label="buttonLabel" :target="buttonTarget" size="small"></GlobalButton>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  img: string;
  alt: string;
  title: string;
  text: string;
  buttonLabel?: string;
  buttonLink?: string;
  buttonTarget?: '_blank' | '_self';
}

const props = withDefaults(defineProps<Props>(), {
  img: '',
  alt: '',
  title: '',
  text: '',
  buttonLabel: '',
  buttonLink: '',
  buttonTarget: '_self'
});
</script>

<style scoped></style>
