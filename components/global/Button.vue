<template>
  <NuxtLink
    :to="url"
    :target="target"
    class="inline-block active-color text-lg text-center font-normal font-oswald border-4 transition-all duration-100 relative overflow-hidden cursor-pointer !hover:text-white py-2 px-8"
    :class="[isColorActive ? '!text-white' : '', buttonColor]"
    @mouseover="addColorEffect"
    @mouseleave="removeColorEffect"
  >
    <span class="relative z-10">{{ label }}</span>
    <span
      class="absolute -top-[100%] z-0 left-0 w-full h-full"
      :class="[isColorActive ? 'active-color' : '', bgColor]"
    ></span>
  </NuxtLink>
</template>

<script setup lang="ts">
interface Props {
  label: string;
  url?: string;
  color?: 'blue' | 'green' | 'black';
  target?: '_blank' | '_self';
}

const props = withDefaults(defineProps<Props>(), {
  color: 'blue',
  url: '',
  target: '_self'
});

const buttonColor = ref('');
const bgColor = ref('');
const isColorActive = ref(false);

function addColorEffect() {
  isColorActive.value = true;
}

function removeColorEffect() {
  isColorActive.value = false;
}

switch (props.color) {
  case 'blue':
    buttonColor.value = '!border-bs-blue !text-bs-blue !hover:text-white';
    bgColor.value = '!bg-bs-blue';
    break;
  case 'green':
    buttonColor.value = '!border-bs-green !text-bs-green !hover:text-white';
    bgColor.value = '!bg-bs-green';
    break;
  case 'black':
    buttonColor.value = '!border-black !text-black !hover:text-white';
    bgColor.value = '!bg-black';
    break;
}
</script>

<style scoped>
.active-color {
  animation: button-animation 0.1s linear forwards;
}

@keyframes button-animation {
  to {
    top: 0%;
  }
}
</style>
