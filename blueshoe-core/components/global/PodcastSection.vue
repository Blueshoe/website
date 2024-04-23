<template>
  <div :class="bg">
    <div class="bs-container">
      <div class="md:grid md:grid-cols-10 md:gap-10 py-10 px-4 lg:px-0">
        <div class="md:col-span-6" :class="[videoPosition === 'left' ? 'sm:order-1' : 'sm:order-2']">
          <slot />
        </div>
        <div class="md:col-span-4" :class="[videoPosition === 'left' ? 'sm:order-2' : 'sm:order-1']">
          <ClientOnly>
            <VideoPlayerModal>
              <template #modalTriggerElement="{ open }">
                <div @click="open">
                  <VideoPlayer
                    :modal="true"
                    :video-url="videoUrl"
                    :video-id="props.videoId"
                    :thumbnail-url="props.thumbnailUrl"
                  />
                </div>
              </template>
              <VideoPlayer
                :modal="false"
                :video-url="videoUrl"
                :video-id="videoId"
                :thumbnail-url="props.thumbnailUrl"
              />
            </VideoPlayerModal>
          </ClientOnly>
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
