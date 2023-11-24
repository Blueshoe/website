<template>
  <div
    :style="{
      backgroundImage: `url(${src})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }"
  >
    <div class="bs-container py-10 px-8">
      <div class="bg-white bg-opacity-90 border-4 border-bs-blue mx-auto p-6" :class="width">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
type Width = 'w-full' | 'w-2/3';
interface Props {
  src: string;
  width?: Width;
}

const props = withDefaults(defineProps<Props>(), {
  width: 'w-full'
});
</script>

<style scoped></style>
