<script lang="ts" setup>
import { reactive } from 'vue';
const props = reactive([
  { bg: 'bg-bs-gray', numberCards: 3, isButton: true, dotColor: 'white' },
  { bg: 'bg-white', numberCards: 3, isButton: false, dotColor: 'black' }
]);
</script>

<template>
  <Story title="GlobalListCardSliderSection" :layout="{ type: 'grid', width: '100%' }">
    <Variant v-for="(propVariant, key) of props" :key="key" :title="'Variant ' + (key + 1)">
      <GlobalListCardSliderSection
        v-bind="{
          ...propVariant,
          bg: propVariant.bg as 'bg-bs-gray' | 'bg-white' | undefined,
          dotColor: propVariant.dotColor as 'white' | 'black' | undefined
        }"
      >
        <GlobalTitle> Title </GlobalTitle>
        <GlobalParagraph> Paragraph </GlobalParagraph>
        <template #card1> Card 1 </template>
        <template #card2> Card 2 </template>
        <template #card3> Card 3 </template>
      </GlobalListCardSliderSection>
    </Variant>
  </Story>
</template>

<docs lang="md">
# GlobalListCardSliderSection

Global list card slider section component

## Props

- `bg` - Background color (bg-bs-gray, bg-white)
- `numberCards` - Number of cards
- `isButton` - Show button
- `dotColor` - Dot color (white, black)

## Slots

- default - Title and paragraph
- card1 - Card 1
- card2 - Card 2
- ...

## MD files usage

```
::GlobalListCardSliderSection{:bg="bg-bs-gray" :dotColor="black" :numberCards=4}
:::GlobalTitle{.mb-6 data-title="Kubernetes"}
Title
:::
:::GlobalParagraph{.mb-6}
Paragraph
:::
#card1
::GlobalListCardWithImage{:src="/img/global/icons/consulting-hannes.svg"}
:::GlobalTitle{:size="sm" :tag="h4" .mb-4}
Title card 1
:::
:::GlobalParagraph{:fontSize="lg"}
Paragraph card 1
:::
::
#card2
::GlobalListCardWithImage{:src="/img/global/icons/conception-hannes.svg"}
:::GlobalTitle{:size="sm" :tag="h4" .mb-4}
Title card 2
:::
:::GlobalParagraph{:fontSize="lg"}
Paragraph card 2
:::
::
#card3
::GlobalListCardWithImage{:src="/img/global/icons/development-hannes.svg"}
:::GlobalTitle{:size="sm" :tag="h4" .mb-4}
Title card 3
:::
:::GlobalParagraph{:fontSize="lg"}
Paragraph card 3
:::
::
::
```
</docs>
