<template>
  <div>
    <BlogWrapper>
      <GlobalParagraph font-іize="lg" class="mb-4">
        {{ data?.date }}
      </GlobalParagraph>

      <GlobalPreTitle class="mb-2">
        {{ data?.preTitle }}
      </GlobalPreTitle>

      <GlobalTitle class="mb-6">
        {{ data?.title }}
      </GlobalTitle>

      <ContentDoc class="blog">
        <template #not-found>
          <h1>Document not found</h1>
        </template>
      </ContentDoc>
    </BlogWrapper>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const { data } = await useAsyncData(route.fullPath, () => queryContent(route.fullPath).findOne());
</script>
