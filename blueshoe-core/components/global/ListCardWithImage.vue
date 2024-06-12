<template>
  <div class="mb-6 md:mr-6">
    <div v-if="src" class="flex items-center min-h-[100px]">
      <img  v-if="isStory" :src="src" width="100" class="max-w-[100px]" alt="icon" />
      <booster-image v-if="!isStory" title="icon" :src="src" width="100" class="max-w-[100px]" alt="icon" format="webp" />
    </div>
    <div>
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import BoosterImage from '#booster/components/BoosterImage';
interface Props {
  src?: string;
  isStory?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  src: ''
});
</script>

<style scoped></style>
