<template>
  <ul class="flex border-b border-bs-menu-hover z-20" @mouseleave="onClickOutside">
    <NuxtLink
      v-for="(nav, i) in menu"
      :key="i"
      :to="nav.href"
      class="cursor-pointer hover:bg-bs-menu-hover px-2 xl:px-4 pt-4 pb-5 first:pr-1"
      :active-class="!nav.dropDown ? 'border-b-2 border-black border-opacity-20' : ''"
      @mouseover="nav.dropDown ? (nav.isDropDown = true) : null"
      @mouseleave="nav.dropDown ? (nav.isDropDown = false) : null"
    >
      <li>
        {{ t(nav.name) }}
        <span v-if="nav.dropDown">
          <Icon name="ri:arrow-down-s-fill" width="30" height="30" class="pb-1" />
        </span>
        <DesktopMenuChildren
          v-if="nav.dropDown && nav.children && nav.isDropDown"
          :nav-item="nav"
          @on-click-outside="onClickOutside"
          @handle-close-menu="handleCloseMenu"
        />
      </li>
    </NuxtLink>
  </ul>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import DesktopMenuChildren from './Menu/DesktopMenuChildren.vue';
import { useGeneralStore } from '~/store';
import type { Menu } from '~/types';

const { t } = useI18n({
  useScope: 'local'
});

const generalStore = useGeneralStore();
const { menu } = storeToRefs(generalStore);

const onClickOutside = () => {
  menu.value.forEach((nav) => {
    if (nav.isDropDown) {
      nav.isDropDown = false;
    }
  });
};

const handleCloseMenu = (nav: Menu) => {
  menu.value = menu.value.map((item) => {
    if (item.name === nav.name) {
      item.isDropDown = false;
    }
    return item;
  });
};
</script>

<i18n lang="json">
{
  "en": {
    "services": "Leistungen",
    "solutions": "Lösungen",
    "cloudNativeDevelopment": "Cloud Native Development",
    "headlessCms": "Headless CMS",
    "wagtailCms": "Wagtail CMS",
    "pythonDjango": "Python & Django",
    "headlessECommerce": "Headless E-Commerce",
    "apiEntwicklung": "API-Entwicklung",
    "oscarECommerce": "Oscar E-Commerce",
    "workflowAutomatisierung": "Workflow-Automatisierung",
    "dockerKubernetes": "Docker & Kubernetes",
    "unikube": "Unikube",
    "djangoHurricane": "Django Hurricane",
    "cloudBeratung": "Cloud-Beratung",
    "microserviceArchitekturen": "Microservice-Architekturen",
    "kubernetesMigration": "Kubernetes-Migration",
    "cloudInfrastruktur": "Cloud-Infrastruktur",
    "cloudNativeTools": "Cloud-Native-Tools",
    "cloudSicherheit": "Cloud-Sicherheit",
    "leistungen": "Leistungen",
    "projekte": "Projekte",
    "unsereTools": "Unsere Tools",
    "überUns": "Über uns",
    "jobs": "Jobs",
    "blog": "Blog",
    "k8sPodcast": "K8s Podcast",
    "kontakt": "Kontakt",
    "entwicklung": "Entwicklung",
    "beratung": "Enterprise Lösungen"
  }
}
</i18n>
