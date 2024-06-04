<!-- eslint-disable prettier/prettier -->
<script setup lang="ts">
import { reactive } from 'vue';
const props = reactive([{}, { accented: true }, { additionals: true }]);
</script>

<template>
  <Story title="GlobalPricingCard" :layout="{ type: 'grid', width: '100%' }">
    <Variant v-for="(propVariant, key) of props" :key="key" :title="'Variant ' + (key + 1)">
      <GlobalPricingCard v-bind="{ accented: propVariant.accented as boolean | undefined }">
        <template v-if="propVariant.additionals" #additionals>
          <GlobalPricingAdditional> Developer hour: 200€ </GlobalPricingAdditional>
        </template>
      </GlobalPricingCard>
    </Variant>
  </Story>
</template>

<docs lang="md">
# GlobalPricingCard

Global pricing card component

## Props

- `accented` - Whether to show this compenent as accented or not

## Slots

- title - Title content
- subtitle - Subtitle content
- priceDescription - Price description content
- price - Price content
- additionals - Additional content

## MD files usage

```
::GlobalPricingcard{:accented="true"}
#title
Title
#subtitle
Subtitle
#priceDescription
- test
- test2
- test3
#price
100€
#additionals
::::GlobalPricingAdditional
Developer hour: 200€
::::
::
```
</docs>
