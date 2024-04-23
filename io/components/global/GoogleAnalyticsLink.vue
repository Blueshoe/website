<template>
  <div class="inline ml-1">
    <a href="#" @click="optOut"> {{ label }}</a>
  </div>
</template>

<script setup lang="ts">
interface Props {
  label: string;
}

const props = withDefaults(defineProps<Props>(), {});

const gaProperty = '318551812';

const disableStr = `ga-disable-${gaProperty}`;

function optOut(event: MouseEvent) {
  event.preventDefault();
  document.cookie = `${disableStr}=true; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/`;
  window[disableStr] = true;
  alert(
    'You have successfully opted out. Google Analytics will no longer collect data about your visits to this website.'
  );
}

onMounted(() => {
  if (document.cookie.indexOf(`${disableStr}=true`) > -1) {
    window[disableStr] = true;
  }
});
</script>

<style scoped></style>
