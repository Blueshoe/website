<script lang="ts" setup>
import { reactive } from 'vue';
const props = reactive([
  { color: 'text-bs-text', fontSize: 'lg' },
  { label: 'text-bs-text', fontSize: 'xl' }
]);
</script>

<template>
  <Story title="GlobalBlock" :layout="{ type: 'grid', width: '100%' }">
    <Variant v-for="(propVariant, key) of props" :key="key" :title="'Variant ' + (key + 1)">
      <GlobalBlock
        v-bind="{
          ...propVariant,
          color: propVariant.color as 'text-bs-text' | 'text-white' | undefined,
          fontSize: propVariant.fontSize as 'lg' | 'xl' | undefined
        }"
        :class="[key === 0 ? 'ul-disk' : 'ol-decimal']"
      >
        <ul v-if="key === 0">
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
        <ol v-else>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ol>
      </GlobalBlock>
    </Variant>
  </Story>
</template>

<docs lang="md">
# GlobalBlock

Global block component

## Props

- `color` - Text color (text-bs-text, text-white)
- `fontSize` - Font size (lg, xl)

## Slots

- default - List items

## MD files usage

```
::GlobalBlock{:font-size="lg" :color="text-bs-text" .ul-disk}
- Item 1
- Item 2
- Item 3
::

::GlobalBlock{:font-size="lg" :color="text-bs-text" .ol-decimal}
- Item 1
- Item 2
- Item 3
::
```
</docs>
