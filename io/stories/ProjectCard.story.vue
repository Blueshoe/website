<script lang="ts" setup>
import { reactive } from 'vue';
const props = reactive([
  {
    img: '/img/brands-slides/winter-company.jpg',
    alt: 'Winter & Company Logo',
    title: 'Website mit Produktfinder und Kundenlogin',
    text: 'Technische Betreuung und Weiterentwicklung der Website. Inklusive Kundenlogin und umfangreichem Produktfinder.',
    buttonLabel: 'Zur Website',
    buttonLink: 'https://www.winter-company.com/de/',
    buttonTarget: '_blank'
  }
]);
</script>

<template>
  <Story title="ProjectCard" :layout="{ type: 'grid', width: '100%' }">
    <Variant v-for="(propVariant, key) of props" :key="key" :title="'Variant ' + (key + 1)">
      <ProjectCard
        v-bind="{
          ...propVariant,
          buttonTarget: propVariant.buttonTarget as '_blank' | '_self' | undefined
        }"
      />
    </Variant>
  </Story>
</template>

<docs lang="md">
# ProjectCard

Project card component

## Props

- `img` - Image URL
- `alt` - Image alt
- `title` - Title
- `text` - Text
- `buttonLabel` - Button label
- `buttonLink` - Button URL
- `buttonTarget` - Button target (\_blank, \_self)

## Slots

- No slots

## MD files usage

```

```
</docs>
