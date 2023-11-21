<template>
  <div :class="bg">
    <div class="bs-container">
      <div class="py-10 px-4 lg:px-0">
        <div>
          <slot />
        </div>
        <div class="mt-8">
          <slot v-if="isButton" name="button" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  bg?: 'bg-bs-gray' | 'bg-white' | 'bg-bs-blue';
  isButton?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  bg: 'bg-bs-gray',
  isButton: false
});
</script>

<style scoped></style>
