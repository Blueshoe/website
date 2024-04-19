<template>
  <div class="mb-6 md:mr-6">
    <div v-if="src" class="flex items-center min-h-[100px]">
      <img  v-if="isStory" :src="src" width="100" class="max-w-[100px]" alt="icon" />
      <speedkit-image v-if="!isStory" :src="src" width="100" class="max-w-[100px]" alt="icon" format="webp" />
    </div>
    <div>
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import SpeedkitImage from '#speedkit/components/SpeedkitImage';
interface Props {
  src?: string;
  isStory?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  src: ''
});
</script>

<style scoped></style>
