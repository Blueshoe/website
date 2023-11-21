<template>
  <div class="font-light leading-[26px] font-source-sans-pro" :class="[color, fontSize]">
    <ContentSlot unwrap="div" />
  </div>
</template>

<script setup lang="ts">
type Color = 'text-bs-text' | 'text-white';
type FontSize = 'text-lg' | 'text-xl';
interface Props {
  color?: Color;
  fontSize?: FontSize;
}

const props = withDefaults(defineProps<Props>(), {
  color: 'text-bs-text',
  fontSize: 'text-xl'
});
</script>
