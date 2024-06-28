<template>
  <div
    :class="`flex flex-col md:flex-row items-center md:items-start justify-center gap-12 overflow-x-auto py-12`"
  >
    <div
      v-for="(i) in cardCount"
      :key="i"
      class="flex flex-col items-center justify-start border-solid border-black"
    >
      <slot :name="`card` + i" />
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
    cardCount: number,
}

const props = withDefaults(defineProps<Props>(), {
    cardCount: 3,
});
</script>