<template>
  <component
    :is="tag"
    :id="id"
    class="font-extralight font-oswald hyphens-auto scroll-mt-20"
    :class="[color, font, text]"
    lang="de"
  >
    <ContentSlot unwrap="p" />
  </component>
</template>

<script setup lang="ts">
type Color = 'text-bs-text' | 'text-bs-blue' | 'text-bs-green' | 'text-white';
type Font = 'font-oswald' | 'font-source-sans-pro';
type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

interface Props {
  color?: Color;
  font?: Font;
  size?: Size;
  tag?: string;
  id?: string;
}

const props = withDefaults(defineProps<Props>(), {
  color: 'text-bs-text',
  font: 'font-oswald',
  size: 'xl',
  tag: 'h2'
});

const text = ref('');

switch (props.size) {
  case 'xs':
    text.value = 'text-[20px] leading-[26px]';
    break;
  case 'sm':
    text.value = 'text-[24px] leading-[28px]';
    break;
  case 'md':
    text.value = 'text-[28px] leading-[34px]';
    break;
  case 'lg':
    text.value = 'text-[32px] leading-[38px]';
    break;
  case 'xl':
    text.value = 'text-[40px] leading-[48px]';
    break;
  case '2xl':
    text.value = 'text-5xl leading-[54px]';
    break;
}
</script>

<style scoped></style>
