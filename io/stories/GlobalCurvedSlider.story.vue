<script lang="ts" setup>
import { reactive } from 'vue';
const props = reactive([
  {
    src: '/img/slider/hannes_hanusch.png',
    alt: 'Hannes Hanusch',
    buttonUrl: 'http://blueshoe.io/hannes',
    size: 'small'
  }
]);
</script>

<template>
  <Story title="GlobalCurvedSlider" :layout="{ type: 'grid', width: '100%' }">
    <Variant v-for="(propVariant, key) of props" :key="key" :title="'Variant ' + (key + 1)">
      <GlobalCurvedSlider
        v-bind="{
          ...propVariant,
          bg: 'bg-white',
          bgSlider: 'bg-white',
          buttonTarget: '_blank'
        }"
      >
        v-bind="{ ...propVariant }" >
        <template #preTitle> Software development by Blueshoe </template>
        <template #title> Rock solid and long-lasting </template>
        <template #card1>
          <GlobalCurvedSliderCard
            :first-card="true"
            src="/img/slider/group_7.png"
            alt="logo"
            border-color="#63D9B6"
            border-style="solid"
            text-color="text-bs-blue"
            :zIndex="5"
            size="full"
          >
            <template #cardTitle> 1. Requirements Analysis Workshop </template>
            <template #cardText> Start your journey here </template>
          </GlobalCurvedSliderCard>
        </template>
        <template #card2>
          <GlobalCurvedSliderCard
            src="/img/slider/group_5.png"
            alt="logo"
            border-color="#63D9B6"
            border-style="solid"
            text-color="text-bs-blue"
            :zIndex="4"
            size="full"
          >
            <template #cardTitle> 2. Actionable Requirements Definition </template>
            <template #cardText> You receive a precise price indication for your project </template>
          </GlobalCurvedSliderCard>
        </template>
        <template #card3>
          <GlobalCurvedSliderGreenCard :zIndex="3" size="full">
            Project greenlight or stop
          </GlobalCurvedSliderGreenCard>
        </template>
        <template #card4>
          <GlobalCurvedSliderCard
            src="/img/slider/group_10.png"
            alt="logo"
            border-color="#2e6b96"
            border-style="dashed"
            text-color="text-bs-green"
            :zIndex="2"
            size="full"
          >
            <template #cardTitle> 3. Project Implementation </template>
            <template #cardText> Rock solid, blazingly fast software and infrastructure </template>
          </GlobalCurvedSliderCard>
        </template>
        <template #card5>
          <GlobalCurvedSliderCard
            src="/img/slider/group_11.png"
            alt="logo"
            border-color="#2e6b96"
            border-style="dashed"
            text-color="text-bs-green"
            :zIndex="1"
            size="full"
          >
            <template #cardTitle> 4. Long-lasting Maintenance </template>
            <template #cardText> Corrective Maintenance Perfective Maintenance Adaptive Maintenance </template>
          </GlobalCurvedSliderCard>
        </template>
        <template #buttonBlockTitle> Book a meeting with our expert now </template>
        <template #buttonLabel> Find a timeslot </template>
      </GlobalCurvedSlider>
    </Variant>
  </Story>
</template>

<docs lang="md">
# GlobalSliderSection

Global slider section component

## Props

- `src` - Source of the button section image
- `alt` - Alt of the button section image
- `buttonUrl` - URL of the button
- `size` - Size of the section. Can be `full` or `small`

## Slots

- preTitle - Content before the title
- title - Title of the section
- card1 - Content of the first card
- card2 - Content of the second card
- card3 - Content of the third card
- card4 - Content of the fourth card
- card5 - Content of the fifth card
- ...

## MD files usage

```
::GlobalCurvedSlider{:src="/img/slider/hannes_hanusch.png" :alt="Hannes Hanusch" :buttonUrl="https://calendar.appgoogle/1c1opTAqnXqyHrsR6/" :size="full" }

#preTitle
Software development by Blueshoe
#title
Rock solid and long-lasting
#card1
:::GlobalCurvedSliderCard{:firstCard=true :src="/img/slider/group_7.png" :alt="logo" :borderColor="#63D9B6" :borderStyle="solid" :textColor="text-bs-blue"  :zIndex=5 :size="full"}

#cardTitle
<span>1.</span> Requirements Analysis Workshop
#cardText
Start your journey here
:::

#card2
:::GlobalCurvedSliderCard{:src="/img/slider/group_5.png" :alt="logo" :borderColor="#63D9B6" :borderStyle="solid" :textColor="text-bs-blue" :zIndex=4 :size="full"}

#cardTitle
<span>2.</span> Actionable Requirements Definition
#cardText
You receive a precise price indication for your project
:::

#card3
:::GlobalCurvedSliderGreenCard{:zIndex=3 :size="full"}
Project greenlight or stop
:::

#card4
:::GlobalCurvedSliderCard{:src="/img/slider/group_10.png" :alt="logo" :borderColor="#2e6b96" :borderStyle="dashed" :textColor="text-bs-green" :zIndex=2 :size="full"}

#cardTitle
<span>3.</span> Project Implementation
#cardText
Rock solid, blazingly fast software and infrastructure
:::

#card5
:::GlobalCurvedSliderCard{:src="/img/slider/group_11.png" :alt="logo" :borderColor="#2e6b96" :borderStyle="dashed" :textColor="text-bs-green" :zIndex=1 :size="full"}

#cardTitle
<span>4.</span> Long-lasting Maintenance
#cardText
Corrective Maintenance Perfective Maintenance Adaptive Maintenance
:::

#buttonBlockTitle
Book a meeting with our expert now
#buttonLabel
Find a timeslot
::
```
</docs>
