<template>
  <div class="mb-6 md:mr-6">
    <div v-if="src" class="flex items-center min-h-[100px]" :class="{'justify-center': center}">
      <img  v-if="isStory" :src="src" width="100" class="max-w-[100px]" alt="icon" />
      <booster-image v-if="!isStory" :src="src" title="icon" width="100" class="max-w-[100px]" alt="icon" format="webp" />
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
  center?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  src: '',
  center: false
});
</script>

<style scoped></style>
