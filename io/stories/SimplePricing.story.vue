<script setup lang="ts">
import { reactive } from 'vue';
const props = reactive([{ cardCount: 3 }]);
</script>

<template>
  <Story title="GlobalSimplePricing" :layout="{ type: 'grid', width: '100%' }">
    <Variant v-for="(propVariant, key) of props" :key="key" :title="'Variant ' + (key + 1)">
      <GlobalSimplePricing
        v-bind="{
          ...propVariant,
          cardCount: propVariant.cardCount as number | undefined
        }"
      >
        <template #title> Title </template>
        <template #card1>
          <GlobalPricingCard>
            <template #title> Workshop 1 </template>
            <template #priceDescription>
              <ul class="price-desc">
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
              </ul>
            </template>
            <template #price>150€</template>
          </GlobalPricingCard>
        </template>
        <template #card2>
          <GlobalPricingCard>
            <template #title> Workshop 2 </template>
            <template #priceDescription>
              <ul class="price-desc">
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
              </ul>
            </template>
            <template #price>250€</template>
          </GlobalPricingCard>
        </template>
        <template #card3>
          <GlobalPricingCard>
            <template #title> Workshop 3 </template>
            <template #priceDescription>
              <ul class="price-desc">
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
              </ul>
            </template>
            <template #price>350€</template>
          </GlobalPricingCard>
        </template>
      </GlobalSimplePricing>
    </Variant>
  </Story>
</template>

<docs lang="md">
# GlobalSimplePricing

Global simple pricing component

## Props

- `cardCount` - How many pricing cards to display (defaults to 3)

## Slots

- title - Title content
- card{i} - Pricing card

## MD files usage

```
::GlobalSimplePricing{:cardCount="3"}
#title
Title
#card1
:::GlobalPricingCard
#title
Card title
:::
::
```
</docs>
