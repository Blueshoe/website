<script lang="ts" setup>
import { reactive } from 'vue';
const props = reactive([
  {
    isStory: true,
    bg: 'bg-white',
    logo: { src: '/img/global/slide/winter-company.jpg', alt: 'winter&company' },
    tags: ['Tag 1', 'Tag 2', 'Tag 3'],
    isImage: true,
    isButton: true,
    desktopImage: { src: '/img/global/slide/wintercompany.jpg', alt: 'winter&company' },
    mobileImage: { src: '/img/global/slide/wintercompany_mobile.jpg', alt: 'winter&company' }
  }
]);
</script>

<template>
  <Story title="GlobalSliderCard" :layout="{ type: 'grid', width: '100%' }">
    <Variant v-for="(propVariant, key) of props" :key="key" :title="'Variant ' + (key + 1)">
      <GlobalSliderCard
        v-bind="{
          ...propVariant
        }"
      >
        <GlobalParagraph class="mb-6">Paragraph</GlobalParagraph>

        <template #title>
          <GlobalTitle class="mb-4">Title</GlobalTitle>
        </template>

        <template #button>
          <GlobalButton label="Button" url="#" color="blue" target="_blank" />
        </template>
      </GlobalSliderCard>
    </Variant>
  </Story>
</template>

<docs lang="md">
# GlobalSliderCard

Global slider card component

## Props

- `story` - Story
- `bg` - Background color
- `logo` - Logo image
- `tags` - Tags
- `isImage` - Show image
- `isButton` - Show button
- `desktopImage` - Desktop image
- `mobileImage` - Mobile image

## Slots

- default - content slot
- title - title slot
- button - button slot

## MD files usage

```
::GlobalSliderCard{:logo='{"src": "/path/to/logo", "alt": "alt logo"}' :desktopImage='{"src": "path/to/image", "alt": "alt image"}' :mobileImage='{"src": "path/to/image", "alt": "alt image"}' :tags='["Tag 1", "Tag 2", "Tag 3"]'}
:::GlobalParagraph
Paragraph
:::
#title
:::GlobalTitle
Title
:::
#button
:::GlobalButton{:url="#" :label="Button" :target="_blank"}
:::
::
```
</docs>
