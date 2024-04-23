<script lang="ts" setup>
import { reactive } from 'vue';
const props = reactive([{ bg: 'bg-bs-gray', bgSlider: 'bg-white', numberCards: 2 }]);
</script>

<template>
  <Story title="GlobalSliderSection" :layout="{ type: 'grid', width: '100%' }">
    <Variant v-for="(propVariant, key) of props" :key="key" :title="'Variant ' + (key + 1)">
      <GlobalSliderSection
        v-bind="{
          ...propVariant,
          bg: propVariant.bg as 'bg-bs-blue' | 'bg-white' | 'bg-bs-gray' | undefined,
          bgSlider: propVariant.bgSlider as 'bg-white' | undefined
        }"
      >
        <GlobalTitle class="mb-4">Title</GlobalTitle>

        <GlobalParagraph class="mb-6">Paragraph</GlobalParagraph>

        <template #card1>
          <GlobalSliderCard
            :logo="{ src: '/img/global/slide/winter-company.jpg', alt: 'Winter&Company' }"
            :tags="['Tag 1', 'Tag 2', 'Tag 3']"
            :isImage="true"
            :isButton="true"
            :desktopImage="{ src: '/img/global/slide/wintercompany.jpg', alt: 'winter&company' }"
            :mobileImage="{ src: '/img/global/slide/wintercompany_mobile.jpg', alt: 'winter&company' }"
            :is-story="true"
          >
            <GlobalParagraph class="mb-6">Paragraph</GlobalParagraph>

            <template #title>
              <GlobalTitle class="mb-4">Title</GlobalTitle>
            </template>

            <template #button>
              <GlobalButton label="Button" url="#" color="blue" target="_blank" />
            </template>
          </GlobalSliderCard>
        </template>
        <template #card2>
          <GlobalSliderCard
            :logo="{ src: '/img/global/slide/ofa-bamberg.jpg', alt: 'Ofa Bamberg' }"
            :tags="['Tag 1', 'Tag 2', 'Tag 3']"
            :isImage="true"
            :isButton="true"
            :desktopImage="{ src: '/img/global/slide/ofa-bamberg-foto.jpg', alt: 'Ofa Bamberg' }"
            :mobileImage="{ src: '/img/global/slide/ofa-bamberg-mobile.jpg', alt: 'Ofa Bamberg' }"
            :is-story="true"
          >
            <GlobalParagraph class="mb-6">Paragraph</GlobalParagraph>

            <template #title>
              <GlobalTitle class="mb-4">Title</GlobalTitle>
            </template>

            <template #button>
              <GlobalButton label="Button" url="#" color="blue" target="_blank" />
            </template>
          </GlobalSliderCard>
        </template>
      </GlobalSliderSection>
    </Variant>
  </Story>
</template>

<docs lang="md">
# GlobalSliderSection

Global slider section component

## Props

- `bg` - Background color (bg-bs-blue, bg-white, bg-bs-gray)
- `bgSlider` - Background color of the slider (bg-white)
- `numberCards` - Number of cards in the slider

## Slots

- default - Content of the slider
- Card1 - Content of the first card
- Card2 - Content of the second card
- ...

## MD files usage

```
::GlobalSliderSection{:numberCards=5}
:::GlobalTitle{.mb-6}
Title
:::
:::GlobalParagraph
Paragraph
:::

#card1
::GlobalSliderCard{:logo='{"src": "/path/to/logo", "alt": "alt logo"}' :desktopImage='{"src": "path/to/image", "alt": "alt image"}' :tags='["Tag 1", "Tag 2", "Tag 3"]'}
:::GlobalParagraph{:fontSize="lg"}
Paragraph
:::
#title
:::GlobalTitle
Title
:::
#button
:::GlobalButton{:url="#" :label="Button"}
:::
::

#card2
::GlobalSliderCard{:logo='{"src": "/path/to/logo", "alt": "alt logo"}' :desktopImage='{"src": "path/to/image", "alt": "alt image"}' :tags='["Tag 1", "Tag 2", "Tag 3"]'}
:::GlobalParagraph{:fontSize="lg"}
Paragraph
:::
#title
:::GlobalTitle
Title
:::
#button
:::GlobalButton{:url="#" :label="Button"}
:::
::

::
```
</docs>
