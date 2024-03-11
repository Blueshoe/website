<script lang="ts" setup>
import { reactive } from 'vue';
const props = reactive([
  { label: 'Button 1', url: '#', color: 'blue', target: '_blank' },
  { label: 'Button 2', url: '#', color: 'green', target: '_self' },
  { label: 'Button 3', url: '#', color: 'black', target: '_blank' }
]);
</script>

<template>
  <Story title="GlobalButton" :layout="{ type: 'grid', width: '100%' }">
    <Variant v-for="(propVariant, key) of props" :key="key" :title="'Variant ' + (key + 1)">
      <GlobalButton
        v-bind="{
          ...propVariant,
          color: propVariant.color as 'blue' | 'green' | 'black' | undefined,
          target: propVariant.target as '_blank' | '_self' | undefined
        }"
      />
    </Variant>
  </Story>
</template>

<docs lang="md">
# GlobalButton

Global button component

## Props

- `label` - Button label
- `url` - Button URL
- `color` - Button color (blue, green, black)
- `target` - Button target (\_blank, \_self)

## Slots

- No slots

## MD files usage

```
::GlobalButton{:label="label" :url="url" :color="color" :target="target"}

::
```
</docs>
