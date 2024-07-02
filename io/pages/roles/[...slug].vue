<template>
  <div class="prose bs-container my-12">
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

<style src="~/assets/css/alternating-heads.css"></style>
