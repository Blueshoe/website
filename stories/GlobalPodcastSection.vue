<script lang="ts" setup>
import { reactive } from 'vue';
const props = reactive([
  { bg: 'bg-bs-gray', videoId: 'tyvE9VlSWkE', videoPosition: 'left' },
  { bg: 'bg-white', videoId: 'tyvE9VlSWkE', videoPosition: 'left' }
]);
</script>

<template>
  <Story title="GlobalPodcastSection" :layout="{ type: 'single', iframe: true }">
    <Variant v-for="(propVariant, key) of props" :key="key" :title="'Variant ' + (key + 1)">
      <GlobalPodcastSection
        v-bind="{
          ...propVariant,
          bg: propVariant.bg as 'bg-bs-gray' | 'bg-white',
          videoId: propVariant.videoId as 'tyvE9VlSWkE',
          videoPosition: propVariant.videoPosition as 'left' | 'right'
        }"
      >
        <GlobalTitle class="mb-4">Title podcast section</GlobalTitle>

        <GlobalParagraph class="mb-6">Paragraph</GlobalParagraph>
      </GlobalPodcastSection>
    </Variant>
  </Story>
</template>

<docs lang="md">
# GlobalPodcastSection

Global podcast section component

## Props

- `bg` - Background color (bg-bs-gray, bg-white)
- `videoId` - Video ID
- `videoPosition` - Video position (left, right)

## Slots

- default - Content

## MD files usage

```
::GlobalPodcastSection{:videoId="tyvE9VlSWkE" :videoPosition="left" .mb-6}
:::GlobalPreTitle{:color="text-bs-green" .mb-3}
PreTitle
:::
:::GlobalTitle{:tag="h3" .mb-6}
Title
:::
:::globalParagraph{:font-size="lg" .mb-4}
Paragraph
:::
:::GlobalButton{:url="/podcast" :label="Show more" :color="green"}
:::
::
```
</docs>
