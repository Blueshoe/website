<template>
  <div :class="bg">
    <div class="bs-container">
      <div class="md:grid md:grid-cols-10 md:gap-10 py-10 px-4 lg:px-0">
        <div class="md:col-span-6 mb-10" :class="[videoPosition === 'left' ? 'sm:order-1' : 'sm:order-2']">
          <slot />
        </div>
        <div class="md:col-span-4" :class="[videoPosition === 'left' ? 'sm:order-2' : 'sm:order-1']">
          <VideoPlayerModal>
            <template #modalTriggerElement="{ open }">
              <div @click="open">
                <VideoPlayer :modal="true" :video-url="videoUrl" :video-id="id" :thumbnail-url="thumbnailUrl" />
              </div>
            </template>
            <VideoPlayer :modal="false" :video-url="videoUrl" :video-id="id" :thumbnail-url="thumbnailUrl" />
          </VideoPlayerModal>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import VideoPlayerModal from './VideoPlayerModal.vue';
import VideoPlayer from './VideoPlayer.vue';

interface Props {
  bg?: 'bg-bs-gray' | 'bg-white';
  id: number;
  videoId: string;
  videoPosition?: 'left' | 'right';
  thumbnailUrl?: string;
}

const props = withDefaults(defineProps<Props>(), {
  videoPosition: 'left',
  bg: 'bg-bs-gray',
  thumbnailUrl: ''
});

const videoUrl = computed(() => `https://www.youtube.com/embed/${props.videoId}`);
</script>

<style scoped></style>
