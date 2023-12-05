<template>
  <div class="font-light font-source-sans-pro pl-4" :class="[color, size]">
    <ContentSlot unwrap="div" />
  </div>
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
    size.value = 'text-base';
    break;
  case 'xl':
    size.value = 'text-lg';
    break;
}
</script>
