<template>
  <div :class="color" class="p-1">
    <div class="flex flex-col items-center">
      <h2 class="font-oswald font-extralight text-[32px] leading-[38px] mb-6">{{ title }}</h2>
      <div class="text-xl font-source-sans-pro font-light mb-6">
        <a :href="`tel:${tel}`">phone: {{ formattedPhone(tel) }}</a>
      </div>

      <div class="text-xl font-source-sans-pro font-light mb-8">
        <a :href="`mailto:${email}`">mail: {{ email }}</a>
      </div>
      <div v-if="isButton">
        <slot name="button" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
type Color = 'text-bs-text' | 'text-white';
interface Props {
  title: string;
  tel: string;
  email: string;
  color?: Color;
  isButton?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  color: 'text-white',
  isButton: true
});

function formattedPhone(phone: string) {
  return phone.slice(0, 3) + ' ' + phone.slice(3, 5) + ' ' + phone.slice(5);
}
</script>

<style scoped></style>
