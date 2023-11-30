import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { Menu, Heading } from '~/types';

export const useGeneralStore = defineStore('general', () => {
  const headingListData = ref<Heading[]>([]);
  const sortedBlogs = ref([]);
  const isMobileMenuOpen = ref(false);

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
    { name: 'contactUs', href: '/contact', dropDown: false }
  ]);

  // TODO: get them dynamically from the content
  const authors = ref([
    { name: 'Robert Gutschale', isSelected: false },
    { name: 'Victor Studenyak', isSelected: false },
    { name: 'Robert Stein', isSelected: false },
    { name: 'Michael Schilonka', isSelected: false },
    { name: 'Tobias Frölich', isSelected: false },
    { name: 'Hannes Hanusch', isSelected: false },
    { name: 'Tina Söll', isSelected: false }
  ]);

  const technology = ref([
    { name: 'Helm', isSelected: false },
    { name: 'Kubernetes', isSelected: false },
    { name: 'Argo CD', isSelected: false },
    { name: 'Unikube', isSelected: false },
    { name: 'Docker', isSelected: false },
    { name: 'Telepresence', isSelected: false },
    { name: 'K3D', isSelected: false },
    { name: 'Django', isSelected: false },
    { name: 'Python', isSelected: false },
    { name: 'Gefyra', isSelected: false },
    { name: 'Vue JS', isSelected: false },
    { name: 'Grafana', isSelected: false },
    { name: 'Loki', isSelected: false },
    { name: 'Promtail', isSelected: false }
  ]);

  const productUpdates = ref([
    { name: 'Gefyra', isSelected: false },
    { name: 'Getdeck', isSelected: false },
    { name: 'Hurricane', isSelected: false },
    { name: 'Unikube', isSelected: false }
  ]);

  const topic = ref([
    { name: 'Project management', label: 'Author', isSelected: false },
    { name: 'Development', label: 'Author', isSelected: false },
    { name: 'Operation', label: 'Author', isSelected: false }
  ]);

  const filters = ref([
    { name: 'author', label: 'Author', items: authors, isOpen: false },
    { name: 'technology', label: 'Technology', items: technology, isOpen: false },
    { name: 'productUpdates', label: 'Product Updates', items: productUpdates, isOpen: false },
    { name: 'topic', label: 'Topic', items: topic, isOpen: false }
  ]);

  return {
    menu,
    headingListData,
    isMobileMenuOpen,
    filters,
    sortedBlogs
  };
});
