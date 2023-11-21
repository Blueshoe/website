<template>
  <h1 class="text-base font-semibold leading-5 font-source-sans-pro uppercase" :class="color">
    <ContentSlot unwrap="p" />
  </h1>
</template>

<script setup lang="ts">
type Color = 'text-bs-blue' | 'text-bs-green';

interface Props {
  color?: Color;
}

const props = withDefaults(defineProps<Props>(), {
  color: 'text-bs-blue'
});
</script>

<style scoped></style>
