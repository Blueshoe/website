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
    'Sie haben sich erfolgreich abgemeldet. Google Analytics wird keine Daten mehr über Ihre Besuche auf dieser Website erfassen.'
  );
}

onMounted(() => {
  if (document.cookie.indexOf(`${disableStr}=true`) > -1) {
    window[disableStr] = true;
  }
});
</script>

<style scoped></style>
