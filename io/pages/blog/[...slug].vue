<template>
  <div>
    <BlogWrapper>
      <GlobalParagraph font-size="lg">
        {{ data?.date }}
      </GlobalParagraph>

      <GlobalPreTitle class="mb-2">
        {{ data?.preTitle }}
      </GlobalPreTitle>

      <GlobalTitle tag="h1" class="mb-6">
        {{ data?.title }}
      </GlobalTitle>

      <ContentDoc class="text-xl font-extralight font-source-sans-pro text-bs-text">
        <template #not-found>
          <GlobalPageNotFound />
        </template>
      </ContentDoc>
    </BlogWrapper>
  </div>
</template>

<script setup lang="ts">
import { baseURL } from '~/constants';

const route = useRoute();
const { data } = await useAsyncData(route.fullPath, () => queryContent(route.fullPath).findOne());

const url = ref(route.fullPath);
useHead({
  link: [{ rel: 'canonical', href: `${baseURL + url.value}` }]
});
</script>
