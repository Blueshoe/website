<template>
  <div class="md:grid md:grid-cols-2 px-11 pt-11">
    <div>
      <div class="mb-6">
        <slot name="title"></slot>
      </div>
      <div class="w-[150px] mb-6">
        <NuxtImg :src="'/' + logo.src" :alt="logo.alt" width="150" />
        <div class="h-1 bg-bs-blue mt-6"></div>
      </div>
      <div class="mb-6 font-light font-medium font-source-sans-pro text-lg text-bs-blue">
        <span v-for="(tag, i) in tags" :key="i">
          {{ tag }}
          <span v-if="tags?.length !== i + 1"> | </span>
        </span>
      </div>
      <div class="mb-6">
        <ContentSlot unwrap="p"></ContentSlot>
      </div>
    </div>
    <div v-if="image" class="hidden md:flex items-center justify-center p-4 lg:p-10 xl:p-20">
      <NuxtImg :src="'/' + image.src" :alt="image.alt" class="min-w-full" />
    </div>
    <div>
      <slot name="button"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  logo: { src: string; alt: string };
  tags?: string[];
  image?: { src: string; alt: string };
}

const props = withDefaults(defineProps<Props>(), {
  tags: () => []
});
</script>

<style scoped></style>
