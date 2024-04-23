<script lang="ts" setup>
import { reactive } from 'vue';
const props = reactive([{ bg: 'bg-white', isMainSlot: true, numberCards: 3 }]);
</script>

<template>
  <Story title="GlobalSmallCardWithImageSection" :layout="{ type: 'grid', width: '100%' }">
    <Variant v-for="(propVariant, key) of props" :key="key" :title="'Variant ' + (key + 1)">
      <GlobalSmallCardWithImageSection
        v-bind="{
          ...propVariant,
          bg: propVariant.bg as 'bg-bs-blue' | 'bg-white' | 'bg-bs-gray' | undefined
        }"
      >
        <GlobalTitle class="mb-4">Title</GlobalTitle>

        <GlobalParagraph class="mb-6">Paragraph</GlobalParagraph>

        <template #cards>
          <GlobalSmallCardWithImage src="/img/global/icons/cloud-storage.svg" href="#" :isStory="true">
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

          <GlobalSmallCardWithImage src="/img/global/icons/cloud-storage.svg" href="#" :isStory="true">
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

          <GlobalSmallCardWithImage src="/img/global/icons/cloud-storage.svg" href="#" :isStory="true">
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
        </template>
      </GlobalSmallCardWithImageSection>
    </Variant>
  </Story>
</template>

<docs lang="md">
# GlobalSmallCardWithImageSection

Global small card with image section component

## Props

- `bg` - Background color (bg-bs-blue, bg-white)
- `isMainSlot` - Main slot
- `numberCards` - Number of cards

## Slots

- default - Content
- cards - Cards

## MD files usage

```
:::GlobalSmallCardWithImageSection{ :bg="bg-bs-blue" :numberCards=3}
::::GlobalTitle{:color="text-white" .text-center .mb-6}
Title
::::
::::GlobalParagraph{color="text-white" .mb-6}
Paragraph
::::
#cards

::GlobalSmallCardWithImage{:src="path/to/image" :href="path/to/link"}
:::GlobalParagraph{:fontSize="lg" .leading-6 .mb-4}
Paragraph
:::
#title
:::GlobalTitle{:size="xs" :tag="h3" :color="text-bs-blue" .uppercase .mb-3}
Title
:::
::

::GlobalSmallCardWithImage{:src="path/to/image" :href="path/to/link"}
:::GlobalParagraph{:fontSize="lg" .leading-6 .mb-4}
Paragraph
:::
#title
:::GlobalTitle{:size="xs" :tag="h3" :color="text-bs-blue" .uppercase .mb-3}
Title
:::
::

::GlobalSmallCardWithImage{:src="path/to/image" :href="path/to/link"}
:::GlobalParagraph{:fontSize="lg" .leading-6 .mb-4}
Paragraph
:::
#title
:::GlobalTitle{:size="xs" :tag="h3" :color="text-bs-blue" .uppercase .mb-3}
Title
:::
::
:::
```
</docs>
