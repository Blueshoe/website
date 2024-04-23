---
head:
  title: 'Die Evolution der Applikationsentwicklung zu einem cloud-native Ansatz'
  meta:
    - property: 'og:locale'
      content: 'de_DE'
    - name: 'description'
      content: 'Es ist nicht einfach, ein durch und durch cloud-native Unternehmen zu werden. Werfen Sie einen Blick auf die ✅ 5 Stufen ✅ unseres Cloud Native Development Evolution Model für DevOps!'
    - property: 'og:type'
      content: 'website'
    - property: 'og:title'
      content: 'Die Evolution der Applikationsentwicklung zu einem cloud-native Ansatz'
    - property: 'og:description'
      content: 'Es ist nicht einfach, ein durch und durch cloud-native Unternehmen zu werden. Werfen Sie einen Blick auf die ✅ 5 Stufen ✅ unseres Cloud Native Development Evolution Model für DevOps!'
    - property: 'og:image'
      content: 'https://www.blueshoe.de/img/meta/blueshoe-cloud-native-devlopment.png'
    - property: 'og:image:secure_url'
      content: 'https://www.blueshoe.de/img/meta/blueshoe-cloud-native-devlopment.png'
    - name: 'twitter:card'
      content: 'summary'
    - name: 'twitter:title'
      content: 'Die Evolution der Applikationsentwicklung zu einem cloud-native Ansatz'
    - name: 'twitter:description'
      content: 'Es ist nicht einfach, ein durch und durch cloud-native Unternehmen zu werden. Werfen Sie einen Blick auf die ✅ 5 Stufen ✅ unseres Cloud Native Development Evolution Model für DevOps!'
    - name: 'twitter:image'
      content: 'https://www.blueshoe.de/img/meta/blueshoe-cloud-native-devlopment.png'
src: '/blog/evolution-der-applikationsentwicklung-zu-einem-cloud-native-ansatz'
img: '/img/blogs/evolution-of-application-development-to-cloud-native.jpg'
alt: 'The evolution of application development to cloud native'
preTitle: 'FÜR ENTWICKLER'
title: "Die Evolution der Applikationsentwicklung zu einem cloud-native Ansatz"
description: 'Es ist nicht einfach, ein durch und durch cloud-native Unternehmen zu werden. Werfen Sie einen Blick auf die ✅ 5 Stufen ✅ unseres Cloud Native Development Evolution Model für DevOps!'
date: '22.06.2023'
autor:
  - Michael Schilonka
technologie:
  - Kubernetes
marketing: []
sonstiges: []
---
::globalParagraph
Ein durch und durch cloud-native Unternehmen zu werden, ist kein leichtes Unterfangen. Dazu bedarf es einer ganzen Evolution. Aber durch welche Phasen dieser Evolution müssen Unternehmen gehen, um beim gewünschten Zustand anzukommen? Und wie sieht dieser Zustand überhaupt aus? Schauen wir es uns einmal zusammen an!
::
<!--more-->

![The evolution of application development to cloud native](/img/blogs/evolution-of-application-development-to-cloud-native.jpg){.object-cover .max-w-full .mb-5}

:::BlogNavigationCard

:::

:::globalTitle{:size="lg" .mb-5}
Phase 1: Normalisierung
:::
:::GlobalBlock{.ul-disk .mb-5}
- Teams für die Anwendungsentwicklung verwenden Versionsverwaltung.
- Teams für die Anwendungsentwicklung verwenden die üblichen Entwicklungsverfahren.
:::
:::globalParagraph
Dies geschieht zum Beispiel, wenn Git oder SVN verwendet werden. Es gibt dabei die Hauptversionen sowie zusätzliche Features, die es einfacher machen, die Kontrolle über den Anwendungscode zu behalten. Zudem gibt es Versionierungen für Release-Prozesse.
:::
:::globalParagraph
Falls dein Unternehmen noch nicht in dieser Phase angekommen ist, habt ihr in den letzten 20 Jahren wohl in einer Höhle gelebt. Setze die Versionsverwaltung umgehend durch. Jetzt sofort.
:::

:::globalTitle{:size="lg" .mb-5}
Phase 2: Standardisierung
:::
:::GlobalBlock{.ul-disk .mb-5}
- Teams entwickeln mit einer Reihe Standardtechnologien.
- Teams deployen an eine Standard-Betriebsplattform.
:::
:::globalParagraph
  Standardisierung kann die Effizienz deines Unternehmens drastisch erhöhen. Das bezieht sich zwar nicht nur auf dein Tech-Team, aber speziell für die heißt das, dass sie mit Container-Technologie wie [Docker](/blog/strategien-fur-schlanke-docker-images/){.bs-link-blue}, Docker-Compose oder [Kubernetes](/blog/kubernetes-development/){.bs-link-blue} arbeiten werden.
:::
:::globalParagraph
Diese Phase ist das Fundament für das Unterfangen, ein Unternehmen cloud-native zu machen.
:::

![unikube_c-ndem_Infographic](/img/blogs/unikube_c-ndem_Infographic.jpg){.object-cover .w-full .mb-5}

:::globalTitle{:size="lg" .mb-5}
Phase 3: Expansion
:::
:::GlobalBlock{.ul-disk .mb-5}
- Anwendungen bestehen aus mehreren kleineren, beweglichen Elementen und lose gekoppelten Services.
- Anwendungen sind auf den Umfang, die Widerstandfähigkeit und die Geschwindigkeit von Veränderungen ausgerichtet.
:::
:::globalParagraph
Dein Unternehmen verwendet serviceorientierte Architektur, Message-Brokering, Event-Streams und lose gekoppelte Interfaces (REST-, GraphQL- etc.). Ganz nach dem Motto „Divide et impera“, also „Teile und herrsche“, können dadurch spezialisierte Teams kreiert und schnellere Entwicklung sowie eine bessere Handhabung komplexer Anwendungen umgesetzt werden.
:::
:::globalParagraph
Um in dieser Phase anzukommen, ist es wichtig, für deine Anwendung bereits von Anfang an eine Struktur aus individuell entwickelten Services einzuplanen. Es ist nämlich wirklich anstrengend, eine monolithische Anwendung zu einem späteren Zeitpunkt aufzuteilen.
:::

:::globalTitle{:size="lg" .mb-5}
Phase 4: Automatisierte Bereitstellung der Anwendung
:::
:::GlobalBlock{.ul-disk .mb-5}
- Teams verwenden existierende Deployment-Muster erneut.
- Versionsverwaltung für Deployment-Muster und Konfigurationen.
- Automatische Provisionierung der Entwicklungsumgebung.
- Teams verwenden einen Standardsatz an Build- und Testsystemen.
- Service-Discovery wird in Anwendungen verwendet.
- Security-Teams sind am Design und Deployment beteiligt.
- Automatisiertes Security-Profiling von Code und Config-Manifesten.
:::
:::globalParagraph
Zu den Technologien und Ansätzen, die möglicherweise während der 4. Phase eingesetzt wurden, gehören Helm, Quay, GitHub Actions, Continuous Integration, ArgoCD, Service Mesh, Network Policies und Pod Disruption Budget.
:::
:::globalParagraph
Anwendungen (oder besser gesagt: kleine, robuste Services) haben eine hohe Release-Häufigkeit. Umfassende automatisierte Deployment-Muster (z. B. bei der Verwendung von Helm in allen Bereichen) mit GitOps sind vorhanden. Ein „Anstoß“ des Source-Management-Systems löst nachvollziehbare Änderungen an der Infrastruktur und den Anwendungen aus. Alle Teammitglieder (mit besonderem Schwerpunkt auf die Entwickler) kennen die Schlüsselelemente der kontinuierlichen Integrationspipeline und lösen aufkommende Probleme ganz selbstständig. Zudem sind auch Mitglieder eines spezialisierten Security-Teams an der Entwicklung von Architekturen und Services beteiligt. Sobald Sicherheitslücken auftreten, werden Security-Updates umgehend erstellt.
:::

:::globalTitle{:size="lg" .mb-5}
Phase 5: Automatisiertes Application-Management
:::
:::GlobalBlock{.ul-disk .mb-5}
- Entwicklerteams können auf alle Services für die Entwicklung zugreifen.
- Produktion kann für das Deployment nachgebildet werden.
- Anwendungen verwenden Muster von fortgeschrittenen Betriebsplattformen.
- Anwendungen verwalten sich selbst sowie die Betriebsplattform.
:::
:::globalParagraph
Beispiele: Operators, CRD (Custom Resource Definitions), Auto Scaling und Probes.
:::

:::globalParagraph
Dein Entwicklungsteam jagt einen komplexen Bug, der peinlicherweise alle deine Service beeinflusst? Kein Problem – in Phase 5 können deine Teams die Komplexität deiner Produktionsentwicklung nämlich im Handumdrehen provisionieren. Und obendrauf managen alle Service ihre eigenen Lifecycles, ohne dass manuell eingegriffen werden muss.
:::
:::globalParagraph
Ein neues Update benötigt eine Datenmigration? Auch kein Problem, denn deine Kubernetes-Operators ermitteln das verfügbare Update in deinem Registry und wenden die nötigen Scripts automatisch an, um die Daten deiner Anwendung konstant zu halten. Anwendungen informieren Kubernetes dabei selbst über ihren Zustand – sind sie bereit, neue Anfragen zu bearbeiten oder wird mehr Kapazität benötigt? Können wir es ein bisschen zurückschrauben, um etwas Geld zu sparen? In Phase 5 muss sich dein Team um solche Fragen glücklicherweise keine Sorgen mehr machen.
:::
:::globalParagraph
Bist du bereits bei Phase 5 angekommen? Wenn ja – Glückwunsch! Falls nicht, mach dir aber keine Sorgen. Soweit wir es beurteilen können, sind bisher sehr wenige Unternehmen wirklich in Phase 5 angekommen. Wir empfehlen, dass jedes Unternehmen möglichst schnell bei Phase 3 ankommen sollte und daraufhin sofort versuchen sollte, Phase 4 als mittelfristiges Ziel zu verfolgen. Falls das deine Strategie ist, dann bist du schonmal auf einem guten Weg zum zukünftigen Erfolg.
:::
:::globalParagraph
Wenn du mehr Einblicke in das Kubernetes-Ökosystem erhalten möchtest, folge einfach <a href="https://www.linkedin.com/in/michael-schilonka/" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">Michael Schilonka auf LinkedIn</a>.
:::


:::BlogRelatedPosts{:url='["/blog/kubernetes-aufbau-plattform-kubernetes", "/blog/migration-nach-cloud-native", "/blog/managed-vs-unmanaged-kubernetes", "/blog/kubernetes-development", "/blog/strategien-fur-schlanke-docker-images"]'}

:::