<script lang="ts" setup>
import { reactive } from 'vue';
const props = reactive([
  { src: '/img/services/gang1-klein.webp', width: 'w-full', isButton: true, borderColor: 'border-bs-blue' },
  { src: '/img/services/blue_shoes-32.jpg', width: 'w-2/3', isButton: false, borderColor: 'border-bs-green' }
]);
</script>

<template>
  <Story title="GlobalCardWithBackgroundImageSection" :layout="{ type: 'grid', width: '100%' }">
    <Variant v-for="(propVariant, key) of props" :key="key" :title="'Variant ' + (key + 1)">
      <GlobalCardWithBackgroundImageSection
        v-bind="{
          ...propVariant,
          width: propVariant.width as 'w-full' | 'w-2/3' | undefined
        }"
      >
        <GlobalTitle class="mb-4">Title</GlobalTitle>

        <GlobalParagraph class="mb-6">Paragraph</GlobalParagraph>

        <template #button>
          <GlobalButton label="Button" url="#" color="blue" target="_blank" />
        </template>
      </GlobalCardWithBackgroundImageSection>
    </Variant>
  </Story>
</template>

<docs lang="md">
# GlobalCardWithBackgroundImageSection

Global card with background image section component

## Props

- `src` - Image source
- `width` - Image width (w-full, w-2/3)
- `isButton` - Show button
- `borderColor` - Border color (border-bs-blue, border-bs-green)

## Slots

- default - Content
- button - Button

## MD files usage

```
::GlobalCardWithBackgroundImageSection{:src="/path/to/image" :isButton=true  :width="md:w-2/3"}
:::GlobalTitle{.mb-6}
Title
:::
:::GlobalParagraph
Paragraph
:::
#button
::GlobalButton{:url="#" :label="Button"}
::
::
```
</docs>
