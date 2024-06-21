<template>
  <ul
    v-click-outside="emitOnClickOutside"
    class="absolute left-3 top-16 grid grid-cols-1 bg-white shadow-lg w-[97.5%] xl:w-[98%] py-2"
    :class="{ 'grid-cols-2': !props.navItem.singleChildrenContentStyle }"
  >
    <div
      v-for="(child, index) in props.navItem.children"
      :key="index"
      :class="{ 'border-r-2 border-bs-menu-hover': props.navItem.showChildrenDivider }"
    >
      <div v-if="child.showTitle" class="text-base text-black font-normal px-6 py-2">
        <span v-text="t(child.title)" />
      </div>
      <div class="flex grow items-center">
        <div :class="[child.singleLineLinks ? 'w-1/2 border-r-2 border-bs-menu-hover' : 'grid grid-cols-2 w-full']">
          <li
            v-for="(link, i) in child.links"
            :key="i"
            class="w-fit relative font-source-sans-pro font-normal text-base py-2.5"
            @click.stop="emitHandleCloseMenu(props.navItem)"
          >
            <NuxtLink
              :to="link.href"
              class="hover:after:inline-block hover:after:absolute hover:after:left-[25px] hover:after:bottom-[10px] hover:after:w-[100px] hover:after:border-b-[3px] hover:after:border-bs-blue"
              @mouseover="setActiveChild(link)"
            >
              <div class="flex items-center gap-2 px-6 py-1">
                <BoosterImage
                  class="max-w-[40px]"
                  :src="link.icon"
                  :title="`${t(link.name)} Icon`"
                  :alt="`${t(link.name)} Icon`"
                  width="40"
                />
                <span :class="child.singleLineLinks ? 'first-letter:font-bold' : ''" v-text="t(link.name)" />
              </div>
            </NuxtLink>
          </li>
        </div>
        <div v-if="child.singleLineLinks && currentActiveImage" class="w-1/2 flex justify-center">
          <div>
            <span class="px-8 text-base font-semibold leading-5 font-source-sans-pro uppercase">{{ currentActiveChildName }}</span><br />
            <span class="px-8 font-extralight font-oswald text-[40px] leading-[48px]">{{ currentActiveHelpText }}</span>
            <BoosterImage
              class="p-8 w-[250px]"
              :src="currentActiveImage"
              :title="`${t(currentActiveChildName)} Icon`"
              :alt="`${t(currentActiveChildName)} Icon`"
            />
          </div>
        </div>
      </div>
    </div>
  </ul>
</template>

<script setup lang="ts">
import BoosterImage from '#booster/components/BoosterImage.vue';
import type { Menu, SubMenuLink } from '~/types/menu';

//  --------------------------------------------------------------------------------------------------------------------
//  props
//  --------------------------------------------------------------------------------------------------------------------
interface PropsInterface {
  navItem: Menu;
}

const props = defineProps<PropsInterface>();

const { t } = useI18n({
  useScope: 'local'
});

const currentActiveImage = ref('');
const currentActiveChildName = ref('');
const currentActiveHelpText = ref('');

function setActiveChild(link: SubMenuLink) {
  currentActiveImage.value = link.image || '';
  currentActiveChildName.value = t(link.name);
  currentActiveHelpText.value = t(link.helpText);
}

watch(
  props.navItem,
  (newNavItem) => {
    if (newNavItem.children && newNavItem.children[0].links[0].image && newNavItem.children[0].singleLineLinks) {
      currentActiveImage.value = newNavItem.children[0].links[0].image || '';
      currentActiveChildName.value = t(newNavItem.children[0].links[0].name);
      currentActiveHelpText.value = t(newNavItem.children[0].links[0].helpText || '');
    }
  },
  { immediate: true }
);

//  --------------------------------------------------------------------------------------------------------------------
//  emits
//  --------------------------------------------------------------------------------------------------------------------
const emits = defineEmits<{
  onClickOutside: [];
  handleCloseMenu: [Menu];
}>();

const emitOnClickOutside = () => {
  emits('onClickOutside');
};

const emitHandleCloseMenu = (nav: Menu) => {
  emits('handleCloseMenu', nav);
};
</script>

<i18n lang="json">
{
  "en": {
    "requirementsEngineering": "Requirements Workshop",
    "requirementsDocs": "Actionable Scope",
    "projectGreenlight": "Project greenlight, or stop",
    "softwareDevelopment": "Implementation",
    "softwareMaintenance": "Durable Maintenance",
    "automaticFrontendTesting": "Automatisches Frontend Testing",
    "rightsAccessManagement": "Rights & Access Management",
    "websiteBooster": "Schnelle Websites",
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
    "beratung": "Beratung"
  }
}
</i18n>

<style lang="sass" scoped></style>