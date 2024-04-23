<template>
  <p class="font-light font-source-sans-pro" :class="[color, size]">
    <ContentSlot unwrap="p" />
  </p>
</template>

<script setup lang="ts">
type Color = 'text-bs-text' | 'text-white';
type FontSize = 'lg' | 'xl' | '2xl';
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
    size.value = 'text-[17.6px] leading-[24px]';
    break;
  case 'xl':
    size.value = 'text-[19.2px] leading-[28px]';
    break;
  case '2xl':
    size.value = 'text-[28px] leading-[32px]';
    break;
}
</script>
