<template>
  <li>
    {{ t(props.navItem.name) }}
    <span v-if="props.navItem.dropDown">
      <Icon name="ri:arrow-down-s-fill" width="30" height="30" class="pb-1" />
    </span>
    <DesktopMenuChildren
      v-show="props.navItem.dropDown && props.navItem.children && props.navItem.isDropDown"
      :nav-item="props.navItem"
      @on-click-outside="emitOnClickOutside"
      @handle-close-menu="emitHandleCloseMenu"
    />
  </li>
</template>

<script setup lang="ts">
import DesktopMenuChildren from './DesktopMenuChildren.vue';
import type { Menu } from '~/types/menu';

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

<style lang="sass" scoped></style>
