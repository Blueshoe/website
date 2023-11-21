<template>
  <ul class="flex gap-1 border-b border-bs-menu-hover">
    <li
      v-for="(nav, i) in menu"
      :key="i"
      class="cursor-pointer hover:bg-bs-menu-hover px-4 pt-4 pb-5 first:pr-1"
      @click="nav.dropDown ? (nav.isDropDown = !nav.isDropDown) : null"
    >
      <NuxtLink :to="nav.href" :active-class="!nav.dropDown ? 'border-b-2 border-black border-opacity-20' : ''">
        {{ t(nav.name) }}
        <span v-if="nav.dropDown" class=""
          ><Icon name="ri:arrow-down-s-fill" width="30" height="30" class="pb-1"
        /></span>
      </NuxtLink>
      <ul
        v-if="nav.dropDown && nav.children && nav.isDropDown"
        class="absolute left-0 top-[70px] grid grid-cols-2 bg-white shadow-lg w-full py-2"
      >
        <div class="border-r-2 border-bs-menu-hover">
          <div class="text-base text-black font-normal px-6 py-2">{{ t('development') }}</div>
          <div class="grid grid-cols-2">
            <li
              v-for="(child, i) in nav.children[0]"
              :key="i"
              class="font-source-sans-pro font-normal text-base py-2.5"
            >
              <NuxtLink :to="child.href">
                <div class="flex items-center gap-2 px-6 py-1">
                  <NuxtImg :src="child.icon" width="40" />
                  <span>{{ t(child.name) }}</span>
                </div>
              </NuxtLink>
            </li>
          </div>
        </div>
        <div>
          <div class="text-base text-black font-normal px-6 py-2">{{ t('consulting') }}</div>
          <div class="grid grid-cols-2">
            <li
              v-for="(child, i) in nav.children[1]"
              :key="i"
              class="font-source-sans-pro font-normal text-base py-2.5"
            >
              <NuxtLink :to="child.href">
                <div class="flex items-center gap-2 px-6 py-1">
                  <NuxtImg :src="child.icon" width="40" />
                  <span>{{ t(child.name) }}</span>
                </div>
              </NuxtLink>
            </li>
          </div>
        </div>
      </ul>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useGeneralStore } from '~/store';

const { t } = useI18n({
  useScope: 'local'
});

const generalStore = useGeneralStore();
const { menu } = storeToRefs(generalStore);
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
