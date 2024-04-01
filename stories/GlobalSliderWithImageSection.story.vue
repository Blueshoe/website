<script lang="ts" setup>
import { reactive } from 'vue';
const props = reactive([
  {
    bg: 'bg-white',
    numberCards: 3,
    images: [
      { src: '/img/services/cost_2.svg', alt: 'cost' },
      { src: '/img/services/cube.svg', alt: 'cube' },
      { src: '/img/services/handshake.svg', alt: 'handshake' }
    ],
    imagePosition: 'left',
    dotColor: 'black'
  },
  {
    bg: 'bg-bs-blue',
    numberCards: 3,
    images: [
      { src: '/img/services/cost_2.svg', alt: 'cost' },
      { src: '/img/services/cube.svg', alt: 'cube' },
      { src: '/img/services/handshake.svg', alt: 'handshake' }
    ],
    imagePosition: 'right',
    dotColor: 'white'
  }
]);
</script>

<template>
  <Story title="GlobalSliderWithImageSection" :layout="{ type: 'grid', width: '100%' }">
    <Variant v-for="(propVariant, key) of props" :key="key" :title="'Variant ' + (key + 1)">
      <GlobalSliderWithImageSection
        v-bind="{
          ...propVariant,
          bg: propVariant.bg as 'bg-bs-blue' | 'bg-white' | undefined,
          imagePosition: propVariant.imagePosition as 'left' | 'right' | undefined,
          dotColor: propVariant.dotColor as 'white' | 'black' | undefined
        }"
      >
        <GlobalTitle :color="propVariant.bg === 'bg-white' ? 'text-bs-text' : 'text-white'" class="mb-4"
          >Title</GlobalTitle
        >
        <template #card1>
          <GlobalTitle
            :color="propVariant.bg === 'bg-white' ? 'text-bs-text' : 'text-white'"
            size="lg"
            tag="h3"
            class="mb-4"
            >Title card 1</GlobalTitle
          >
          <GlobalParagraph font-size="lg" :color="propVariant.bg === 'bg-white' ? 'text-bs-text' : 'text-white'">
            Paragraph card 1
          </GlobalParagraph>
        </template>
        <template #card2>
          <GlobalTitle
            :color="propVariant.bg === 'bg-white' ? 'text-bs-text' : 'text-white'"
            size="lg"
            tag="h3"
            class="mb-4"
            >Title card 2</GlobalTitle
          >
          <GlobalParagraph font-size="lg" :color="propVariant.bg === 'bg-white' ? 'text-bs-text' : 'text-white'">
            Paragraph card 2
          </GlobalParagraph>
        </template>
        <template #card3>
          <GlobalTitle
            :color="propVariant.bg === 'bg-white' ? 'text-bs-text' : 'text-white'"
            size="lg"
            tag="h3"
            class="mb-4"
            >Title card 3</GlobalTitle
          >
          <GlobalParagraph font-size="lg" :color="propVariant.bg === 'bg-white' ? 'text-bs-text' : 'text-white'">
            Paragraph card 3
          </GlobalParagraph>
        </template>
        <template #summary>
          <GlobalParagraph font-size="lg" :color="propVariant.bg === 'bg-white' ? 'text-bs-text' : 'text-white'">
            Paragraph summary
          </GlobalParagraph>
        </template>
      </GlobalSliderWithImageSection>
    </Variant>
  </Story>
</template>

<docs lang="md">
# GlobalSliderWithImageSection

Global slider with image section component

## Props

- `bg` - Background color (bg-bs-blue, bg-white)
- `numberCards` - Number of cards
- `images` - Array of images
- `imagePosition` - Image position (left, right)
- `dotColor` - Dot color (white, black)

## Slots

- default - Content
- card1 - Content for card 1
- card2 - Content for card 2
- card3 - Content for card 3
- summary - Optional. Summary content

## MD files usage

```
:::GlobalSliderWithImageSection{:numberCards=3 :images='[{"src": "path/to/image", "alt": "alt image"}, {"src": "path/to/image", "alt": "alt image"}, {"src": "path/to/image", "alt": "alt image"}]'}
::::GlobalTitle{:color="text-white" .mb-6}
Title
::::
#card1
::GlobalTitle{:color="text-white" :tag="h3" :size="lg" .mb-4 }
Card title
::
::GlobalParagraph{:fontSize="lg" :color="text-white"}
Card paragraph
::
#card2
::GlobalTitle{:color="text-white" :tag="h3" :size="lg" .mb-4}
Card title
::
::GlobalParagraph{:fontSize="lg" :color="text-white"}
Card paragraph
::
#card3
::GlobalTitle{:color="text-white" :tag="h3" :size="lg" .mb-4}
Card title
::
::GlobalParagraph{:fontSize="lg" :color="text-white"}
Card paragraph
::

#summary
::GlobalParagraph{:fontSize="lg" :color="text-white"}
Summary paragraph
::
:::
```
</docs>
