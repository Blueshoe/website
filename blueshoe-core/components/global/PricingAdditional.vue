<template>
  <div :class="`relative flex gap-2 items-center p-6 border-4 max-w- ${accented ? 'border-bs-blue' : 'border-bs-green'} group-hover:shadow-xl`">
    <span
      aria-hidden="true"
      class="block absolute h-[2px] w-[15px] bg-current rotate-90"
    />
    <span
      aria-hidden="true"
      class="block absolute h-[2px] w-[15px] bg-current"
    />
    <div class="absolute ml-7 flex gap-4 items-center max-w-[200px]">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
    accented?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
    accented: false,
});
</script>