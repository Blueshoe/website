<script lang="ts" setup>
import { reactive } from 'vue';
const props = reactive([{ src: '/img/global/icons/conception-hannes.svg', isStory: true }]);
</script>

<template>
  <Story title="GlobalListCardWithImage" :layout="{ type: 'grid', width: '100%' }">
    <Variant v-for="(propVariant, key) of props" :key="key" :title="'Variant ' + (key + 1)">
      <GlobalListCardWithImage
        v-bind="{
          ...propVariant
        }"
      >
        <GlobalTitle class="mb-4">Title</GlobalTitle>

        <GlobalParagraph class="mb-6">Paragraph</GlobalParagraph>
      </GlobalListCardWithImage>
    </Variant>
  </Story>
</template>

<docs lang="md">
# GlobalListCardWithImage

Global list card with image component

## Props

- `src` - Image source

## Slots

- default - Content

## MD files usage

```
::GlobalListCardWithImage{:src="/img/global/icons/conception-hannes.svg"}
:::GlobalTitle{:size="sm" :tag="h4" .mb-4}
Title
:::
:::GlobalParagraph{:fontSize="lg"}
Paragraph
:::
::
```
</docs>
