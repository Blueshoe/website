<script setup lang="ts">
import { ModalsContainer, VueFinalModal } from 'vue-final-modal';

const show = ref(false);

function open() {
  show.value = true;
}
</script>

<template>
  <slot name="modalTriggerElement" :open="open"></slot>

  <VueFinalModal
    v-model="show"
    class="flex justify-center items-center"
    content-class="p-4 bg-white rounded-lg space-y-2 min-w-[90%] md:min-w-[90%] xl:min-w-[70%]"
  >
    <div>
      <slot />
    </div>
  </VueFinalModal>

  <ModalsContainer />
</template>

<style>
.plyr button {
  background: #2470a9;
  border-radius: 50%;
}
</style>
