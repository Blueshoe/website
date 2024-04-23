<script lang="ts" setup>
import { reactive } from 'vue';
const props = reactive([{ input: '> gefyra up' }]);
</script>

<template>
  <Story title="BlogTerminal" :layout="{ type: 'grid', width: '100%' }">
    <Variant v-for="(propVariant, key) of props" :key="key" :title="'Variant ' + (key + 1)">
      <BlogTerminal
        v-bind="{
          ...propVariant
        }"
      >
        Description
        <template #lines>
          <ul>
            <li>[INFO] Line 1</li>
            <li>[INFO] Line 2</li>
            <li>[INFO] Line 3</li>
            <li>[INFO] Line 4</li>
            <li>[INFO] Line 5</li>
          </ul>
        </template>
      </BlogTerminal>
    </Variant>
  </Story>
</template>

<docs lang="md">
# BlogTerminal

Global terminal component

## Props

- `input` - Input

## Slots

- default - Title
- lines - Lines

## MD files usage

```
:::BlogTerminal{:input='> gefyra up'}
Description
#lines
- \[INFO] Installing Gefyra Operator
- \[INFO] Pulling image "quay.io/gefyra/operator:latest"
- \[INFO] Successfully pulled image "quay.io/gefyra/operator:latest" in 638.596569ms
- \[INFO] Pulling image "quay.io/gefyra/stowaway:latest"
- \[INFO] Successfully pulled image "quay.io/gefyra/stowaway:latest" in 7.092248247s
- \[INFO] Operator became ready in 15.2887 seconds
- \[INFO] Creating Docker network
- \[INFO] Created network 'gefyra' (156bace408)
:::
```
</docs>
