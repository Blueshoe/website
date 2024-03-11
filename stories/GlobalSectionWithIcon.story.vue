<script lang="ts" setup>
import { reactive } from 'vue';
const props = reactive([
  {
    image: '/img/services/wagtail_cms_2.jpg',
    alt: 'wagtail cms',
    bg: 'bg-bs-gray',
    imagePosition: 'left',
    isButton: false,
    isStory: true
  },
  {
    image: '/img/services/wagtail_cms_2.jpg',
    alt: 'wagtail cms',
    bg: 'bg-white',
    imagePosition: 'right',
    isButton: true,
    isStory: true
  }
]);
</script>

<template>
  <Story title="GlobalSectionWithIcon" :layout="{ type: 'grid', width: '100%' }">
    <Variant v-for="(propVariant, key) of props" :key="key" :title="'Variant ' + (key + 1)">
      <GlobalSectionWithIcon
        v-bind="{
          ...propVariant,
          bg: propVariant.bg as 'bg-bs-gray' | 'bg-white' | undefined,
          imagePosition: propVariant.imagePosition as 'left' | 'right' | undefined
        }"
      >
        <GlobalTitle class="mb-4">Title</GlobalTitle>

        <GlobalParagraph class="mb-6">Paragraph</GlobalParagraph>

        <template #button>
          <GlobalButton url="#" label="Button" color="green" />
        </template>
      </GlobalSectionWithIcon>
    </Variant>
  </Story>
</template>

<docs lang="md">
# GlobalSectionWithIcon

Global section with icon component

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
::GlobalSectionWithIcon{:image="/img/services/oscar.jpg" :alt="oscar" :bg="bg-bs-blue" :imagePosition="left" :isButton=true}
:::GlobalTitle{:color="text-white" .mb-6}
Title
:::
:::GlobalParagraph{:color="text-white" .mb-4}
Paragraph
:::
#button
::GlobalButton{:url="#" :label="Button" :color="green"}
::
::
```
</docs>
