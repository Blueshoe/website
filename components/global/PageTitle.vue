<template>
  <h2 class="text-[40px] xl:text-5xl font-oswald font-extralight" :class="[color]">
    <ContentSlot unwrap="p" />
  </h2>
</template>

<script setup lang="ts">
type Color = 'text-bs-text' | 'text-bs-blue' | 'text-bs-green' | 'text-white';

interface Props {
  color?: Color;
}

const props = withDefaults(defineProps<Props>(), {
  color: 'text-bs-text'
});
</script>

<style scoped></style>
