<template>
  <div class="bg-bs-gray py-10">
    <div class="bs-container relative">
      <div
        class="px-2 sm:w-[540px] sm:mx-auto md:w-[700px] lg:w-[500px] xl:w-[450px] lg:mx-0 lg:absolute lg:left-0 lg:top-0"
      >
        <slot />
      </div>
    </div>
    <div class="w-full overflow-hidden pt-8 pb-12 lg:pb-20 lg:top-[20%] lg:z-0">
      <img :src="props.src" class="w-[200%] lg:w-full -ml-[80%] lg:ml-0" />
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
