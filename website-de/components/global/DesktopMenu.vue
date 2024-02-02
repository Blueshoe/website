<template>
  <ul class="flex border-b border-bs-menu-hover z-20">
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
        class="absolute left-[12px] top-[70px] grid grid-cols-2 bg-white shadow-lg w-[97.5%] xl:w-[98%] py-2"
      >
        <div class="border-r-2 border-bs-menu-hover">
          <div class="text-base text-black font-normal px-6 py-2">{{ t('entwicklung') }}</div>
          <div class="grid grid-cols-2">
            <li
              v-for="(child, index) in nav.children[0]"
              :key="index"
              class="relative font-source-sans-pro font-normal text-base py-2.5"
            >
              <NuxtLink
                :to="child.href"
                class="hover:after:inline-block hover:after:absolute hover:after:left-[25px] hover:after:bottom-[10px] hover:after:w-[100px] hover:after:border-b-[3px] hover:after:border-bs-blue"
              >
                <div class="flex items-center gap-2 px-6 py-1">
                  <speedkit-image :src="child.icon" width="40" class="max-w-[40px]" alt="menu icon" format="webp" />
                  <span>{{ t(child.name) }}</span>
                </div>
              </NuxtLink>
            </li>
          </div>
        </div>
        <div>
          <div class="text-base text-black font-normal px-6 py-2">{{ t('beratung') }}</div>
          <div class="grid grid-cols-2">
            <li
              v-for="(child, index2) in nav.children[1]"
              :key="index2"
              class="relative font-source-sans-pro font-normal text-base py-2.5"
            >
              <NuxtLink
                :to="child.href"
                class="hover:after:inline-block hover:after:absolute hover:after:left-[25px] hover:after:bottom-[10px] hover:after:w-[100px] hover:after:border-b-[3px] hover:after:border-bs-blue"
              >
                <div class="flex items-center gap-2 px-6 py-1">
                  <speedkit-image :src="child.icon" width="40" class="max-w-[40px]" alt="menu icon" format="webp" />
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
import SpeedkitImage from '#speedkit/components/SpeedkitImage';

const { t } = useI18n({
  useScope: 'local'
});

const generalStore = useGeneralStore();
const { menu } = storeToRefs(generalStore);
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
    "beratung": "Beratung"
  }
}
</i18n>
