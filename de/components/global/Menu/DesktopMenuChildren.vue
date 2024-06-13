<template>
  <ul
    v-click-outside="emitOnClickOutside"
    class="absolute left-3 top-16 grid grid-cols-2 bg-white shadow-lg w-[97.5%] xl:w-[98%] py-2"
  >
    <div
      v-if="props.navItem.children"
      :class="{ 'border-r-2 border-bs-menu-hover': props.navItem.showChildrenContentDivider }"
    >
      <div v-if="props.navItem.showChildrenTitle" class="text-base text-black font-normal px-6 py-2">
        <span v-text="t('entwicklung')" />
      </div>
      <div class="grid grid-cols-2">
        <li
          v-for="(child, index) in props.navItem.children[0]"
          :key="index"
          class="relative font-source-sans-pro font-normal text-base py-2.5"
          @click.stop="emitHandleCloseMenu(props.navItem)"
        >
          <NuxtLink
            :to="child.href"
            class="hover:after:inline-block hover:after:absolute hover:after:left-[25px] hover:after:bottom-[10px] hover:after:w-[100px] hover:after:border-b-[3px] hover:after:border-bs-blue"
          >
            <div class="flex items-center gap-2 px-6 py-1">
              <BoosterImage
                :src="child.icon"
                width="40"
                title="menu icon"
                class="max-w-[40px]"
                alt="menu icon"
                format="webp"
              />
              <span v-text="t(child.name)" />
            </div>
          </NuxtLink>
        </li>
      </div>
    </div>
    <div v-if="props.navItem.children">
      <div v-if="props.navItem.showChildrenTitle" class="text-base text-black font-normal px-6 py-2">
        <span v-text="t('beratung')" />
      </div>
      <div class="grid grid-cols-2">
        <li
          v-for="(child, index2) in props.navItem.children[1]"
          :key="index2"
          class="relative font-source-sans-pro font-normal text-base py-2.5"
          @click.stop="emitHandleCloseMenu(props.navItem)"
        >
          <NuxtLink
            :to="child.href"
            class="hover:after:inline-block hover:after:absolute hover:after:left-[25px] hover:after:bottom-[10px] hover:after:w-[100px] hover:after:border-b-[3px] hover:after:border-bs-blue"
          >
            <div class="flex items-center gap-2 px-6 py-1">
              <BoosterImage
                :src="child.icon"
                width="40"
                title="menu icon"
                class="max-w-[40px]"
                alt="menu icon"
                format="webp"
              />
              <span v-text="t(child.name)" />
            </div>
          </NuxtLink>
        </li>
      </div>
    </div>
  </ul>
</template>

<script setup lang="ts">
import BoosterImage from '#booster/components/BoosterImage.vue';
import type { Menu } from '~/types';

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
