<script lang="ts" setup>
import { reactive } from 'vue';
const props = reactive([
  {
    src: '/blog/virtualized-kubernetes-comparing-vcluster-getdeck',
    img: '/img/blogs/kubernetes-vcluster-getdeck.jpg',
    alt: 'kubernetes vcluster getdeck',
    preTitle: 'Pre Title',
    title: 'Title',
    description: {},
    author: ['autor'],
    date: '01.01.2024',
    isStory: true
  }
]);
</script>

<template>
  <Story title="BlogCard" :layout="{ type: 'grid', width: '100%' }">
    <Variant v-for="(propVariant, key) of props" :key="key" :title="'Variant ' + (key + 1)">
      <BlogCard
        v-bind="{
          ...propVariant
        }"
      />
    </Variant>
  </Story>
</template>

<docs lang="md">
# BlogCard

Global blog card component

## Props

- `src` - Source
- `img` - Image
- `alt` - Alt
- `preTitle` - Pre title
- `title` - Title
- `description` - Description
- `author` - Author
- `date` - Date

## Slots

- No slots

## MD files usage

```
No usage
```
</docs>
