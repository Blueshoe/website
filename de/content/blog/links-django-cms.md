---
head:
  title: 'Links und Linkstruktur in django CMS'
  meta:
    - property: 'og:locale'
      content: 'de_DE'
    - name: 'description'
      content: 'Wie funktioniert das anlegen von Inhalten, Bildern und Links in Django-CMS? Heute geht es um das Thema Verlinkungen in Django-CMS.'
    - property: 'og:type'
      content: 'website'
    - property: 'og:title'
      content: 'Links und Linkstruktur in django CMS'
    - property: 'og:description'
      content: 'Wie funktioniert das anlegen von Inhalten, Bildern und Links in Django-CMS? Heute geht es um das Thema Verlinkungen in Django-CMS.'
    - property: 'og:image'
      content: 'https://www.blueshoe.de/img/blogs/matthew-lancaster-MthZSf.jpg'
    - property: 'og:image:secure_url'
      content: 'https://www.blueshoe.de/img/blogs/matthew-lancaster-MthZSf.jpg'
    - name: 'twitter:card'
      content: 'summary'
    - name: 'twitter:title'
      content: 'Links und Linkstruktur in django CMS'
    - name: 'twitter:description'
      content: 'Wie funktioniert das anlegen von Inhalten, Bildern und Links in Django-CMS? Heute geht es um das Thema Verlinkungen in Django-CMS.'
    - name: 'twitter:image'
      content: 'https://www.blueshoe.de/img/blogs/matthew-lancaster-MthZSf.jpg'
src: '/blog/links-django-cms'
img: '/img/blogs/matthew-lancaster-MthZSf.jpg'
alt: 'matthew-lancaster-MthZSf'
preTitle: "Webseiten richtig gut verknüpfen"
title: "Links und Linkstruktur in django CMS"
description: 'Wie funktioniert das anlegen von Inhalten, Bildern und Links in Django-CMS? Heute geht es um das Thema Verlinkungen in Django-CMS.'
date: '17.05.2017'
autor:
  - Robert Stein
technologie: 
  - Django CMS
  - Django
marketing: []
sonstiges: []
---
::globalParagraph
Links sind ein essentieller Bestandteil von Webseiten und machen das Internet prinzipiell zum dem was es ist. Hier zeigen wir, wie wir Links in Django-CMS verwenden, worauf wir dabei achten und wie wir eine konsistente Linkstruktur garantieren.
::
<!--more-->

![matthew-lancaster](/img/blogs/matthew-lancaster-MthZSf.jpg){.object-cover .max-w-full .mb-5}

:::globalParagraph
Django-CMS bringt von Haus aus eine ganze Reihe Plugins mit. Darunter das TextPlugin. Es erlaubt uns einfach Texte in unser CMS einzufügen und diese zu bearbeiten.
:::

![text_edit_django_cms](/img/blogs/text_edit_django_cms.png){.object-cover .max-w-full .mb-5}

:::globalParagraph
Weiterhin erlaubt uns Django-CMS innerhalb des Plugins weitere Plugins zu verschachteln. Das sieht dann folgendermaßen aus:
:::

![django_cms_structure_mode](/img/blogs/django_cms_structure_mode.jpg){.object-cover .max-w-full .mb-5}

:::globalParagraph
Dies ergibt dann folgendes Ergebnis auf unsere Webseite:
:::

![django_cms_content_mode](/img/blogs/django_cms_content_mode.jpg){.object-cover .max-w-full .mb-5}

:::globalParagraph
Hier ist nun ein LinkPlugin in einem TextPlugin verschachtelt.
:::

:::globalTitle{:size="lg" .mb-5}
DJANGOCMSPLUGIN_FILER_LINK – DAS DJANGO-CMS LINK PLUGIN
:::
:::globalParagraph
Einfach, oder? Da der Link innerhalb des Textes steht, ist er dem TextPlugin untergeordnet. Das LinkPlugin erlaubt es uns einfach interne und externe Inhalte zu verlinken. Es folgen Beispiele:
:::
:::globalParagraph
Interne Verlinkung:
:::

![django_cms_link_internal](/img/blogs/django_cms_link_internal.jpg){.object-cover .max-w-full .mb-5}

:::globalParagraph
Externe Verlinkung:
:::

![django_cms_link_external](/img/blogs/django_cms_link_external.jpg){.object-cover .max-w-full .mb-5}

:::globalParagraph
E-Mail-Adresse:
:::

![django_cms_link_mail](/img/blogs/django_cms_link_mail.jpg){.object-cover .max-w-full .mb-5}

:::globalParagraph
Datei:
:::

![django_cms_link_file](/img/blogs/django_cms_link_file.jpg){.object-cover .max-w-full .mb-5}

:::globalParagraph
Weiterhin ist es möglich Vorlagen für den Link zu definieren, sodass seine Erscheinung einfach durch den Nutzer umgestellt werden kann:
:::
:::globalParagraph
Vorher
:::

![link_style_before](/img/blogs/link_style_before.jpg){.object-cover .max-w-full .mb-5}

:::globalParagraph
Nachher
:::

![link_style_after](/img/blogs/link_style_after.jpg){.object-cover .max-w-full .mb-5}

:::globalParagraph
Falls sich der Link in einem neuen Fenster öffnen soll ist dies einfach über eine Checkbox einzustellen.
:::
:::globalParagraph
Für die fortgeschrittenen Nutzer ist es möglich weitere Attribute an den Link zu hängen.
:::
:::globalParagraph
Möchte man beispielsweise einen „title“ zu dem Link hinzufügen wäre das hierüber problemlos möglich.
:::

:::globalTitle{:size="lg" .mb-5}
BLUESHOE’S ANPASSUNGEN FÜR DAS PLUGIN
:::
:::globalParagraph
Das Link Plugin bringt alle Basisfunktionalitäten mit, welche wir hierfür benötigen. An dieser Stelle haben wir noch etwas weitergedacht: Wie können wir das Plugin benutzerfreundlicher machen? Was passiert mit toten Links?
:::

:::globalTitle{:size="lg" .mb-5}
VERBESSERTE ÜBERSICHT
:::
:::globalParagraph
Um eine bessere Übersicht zu erlangen haben wir die Oberfläche des Plugins für Autoren und Editoren überarbeitet. Es werden nun nicht mehr alle Möglichkeiten interne, externe Verlinkungen sowie Mail- und Dateiverlinkungen untereinander angezeigt, sondern als Tableiste in der Administrationsoberfläche hinterlegt.
:::

![tabs](/img/blogs/tabs.jpg){.object-cover .max-w-full .mb-5}

:::globalParagraph
Der Tab, für den eine Verlinkung hinterlegt ist, ist automatisch aktiv. Von nun an ist es nicht mehr möglich mehrere Verlinkungen zu hinterlegen, diese sind nun komplett exklusiv. Dadurch erlangt der Nutzer schneller eine Übersicht und die Oberfläche wirkt etwas schlanker (vergleiche obere Screenshots).
:::

:::globalTitle{:size="lg" .mb-5}
404 UND 500 FEHLER VERMEIDEN
:::
:::globalParagraph
404 Fehler treten auf, wenn die angeforderte Seite nicht auf dem Server gefunden werden kann. Das ist absolut normal, denn Webserver können natürlich nicht jede URL bedienen, welche bei ihnen angefragt wird. Dennoch möchte man natürlich sehen, ob 4xx Fehler verursacht werden, um beispielsweise Tippfehler in der URL durch eine Weiterleitung auszugleichen. Ebenso sollte man darauf achten, dass alle verlinkten Seiten funktionstüchtig sind und nicht mit einem 5xx Fehler antworten.
:::
:::globalParagraph
Dafür haben wir den LinkHealthState eingeführt und verwenden das Plugin regelmäßig bei unserer Softwareentwicklung. Über ein Dashboard im Django-CMS Administrator kann man alle Links, sowohl intern als auch extern, auf der Webseite analysieren und den Status der verlinkten Seiten einsehen. Dabei wird gelistet, ob der Link auf eine Weiterleitung (3xx), eine nicht erreichbare Seite (4xx) oder eine fehlerhafte Seite führt (5xx). Ist mit dem Link alles in Ordnung, so wird dieser nicht gelistet. Ein Button erlaubt es die Analyse neu auszuführen.
:::

![link_health_state_django_cms](/img/blogs/link_health_state_django_cms.jpg){.object-cover .max-w-full .mb-5}

:::globalParagraph
Weiterhin werden fehlerhafte Links im Frontend gekennzeichnet, sodass Editoren schnell den entsprechenden Link auf einer Seite finden können.
:::

![django_cms_link_error](/img/blogs/django_cms_link_error.jpg){.object-cover .max-w-full .mb-5}

:::globalParagraph
Somit ist das LinkPlugin nicht mehr nur ein herkömmliches Plugin, sondern erlaubt auch eine schnelle Analyse der Webseite um Linkkonsistenz gewährleisten zu können. Der aktuelle Entwicklungsstand ist unter [https://github.com/Blueshoe/djangocms-link2](https://github.com/Blueshoe/djangocms-link2){.bs-link-blue :target="_blank"} einsehbar. Feedback und Kritik zum Django-CMS Link Plugin von Blueshoe sind herzlich willkommen.
:::