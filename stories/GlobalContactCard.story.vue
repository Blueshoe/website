<script lang="ts" setup>
import { reactive } from 'vue';
const props = reactive([
  { title: 'Contact', tel: '+4989954594230', email: 'hello@blueshoe.io', color: 'text-bs-text', isButton: true }
]);
</script>

<template>
  <Story title="GlobalContactCard" :layout="{ type: 'grid', width: '100%' }">
    <Variant v-for="(propVariant, key) of props" :key="key" :title="'Variant ' + (key + 1)">
      <GlobalContactCard
        v-bind="{
          ...propVariant,
          color: propVariant.color as 'text-bs-text' | 'text-white' | undefined
        }"
      >
        <template #button>
          <GlobalButton label="Button" url="#" color="blue" target="_blank" />
        </template>
      </GlobalContactCard>
    </Variant>
  </Story>
</template>

<docs lang="md">
# GlobalContactCard

Global contact card component

## Props

- `title` - Card title
- `tel` - Telephone number
- `email` - Email address
- `color` - Card color (text-bs-text, text-white)

## Slots

- default - Button slot

## MD files usage

```
:::GlobalContactCard{:title="Title" :tel="+4911111111111" :email="email@email.com" :color="text-white" :isButton=true}

#button
::GlobalButton{:url="#" :label="Button" :color="blue" :target="_blank"}
::
:::
```
</docs>
