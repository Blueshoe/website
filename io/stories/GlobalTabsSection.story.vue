<script lang="ts" setup>
import { reactive } from 'vue';
const props = reactive([{ labels: ['Tab 1', 'Tab 2', 'Tab 3'], bg: 'bg-white', init: false }]);
</script>

<template>
  <Story title="GlobalTabsSection" :layout="{ type: 'grid', width: '100%' }">
    <Variant v-for="(propVariant, key) of props" :key="key" :title="'Variant ' + (key + 1)">
      <GlobalTabsSection
        v-bind="{
          ...propVariant,
          bg: propVariant.bg as 'bg-bs-gray' | 'bg-white' | undefined
        }"
      >
        <GlobalTitle class="mb-4">Title accordion</GlobalTitle>

        <GlobalParagraph class="mb-6">Paragraph</GlobalParagraph>

        <template #tab-0>
          <GlobalTab
            :image="'/img/global/tabs/technogolies_panel_3.svg'"
            :icons="[
              '/img/global/icons/docker.svg',
              '/img/global/icons/kubernetes-seeklogo.svg',
              '/img/global/icons/google-cloud-1.svg',
              '/img/global/icons/amazon_web_services_logo.svg'
            ]"
            :isIcons="true"
            :isStory="true"
          >
            <GlobalParagraph font-size="lg" class="mb-6">Paragraph 1</GlobalParagraph>
          </GlobalTab>
        </template>
        <template #tab-1>
          <GlobalTab
            :image="'/img/global/tabs/technogolies_panel_3.svg'"
            :icons="[
              '/img/global/icons/docker.svg',
              '/img/global/icons/kubernetes-seeklogo.svg',
              '/img/global/icons/google-cloud-1.svg',
              '/img/global/icons/amazon_web_services_logo.svg'
            ]"
            :isIcons="true"
            :isStory="true"
          >
            <GlobalParagraph font-size="lg" class="mb-6">Paragraph 2</GlobalParagraph>
          </GlobalTab>
        </template>
        <template #tab-2>
          <GlobalTab
            :image="'/img/global/tabs/technogolies_panel_3.svg'"
            :icons="[
              '/img/global/icons/docker.svg',
              '/img/global/icons/kubernetes-seeklogo.svg',
              '/img/global/icons/google-cloud-1.svg',
              '/img/global/icons/amazon_web_services_logo.svg'
            ]"
            :isIcons="true"
            :isStory="true"
          >
            <GlobalParagraph font-size="lg" class="mb-6">Paragraph 3</GlobalParagraph>
          </GlobalTab>
        </template>
      </GlobalTabsSection>
    </Variant>
  </Story>
</template>

<docs lang="md">
# GlobalTabsSection

Global tabs section component

## Props

- `labels` - Array of labels
- `bg` - Background color (bg-bs-blue, bg-white)
- `init` - Initialize tabs

## Slots

- default - Content
- tab-0 - Tab 1 content
- tab-1 - Tab 2 content
- tab-2 - Tab 3 content
- ...

## MD files usage

```
:::GlobalTabsSection{:labels='["Infrastructure", "Backend", "Frontend"]' init='true'}
::::GlobalPreTitle{:color="text-bs-green" .mb-3}
Pre title
::::
::::GlobalTitle{.mb-6 data-title="Tech"}
Title
::::
#tab-0
::GlobalTab{:image="/path/to/image" :isIcons=true :icons='["/path/to/icon", "/path/to/icon", "/path/to/icon", "/path/to/icon"]'}
:::GlobalParagraph{:fontSize="text-lg" .mb-4}
Paragraph
:::
:::GlobalParagraph{:fontSize="lg" .mb-4}
Paragraph
:::
::
#tab-1
::GlobalTab{:image="/path/to/image" :isIcons=true :icons='["/path/to/icon", "/path/to/icon", "/path/to/icon", "/path/to/icon"]'  }
:::GlobalParagraph{:fontSize="lg" .mb-4}
Paragraph
:::
::
#tab-2
::GlobalTab{:image="/path/to/image" :isIcons=true :icons='["/path/to/icon", "/path/to/icon", "/path/to/icon", "/path/to/icon"]'  }
:::GlobalParagraph{:fontSize="lg" .mb-4}
Paragraph
:::
:::GlobalParagraph{:fontSize="lg" .mb-4}
Paragraph
:::
::
:::
```
</docs>
