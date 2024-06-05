<template>
  <div class="prose bs-container">
    <ContentDoc>
      <template #not-found>
        <GlobalPageNotFound />
      </template>
    </ContentDoc>
  </div>
</template>

<script setup lang="ts">
import { baseURL } from '~/constants';

const route = useRoute();
const url = ref(route.fullPath);
useHead({
  link: [{ rel: 'canonical', href: `${baseURL + url.value}` }]
});
</script>
