<template>
  <Html lang="en">
    <div>
    <NuxtLayout>
      <NuxtPage />
      <ModalsContainer />
    </NuxtLayout>
  </div>
  </Html>
</template>
<script setup lang="ts">
import { ModalsContainer } from 'vue-final-modal';
</script>
