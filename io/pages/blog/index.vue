<template>
  <div class="bs-container mb-10">
    <GlobalTitle class="px-4 mt-6 mb-6"> Blog </GlobalTitle>

    <GlobalParagraph class="px-4 mb-10">
      We write about all things cloud native and let you have a look into our approaches to different challenges to
      occur when developing within cloud native infrastructures.
    </GlobalParagraph>

    <GlobalFilter :initial-filters="filters" class="my-6" />

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
        :author="blog.author"
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
import { baseURL } from '~/constants';

const route = useRoute();
const url = ref(route.fullPath);

useHead({
  title: 'The Cloud Native Blog',
  link: [{ rel: 'canonical', href: `${baseURL + url.value}` }],
  meta: [
    {
      name: 'description',
      content:
        'We write about all things cloud native and let you have a look into our approaches to different challenges to occur when developing within cloud native infrastructures.'
    },
    {
      property: 'og:locale',
      content: 'en_US'
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
      content: 'https://www.blueshoe.io/img/meta/blueshoe-cloud-native-devlopment.png'
    },
    {
      property: 'og:image:secure_url',
      content: 'https://www.blueshoe.io/img/meta/blueshoe-cloud-native-devlopment.png'
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
      content: 'https://www.blueshoe.io/img/meta/blueshoe-cloud-native-devlopment.png'
    }
  ]
});

const generalStore = useGeneralStore();
const { sortedItems, initialSorting, filters } = storeToRefs(generalStore);

const updateBlogFilters = () => {
  const uniqueItemsMap = new Map();

  filters.value.forEach((filter) => {
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

  filters.value.forEach((filter) => {
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

onMounted(() => {
  sortedItems.value = blogs.value?.sort((a, b) => {
    return convertToDate(b.date) - convertToDate(a.date);
  });
  initialSorting.value = sortedItems.value;

  updateBlogFilters();
});
</script>
