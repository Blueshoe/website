import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { Menu, Heading, Filter, SortedItems } from '~/types';

export const useGeneralStore = defineStore('general', () => {
  const headingListData = ref<Heading[]>([]);
  const blogHeading = ref<Heading[]>([]);
  const sortedItems = ref<SortedItems[]>([]);
  const initialSorting = ref<SortedItems[]>(sortedItems.value);
  const isMobileMenuOpen = ref(false);

  const entwicklung = [
    {
      name: 'cloudNativeDevelopment',
      href: '/leistungen/cloud-native-development/',
      icon: '/img/global/icons/cloud-storage.svg'
    },
    {
      name: 'headlessCms',
      href: '/leistungen/headless-cms/',
      icon: '/img/global/icons/cms_1.svg'
    },
    {
      name: 'wagtailCms',
      href: '/leistungen/wagtail-cms/',
      icon: '/img/global/icons/bird_1.svg'
    },
    {
      name: 'pythonDjango',
      href: '/leistungen/python-django-agentur/',
      icon: '/img/global/icons/python.svg'
    },
    {
      name: 'headlessECommerce',
      href: '/leistungen/headless-e-commerce/',
      icon: '/img/global/icons/buy-online.svg'
    },
    {
      name: 'apiEntwicklung',
      href: '/leistungen/api-entwicklung/',
      icon: '/img/global/icons/api_1.svg'
    },
    {
      name: 'oscarECommerce',
      href: '/leistungen/oscar-e-commerce/',
      icon: '/img/global/icons/shopping-cart.svg'
    },
    {
      name: 'workflowAutomatisierung',
      href: '/leistungen/workflow-automatisierung/',
      icon: '/img/global/icons/data-transformation.svg'
    }
  ];

  const beratung = [
    {
      name: 'dockerKubernetes',
      href: '/leistungen/docker-kubernetes/',
      icon: '/img/global/icons/docker_kubernetes.svg'
    },
    {
      name: 'unikube',
      href: '/leistungen/unikube/',
      icon: '/img/global/icons/unikube-logo.svg'
    },
    {
      name: 'djangoHurricane',
      href: '/leistungen/django-hurricane/',
      icon: '/img/global/icons/hurricane-icon.svg'
    },
    {
      name: 'cloudBeratung',
      href: '/leistungen/cloud-native-beratung/',
      icon: '/img/global/icons/consulting_1.svg'
    },
    {
      name: 'microserviceArchitekturen',
      href: '/leistungen/microservice-architektur-beratung/',
      icon: '/img/global/icons/infrastructure_1.svg'
    },
    {
      name: 'kubernetesMigration',
      href: '/leistungen/migration-auf-kubernetes/',
      icon: '/img/global/icons/migration.svg'
    },
    {
      name: 'cloudInfrastruktur',
      href: '/leistungen/cloud-infrastruktur-beratung/',
      icon: '/img/global/icons/cloud-computing.svg'
    },
    {
      name: 'cloudNativeTools',
      href: '/leistungen/cloud-native-tools/',
      icon: '/img/global/icons/repair.svg'
    },
    {
      name: 'cloudSicherheit',
      href: '/leistungen/cloud-sicherheit-beratung/',
      icon: '/img/global/icons/cyber-security.svg'
    }
  ];

  const menu = ref<Menu[]>([
    {
      name: 'leistungen',
      href: undefined,
      dropDown: true,
      isDropDown: false,
      children: [entwicklung, beratung],
      childrenContentStyle: 'single',
      showChildrenContentDivider: true,
      showChildrenTitle: true
    },
    { name: 'projekte', href: '/projekte/', dropDown: false },
    { name: 'unsereTools', href: '/tools/', dropDown: false },
    { name: 'überUns', href: '/team/', dropDown: false },
    { name: 'jobs', href: '/jobs/', dropDown: false },
    { name: 'blog', href: '/blog/', dropDown: false },
    { name: 'k8sPodcast', href: '/kubernetes-podcast/', dropDown: false },
    { name: 'kontakt', href: '/kontakt/', dropDown: false }
  ]);

  const blogFilters = ref<Filter[]>([
    { name: 'technologie', label: 'Technologie', items: [], isOpen: false },
    { name: 'marketing', label: 'Marketing', items: [], isOpen: false },
    { name: 'sonstiges', label: 'Sonstiges', items: [], isOpen: false },
    { name: 'autor', label: 'Autor', items: [], isOpen: false }
  ]);

  const projectFilters = ref<Filter[]>([
    { name: 'anforderung', label: 'Anforderung', items: [], isOpen: false },
    { name: 'sektor', label: 'Sektor', items: [], isOpen: false },
    { name: 'kategorie', label: 'Kategorie', items: [], isOpen: false },
    { name: 'branche', label: 'Branche', items: [], isOpen: false },
    { name: 'technologie', label: 'Technologie', items: [], isOpen: false }
  ]);

  const projectsItems = [
    {
      img: '/img/brands-slides/ofa-logo.jpg',
      alt: 'OFA Logo',
      title: 'B2B Online-Shop mit Konfigurator',
      text: 'Komplexer Onlineshop mit Maßbestellungen. Über 40.000 Produktkonfigurationen. Multiple Schnittstellen. Hardware-Integration. Kundenverwaltung.',
      buttonLabel: 'Zur Website',
      buttonLink: 'https://www.ofa24.de/login/?next=/de/',
      buttonTarget: '_blank',
      anforderung: ['Backend-Dev', 'Frontend-Dev', 'Infrastruktur', 'Projekt Management', 'Hosting', 'Design'],
      sektor: ['B2B'],
      kategorie: ['Shop', 'Plattform'],
      branche: ['Medizin'],
      technologie: ['Django', 'Python', 'Solr']
    },
    {
      img: '/img/brands-slides/uni-augsburg.jpg',
      alt: 'Uni Augsburg Logo',
      title: 'Website für alle Fakultäten und Studentenzugang',
      text: 'Neue Website für die Universität Augsburg. Inklusive Login für Studenten. Komplexe Rechteverwaltung. Abbildung der verschiedenen Fakultäten.',
      buttonLabel: 'Zur Website',
      buttonLink: 'https://www.uni-augsburg.de/de/',
      buttonTarget: '_blank',
      anforderung: ['Backend-Dev', 'Frontend-Dev', 'Projekt Management'],
      sektor: ['Staatlich'],
      kategorie: ['Website'],
      branche: ['Bildung'],
      technologie: ['NGINX', 'Django CMS', 'Solr', 'Bootstrap']
    },
    {
      img: '/img/brands-slides/winter-company.jpg',
      alt: 'Winter & Company Logo',
      title: 'Website mit Produktfinder und Kundenlogin',
      text: 'Technische Betreuung und Weiterentwicklung der Website. Inklusive Kundenlogin und umfangreichem Produktfinder.',
      buttonLabel: 'Zur Website',
      buttonLink: 'https://www.winter-company.com/de/',
      buttonTarget: '_blank',
      anforderung: ['Backend-Dev', 'Frontend-Dev', 'Projekt Management'],
      sektor: ['B2B'],
      kategorie: ['Website'],
      branche: ['Konsumgüter', 'Industrie'],
      technologie: ['Django', 'Python', 'Django CMS']
    },
    {
      img: '/img/brands-slides/luma.jpg',
      alt: 'LUMA Logo',
      title: 'LUMA Delikatessen Onlineshop',
      text: 'Technische Betreuung des B2C-Webshops. Entwicklung neuer Frontend- als auch Backend-Features. Inklusive Warenwirtschaft, Buchhaltungs und Sales-Module.',
      buttonLabel: 'Zur Website',
      buttonLink: 'https://luma-delikatessen.ch/de/catalog/',
      buttonTarget: '_blank',
      anforderung: ['Backend-Dev', 'Frontend-Dev', 'Infrastruktur', 'Projekt Management'],
      sektor: ['B2C', 'B2B'],
      kategorie: ['Shop'],
      branche: ['Konsumgüter'],
      technologie: ['Django', 'Python', 'Django CMS']
    },
    {
      img: '/img/brands-slides/fonds-finanz.jpg',
      alt: 'Fonds Finanz Logo',
      title: 'Automation Hub',
      text: 'Infrastruktur zur automatisierten Seminar- und Webinarverwaltung. Inklusive Consent-Management, Anbindung an Bestandssysteme und Schnittstellen zu externen Applikationen wie Go2Webinar.',
      buttonLabel: 'Zur Website',
      buttonLink: 'https://www.fondsfinanz.de/weiterbildung/besser-beraten-akademie/online-schulungen',
      buttonTarget: '_blank',
      anforderung: ['Backend-Dev', 'Frontend-Dev', 'Infrastruktur', 'Projekt Management', 'Hosting'],
      sektor: ['B2B'],
      kategorie: ['Plattform'],
      branche: ['Versicherungen / Finanzen'],
      technologie: ['Django', 'Python', 'Kubernetes', 'Docker', 'VueJS', 'Bootstrap']
    },
    {
      img: '/img/brands-slides/allianz-logo.jpg',
      alt: 'Allianz Logo',
      title: 'Internationale Kundenplattform',
      text: 'Wagtail-basierte Plattform für Kunden von Allianz Global Benefits. Kundenaccounts, Dokumentenverwaltung, Rechtemanagement.',
      buttonLabel: 'Zur Website',
      buttonLink: 'https://www.allianzglobalbenefits.com/',
      buttonTarget: '_blank',
      anforderung: ['Backend-Dev', 'Infrastruktur'],
      sektor: ['B2B'],
      kategorie: ['Plattform'],
      branche: ['Versicherungen / Finanzen'],
      technologie: ['Django', 'Wagtail', 'Kubernetes', 'Docker']
    },
    {
      img: '/img/brands-slides/nsc.jpg',
      alt: 'NSC Logo',
      title: 'B2B Online-Shop',
      text: 'Design und Neuentwicklung des Onlineshops mit direkter Anbindung an Branchen-ERP. Automatisierte Imports von Produktbildern und -dateien. Kundenseitige Accountverwaltung mit unterschiedlichen Berechtigungen.',
      buttonLabel: 'Zur Website',
      buttonLink: 'https://shop.nsc-sicherheit.de/de/',
      buttonTarget: '_blank',
      anforderung: ['Backend-Dev', 'Frontend-Dev', 'Infrastruktur', 'Projekt Management', 'Hosting', 'Design'],
      sektor: ['B2B'],
      kategorie: ['Shop'],
      branche: ['Industrie'],
      technologie: ['Django', 'Python', 'Oscar Commerce']
    },
    {
      img: '/img/brands-slides/mpicc.jpg',
      alt: 'MPI CC Logo',
      title: 'Website mit viel Automatisierung',
      text: 'Für das Max-Planck-Institut zur Erforschung von Kriminalität, Sicherheit und Rechen (CSL) managen wir den gesamten Webauftritt. Komplexes Rechtemanagement. Viele Schnittstellen.',
      buttonLabel: 'Zur Website',
      buttonLink: 'https://csl.mpg.de/de/',
      buttonTarget: '_blank',
      anforderung: ['Backend-Dev', 'Frontend-Dev', 'Projekt Management', 'Design'],
      sektor: ['Öffentlich'],
      kategorie: ['Website'],
      branche: ['Bildung', 'Forschung'],
      technologie: ['Django', 'Python', 'Django CMS', 'Bootstrap']
    },
    {
      img: '/img/brands-slides/ofa-logo.jpg',
      alt: 'OFA Logo',
      title: 'B2C-Website mit CRM-Integration',
      text: 'Content-heavy Website mit Integration von HubSpot. Suchmaschinenoptimierung. Produktfinder, Venencheck, Händlerfinder.',
      buttonLabel: 'Zur Website',
      buttonLink: 'https://www.ofa.de/de-de/',
      buttonTarget: '_blank',
      anforderung: ['Backend-Dev', 'Frontend-Dev', 'Infrastruktur', 'Projekt Management', 'Design'],
      sektor: ['B2C'],
      kategorie: ['Website'],
      branche: ['Medizin'],
      technologie: ['Django', 'Python', 'Django CMS', 'Bootstrap']
    },
    {
      img: '/img/brands-slides/samberger.jpg',
      alt: 'Samberger Logo',
      title: 'Website mit CRM-Integration',
      text: 'B2C-Website mit Integration von HubSpot. Schulungskalender mit Anmeldung. Suchmaschinenoptimierung. Spendenkalender.',
      buttonLabel: 'Zur Website',
      buttonLink: 'https://www.samberger24.de/',
      buttonTarget: '_blank',
      anforderung: ['Backend-Dev', 'Frontend-Dev', 'Design'],
      sektor: ['B2C'],
      kategorie: ['Website'],
      branche: ['Medizin'],
      technologie: ['Django', 'Django CMS', 'Bootstrap']
    },
    {
      img: '/img/brands-slides/tuhh-logo.jpg',
      alt: 'TUHH Logo',
      title: 'Digitale Lernplattform',
      text: 'Digital Learning Lab für die TU Hamburg. Eine Plattform für Lehrer zum Teilen und Entwicklen von Unterrichtsmaterialien.',
      buttonLabel: 'Zur Website',
      buttonLink: 'https://digitallearninglab.de/',
      buttonTarget: '_blank',
      anforderung: ['Backend-Dev', 'Frontend-Dev', 'Projekt Management'],
      sektor: ['Öffentlich', 'Staatlich'],
      kategorie: ['Plattform'],
      branche: ['Bildung'],
      technologie: ['Django', 'Wagtail']
    },
    {
      img: '/img/brands-slides/lwl.jpg',
      alt: 'LWL Logo',
      title: 'Multipage Website-Baukasten',
      text: 'Standardisierter Plugin-Baukasten für die vielen verschiedenen Institutionen, die zum LWL gehören.',
      buttonLabel: 'Zur Website',
      buttonLink: 'https://www2.lwl.org/de/LWL/portal/',
      buttonTarget: '_blank',
      anforderung: ['Backend-Dev', 'Frontend-Dev', 'Infrastruktur', 'Projekt Management'],
      sektor: ['Öffentlich'],
      kategorie: ['Plattform', 'Website'],
      branche: [
        'Konsumgüter',
        'Technologie',
        'Medizin',
        'Bildung',
        'Versicherungen / Finanzen',
        'Industrie',
        'Forschung',
        'Logistik'
      ],
      technologie: ['Django', 'Python', 'Django CMS']
    },
    {
      img: '/img/brands-slides/ofa-logo.jpg',
      alt: 'OFA Logo',
      title: '3D-Scanner zur Beinvermessung',
      text: 'Entwicklung eines 3D-Scanners zur genauen Vermessung von Personen für die Maßanfertigung medizinischer Produkte, wie z. B. Kompressionsstrümpfe.',
      buttonLabel: '',
      buttonLink: '',
      buttonTarget: '_blank',
      anforderung: ['Backend-Dev', 'Frontend-Dev', 'Infrastruktur', 'Projekt Management', 'Hosting', 'Design'],
      sektor: ['B2C'],
      kategorie: ['Plattform', 'Hardware', 'Medizin'],
      branche: [],
      technologie: ['Django', 'Python']
    }
  ];

  return {
    menu,
    projectsItems,
    headingListData,
    blogHeading,
    isMobileMenuOpen,
    projectFilters,
    blogFilters,
    sortedItems,
    initialSorting
  };
});
