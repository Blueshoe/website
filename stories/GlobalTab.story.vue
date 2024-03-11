<script lang="ts" setup>
import { reactive } from 'vue';
const props = reactive([
  {
    image: '/img/global/tabs/technogolies_panel_3.svg',
    icons: [
      '/img/global/icons/docker.svg',
      '/img/global/icons/kubernetes-seeklogo.svg',
      '/img/global/icons/google-cloud-1.svg',
      '/img/global/icons/amazon_web_services_logo.svg'
    ],
    isIcons: true,
    isStory: true
  }
]);
</script>

<template>
  <Story title="GlobalTab" :layout="{ type: 'grid', width: '100%' }">
    <Variant v-for="(propVariant, key) of props" :key="key" :title="'Variant ' + (key + 1)">
      <GlobalTab
        v-bind="{
          ...propVariant
        }"
      >
        <GlobalParagraph font-size="lg" class="mb-6">Paragraph</GlobalParagraph>
      </GlobalTab>
    </Variant>
  </Story>
</template>

<docs lang="md">
# GlobalTab

Global tab component

## Props

- `image` - Image URL
- `icons` - Array of icons
- `isIcons` - Show icons

## Slots

- default - Content

## MD files usage

```
::GlobalTab{:image="/path/to/image" :isIcons=true :icons='["/path/to/icon", "/path/to/icon", "/path/to/icon", "/path/to/icon"]'}
:::GlobalParagraph{:fontSize="text-lg" .mb-4}
Paragraph 1
:::
:::GlobalParagraph{:fontSize="lg" .mb-4}
Paragraph 2
:::
::
```
</docs>
