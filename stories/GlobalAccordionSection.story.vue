<script setup lang="ts">
import { reactive } from 'vue';
const props = reactive([
  {
    bg: 'bg-white',
    numberItems: 2,
    iconColor: 'text-bs-text',
    hoverColor: 'gray',
    borderColor: 'gray'
  },
  {
    bg: 'bg-bs-blue',
    numberItems: 2,
    iconColor: 'text-bs-text',
    hoverColor: 'white',
    borderColor: 'white'
  }
]);
</script>

<template>
  <Story title="GlobalAccordionSection" :layout="{ type: 'grid', width: '100%' }">
    <Variant v-for="(propVariant, key) of props" :key="key" :title="'Variant ' + (key + 1)">
      <GlobalAccordionSection
        v-bind="{
          ...propVariant,
          bg: propVariant.bg as 'bg-white' | 'bg-bs-blue' | undefined,
          iconColor: propVariant.iconColor as 'text-bs-text' | 'text-white' | undefined,
          hoverColor: propVariant.hoverColor as 'gray' | 'white' | undefined,
          borderColor: propVariant.borderColor as 'gray' | 'white' | undefined
        }"
      >
        <GlobalTitle :color="propVariant.bg === 'bg-white' ? 'text-bs-text' : 'text-white'" class="mb-4"
          >Title accordion</GlobalTitle
        >

        <GlobalParagraph :color="propVariant.bg === 'bg-white' ? 'text-bs-text' : 'text-white'" class="mb-6"
          >Paragraph</GlobalParagraph
        >

        <template #label-1>
          <GlobalTitle :color="propVariant.bg === 'bg-white' ? 'text-bs-text' : 'text-white'" size="sm" tag="h4"
            >First accordion</GlobalTitle
          >
        </template>
        <template #text-1>
          <GlobalParagraph :color="propVariant.bg === 'bg-white' ? 'text-bs-text' : 'text-white'" font-size="lg"
            >Text</GlobalParagraph
          >
        </template>
        <template #label-2>
          <GlobalTitle :color="propVariant.bg === 'bg-white' ? 'text-bs-text' : 'text-white'" size="sm" tag="h4"
            >Second accordion</GlobalTitle
          >
        </template>
        <template #text-2>
          <GlobalParagraph :color="propVariant.bg === 'bg-white' ? 'text-bs-text' : 'text-white'" font-size="lg"
            >Text</GlobalParagraph
          >
        </template>
      </GlobalAccordionSection>
    </Variant>
  </Story>
</template>

<docs lang="md">
# GlobalAccordionSection

Global accordion section component

## Props

- `bg` - Background color (bg-bs-blue, bg-white)
- `numberItems` - Number of items
- `iconColor` - Icon color (text-white, text-bs-text)
- `hoverColor` - Hover color (white, gray)
- `borderColor` - Border color (white, gray)

## Slots

- default - Content
- label-1 - Label for first accordion
- text-1 - Text for first accordion
- label-2 - Label for second accordion
- text-2 - Text for second accordion
- ...

## MD files usage

```
::GlobalAccordionSection{bg="bg-white" :color="text-bs-text" :iconColor="text-bs-text" :hoverColor="gray" :borderColor="gray" :numberItems=2}
:::GlobalTitle{.mb-6}
Title accordion
:::
:::GlobalParagraph{.mb-4}
Paragraph
:::
#label-1
::GlobalTitle{:size="sm" :tag="h4"}
First accordion
::
#text-1
::GlobalParagraph{:fontSize="lg" .leading-6}
Text
::
#label-2
::GlobalTitle{:size="sm" :tag="h4"}
Second accordion
::
#text-2
::GlobalParagraph{:fontSize="lg" .leading-6}
Text
::
::
```
</docs>
