import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { Menu } from '~/types';

export const useGeneralStore = defineStore('general', () => {
  const development = [
    {
      name: 'softwareDevelopment',
      href: '/our-services/cloud-application-development',
      icon: '/img/global/icons/cloud-storage.svg'
    },
    {
      name: 'headlessCms',
      href: '/our-services/headless-cms',
      icon: '/img/global/icons/cms_1.svg'
    },
    {
      name: 'wagtailCms',
      href: '/our-services/wagtail-cms',
      icon: '/img/global/icons/bird_1.svg'
    },
    {
      name: 'pythonDjango',
      href: '/our-services/python-django-agency',
      icon: '/img/global/icons/python.svg'
    },
    {
      name: 'headlessECommerce',
      href: '/our-services/headless-e-commerce',
      icon: '/img/global/icons/buy-online.svg'
    },
    {
      name: 'apiDevelopment',
      href: '/our-services/api-development-agency',
      icon: '/img/global/icons/api_1.svg'
    },
    {
      name: 'oscarECommerce',
      href: '/our-services/oscar-e-commerce',
      icon: '/img/global/icons/shopping-cart.svg'
    },
    {
      name: 'workflowAutomation',
      href: '/our-services/workflow-automation',
      icon: '/img/global/icons/data-transformation.svg'
    }
  ];
  const consulting = [
    {
      name: 'cloudConsulting',
      href: '/our-services/cloud-native-consulting',
      icon: '/img/global/icons/consulting_1.svg'
    },
    {
      name: 'microserviceArchitecture',
      href: '/our-services/microservice-architecture-consulting',
      icon: '/img/global/icons/infrastructure_1.svg'
    },
    {
      name: 'kubernetesMigration',
      href: '/our-services/migration-to-kubernetes',
      icon: '/img/global/icons/migration.svg'
    },
    {
      name: 'cloudNativeTools',
      href: '/our-services/cloud-native-tools',
      icon: '/img/global/icons/repair.svg'
    },
    {
      name: 'cloudSecurity',
      href: '/our-services/cloud-security-services',
      icon: '/img/global/icons/cyber-security.svg'
    },
    {
      name: 'cloudInfrastructure',
      href: '/our-services/cloud-infrastructure-consulting',
      icon: '/img/global/icons/cloud-computing.svg'
    }
  ];
  const menu = ref<Menu[]>([
    {
      name: 'services',
      href: undefined,
      dropDown: true,
      isDropDown: false,
      children: [development, consulting]
    },
    { name: 'ourTools', href: '/products', dropDown: false },
    { name: 'podcast', href: '/podcast', dropDown: false },
    { name: 'aboutUs', href: '/about-us', dropDown: false },
    { name: 'blog', href: '/blog', dropDown: false },
    { name: 'contactUs', href: '/contact', dropDown: false },
    { name: 'UI-Kit', href: '/ui-kit', dropDown: false }
  ]);

  return {
    menu
  };
});
