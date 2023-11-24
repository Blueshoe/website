<template>
  <p class="font-light font-source-sans-pro" :class="[color, size]">
    <ContentSlot unwrap="p" />
  </p>
</template>

<script setup lang="ts">
type Color = 'text-bs-text' | 'text-white';
type FontSize = 'lg' | 'xl';
interface Props {
  color?: Color;
  fontSize?: FontSize;
}

const props = withDefaults(defineProps<Props>(), {
  color: 'text-bs-text',
  fontSize: 'xl'
});

const size = ref('');

switch (props.fontSize) {
  case 'lg':
    size.value = 'text-lg';
    break;
  case 'xl':
    size.value = 'text-xl';
    break;
}
</script>
