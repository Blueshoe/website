<template>
  <div class="absolute w-full h-screen text-xl text-bs-menu font-oswald font-extralight overflow-y-scroll">
    <ul v-if="!isDropDownOpen" class="left-0 bg-white w-full">
      <li
        v-for="(nav, i) in menu"
        :key="i"
        class="cursor-pointer border-b border-bs-menu-hover hover:bg-bs-menu-hover px-4 pt-4 pb-5 first:pr-1"
        @click="toggleChild(nav)"
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
      <div v-for="(child, index) in children" :key="index" class="border-b-2 border-bs-menu-hover">
        <div v-if="child.showTitle" class="text-base text-black font-normal px-6 py-2">
          <span v-text="t(child.title)" />
        </div>
        <li
          v-for="(link, i) in child.links"
          :key="i"
          class="font-source-sans-pro font-normal text-base hover:bg-bs-menu-hover py-2.5"
          @click="isMobileMenuOpen = false"
        >
          <NuxtLink :to="link.href">
            <div class="flex items-center gap-2 px-6 py-1">
              <BoosterImage
                class="max-w-[40px]"
                :src="link.icon"
                :title="`${t(link.name)} Icon`"
                :alt="`${t(link.name)} Icon`"
                width="40"
                height="40"
                format="webp"
              />
              <span>{{ t(link.name) }}</span>
            </div>
          </NuxtLink>
        </li>
        <GlobalButton
          v-if="child.showExtraButton && child.extraButtonLabel"
          class="my-4 ml-4"
          :url="child.extraButtonLink"
          :label="child.extraButtonLabel"
          color="green"
          size="small"
          @click="isMobileMenuOpen = false"
        />
      </div>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import BoosterImage from '#booster/components/BoosterImage.vue';
import { useGeneralStore } from '~/store';
import type { Menu, SubMenu } from '~/types';

const { t } = useI18n({
  useScope: 'local'
});

const generalStore = useGeneralStore();
const { menu, isMobileMenuOpen } = storeToRefs(generalStore);

const isDropDownOpen = ref(false);
const children = ref<SubMenu[]>([]);

const toggleChild = (nav: Menu) => {
  if (!nav.dropDown) {
    isMobileMenuOpen.value = false;
    return;
  }
  nav.isDropDown = !nav.isDropDown;
  isDropDownOpen.value = !isDropDownOpen.value;
  children.value = nav.children ? nav.children : [];
};
</script>

<i18n lang="json">
{
  "en": {
    "services": "Leistungen",
    "solutions": "Lösungen",
    "requirementsEngineering": "Anforderungs Workshops",
    "requirementsDocs": "Anforderungsdokumentation",
    "projectGreenlight": "Freigabeentscheidung",
    "softwareDevelopment": "Software & Infrastruktur Realisierung",
    "softwareMaintenance": "Wartung & Support",
    "automaticFrontendTesting": "Automatisches Frontend Testing",
    "rightsAccessManagement": "Rights & Access Management",
    "websiteBooster": "Schnelle Websites",
    "connectingSystems": "Systeme Vernetzen",
    "websiteAccessability": "Barrierefreie Websites",
    "hostingCostReduction": "Hostingkosten reduzieren",
    "gefyra": "Kubernetes Development",
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
