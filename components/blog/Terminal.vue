<template>
  <div class="grid gap-5 grid-cols-1 md:grid-cols-2 max-w-max py-[60px] px-[15px]">
    <div class="font-light font-source-sans-pro text-lg">
      <slot />
    </div>
    <v-termynal line-delay="2000" lazy class="w-max min-h-max !whitespace-normal">
      <div ref="slotLines" class="hidden"><slot name="lines" /></div>
      <vt-input class="!whitespace-normal">{{ input }}</vt-input>
      <vt-text v-for="(line, i) in terminalLines" :key="i" class="!whitespace-normal">{{ line }}</vt-text>
    </v-termynal>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  input: {
    type: String,
    default: ''
  }
});

const slotLines = ref(null);
const terminalLines = ref([]);

onMounted(() => {
  const linesData = slotLines.value.querySelectorAll('li');
  for (let i = 0; i < linesData.length; i++) {
    terminalLines.value.push(linesData[i].innerText);
  }
});
</script>
