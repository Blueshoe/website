<script lang="ts" setup>
const props = [
  { label: 'Button 1', url: '#', color: 'blue', target: '_blank' },
  { label: 'Button 2', url: '#', color: 'green', target: '_self' },
  { label: 'Button 3', url: '#', color: 'black', target: '_blank' }
];

function initState() {
  return { label: 'Reactive', url: '#', color: 'blue', target: '_blank' };
}
const state = reactive({ label: 'Reactive', url: '#', color: 'blue', target: '_blank' });
</script>

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
</docs>

<template>
  <Story title="GlobalButton" :layout="{ type: 'grid', width: '200px' }">
    <Variant title="Reactive">
      <GlobalButton :color="state.color">
        {{ state.content }}
      </GlobalButton>
      <template #controls>
        <HstText v-model="state.color" title="Color" />
      </template>
    </Variant>

    <Variant v-for="(propVariant, key) of props" :key="key" :title="'Variant' + key">
      <GlobalButton v-bind="propVariant" />
    </Variant>
  </Story>
</template>
