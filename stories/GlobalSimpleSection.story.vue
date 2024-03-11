<script lang="ts" setup>
import { reactive } from 'vue';
const props = reactive([
  { bg: 'bg-white', isButton: true, width: 'w-full' },
  { bg: 'bg-bs-gray', isButton: false, width: 'w-full' },
  { bg: 'bg-bs-blue', isButton: false, width: 'w-full' }
]);
</script>

<template>
  <Story title="GlobalSimpleSection" :layout="{ type: 'grid', width: '100%' }">
    <Variant v-for="(propVariant, key) of props" :key="key" :title="'Variant ' + (key + 1)">
      <GlobalSimpleSection
        v-bind="{
          ...propVariant,
          bg: propVariant.bg as 'bg-bs-gray' | 'bg-white' | 'bg-bs-blue' | undefined
        }"
      >
        <GlobalTitle :color="propVariant.bg === 'bg-bs-blue' ? 'text-white' : 'text-bs-text'" class="mb-4"
          >Title section</GlobalTitle
        >

        <GlobalParagraph :color="propVariant.bg === 'bg-bs-blue' ? 'text-white' : 'text-bs-text'" class="mb-6"
          >Paragraph</GlobalParagraph
        >

        <template #button>
          <GlobalButton label="Button" url="#" color="blue" target="_blank" />
        </template>
      </GlobalSimpleSection>
    </Variant>
  </Story>
</template>

<docs lang="md">
# GlobalSimpleSection

Global simple section component

## Props

- `bg` - Background color (bg-bs-gray, bg-white, bg-bs-blue)
- `isButton` - Show button
- `width` - Width of the section

## Slots

- default - Section content
- button - Button

## MD files usage

```
::GlobalSimpleSection{:bg="bg-white" :isButton="true" :width="w-full"}
:::GlobalTitle{.mb-6}
Title section
:::
:::GlobalParagraph{.mb-6}
Paragraph 1
:::
:::GlobalParagraph
Paragraph 2
:::
::
```
</docs>
