<template>
  <div class="mb-6 md:mr-6">
    <div><NuxtImg :src="'/' + src" width="100" /></div>
    <h4 class="text-[28px] leading-8 font-extralight font-oswald uppercase text-bs-text mb-6">
      <ContentSlot name="title" unwrap="p" />
    </h4>
    <div class="text-lg font-light font-source-sans-pro leading-[26px] text-bs-text pb-4">
      <ContentSlot />
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  src: string;
}

const props = withDefaults(defineProps<Props>(), {});
</script>

<style scoped></style>
