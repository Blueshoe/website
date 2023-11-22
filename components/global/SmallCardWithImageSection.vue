<template>
  <div :class="bg">
    <div class="bs-container py-10">
      <div class="px-4 lg:px-0">
        <div class="mb-10"><slot /></div>
        <div class="grid lg:grid-cols-2 xl:grid-cols-3 gap-8"><slot name="cards" /></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
type Bg = 'bg-white' | 'bg-bs-blue' | 'bg-bs-gray';

interface Props {
  bg?: Bg;
}

const props = withDefaults(defineProps<Props>(), {
  bg: 'bg-bs-gray'
});
</script>

<style scoped></style>
