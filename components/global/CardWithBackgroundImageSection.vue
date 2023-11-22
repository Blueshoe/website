<template>
  <div
    :style="{
      backgroundImage: `url(${src})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }"
  >
    <div class="bs-container py-10 px-8">
      <div class="bg-white bg-opacity-90 border-4 border-bs-blue p-6" :class="width">
        <h2 class="text-base font-semibold leading-5 font-source-sans-pro uppercase text-bs-blue mb-2">
          <ContentSlot name="preTitle" unwrap="p" />
        </h2>
        <h3 class="font-extralight text-[40px] font-oswald text-bs-text mb-8">
          <ContentSlot name="title" unwrap="p" />
        </h3>
        <div class="text-xl font-extralight leading-[26px] font-source-sans-pro text-bs-text"><ContentSlot /></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
type Width = 'w-full' | 'w-2/3';
interface Props {
  src: string;
  width?: Width;
}

const props = withDefaults(defineProps<Props>(), {
  width: 'w-full'
});
</script>

<style scoped></style>
