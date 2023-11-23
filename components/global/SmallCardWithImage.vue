<template>
  <NuxtLink :to="href" class="block">
    <div class="flex flex-col sm:flex-row justify-center gap-6 lg:gap-2 shadow-xl h-full p-6" :class="bgColor">
      <div v-if="src" class="sm:order-2 flex items-center justify-center px-6 sm:p-0">
        <img :src="src" class="max-w-full sm:max-w-[160px] sm:w-full lg:min-w-[120px]" />
      </div>
      <div class="sm:order-1">
        <h3 class="text-xl font-extralight font-oswald uppercase text-bs-blue mb-3">
          <ContentSlot unwrap="p" name="title" />
        </h3>
        <div class="text-lg font-light font-source-sans-pro leading-[26px] text-bs-text"><slot /></div>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
type BgColor = 'bg-white';

interface Props {
  src?: string;
  href: string;
  bgColor?: BgColor;
}

const props = withDefaults(defineProps<Props>(), {
  bgColor: 'bg-white'
});
</script>

<style scoped></style>
