<template>
  <div class="bg-bs-gray py-10 lg:h-[410px]">
    <div class="relative">
      <div class="bs-container">
        <div class="px-2 sm:w-[540px] sm:mx-auto md:w-[700px] lg:w-full">
          <slot />
        </div>
      </div>
      <div class="w-full overflow-hidden pt-5 pb-10 lg:absolute lg:top-[20%] lg:z-0">
        <img :src="props.src" class="w-[200%] lg:w-full -ml-[80%] lg:ml-0" />
      </div>
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
