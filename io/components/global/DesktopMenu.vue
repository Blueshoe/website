<template>
  <ul class="flex gap-1 border-b border-bs-menu-hover z-20">
    <li
      v-for="(nav, i) in menu"
      :key="i"
      class="cursor-pointer hover:bg-bs-menu-hover px-4 pt-4 pb-5 first:pr-1"
      @click="nav.dropDown ? (nav.isDropDown = true) : navigateTo(nav.href)"
    >
      <NuxtLink :to="nav.href" :active-class="!nav.dropDown ? 'border-b-2 border-black border-opacity-20' : ''">
        {{ t(nav.name) }}
        <span v-if="nav.dropDown" class=""
          ><Icon name="ri:arrow-down-s-fill" width="30" height="30" class="pb-1"
        /></span>
      </NuxtLink>
      <ul
        v-click-outside="onClickOutside"
        v-if="nav.dropDown && nav.children && nav.isDropDown"
        class="absolute left-[12px] top-[70px] grid grid-cols-2 bg-white shadow-lg w-[97.5%] xl:w-[98%] py-2"
      >
        <div class="border-r-2 border-bs-menu-hover">
          <div class="text-base text-black font-normal px-6 py-2">{{ t('development') }}</div>
          <div class="grid grid-cols-2">
            <li
              v-for="(child, index) in nav.children[0]"
              :key="index"
              class="relative font-source-sans-pro font-normal text-base py-2.5"
              @click.stop="handleCloseMenu(nav)"
            >
              <NuxtLink
                :to="child.href"
                class="hover:after:inline-block hover:after:absolute hover:after:left-[25px] hover:after:bottom-[10px] hover:after:w-[100px] hover:after:border-b-[3px] hover:after:border-bs-blue"
              >
                <div class="flex items-center gap-2 px-6 py-1">
                  <booster-image :src="child.icon" title="menu icon" width="40" class="max-w-[40px]" alt="menu icon" format="webp" />
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
              v-for="(child, index2) in nav.children[1]"
              :key="index2"
              class="relative font-source-sans-pro font-normal text-base py-2.5"
              @click.stop="handleCloseMenu(nav)"
            >
              <NuxtLink
                :to="child.href"
                class="hover:after:inline-block hover:after:absolute hover:after:left-[25px] hover:after:bottom-[10px] hover:after:w-[100px] hover:after:border-b-[3px] hover:after:border-bs-blue"
              >
                <div class="flex items-center gap-2 px-6 py-1">
                  <booster-image :src="child.icon" title="menu icon" width="40" class="max-w-[40px]" alt="menu icon" format="webp" />
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
import BoosterImage from '#booster/components/BoosterImage';

const { t } = useI18n({
  useScope: 'local'
});

const generalStore = useGeneralStore();
const { menu } = storeToRefs(generalStore);

const onClickOutside = (e: Event) => {
  menu.value.forEach((nav) => {
    if (nav.isDropDown) {
      nav.isDropDown = false;
    }
  });
};

const handleCloseMenu = (nav) => {
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
