<template>
  <div :class="[bg, `md:${width}`]">
    <div class="bs-container">
      <div class="py-10 px-4 lg:px-0">
        <div>
          <slot />
        </div>
        <div v-if="isButton" class="mt-8">
          <slot name="button" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  bg?: 'bg-bs-gray' | 'bg-white' | 'bg-bs-blue' | 'bg-transparent';
  isButton?: boolean;
  width?: string
}

const props = withDefaults(defineProps<Props>(), {
  bg: 'bg-bs-gray',
  isButton: false,
  width: 'w-full'
});
</script>

<style scoped></style>
