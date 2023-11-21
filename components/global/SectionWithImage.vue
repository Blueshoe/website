<template>
  <div :class="bg">
    <div class="bs-container">
      <div class="flex flex-col sm:grid sm:grid-cols-2 py-10 px-4 lg:px-0">
        <div :class="[imagePosition === 'left' ? 'sm:order-1' : 'sm:order-2']" class="mb-10">
          <img
            :src="image"
            :alt="alt"
            class="mx-auto h-auto max-w-[360px] sm:max-w-[200px] md:max-w-[270px] lg:max-w-[360px] w-full"
          />
        </div>
        <div :class="[imagePosition === 'left' ? 'sm:order-2' : 'sm:order-1']">
          <div>
            <slot />
          </div>
          <div class="mt-8">
            <slot v-if="isButton" name="button" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
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
