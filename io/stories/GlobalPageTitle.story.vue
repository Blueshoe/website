<script lang="ts" setup>
import { reactive } from 'vue';
const props = reactive([{ color: 'text-bs-text' }, { color: 'text-bs-blue' }, { color: 'text-bs-green' }]);
</script>

<template>
  <Story title="GlobalPageTitle" :layout="{ type: 'grid', width: '100%' }">
    <Variant v-for="(propVariant, key) of props" :key="key" :title="'Variant ' + (key + 1)">
      <GlobalPageTitle
        v-bind="{
          ...propVariant,
          color: propVariant.color as 'text-bs-text' | 'text-bs-blue' | 'text-bs-green' | 'text-white' | undefined
        }"
      >
        Title {{ key + 1 }}
      </GlobalPageTitle>
    </Variant>
  </Story>
</template>

<docs lang="md">
# GlobalPageTitle

Global page title component

## Props

- `color` - Title color (text-bs-text, text-bs-blue, text-bs-green, text-white)

## Slots

- default - Title content

## MD files usage

```
::GlobalPageTitle{:color="text-bs-text"}
Title
::
```
</docs>
