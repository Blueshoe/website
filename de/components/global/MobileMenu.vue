<template>
  <div class="absolute w-full h-screen text-xl text-bs-menu font-oswald font-extralight overflow-y-scroll">
    <ul v-if="!isDropDownOpen" class="left-0 bg-white w-full">
      <li
        v-for="(nav, i) in menu"
        :key="i"
        class="cursor-pointer border-b border-bs-menu-hover hover:bg-bs-menu-hover px-4 pt-4 pb-5 first:pr-1"
        @click="toggleSubmenu(nav)"
      >
        <NuxtLink :to="nav.href" class="block w-full">
          {{ t(nav.name) }}
          <span v-if="nav.dropDown" class=""
            ><Icon name="ri:arrow-down-s-fill" width="30" height="30" class="pb-1"
          /></span>
        </NuxtLink>
      </li>
    </ul>
    <ul v-if="isDropDownOpen" class="z-10 left-0 bg-white w-full overflow-auto">
      <div
        class="text-base text-black font-normal cursor-pointer border-b-2 border-bs-menu-hover px-6 py-6"
        @click="isDropDownOpen = false"
      >
        {{ t('zurück') }}
      </div>
      <div class="border-b-2 border-bs-menu-hover">
        <div class="text-base text-black font-normal px-6 py-2">{{ t('entwicklung') }}</div>
        <li
          v-for="(child, i) in subMenu[0]"
          :key="i"
          class="font-source-sans-pro font-normal text-base hover:bg-bs-menu-hover py-2.5"
          @click="isMobileMenuOpen = false"
        >
          <NuxtLink :to="child.href">
            <div class="flex items-center gap-2 px-6 py-1">
              <booster-image :src="child.icon" width="40" height="40" class="max-w-[40px]" alt="icon" format="webp" />
              <span>{{ t(child.name) }}</span>
            </div>
          </NuxtLink>
        </li>
      </div>
      <div>
        <div class="text-base text-black font-normal px-6 py-2">{{ t('beratung') }}</div>
        <li
          v-for="(child, i) in subMenu[1]"
          :key="i"
          class="font-source-sans-pro font-normal text-base hover:bg-bs-menu-hover py-2.5"
          @click="isMobileMenuOpen = false"
        >
          <NuxtLink :to="child.href">
            <div class="flex items-center gap-2 px-6 py-1">
              <booster-image :src="child.icon" width="40" height="40" class="max-w-[40px]" alt="icon" format="webp" />
              <span>{{ t(child.name) }}</span>
            </div>
          </NuxtLink>
        </li>
      </div>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import BoosterImage from '#booster/components/BoosterImage';
import { useGeneralStore } from '~/store';
import type { Menu, SubMenu } from '~/types';

const { t } = useI18n({
  useScope: 'local'
});

const generalStore = useGeneralStore();
const { menu, isMobileMenuOpen } = storeToRefs(generalStore);

const isDropDownOpen = ref(false);
const subMenu = ref<SubMenu[][]>([]);

const toggleSubmenu = (nav: Menu) => {
  if (!nav.dropDown) {
    isMobileMenuOpen.value = false;
    return;
  }
  nav.isDropDown = !nav.isDropDown;
  isDropDownOpen.value = !isDropDownOpen.value;
  subMenu.value = nav.children ? nav.children : [];
};
</script>

<i18n lang="json">
{
  "en": {
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
    "beratung": "Beratung",
    "zurück": "Zurück"
  }
}
</i18n>
