<template>
  <div class="bg-bs-gray">
    <div class="bs-container">
      <div class="lg:grid lg:grid-cols-10 py-10 px-4 lg:px-0">
        <div class="lg:col-span-6 mb-10">
          <slot />
        </div>
        <div class="lg:col-span-4">
          <VideoPlayerModal>
            <template #modalTriggerElement="{ open }">
              <div @click="open">
                <VideoPlayer :modal="true" :video-url="videoUrl" :video-id="1" thumbnail-url="" />
              </div>
            </template>
            <VideoPlayer :modal="false" :video-url="videoUrl" :video-id="1" thumbnail-url="" />
          </VideoPlayerModal>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import VideoPlayerModal from './VideoPlayerModal.vue';
import VideoPlayer from './VideoPlayer.vue';
const videoId = ref('tyvE9VlSWkE');

const videoUrl = computed(() => `https://www.youtube.com/embed/${videoId.value}`);
</script>

<style scoped></style>
