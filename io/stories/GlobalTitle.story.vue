<script setup lang="ts">
import { reactive } from 'vue';
const props = reactive([
  { color: 'text-bs-text', font: 'font-oswald', size: 'xs', tag: 'h1' },
  { color: 'text-bs-blue', font: 'font-source-sans-pro', size: 'sm', tag: 'h2' },
  { color: 'text-bs-green', font: 'font-oswald', size: 'md', tag: 'h3' },
  { color: 'text-bs-text', font: 'font-oswald', size: 'lg', tag: 'h4' },
  { color: 'text-bs-text', font: 'font-oswald', size: 'xl', tag: 'h5' },
  { color: 'text-bs-text', font: 'font-oswald', size: '2xl', tag: 'h6' }
]);
</script>

<template>
  <Story title="GlobalTitle" :layout="{ type: 'grid', width: '100%' }">
    <Variant v-for="(propVariant, key) of props" :key="key" :title="'Variant ' + (key + 1)">
      <GlobalTitle
        v-bind="{
          ...propVariant,
          color: propVariant.color as 'text-bs-text' | 'text-bs-blue' | 'text-bs-green' | 'text-white' | undefined,
          font: propVariant.font as 'font-oswald' | 'font-source-sans-pro' | undefined,
          size: propVariant.size as 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | undefined
        }"
      >
        {{ 'Title ' + (key + 1) }}
      </GlobalTitle>
    </Variant>
  </Story>
</template>

<docs lang="md">
# GlobalTitle

Global title component

## Props

- `color` - Title color (text-bs-text, text-bs-blue, text-bs-green, text-white)
- `font` - Title font (font-oswald, font-source-sans-pro)
- `size` - Title size (xs, sm, md, lg, xl, 2xl)
- `tag` - Title tag (h1, h2, h3, h4, h5, h6)

## Slots

- default - Title content

## MD files usage

```
::GlobalTitle{:color="text-bs-text" :font="font-oswald" :size="lg" :tag="h2"}
Title
::
```
</docs>
