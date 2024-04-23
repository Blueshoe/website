<script lang="ts" setup>
import { reactive } from 'vue';
const props = reactive([{ color: 'text-bs-blue' }, { color: 'text-bs-green' }]);
</script>

<template>
  <Story title="GlobalPreTitle" :layout="{ type: 'grid', width: '100%' }">
    <Variant v-for="(propVariant, key) of props" :key="key" :title="'Variant ' + (key + 1)">
      <GlobalPreTitle
        v-bind="{
          ...propVariant,
          color: propVariant.color as 'text-bs-blue' | 'text-bs-green' | undefined
        }"
      >
        Pre Title
      </GlobalPreTitle>
    </Variant>
  </Story>
</template>

<docs lang="md">
# GlobalPreTitle

Global pre title component

## Props

- `color` - Pre Title color (text-bs-blue, text-bs-green)

## Slots

- default - Pre Title text

## MD files usage

```
::GlobalPreTitle{:color="text-bs-blue" .mb-3}
  Pre Title
::
```
</docs>
