---
head:
  title: 'Partnermanagement-Plattform'
  meta:
    - property: 'og:locale'
      content: 'de_DE'
    - name: 'description'
      content: 'Partnermanagement-Plattform'
    - property: 'og:type'
      content: 'website'
    - property: 'og:title'
      content: 'Partnermanagement-Plattform'
    - property: 'og:description'
      content: 'Partnermanagement-Plattform'
    - property: 'og:image'
      content: 'https://www.blueshoe.de/img/meta/blueshoe-cloud-native-devlopment.png'
    - property: 'og:image:secure_url'
      content: 'https://www.blueshoe.de/img/meta/blueshoe-cloud-native-devlopment.png'
    - name: 'twitter:card'
      content: 'summary'
    - name: 'twitter:title'
      content: 'Partnermanagement-Plattform'
    - name: 'twitter:description'
      content: 'Partnermanagement-Plattform'
    - name: 'twitter:image'
      content: 'https://www.blueshoe.de/img/meta/blueshoe-cloud-native-devlopment.png'
id: 4
img: '/img/brands-slides/allgau.jpg'
alt: 'allgau logo'
title: "Partnermanagement-Plattform"
text: 'Dialog- und Evaluationsplattform für bestehende und angehende Partner der Marke Allgäu. Einbindung administrierbarer Fragebögen.'
description: ''
buttonLabel: "Projektinfos"
buttonLink: "/projekte/partnermanagement-plattform-allgaeu/"
buttonTarget: "_self"
anforderung:
  - Backend-Dev
  - Frontend-Dev
  - Infrastruktur
  - Projekt Management
  - Hosting
sektor:
  - B2B
kategorie:
  - Plattform
branche:
  - Konsumgüter
technologie:
  - Django
  - Python
---

::GlobalSimpleSection{:bg="bg-bs-blue" :isButton=true}
:::GlobalTitle{:color="text-white" .mb-6}
Dialogplattform für die Allgäu GmbH
:::
:::GlobalParagraph{:color="text-white" .mb-4}
Von der Hofkäserei über den größten industrielle Arbeitgeber in der Region - das Bosch Werk in Blaichach - bis hin zur Allgäuer Volksbank ist bei der [Allgäu GmbH](https://www.allgaeu.de/){.text-white .underline .hover:text-bs-green  :target="_blank"}, der offiziellen Gesellschaft für Standort und Tourismus im Allgäu, die ganze Bandbreite der Allgäuer Wirtschaft vertreten. Egal ob kleines Familienunternehmen, Mittelstand, globale Firma oder Non-Profit: Wer Markenpartner ist, muss strenge Kriterien erfüllen und darf erst nach der Zertifizierung das blaue Allgäu-Markenzeichen tragen. Die Plattform zur Verifizierung von Markenpartnern der Allgäu GmbH haben wir mit den Technologien [Python](/loesungen/python-django-agentur/){.text-white .underline .hover:text-bs-green} und django gebaut.
:::
#button
::GlobalButton{:url="https://b2b.allgaeu.de/marke/markenpartner/aktuell" :color="green" :label="Zu den Allgäu-Markenpartnern"  :target="_blank"}
::
::

::GlobalSectionWithImage{:image="/img/projects/dialogplattform.allgaeu.jpg" :alt="foto_von_installation" :bg="bg-white" :isButton=true :imagePosition="right"}
:::GlobalTitle{.mb-6}
Unser Projekt
:::
:::GlobalParagraph{.mb-6}
Anhand von **administrierbaren Fragebögen** kann die Allgäu GmbH prüfen, **ob ein Unternehmen alle Voraussetzungen erfüllt, um als Markenpartner verifiziert zu werden**. Die Fragen beziehen sich je nach Partner z. B. auf das Energiemanagement, das Ressourcenmanagement, die Mitarbeitermotivation, das soziale Engagement der Firma und Ähnliches. Die Plattform, auf der diese Fragebögen verwaltet und ausgewertet werden haben wir als WebApp aufgebaut.
:::

:::GlobalTitle{:size="lg" :tag="h3" .mb-6}
**Die Herausforderungen**
:::
:::GlobalParagraph
Der [Dialogplattform](https://dialogplattform.allgaeu.de/anmelden/?next=/){.bs-link-blue  :target="_blank"} liegen recht **komplexe Datenstrukturen** zugrunde. Es gibt beispielsweise verschiedene, wiederverwendbare Antwortmöglichkeiten oder aber auch Fragen, die von anderen Antworten abhängig sind. Ein besonderes Feature ist der **Datenexport** in das sogenannte Extranet (Informationsplattform für Markenpartner), der die öffentlichen Fragen und Antworten der Partner automatisch dort anzeigt.
:::
:::GlobalParagraph
Alle zwei Jahre müssen die Markenpartner den Fragebogen erneut ausfüllen. Um den **Arbeitsaufwand für die Partner so gering wie möglich zu halten**, merkt sich unser System die Antworten, die bereits einmal gegeben wurden und spielt diese dann als personalisierten Antwortvorschlag für den jeweiligen Kunden aus.
:::
#button
::GlobalButton{:url="/kontakt/" :label="Gerne erzählen wir dir mehr über dieses Projekt"}
::
::

