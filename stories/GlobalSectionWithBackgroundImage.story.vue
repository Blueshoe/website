<script lang="ts" setup>
import { reactive } from 'vue';
const props = reactive([{ src: '/img/services/cloud_native_development_header.svg' }]);
</script>

<template>
  <Story title="GlobalSectionWithBackgroundImage" :layout="{ type: 'grid', width: '100%' }">
    <Variant v-for="(propVariant, key) of props" :key="key" :title="'Variant ' + (key + 1)">
      <GlobalSectionWithBackgroundImage
        v-bind="{
          ...propVariant
        }"
      >
        <GlobalTitle class="mb-4">Title</GlobalTitle>

        <GlobalParagraph class="mb-6">Paragraph</GlobalParagraph>
      </GlobalSectionWithBackgroundImage>
    </Variant>
  </Story>
</template>

<docs lang="md">
# GlobalSectionWithBackgroundImage

Global section with background image component

## Props

- `src` - Background image source

## Slots

- default - Content to be displayed on top of the background image

## MD files usage

```
:::GlobalSectionWithBackgroundImage{:src="/img/services/cloud_native_development_header.svg"}
::::GlobalPageTitle{.mb-6}
Page Title
::::
::::globalParagraph
Description
::::
:::
```
</docs>
