<template>
  <NuxtLink :to="href">
    <div class="flex flex-col sm:flex-row justify-between gap-6 lg:gap-1 shadow-xl w-full h-full p-6" :class="bg">
      <div v-if="src" class="sm:order-2 flex items-center justify-center px-6 sm:p-0">
        <img
          :src="src"
          class="max-w-[310px] sm:min-w-[150px] sm:max-w-[200px] md:max-w-[160px] w-full lg:min-w-[120px] xl:min-w-[110px]"
        />
      </div>
      <div class="sm:order-1">
        <ContentSlot unwrap="p" name="title" />
        <div class="text-lg font-light font-source-sans-pro leading-[26px] text-bs-text"><slot /></div>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
type BgColor = 'bg-white' | 'bg-bs-blue';

interface Props {
  src?: string;
  href: string;
  bg?: BgColor;
}

const props = withDefaults(defineProps<Props>(), {
  bg: 'bg-white'
});
</script>

<style scoped></style>
