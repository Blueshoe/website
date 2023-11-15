import { defineStore } from 'pinia';
import { ref } from 'vue';
import { Menu } from '~/types';

export const useGeneralStore = defineStore('general', () => {
  const development = [
    {
      name: 'softwareDevelopment',
      href: '/our-services/cloud-application-development',
      icon: 'https://storage.googleapis.com/blueshoe-website-v4.appspot.com/documents/cloud-storage.svg'
    },
    {
      name: 'headlessCms',
      href: '/our-services/headless-cms',
      icon: 'https://storage.googleapis.com/blueshoe-website-v4.appspot.com/documents/cms_1.svg'
    },
    {
      name: 'wagtailCms',
      href: '/our-services/wagtail-cms',
      icon: 'https://storage.googleapis.com/blueshoe-website-v4.appspot.com/documents/bird_1.svg'
    },
    {
      name: 'pythonDjango',
      href: '/our-services/python-django-agency',
      icon: 'https://storage.googleapis.com/blueshoe-website-v4.appspot.com/documents/python.svg'
    },
    {
      name: 'headlessECommerce',
      href: '/our-services/headless-e-commerce',
      icon: 'https://storage.googleapis.com/blueshoe-website-v4.appspot.com/documents/buy-online.svg'
    },
    {
      name: 'apiDevelopment',
      href: '/our-services/api-development-agency',
      icon: 'https://storage.googleapis.com/blueshoe-website-v4.appspot.com/documents/api_1.svg'
    },
    {
      name: 'oscarECommerce',
      href: '/our-services/oscar-e-commerce',
      icon: 'https://storage.googleapis.com/blueshoe-website-v4.appspot.com/documents/shopping-cart.svg'
    },
    {
      name: 'workflowAutomation',
      href: '/our-services/workflow-automation',
      icon: 'https://storage.googleapis.com/blueshoe-website-v4.appspot.com/documents/data-transformation.svg'
    }
  ];
  const consulting = [
    {
      name: 'cloudConsulting',
      href: '/our-services/cloud-native-consulting',
      icon: 'https://storage.googleapis.com/blueshoe-website-v4.appspot.com/documents/consulting_1.svg'
    },
    {
      name: 'microserviceArchitecture',
      href: '/our-services/microservice-architecture-consulting',
      icon: 'https://storage.googleapis.com/blueshoe-website-v4.appspot.com/documents/infrastructure_1.svg'
    },
    {
      name: 'kubernetesMigration',
      href: '/our-services/migration-to-kubernetes',
      icon: 'https://storage.googleapis.com/blueshoe-website-v4.appspot.com/documents/migration.svg'
    },
    {
      name: 'cloudNativeTools',
      href: '/our-services/cloud-native-tools',
      icon: 'https://storage.googleapis.com/blueshoe-website-v4.appspot.com/documents/repair.svg'
    },
    {
      name: 'cloudSecurity',
      href: '/our-services/cloud-security-services',
      icon: 'https://storage.googleapis.com/blueshoe-website-v4.appspot.com/documents/cyber-security.svg'
    },
    {
      name: 'cloudInfrastructure',
      href: '/our-services/cloud-infrastructure-consulting',
      icon: 'https://storage.googleapis.com/blueshoe-website-v4.appspot.com/documents/cloud-computing.svg'
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
