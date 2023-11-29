<template>
  <div class="mb-6 md:mr-6">
    <div v-if="src" class="flex items-center min-h-[100px]"><img :src="src" width="100" /></div>
    <div>
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  src?: string;
}

const props = withDefaults(defineProps<Props>(), {
  src: ''
});
</script>

<style scoped></style>
