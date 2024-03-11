<script lang="ts" setup>
import { reactive } from 'vue';
const props = reactive([
  {
    image: '/img/services/cloud-native.jpg',
    alt: 'blue shoes',
    bg: 'bg-bs-gray',
    imagePosition: 'left',
    isButton: false,
    isStory: true
  },
  {
    image: '/img/services/cloud-native.jpg',
    alt: 'blue shoes',
    bg: 'bg-white',
    imagePosition: 'right',
    isButton: true,
    isStory: true
  }
]);
</script>

<template>
  <Story title="GlobalSectionWithImage" :layout="{ type: 'grid', width: '100%' }">
    <Variant v-for="(propVariant, key) of props" :key="key" :title="'Variant ' + (key + 1)">
      <GlobalSectionWithImage
        v-bind="{
          ...propVariant,
          bg: propVariant.bg as 'bg-bs-gray' | 'bg-white' | undefined,
          imagePosition: propVariant.imagePosition as 'left' | 'right' | undefined
        }"
      />
    </Variant>
  </Story>
</template>

<docs lang="md">
# GlobalSectionWithImage

Global section with image component

## Props

- `image` - Image URL
- `alt` - Image alt
- `bg` - Background color (bg-bs-gray, bg-white)
- `imagePosition` - Image position (left, right)
- `isButton` - Show button

## Slots

- default - Content
- button - Button

## MD files usage

```
::GlobalSectionWithImage{:image="/img/services/cloud-native.jpg" :alt="blue shoes" :imagePosition="right"}
:::GlobalTitle{.mb-6}
Title
:::
:::GlobalParagraph
Paragraph
:::
::
```
</docs>
