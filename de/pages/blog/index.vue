<template>
  <div class="bs-container mb-10">
    <GlobalPreTitle class="mt-6 mb-4"> TIPPS, TRICKS UND NEWS AUS DEM HAUSE BLUESHOE </GlobalPreTitle>
    <GlobalTitle class="mb-6"> Der Blog für Web-Junkies </GlobalTitle>

    <GlobalParagraph class="mb-10">
      Ein kleiner Einblick in unsere Arbeit aus den Bereichen Technologie, Digitalisierung, Marketing und allem, was wir
      uns sonst noch von der Seele schreiben wollen.
    </GlobalParagraph>

    <GlobalFilter :initial-filters="blogFilters" class="my-6" />

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <BlogCard
        v-for="blog in sortedItems"
        :key="blog.id"
        :src="blog.src + '/'"
        :img="blog.img"
        :alt="blog.alt"
        :pre-title="blog.preTitle"
        :description="blog.excerpt"
        :title="blog.title"
        :author="blog.autor"
        :date="blog.date"
        :paragraphs="blog.paragraphs"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useGeneralStore } from '~/store';
import { convertToDate } from '~/utils/convertToDate';

useHead({
  title: 'The Cloud Native Blog',
  meta: [
    {
      name: 'description',
      content:
        'We write about all things cloud native and let you have a look into our approaches to different challenges to occur when developing within cloud native infrastructures.'
    },
    {
      property: 'og:locale',
      content: 'de_DE'
    },
    {
      property: 'og:type',
      content: 'website'
    },
    {
      property: 'og:title',
      content: 'The Cloud Native Blog'
    },
    {
      property: 'og:description',
      content:
        'We write about all things cloud native and let you have a look into our approaches to different challenges to occur when developing within cloud native infrastructures.'
    },
    {
      property: 'og:image',
      content: 'https://www.blueshoe.de/img/meta/blueshoe-cloud-native-devlopment.png'
    },
    {
      property: 'og:image:secure_url',
      content: 'https://www.blueshoe.de/img/meta/blueshoe-cloud-native-devlopment.png'
    },
    {
      name: 'twitter:card',
      content: 'summary'
    },
    {
      name: 'twitter:title',
      content: 'The Cloud Native Blog'
    },
    {
      name: 'twitter:description',
      content:
        'We write about all things cloud native and let you have a look into our approaches to different challenges to occur when developing within cloud native infrastructures.'
    },
    {
      name: 'twitter:image',
      content: 'https://www.blueshoe.de/img/meta/blueshoe-cloud-native-devlopment.png'
    }
  ]
});

const generalStore = useGeneralStore();
const { sortedItems, initialSorting, blogFilters } = storeToRefs(generalStore);

const updateBlogFilters = () => {
  const uniqueItemsMap = new Map();

  blogFilters.value.forEach((filter) => {
    uniqueItemsMap.set(filter.name, new Set());
  });

  sortedItems.value?.forEach((entry) => {
    Object.keys(entry).forEach((key) => {
      if (uniqueItemsMap.has(key)) {
        entry[key].forEach((item) => {
          uniqueItemsMap.get(key).add(item);
        });
      }
    });
  });

  blogFilters.value.forEach((filter) => {
    if (uniqueItemsMap.has(filter.name)) {
      filter.items = Array.from(uniqueItemsMap.get(filter.name)).map((item) => {
        return {
          name: item,
          isSelected: false
        };
      });
    }
  });
};

const { data: blogs } = await useAsyncData('blogs', () => queryContent('/blog').find());

onMounted(async () => {
  sortedItems.value = blogs.value?.sort((a, b) => {
    return convertToDate(b.date) - convertToDate(a.date);
  });

  initialSorting.value = sortedItems.value;

  updateBlogFilters();
});
</script>
