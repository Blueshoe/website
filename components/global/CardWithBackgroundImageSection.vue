<template>
  <div
    :style="{
      backgroundImage: `linear-gradient(black, black), url(${src})`,
      backgroundSize: 'cover',
      backgroundPosition: 'left top',
      backgroundBlendMode: 'saturation'
    }"
  >
    <div class="bs-container py-10 px-8">
      <div class="bg-white bg-opacity-90 border-4 border-bs-blue mx-auto p-6" :class="width">
        <slot />
        <div v-if="isButton" class="mt-6">
          <slot name="button" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
type Width = 'w-full' | 'w-2/3';
interface Props {
  src: string;
  width?: Width;
  isButton?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  width: 'w-full',
  isButton: false
});
</script>

<style scoped></style>
