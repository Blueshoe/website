<script lang="ts" setup>
import { reactive } from 'vue';
const props = reactive([{ color: 'text-bs-text' }, { color: 'text-bs-blue' }, { color: 'text-bs-green' }]);
</script>

<template>
  <Story title="GlobalColorTitle" :layout="{ type: 'grid', width: '100%' }">
    <Variant v-for="(propVariant, key) of props" :key="key" :title="'Variant ' + (key + 1)">
      <GlobalColorTitle
        v-bind="{
          ...propVariant,
          color: propVariant.color as 'text-bs-text' | 'text-bs-blue' | 'text-bs-green' | 'text-white' | undefined
        }"
      >
        Title
      </GlobalColorTitle>
    </Variant>
  </Story>
</template>

<docs lang="md">
# GlobalColorTitle

Global color title component

## Props

- `color` - Title color (text-bs-text, text-bs-blue, text-bs-green, text-white)

## Slots

- default - Title content

## MD files usage

```
::GlobalColorTitle{:color="text-bs-blue" .mb-6}
Title
::
```
</docs>
