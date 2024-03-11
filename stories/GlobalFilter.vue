<script lang="ts" setup>
import { reactive } from 'vue';

import { storeToRefs } from 'pinia';
import { useGeneralStore } from '~/store';

const generalStore = useGeneralStore();
const { filters } = storeToRefs(generalStore);

const props = reactive([{ initialFilters: filters }]);
</script>

<template>
  <Story title="GlobalFilter" :layout="{ type: 'grid', width: '100%' }">
    <Variant v-for="(propVariant, key) of props" :key="key" :title="'Variant ' + (key + 1)">
      <GlobalFilter
        v-bind="{
          ...propVariant
        }"
      />
    </Variant>
  </Story>
</template>

<docs lang="md">
# GlobalFilter

Global filter component

## Props

- `initialFilters` - Initial filters

## Slots

- No slots

## MD files usage

```

```
</docs>
