<template>
  <div>
    <ul class="absolute left-0 bg-white w-full overflow-auto">
      <li
        v-if="!isDropDownOpen"
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
    <ul v-if="isDropDownOpen" class="absolute z-10 left-0 bg-white w-full overflow-auto">
      <div
        class="text-base text-black font-normal cursor-pointer border-b-2 border-bs-menu-hover px-6 py-6"
        @click="isDropDownOpen = false"
      >
        Zurück
      </div>
      <div class="border-b-2 border-bs-menu-hover">
        <div class="text-base text-black font-normal px-6 py-2">{{ t('development') }}</div>
        <li
          v-for="(child, i) in subMenu[0]"
          :key="i"
          class="font-source-sans-pro font-normal text-base hover:bg-bs-menu-hover py-2.5"
        >
          <NuxtLink :to="child.href">
            <div class="flex items-center gap-2 px-6 py-1">
              <img :src="child.icon" width="40" />
              <span>{{ t(child.name) }}</span>
            </div>
          </NuxtLink>
        </li>
      </div>
      <div>
        <div class="text-base text-black font-normal px-6 py-2">{{ t('consulting') }}</div>
        <li
          v-for="(child, i) in subMenu[1]"
          :key="i"
          class="font-source-sans-pro font-normal text-base hover:bg-bs-menu-hover py-2.5"
        >
          <NuxtLink :to="child.href">
            <div class="flex items-center gap-2 px-6 py-1">
              <img :src="child.icon" width="40" />
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
import { useGeneralStore } from '~/store';
import type { Menu, SubMenu } from '~/types';

const { t } = useI18n({
  useScope: 'local'
});

const generalStore = useGeneralStore();
const { menu } = storeToRefs(generalStore);

const isDropDownOpen = ref(false);
const subMenu = ref<SubMenu[][]>([]);

const toggleSubmenu = (nav: Menu) => {
  nav.dropDown ? (nav.isDropDown = !nav.isDropDown) : null;
  isDropDownOpen.value = !isDropDownOpen.value;
  subMenu.value = nav.children ? nav.children : [];
};
</script>

<i18n lang="json">
{
  "en": {
    "softwareDevelopment": "Software Development",
    "wagtailCms": "Wagtail CMS",
    "headlessECommerce": "Headless E-Commerce",
    "oscarECommerce": "Oscar E-Commerce",
    "headlessCms": "Headless CMS",
    "pythonDjango": "Python Django",
    "apiDevelopment": "API Development",
    "workflowAutomation": "Workflow Automation",
    "cloudConsulting": "Cloud Consulting",
    "kubernetesMigration": "Kubernetes Migration",
    "cloudSecurity": "Cloud Security",
    "microserviceArchitecture": "Microservice Architecture",
    "cloudNativeTools": "Cloud Native Tools",
    "cloudInfrastructure": "Cloud Infrastructure",
    "services": "Services",
    "ourTools": "Our Tools",
    "podcast": "Podcast",
    "aboutUs": "About Us",
    "blog": "Blog",
    "contactUs": "Contact Us",
    "development": "Development",
    "consulting": "Consulting",
    "UI-Kit": "UI-Kit"
  }
}
</i18n>
