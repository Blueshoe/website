<script lang="ts" setup>
import { reactive } from 'vue';
const props = reactive([
  { src: '/img/global/icons/cloud-storage.svg', href: '#', bg: 'bg-white', target: '_blank', isStory: true },
  { src: '/img/global/icons/cloud-storage.svg', href: '#', bg: 'bg-bs-blue', target: '_blank', isStory: true }
]);
</script>

<template>
  <Story title="GlobalSmallCardWithImage" :layout="{ type: 'grid', width: '100%' }">
    <Variant v-for="(propVariant, key) of props" :key="key" :title="'Variant ' + (key + 1)">
      <GlobalSmallCardWithImage
        v-bind="{
          ...propVariant,
          bg: propVariant.bg as 'bg-bs-blue' | 'bg-white' | undefined,
          target: propVariant.target as '_blank' | '_self' | undefined
        }"
      >
        <GlobalParagraph
          :color="propVariant.bg === 'bg-white' ? 'text-bs-text' : 'text-white'"
          font-size="lg"
          class="mb-6"
          >Paragraph</GlobalParagraph
        >

        <template #title>
          <GlobalTitle
            :color="propVariant.bg === 'bg-white' ? 'text-bs-text' : 'text-white'"
            size="xs"
            tag="h3"
            class="mb-4"
            >Title</GlobalTitle
          >
        </template>
      </GlobalSmallCardWithImage>
    </Variant>
  </Story>
</template>

<docs lang="md">
# GlobalSmallCardWithImage

Global small card with image component

## Props

- `src` - Image source
- `href` - Link URL
- `bg` - Background color (bg-bs-blue, bg-white)
- `target` - Link target (\_blank, \_self)

## Slots

- default - Content
- title - Title

## MD files usage

```
::GlobalSmallCardWithImage{:src="path/to/image" :href="path/to/link"}
:::GlobalParagraph{:fontSize="lg" .leading-6 .mb-4}
Paragraph
:::
#title
:::GlobalTitle{:size="xs" :tag="h3" :color="text-bs-blue" .uppercase .mb-3}
Title
:::
::
```
</docs>
