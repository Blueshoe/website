<script lang="ts" setup>
import { reactive } from 'vue';
const props = reactive([
  { color: 'text-bs-text', fontSize: 'lg' },
  { color: 'text-bs-text', fontSize: 'xl' },
  { color: 'text-bs-text', fontSize: '2xl' }
]);
</script>

<template>
  <Story title="GlobalParagraph" :layout="{ type: 'grid', width: '100%' }">
    <Variant v-for="(propVariant, key) of props" :key="key" :title="'Variant ' + (key + 1)">
      <GlobalParagraph
        v-bind="{
          ...propVariant,
          color: propVariant.color as 'text-bs-text' | 'text-white' | undefined,
          fontSize: propVariant.fontSize as 'lg' | 'xl' | '2xl' | undefined
        }"
      >
        Paragraph {{ key + 1 }}
      </GlobalParagraph>
    </Variant>
  </Story>
</template>

<docs lang="md">
# GlobalParagraph

Global paragraph component

## Props

- `color` - Paragraph color (text-bs-text, text-white)

## Slots

- default - Paragraph content

## MD files usage

```
::globalParagraph{:fontSize="lg" :color="text-bs-text"}
Paragraph
::
```
</docs>
