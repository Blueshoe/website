<template>
  <div>
    <div class="bs-container">
      <div class="flex justify-center">
        <ContentSlot unwrap="p" />
      </div>
      <div class="flex justify-center">
        <img :src="img" :alt="alt" class="object-cover w-full h-full" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  img: string;
  alt: string;
}

const props = withDefaults(defineProps<Props>(), {});
</script>

<style scoped></style>
