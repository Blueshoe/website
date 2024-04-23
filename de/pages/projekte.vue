<template>
  <div>
    <div class="bs-container">
      <GlobalPreTitle class="mt-6 mb-4">SHIPPING AWESOME DIGITAL PRODUCTS SINCE 2014</GlobalPreTitle>
      <GlobalTitle class="mb-6">Unsere Projekte</GlobalTitle>

      <GlobalParagraph class="mb-10">
        Über die Filterfunktionen kannst du ganz einfach in unseren Projekten suchen und dir anschauen, was wir bislang
        gemacht haben.
      </GlobalParagraph>

      <GlobalFilter :initial-filters="projectFilters" class="my-6" />
    </div>

    <div class="bg-bs-gray pt-2 pb-10">
      <div class="bs-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <ProjectCard
          v-for="project in sortedItems"
          :key="project.title"
          :img="project.img"
          :alt="project.alt"
          :title="project.title"
          :text="project.text"
          :buttonLabel="project.buttonLabel"
          :buttonLink="project.buttonLink"
          :buttonTarget="project.buttonTarget"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useGeneralStore } from '~/store';

useHead({
  title: 'Unsere Projekte',
  meta: [
    {
      name: 'description',
      content: 'Du willst wissen, was wir alles schon gemacht haben? Wirf einen Blick auf unsere Projekte!'
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
      content: 'Unsere Projekte'
    },
    {
      property: 'og:description',
      content: 'Du willst wissen, was wir alles schon gemacht haben? Wirf einen Blick auf unsere Projekte!'
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
      content: 'Unsere Projekte'
    },
    {
      name: 'twitter:description',
      content: 'Du willst wissen, was wir alles schon gemacht haben? Wirf einen Blick auf unsere Projekte!'
    },
    {
      name: 'twitter:image',
      content: 'https://www.blueshoe.de/img/meta/blueshoe-cloud-native-devlopment.png'
    }
  ]
});

const generalStore = useGeneralStore();
const { sortedItems, initialSorting, projectFilters } = storeToRefs(generalStore);

const updateProjectFilters = () => {
  const uniqueItemsMap = new Map();

  projectFilters.value.forEach((filter) => {
    uniqueItemsMap.set(filter.name, new Set());
  });

  sortedItems.value.forEach((entry) => {
    Object.keys(entry).forEach((key) => {
      if (uniqueItemsMap.has(key)) {
        entry[key].forEach((item) => {
          uniqueItemsMap.get(key).add(item);
        });
      }
    });
  });

  projectFilters.value.forEach((filter) => {
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

const { data: projects } = await useAsyncData('projects', () => queryContent('/projekte').find());

onMounted(() => {
  sortedItems.value = [...generalStore.projectsItems];

  projects.value = projects.value?.sort((a, b) => {
    return a.id - b.id;
  });

  projects.value?.forEach((project) => {
    sortedItems.value.push({
      img: project.img,
      alt: project.alt,
      title: project.title,
      text: project.text,
      buttonLabel: project.buttonLabel,
      buttonLink: project.buttonLink,
      buttonTarget: project.buttonTarget,
      anforderung: project.anforderung,
      sektor: project.sektor,
      kategorie: project.kategorie,
      branche: project.branche,
      technologie: project.technologie
    });
  });

  initialSorting.value = sortedItems.value;

  updateProjectFilters();
});
</script>
