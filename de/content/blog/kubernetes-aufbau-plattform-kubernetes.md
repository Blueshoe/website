---
head:
  title: 'Kubernetes Basics: Der Aufbau einer Plattform mit Kubernetes'
  meta:
    - property: 'og:locale'
      content: 'de_DE'
    - name: 'description'
      content: 'Erfahre, wie du mit Kubernetes eine komplexe Plattform aufbaust und welche Tools und Technologien du dafür brauchst.'
    - property: 'og:type'
      content: 'website'
    - property: 'og:title'
      content: 'Kubernetes Basics: Der Aufbau einer Plattform mit Kubernetes'
    - property: 'og:description'
      content: 'Erfahre, wie du mit Kubernetes eine komplexe Plattform aufbaust und welche Tools und Technologien du dafür brauchst.'
    - property: 'og:image'
      content: 'https://www.blueshoe.de/img/blogs/kubernetes_gefyra_getdeck.jpg'
    - property: 'og:image:secure_url'
      content: 'https://www.blueshoe.de/img/blogs/kubernetes_gefyra_getdeck.jpg'
    - name: 'twitter:card'
      content: 'summary'
    - name: 'twitter:title'
      content: 'Kubernetes Basics: Der Aufbau einer Plattform mit Kubernetes'
    - name: 'twitter:description'
      content: 'Erfahre, wie du mit Kubernetes eine komplexe Plattform aufbaust und welche Tools und Technologien du dafür brauchst.'
    - name: 'twitter:image'
      content: 'https://www.blueshoe.de/img/blogs/kubernetes_gefyra_getdeck.jpg'
src: '/blog/kubernetes-aufbau-plattform-kubernetes'
img: '/img/blogs/kubernetes_gefyra_getdeck.jpg'
alt: 'kubernetes_gefyra_getdeck'
preTitle: 'Ein umfassender Blick in den Werkzeugkasten'
title: "Kubernetes Basics: Der Aufbau einer Plattform mit Kubernetes"
description: 'Erfahre, wie du mit Kubernetes eine komplexe Plattform aufbaust und welche Tools und Technologien du dafür brauchst.'
date: '01.06.2023'
autor:
  - Oliver Hientz
technologie: []
marketing: []
sonstiges: 
  - Projekt Management
---
::globalParagraph
<a href="https://kubernetes.io/" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">Kubernetes</a> ist eine umfangreiche Technologie, die auch erfahrene Entwickler immer wieder vor neue Herausforderungen stellt. Deshalb haben zahlreiche Anbieter Tools entwickelt, um die Arbeit mit und um Kubernetes zu erleichtern.
::
::globalParagraph
Wir werfen einen Blick in den Werkzeugkasten, erläutern Einsatzmöglichkeiten der verschiedenen Tools und geben Beispiele, welche Lösungen angeboten werden.
::
<!--more-->

![kubernetes_gefyra_getdeck](/img/blogs/kubernetes_gefyra_getdeck.jpg){.object-cover .max-w-full .mb-5}

:::BlogNavigationCard{:title="Table of contents"}

:::

:::globalParagraph
<a href="https://kubernetes.io/" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">Kubernetes</a>  ist eine Open-Source-Technologie, um containerisierte Software zu verwalten und hilft Entwicklern dabei, einzelne Anwendungen für die Endnutzer hochverfügbar zu halten.
:::
:::globalParagraph
Die Technologie Kubernetes kann durch Entwickler vollkommen eigenständig genutzt werden - eben um “nur” Software zu verwalten. Eine Applikation kann dann i.d.R. eigenständig auf dem Cluster ausgeführt werden. Soll diese Applikation jedoch nicht nur im Cluster ausgeführt werden, sondern auch “von außen” erreichbar sein, z.B. durch einen Endanwender, ist zusätzlich zu Kubernetes noch eine Technologie wie Ingress notwendig. Damit beginnt schon der Aufbau einer ganzen Plattform.
:::
:::globalParagraph
Kubernetes kann mit einer Vielzahl eigenständiger Applikationen und anderen Technologien ergänzt werden, um so eine beliebig komplexe Plattform aufzubauen, bei der Kubernetes dann ein zentraler Bestandteil ist. Solche Plattformen können ganz individuelle Entwicklungsprozesse abbilden, je nachdem, wie einzelne Teams ihre Prozesse organisieren oder welche Unternehmensanforderungen abgebildet werden sollen.
:::
:::globalParagraph
In diesem Text wollen wir einzelne Technologien und Applikationen, die für den Aufbau einer solchen Plattform in Frage kommen, vorstellen und erläutern. Unsere Zielgruppe dabei sind einerseits Entwickler, die noch keine Erfahrung mit Kubernetes haben, andererseits aber auch Personen, die zwar im Feld der Softwareentwicklung tätig sind, aber selbst nicht entwickeln, sondern z.B. Projekte managen.
:::
:::globalParagraph
Die Liste der hier vorgestellten Applikationen und Technologien stellt dabei nur eine Auswahl der Möglichkeiten für einzelne Teilbereiche dar und ist nicht abschließend.
:::

:::globalTitle{:size="lg" .mb-5}
Managed Cluster und Kubernetes-Distributionen
:::
:::globalTitle{:size="md" :tag="h3" .mb-5}
Managed Kubernetes-Cluster
:::
:::globalTitle{:size="sm" :tag="h4" .mb-5}
**Was machen Managed Kubernetes-Cluster?**
:::
:::globalParagraph
Wie bereits in dem Artikel [Kubernetes für Anfänger](/blog/kubernetes-fuer-anfaenger){.bs-link-blue}, handelt es sich bei Kubernetes (abgekürzt auch k8s) um eine Open-Source-Technologie, die von jedem frei genutzt werden kann. Zusätzlich gibt es aber noch Anbieter von so genannten managed Kubernetes-Clustern, die für die Nutzung von Kubernetes sowohl die Infrastruktur als auch eine erste Benutzeroberfläche bereitstellen.
:::

:::globalTitle{:size="sm" :tag="h4" .mb-5}
**Welche Manageds Kubernetes-Cluster Anbieter gibt es?**
:::
:::globalParagraph
Die bekanntesten Anbieter für managed Kubernetes-Cluster sind <a href="https://azure.microsoft.com/en-us/products/kubernetes-service" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">Azure Kubernetes Service (AKS)</a>, <a href="https://cloud.google.com/kubernetes-engine" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">Google Kubernetes Engine (GKE)</a> and <a href="https://aws.amazon.com/eks/" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">Amazon Elastic Kubernetes Service (EKS)</a>.
:::
:::globalParagraph
Alle Anbieter stellen für die Arbeit mit Kubernetes eine Benutzeroberfläche und weitere Services bereit. Ob einzelne Services bereits im Basispreis enthalten sind oder über Lizenzen noch weiter zugekauft werden müssen, variiert stark je nach Anbieter.
:::
:::globalParagraph
Im Einzelfall sollte von den Entwicklern geprüft werden, welche Services einzelne Anbieter zur Verfügung stellen und ob diese notwendig und sinnvoll sind. AKS beispielsweise stellt in der Basis-Version bereits ein gutes Logging zur Verfügung, bei EKS muss ein solches zusätzlich zur Basisversion erworben werden.
:::

:::globalTitle{:size="md" :tag="h3" .mb-5}
Kubernetes-Distributionen
:::
:::globalTitle{:size="sm" :tag="h4" .mb-5}
**Was sind Kubernetes-Distributionen?**
:::
:::globalParagraph
Die Abgrenzung zwischen Anbietern von managed Kubernetes-Clustern und Anbietern von Kubernetes Distributionen ist nicht ganz einfach.
:::
:::globalParagraph
Ein Kubernetes-Cluster mit den notwendigen Nodes und Pods kann vollständig autonom betrieben werden. Dazu bedarf es auch nicht der Nutzung eines managed Clusters.
:::
:::globalParagraph
Die im weiteren Verlauf dieses Textes beschriebenen Tools können, müssen aber nicht zwangsläufig genutzt werden, wenn man einen Kubernetes-Cluster betreibt. Durch die Nutzung dieser Tools können beliebig komplexe Plattformen erstellt werden, deren Kernstück der Kubernetes-Cluster ist. Diese Tools wollen wir im Folgenden als “Ecosystem-Tool” bezeichnen.
:::
:::globalParagraph
Anbieter von Kubernetes-Distributionen stellen eine bereits vordefinierte Plattform mit einzelnen Ecosystem-Tools zur Verfügung. Anbieter von managed Kubernetes-Clustern hingegen stellen demgegenüber für die Nutzung von Kubernetes “nur” die Infrastruktur und eine erste Benutzeroberfläche mit einzelnen Funktionen zur Verfügung, die um beliebige Ecosystem-Tools erweitert werden können.
:::
:::globalParagraph
Kubernetes-Distributionen bieten den Mehrwert, dass Entwickler diese Tools nicht selbst in den Cluster integrieren müssen. Es ist davon auszugehen, dass alle in dieser Plattform genutzten Tools untereinander und mit dem Kubernetes-Cluster aufeinander abgestimmt konfiguriert sind, automatisiert regelmäßige Updates erhalten und somit fehlerfrei ausgeführt werden.
:::
:::globalParagraph
Es steht den Entwicklern aber frei, diese Plattformen wiederum in einen managed Kubernetes-Cluster zu integrieren und einige Anbieter von managed Kubernetes-Clustern bieten auch bereits eine Kubernetes-Distribution an.
:::
:::globalParagraph
Zusammengefasst kann man also sagen, dass managed Kubernetes-Cluster ein vorgefertigtes Grundgerüst für die Arbeit mit Kubernetes zur Verfügung stellen. Kubernetes-Distributionen gehen einen Schritt weiter und liefern zusätzlich bereits integrierte Tools als Paket.
:::

:::globalTitle{:size="sm" :tag="h4" .mb-5}
**Welche Anbieter von Kubernetes-Distributionen gibt es?**
:::
:::globalParagraph
Die bekanntesten Anbieter für eine Kubernetes-Distribution sind wahrscheinlich <a href="https://www.redhat.com/de/technologies/cloud-computing/openshift" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">Red Hat OpenShift</a> und <a href="https://www.rancher.com/products/secure-kubernetes-distribution" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">Rancher Kubernetes Engine (RKE)</a>.
:::

![managedk8cluster-k8distribution](/img/blogs/managedk8cluster-k8distribution.jpg){.object-cover .w-full .mb-6}

:::globalTitle{:size="lg" .mb-5}
Technologien, die **in** einem Kubernetes-Cluster installiert werden
:::
:::globalTitle{:size="md" :tag="h3" .mb-5}
Kubernetes Dashboard: Das Standard-Frontend
:::
:::globalTitle{:size="sm" :tag="h4" .mb-5}
**Was ist das Kubernetes Dashboard?**
:::
:::globalParagraph
Beim Kubernetes Dashboard handelt es sich um ein web-basiertes User-Interface. <a href="https://kubernetes.io/docs/tasks/access-application-cluster/web-ui-dashboard/" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">Kubernetes Dashboard</a> ist ein Bestandteil von Kubernetes und bietet eine Benutzeroberfläche um beispielsweise containerisierte Software auf einen Cluster zu deployen oder dessen Ressourcen zu managen. Man bekommt damit einen Überblick über alle Applikationen und Services, die in einem Cluster laufen oder kann individuelle Kubernetes Ressourcen (wie Jobs, Deployments, etc.) modifizieren.
:::
:::globalParagraph
Kubernetes Dashboard als Benutzeroberfläche ist aber nicht per Default in einem Cluster installiert, sondern muss explizit dafür ausgewählt werden.
:::
:::globalParagraph
Ein Kubernetes Cluster kann auch ohne das Kubernetes Dashboard über die Kommandozeile verwaltet und gemonitored werden. Die Bedienbarkeit wird durch das Dashboard aber wesentlich vereinfacht.
:::

:::globalTitle{:size="sm" :tag="h4" .mb-5}
**Welche Tools gibt es?**
:::
:::globalParagraph
Das Kubernetes Dashboard ist das Standard-Frontend für einen Kubernetes-Cluster. Alternativ bieten auch Anbieter von managed Clustern wie AKS oder GKE ein eigenes Dashboard an.
:::

:::globalTitle{:size="md" :tag="h3" .mb-5}
Kommandozeilentool: Technologien, um mit einem Cluster zu kommunizieren
:::
:::globalTitle{:size="sm" :tag="h4" .mb-5}
**Was sind Kommandozeilentools?**
:::
:::globalParagraph
Einen Cluster muss man sich zwar als eigenständiges, in sich abgeschlossenes Gebilde vorstellen, aber unabhängig von seiner Umgebung ist ein Cluster dennoch nicht. Ein Cluster macht nur das, was ihm als Kommando vorgegeben wird. Es muss also einen Weg geben, wie Entwickler mit dem Cluster kommunizieren können.
:::
:::globalParagraph
Dafür gibt es Benutzeroberflächen, die Informationen zum Cluster gebündelt darstellen können und es Entwicklern erlauben, mit dem Cluster in Verbindung zu treten. Allerdings arbeiten die meisten Entwickler gerne mit sogenannten Komandozeilentools: Informationen können ohne große grafische Aufbereitung abgefragt oder an den Cluster weitergegeben werden.
:::
:::globalParagraph
Kommandozeilentools muss man sich wie integrierte Entwicklungsumgebungen bei der Softwareentwicklung vorstellen: Verschiedenen Tools haben einen unterschiedlichen Funktionsumfang und legen ihren jeweiligen Fokus auf unterschiedliche Anwendungsbereiche (siehe z.B. <a href="https://www.dev-insider.de/was-ist-eine-ide-a-600703/" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">"Was ist eine IDE?"</a>). Analog dazu gibt es auch unterschiedliche Kommandozeilentools, die die Entwickler je nach Präferenz für die Arbeit mit einem Kubernetes-Cluster nutzen können.
:::

:::globalTitle{:size="sm" :tag="h4" .mb-5}
**Welche Komandozeilentools gibt es?**
:::
:::globalParagraph
Tools, die hier zur Verfügung stehen, sind beispielsweise kubectl, kubectx oder kube-shell.
:::
:::globalParagraph
Um eine Analogie zum Auto zu bemühen, kann man sich vorstellen, dass Kubernetes selbst das Konzept der Autotür beinhaltet, über die Entwickler mit einem Kubernetes-Cluster in Verbindung treten können. Kommandozeilentools wiederum setzten das Konzept der Tür unterschiedlich um: Einmal öffnet sich die Türe nach vorne, einmal nach hinten und das dritte Tool ist eine Flügeltüre. Welches Kommandozeilentool genutzt wird, ist aber grundsätzlich egal und liegt in der Entscheidung der Entwickler. Unterschiedliche Entwickler, die aber mit dem gleichen Cluster arbeiten, können auch unterschiedliche Kommandozeilentools benutzen.
:::

:::globalTitle{:size="md" :tag="h3" .mb-5}
Service-Mesh: Technologie, um die Kommunikation zwischen Cluster-Bestandteilen zu managen
:::
:::globalTitle{:size="sm" :tag="h4" .mb-5}
**Was machen Service-Meshes?**
:::
:::globalParagraph
“Klassische” Anwendungen sind eher in der Form eines Monolithen konzipiert. “Moderne” cloud-native [Anwendungsarchitekturen](/loesungen/microservice-architektur-beratung/){.bs-link-blue} hingegen setzen auf einzelne Microservices und die Anwendung entsteht erst durch eine Verflechtung und Interaktion einzelner Microservices untereinander. Einzelne Services sind in Container verpackt, die in einzelnen Pods zusammengefasst sind, welche wiederum miteinander kommunizieren und Informationen austauschen (siehe dazu ["Kubernetes für Anfänger"](/blog/kubernetes-fuer-anfaenger/){.bs-link-blue}).
:::
:::globalParagraph
Die Kommunikation zwischen einzelnen Pods (,die den containerisierten Code enthalten) erfolgt in einem Kubernetes Cluster selbst und wird durch die Entwickler definiert. Zusätzlich kann durch die Entwickler noch ein sogenanntes Service Mesh eingesetzt werden, das es erlaubt, die Kommunikation zwischen Pods noch genauer zu spezifizieren.
:::
:::globalParagraph
Um das zu veranschaulichen, wollen wir uns an dieser Stelle einen Online-Shop vorstellen. Dem Kunden stehen beim Checkout beispielsweise 2 Zahlungsmöglichkeiten zur Verfügung: auf Rechnung und per Kreditkarte. Die Shopbetreiber wollen künftig aber auch die Bezahlung per Paypal möglich machen. Nachdem die Entwickler den dafür notwendigen Code erarbeitet und in einer Testumgebung geprüft haben, soll es nun einen ersten Test im Live-Shop geben.
:::
:::globalParagraph
Durch die Nutzung eines Service-Mesh kann die Neuentwicklung (Auswahl zwischen 3 Zahlungsmöglichkeiten) auf einem eigenen Pod im Cluster zur Verfügung gestellt werden. Die ursprüngliche Umsetzung (Auswahl nur zwischen 2 Zahlungsmöglichkeiten) kann im Cluster aber bestehen bleiben. Mit dem Service-Mesh können die Entwickler definieren, dass 80% der eingehenden Anfrage weiterhin auf den Pod mit dem ursprünglichen Stand (Auswahl nur von 2 Zahlungsmöglichkeiten) geleitet wird und nur 20% auf den Pod mit der Neuentwicklung.
:::
:::globalParagraph
Service-Meshes können aber noch mehr: Im obigen Beispiel wird über Service-Meshes definiert, was an die einzelnen Pods kommuniziert wird. Über Service-Meshes kann aber auch definiert werden, wie innerhalb des Clusters kommuniziert wird. Grundsätzlich ist die Kommunikation im Cluster beispielsweise nicht verschlüsselt, durch Service-Meshes kann eine zusätzliche Verschlüsselung definiert werden.
:::

:::globalTitle{:size="sm" :tag="h4" .mb-5}
**Welche Service-Meshes Tools gibt es?**
:::
:::globalParagraph
Tools, die die Technologie des Service-Mash bereitstellen, sind beispielsweise <a href="https://istio.io/" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">Istio</a>, <a href="https://linkerd.io/" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">Linkerd</a> oder <a href="https://cilium.io/" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">Cilium</a>.
:::
:::globalParagraph
Diese Tool stellen jeweils wieder einen unterschiedlichen Umfang an nutzbaren Möglichkeiten dar. Linkerd verfügt beispielsweise über sogenannte “Sidecar Proxies”, die den Aufbau einer verschlüsselten Kommunikation der Pods untereinander im Cluster erlauben. Istio hingegen bietet diese Funktion nicht. Dafür ist Istio im Vergleich zu Linkerd weniger komplex, in der Architektur schlanker und erfordert keine Code-Änderungen an der Kubernetes-Applikation selbst. Welches das Mittel der Wahl ist, muss also im Einzelfall durch die Entwickler geprüft und beurteilt werden (siehe auch <a href="https://www.cloudcomputing-insider.de/was-ist-linkerd-a-1003975/" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">"Was ist Linkerd"</a>).
:::

:::globalTitle{:size="md" :tag="h3" .mb-5}
Ingress-Controller: Technologie um Anfragen an den Cluster zu kontrollieren
:::
:::globalTitle{:size="sm" :tag="h4" .mb-5}
**Was bedeutet Ingress?**
:::
:::globalParagraph
<a href="https://kubernetes.io/docs/concepts/services-networking/ingress/" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">‘Ingress traffic’</a> bezeichnet den Datenverkehr, der seinen Ursprung außerhalb eines Computernetzwerks hat und an dieses gerichtet ist. Bezogen auf einen Cluster bedeutet das, dass eine Anfrage von außerhalb des Clusters an diesen gestellt wird, also z.B. dass ein User eine Website oder einen Service aufruft, der in einem Cluster betrieben wird. Die Technologie oder Ressource “Ingress” macht HTTP- und HTTPS-Anfragen von außerhalb des Clusters für Dienste innerhalb des Clusters verfügbar.
:::
:::globalParagraph
Analog zum technischen Konzept von Kubernetes handelt es sich auch bei der Technologie “Ingress” um einen abstrakten technischen Bauplan. Die genaue Umsetzung des technischen Bauplans von Ingress liegt wieder beim jeweiligen Hersteller. Um auch hier die Analogie des Autos zu nutzen, liegt es in der Entscheidung des jeweiligen Autobauers, ob der Motor als Verbrennungs- oder Elektromotor umgesetzt wird.
:::
:::globalParagraph
Ingress selbst ist also das Konzept, wie externe Anfrage an einen Kubernetes-Cluster gestellt werden. Dazu zählt zum Beispiel, wie die Anzahl der externen Anfragen im Kubernetes Cluster ausbalanciert werden, oder dass einer im Cluster verfügbaren Applikation überhaupt eine von extern erreichbare URL zugewiesen wird. Die Ausführung des Konzepts liegt dann bei einem so genannten Ingress-Controller, also der Anbieter-spezifischen Ausgestaltung von Ingress.
:::
:::globalParagraph
Ingress-Controller sind dabei nicht nur in Zusammenhang mit Kubernetes-Clustern relevant, sondern für die Nutzung von allen Services, die innerhalb eines Computernetzwerkes für Datenverkehr von außen ansprechbar sein sollen - also auch für Services, die auf individuellen Servern gehostet werden.
:::

:::globalTitle{:size="sm" :tag="h4" .mb-5}
**Welche Ingress-Controller gibt es?**
:::
:::globalParagraph
Es gibt eine ganze Reihe an verfügbaren <a href="https://kubernetes.io/docs/concepts/services-networking/ingress-controllers/" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">Ingress controllers.</a>  Zu den bekanntesten und in Kombination mit Kubernetes-Clustern häufig verwendeten Ingress-Controllern zählen <a href="https://www.nginx.com/" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">Nginx</a> und <a href="https://doc.traefik.io/traefik/" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">Traefik.</a>
:::
:::globalParagraph
Beide haben wieder diverse Vor- und Nachteile, je nach Anwendungsfall. Welcher Ingress-Controller genutzt werden soll, muss zwingend von spezialisierten Entwicklern beurteilt werden und würde den Rahmen dieses Artikels bei weitem übersteigen. Wir können euch jedoch diese beiden Artikel über <a href="https://kubernetes.io/docs/concepts/services-networking/ingress/" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">Ingress</a> und <a href="https://kubernetes.io/docs/concepts/services-networking/ingress-controllers/" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">Ingress controllers</a> von der Kubernetes-Website empfehlen, damit ihr eure Research fortsetzen könnt.
:::

![technology_in_cluster](/img/blogs/technology-in-cluster.jpg){.object-cover .w-full .mb-6}

:::globalTitle{:size="lg" .mb-5}
Technologien, die **um** einen Kubernetes-Cluster herum installiert werden
:::
:::globalTitle{:size="md" :tag="h3" .mb-5}
Technologien, um Code in Container zu verpacken
:::
:::globalTitle{:size="sm" :tag="h4" .mb-5}
**Container Images**
:::
:::globalParagraph
Kubernetes ist eine Technologie um containerisierte Software zu orchestrieren. Siehe dazu auch unseren Blog Posts [Kubernetes für Anfänger](/blog/kubernetes-fuer-anfaenger/){.bs-link-blue}, um mehr über dieses Thema zu erfahren. Ohne containerisierte Software ist die Nutzung von Kubernetes selbst gegenstandslos - eben weil Kubernetes nur mit containerisierter Software arbeiten kann.
:::
:::globalParagraph
Nachdem der Code für eine Anwendung durch Entwickler erarbeitet wurde, wird daraus ein sogenanntes <a href="https://kubernetes.io/docs/concepts/containers/images/" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">‘container image’</a> erstellt. In Kubernetes wird dann später auf das jeweilige Container Image referenziert. Verwaltet werden die Container Images entweder in einer eigenständigen <a href="https://www.dev-insider.de/was-ist-eine-container-registry-a-900839/" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">Container Registry</a> außerhalb des Clusters oder direkt im Cluster selbst. Erst wenn dieses referenzierte Container Image in Kubernetes ausgeführt wird, wird es technisch gesehen zu einem eigenständigen Container.
:::
:::globalParagraph
Ein Container Image ist ein read-only Template des Codes einer Anwendung, inklusive aller notwendigen Informationen, die für das Ausführen des Codes relevant sind, z.B. Konfigurationsdateien, Umgebungsvariablen, Bibliotheken, etc. Man kann sich ein Container Image also als unveränderliches digitales Bild des Codes vorstellen. Der Vorteil von Container Images liegt darin, dass sie dupliziert und von mehreren Entwickler gemeinsam genutzt werden können. Damit sind Container Images die idealen Ressourcen, um in einem Cluster geteilt zu werden. Anwendungscode kann so innerhalb eines Clusters zum Beispiel auf mehreren Pods ausgeführt und damit skaliert werden.
:::
:::globalParagraph
Ein weiterer Vorteil der Nutzung von Container Images besteht darin, dass das Image die Konfigurationen für die später entstehenden Container gleich enthält. Anders als bei der Ausführung von Softwarecode auf einem eigenen Server erhalten die Container mit den Informationen aus den Images direkt alle notwendigen Konfigurationsinformationen. Alle später auf Basis des Images generierten Container sind damit immer gleich konfiguriert. Wird Softwarecode auf jeweils eigenen Servern ausgeführt, muss die Konfiguration für jeden Server neu und einzeln vorgenommen werden - ein fehleranfälliges und zeitaufwändiges Vorgehen. Informiere dich sich weiter über <a href="https://www.computerweekly.com/de/definition/Docker-Image" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">Docker Images</a>
:::

:::globalTitle{:size="sm" :tag="h4" .mb-5}
**Tools zur Erstellung von Container Images**
:::
:::globalParagraph
Der bekannteste Anbieter von Tools, um aus Softwarecode ein Container-Image zu erstellen, ist <a href="https://www.docker.com/" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">Docker</a>. Mit Docker oder anderen Tools, wie <a href="https://www.techtarget.com/searchitoperations/definition/container-containerization-or-container-based-virtualization" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">rkt von CoreOS</a> oder <a href="https://linuxcontainers.org/" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">LXC</a>, wird ein Container Image erstellt.
:::
:::globalParagraph
Bei Docker handelt es sich um ein virtualisiertes Betriebssystem für Container und verhält sich ähnlich wie eine Virtuelle Maschine (VM). Eine VM virtualisiert dabei Serverhardware, während Container das Betriebssystem eines Servers virtualisieren.
:::
:::globalParagraph
Erhalte hier einen guten Überblick über verschiedene Anbieter mit Vor- und Nachteilen im Vergleich zu Docker als Marktführer. Welches Tool zur Umsetzung dieser Technologie genutzt wird, hängt wesentlich von den technischen Voraussetzung und Präferenz der jeweiligen Entwickler ab (z.B. wird mit Windows, Linux oder Mac gearbeitet?).
:::
:::globalParagraph
Zur Verwaltung von Container Images kann beispielsweise <a href="https://quay.io/" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">quay.io</a>, genutzt werden. Eine Reihe von Anbietern alternativer Tools zu quay.io findet sich <a href="https://stackshare.io/quay-io/alternatives" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">heir</a> Hervorheben möchten wir das Tool  <a href="https://goharbor.io/" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">Harbor</a>. Während es sich bei quay.io um ein Tool handelt, das eine Container Registry außerhalb des Cluster bereitstellt, kann Harbor direkt in den Cluster installiert werden und die Verwaltung der Images erfolgt damit auch direkt im Cluster. Ein zusätzlicher externer Dienst außerhalb des Clusters ist damit nicht mehr notwendig. Welche Variante hier sinnvoller ist, ist eine Entscheidung des Entwicklerteams und hängt von den individuellen Anforderungen an die zu erstellende Software ab.
:::

:::globalTitle{:size="md" :tag="h3" .mb-5}
Technologien, um Apps und Konfigurationen in einem Cluster zu managen
:::
:::globalTitle{:size="sm" :tag="h4" .mb-5}
**Konfiguration eines Clusters mit yaml-Dateien**
:::
:::globalParagraph
Nur weil ein Cluster existiert, ist er aber noch nicht sofort für den produktiven Betrieb bereit. Jeder Cluster verfügt über eine spezifische Konfiguration und jede neue Applikation in einem Cluster muss diese Konfiguration berücksichtigen, damit sie korrekt ausgeführt werden kann.
:::
:::globalParagraph
Die Konfiguration eines Clusters wird in sogenannten yaml-Dateien definiert. Yaml-Dateien enthalten Spezifikationen für das <a href="https://kubernetes.io/docs/concepts/workloads/controllers/deployment/" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">Deployment</a>.
:::
:::globalParagraph
Sie können händisch durch die Entwickler erstellt werden. Nachteilig ist dabei, dass ein händisches Erstellen von Dateien grundsätzlich fehleranfällig ist. Zusätzlich benötigt ein komplexer Cluster mehrere yaml-Dateien, die alle dem gleichen Standard folgen müssen. Das bedeutet, dass jeder Entwickler in einem Team den Standard auch kennen und anwenden muss. Wird der Standard geändert, benötigt es zusätzliche Absprachen.
:::
:::globalParagraph
Um diesen Prozess effizienter, stabiler und effektiver zu gestalten, gibt es Tools, die Templates zur Verfügung stellen, so dass alle yaml-Dateien “gleich aussehen”.
:::

:::globalTitle{:size="sm" :tag="h4" .mb-5}
**Helm zur Erzeugung von yaml-Dateien**
:::
:::globalParagraph
Das bekannteste Tool, das außerhalb eines Clusters installiert wird, um yaml-Dateien zu erzeugen, ist <a href="https://helm.sh/" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">Helm</a>.
:::
:::globalParagraph
In sogenannten <a href="https://artifacthub.io/" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">Helm Charts</a> wird definiert, welche Abhängigkeiten zwischen den einzelnen Applikationen innerhalb des Cluster bestehen, welche Ressourcen aus Kubernetes benötigt werden und was sonst noch notwendig ist, um Container-Anwendungen bereitzustellen und auszuführen.
:::
:::globalParagraph
Ein Helm Chart kann dabei beliebig oft im Cluster genutzt werden um beliebig viele Instanzen einer Anwendung zu realisieren und das System so leicht zu skalieren (siehe auch <a href="https://www.dev-insider.de/was-ist-helm-a-832433/" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">"Was ist Helm?"</a>).
:::
:::globalParagraph
Helm Charts können auch mit anderen Personen geteilt werden. Sie sind also die zentrale Instanz um eine Anwendung einmalig zu definieren und dann mit minimalem Aufwand von vielen Personen verwalten zu lassen.
:::

:::globalTitle{:size="md" :tag="h3" .mb-5}
Technologien zur lokalen Ausführung von Kubernetes
:::
:::globalTitle{:size="sm" :tag="h4" .mb-5}
**Softwareentwicklung auf lokalen Rechnern**
:::
:::globalParagraph
Dazu machen wir einen ganz kurzen Ausflug in die Arbeitswelt der Entwickler. In der Regel werden einzelne Bestandteile eines komplexen Codes entwickelt, einzelne Features, die später zusammengeführt werden. Entwickler produzieren Code also lokal auf ihren eigenen Rechnern und nicht direkt in komplexen Produktiv- oder Testumgebungen. Erst später werden die einzelnen Bestandteile dann zusammengeführt.
:::
:::globalParagraph
Dafür ist notwendig, dass Entwickler die projektspezifische Entwicklungsumgebung auf ihren eigenen Rechnern verfügbar haben, also die Rahmenkonfigurationen der späteren Test- und Produktivumgebung. Das ist immer notwendig, egal ob für den späteren Betrieb der Software Kubernetes genutzt wird oder nicht.
:::
:::globalParagraph
Die Herausforderung für die Entwickler liegt darin, diese Umgebung auf ihren lokalen Rechner richtig zu konfigurieren. Nur wenn gegen die richtige Konfiguration entwickelt wird, kann der Code später in der Produktiv- oder Testumgebung auch fehlerfrei ausgeführt werden. Bisher lag die große Herausforderung darin, dass jeder einzelne Entwickler die entsprechenden Konfigurationen selbst vornehmen musste. Enge Absprachen zwischen den Teams, die Software entwickeln (Development-Teams), und den Teams, die für die Konfiguration der später genutzten Server zuständig sind (Operations-Teams), sind dafür notwendig. Die Kommunikation zwischen beiden Teams läuft dabei oft nicht reibungslos.
:::
:::globalParagraph
Wird für die Ausführung von Softwarecode Kubernetes genutzt, gibt es nun aber eine ganze Reihe von Tools, die es ermöglichen, dass das Operations-Team die Konfiguration des Cluster selbstständig vornimmt, pflegt und wartet und die Entwicklerteams die Konfigurationen durch den Einsatz spezialisierter Tools ohne selbstständig Konfigurationsmaßnahmen oder notwendigen Absprachen auf ihren Rechner installieren können. Auch wenn sich die Konfigurationen am Cluster ändern, ermöglichen diese Tools, dass die geänderten Konfigurationen ohne weitere Absprachen zwischen den Teams auch auf die Rechner der Entwickler übernommen werden.
:::

:::globalTitle{:size="sm" :tag="h4" .mb-5}
**Lokale Kubernetes Entwicklungstools**
:::
:::globalParagraph
Beispiele für Tools, die diese Technologie anbieten, sind <a href="https://minikube.sigs.k8s.io/docs/start/" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">minikube</a>, <a href="https://kind.sigs.k8s.io/" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">kind</a> oder auch <a href="https://k3s.io/" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">K3s</a>.
:::
:::globalParagraph
Einen guten Überblick über die unterschiedlichen Umfänge dieser Tools und mögliche Anwendungsfälle findet sich <a href="/blog/minikube-vs-k3d-vs-kind-vs-getdeck-beiboot/" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">hier.</a>
:::

:::globalTitle{:size="md" :tag="h3" .mb-5}
Technologien, um Container zu “bridgen”
:::
:::globalTitle{:size="sm" :tag="h4" .mb-5}
Was bedeutet 'bridgen'?
:::
:::globalParagraph
Zuerst müssen wir voranstellen, dass das Wort “bridgen” keine anerkannte Terminologie ist, um zu beschreiben, was die hier vorgestellten Tools machen. Um ehrlich zu sein: Wir haben den Begriff bei uns eingeführt, weil er den Zweck dieser Technologien sehr anschaulich beschreibt. Wenn ihr also das Internet nach dem Terminus “bridgen” in Zusammenhang mit Kubernetes durchsucht, werdet ihr vermutlich kaum sinnvolle Treffer erhalten. Daher möchten wir an dieser Stelle den Terminus “bridgen” und die dazugehörigen Tools näher vorstellen.
:::
:::globalParagraph
Um einen Cluster zu betreiben, bedarf es einiger Ressourcen: Vor allem Rechenleistung. Und Rechenleistung kostet Geld. Geld ist nicht unbegrenzt verfügbar und dass es sowohl in der kommerziellen als auch nicht-kommerziellen Softwareentwicklung nicht unbegrenzt verfügbar ist, müssen wir hier nicht philosophisch erörtern.
:::
:::globalParagraph
Auch wenn Entwickler einen Cluster bei sich lokal verfügbar machen, um die Softwareentwicklung selbst effektiver zu gestalten, kostet das Ressourcen und damit Geld. Man stelle sich nur vor, dass ein großes Entwicklerteam an einer Vielzahl kleinerer neuer Features für eine große Hotelbuchungsplattform arbeitet und dass jeder Entwickler einen lokal verfügbaren Cluster besitzt, um einen Vorstellung von der Größenordnung der notwendigen Ressourcen zu bekommen.
:::
:::globalParagraph
Auch um dieses Problem zu lösen, gibt es eine maßgeschneiderte Technologie. Installieren sich Entwickler ein Tool dieser Technologie lokal auf ihren Rechnern ist es möglich, dass sie den Code lokal entwickeln und in Containern verpacken, bei der Ausführung des Codes im Container auf den eigenen Rechner dem Container aber "vorgegaukelt" wird, er würde sich in einem Cluster befinden.
:::
:::globalParagraph
Dieses “Vorgaukeln” ist aber noch nicht das, was “bridgen” eigentlich meint. Bridgen beginnt technisch gesehen erst, wenn Entwickler an bereits bestehenden Code arbeiten, zum Beispiel um einen Bugfix auszuführen. Dabei kann ein Entwickler mit den entsprechenden Tools (siehe unten) einen Container auf seinem lokalen Rechner “klonen” und an bereits bestehenden Code arbeiten. Der überarbeitete Code kann im bestehenden Cluster auf einen Container gelegt und getestet werden, wobei er noch immer ausschließlich auf dem lokalen System des Entwicklers ausgeführt wird. Solange diese Bridge besteht, können alle User, die über die URL verfügen, auch auf diese Code-Änderung zugreifen.
:::
:::globalParagraph
Dabei ist aber zu bedenken, dass aller Traffic auf diesen Container dann auch über die lokale Entwicklungsumgebung des jeweiligen Entwicklers geht, dieses Verfahren ist also vor allem sinnvoll, um Arbeiten in einem Staging-Cluster durchzuführen: Bugfixes können damit direkt im Staging getestet werden. Für Arbeiten an einem Produktivcluster sollte dieses Verfahren eher nicht angewendet werden.
:::

:::globalTitle{:size="sm" :tag="h4" .mb-5}
Welche Bridging-Tools gibt es?
:::
:::globalParagraph
Eines der bekanntesten Tools zum Bridgen ist “Telepresence”.
:::
:::globalParagraph
Blueshoe hat für diese Zwecke auch ein eigenes Tool namens <a href="https://gefyra.dev/" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">‘Gefyra’</a> entwickelt. Gefyra ist zwar hinsichtlich der Funktionalitäten nicht ganz so umfangreich wie Telepresence, ist mit seinem Fokus in der Nutzung aber wesentlich komfortabler für die Entwickler bei der Erstellung einer Bridge. Eine Gegenüberstellung beider Produkte könnt ihr im Blog Post <a href="https://www.blueshoe.io/blog/alternative-to-telepresence-2-gefyra/" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">"An Alternative to Telepresence 2: Gefyra"</a>.
:::

![bridge](/img/blogs/bridge.jpg){.object-cover .w-full .mb-6}

:::globalTitle{:size="md" :tag="h3" .mb-5}
Technologien, um den Entwicklern eine Entwicklungsumgebung zur Verfügung zu stellen, die der Produktionsumgebung entspricht
:::
:::globalTitle{:size="sm" :tag="h4" .mb-5}
**Anforderungen an die Entwicklungsumgebung**
:::
:::globalParagraph
Sind Arbeiten an Softwarecode erforderlich, der in einem Cluster ausgeführt wird, ist es notwendig, dass die Entwickler in der lokalen Entwicklungsumgebung ebenfalls über einen Cluster verfügen.
:::
:::globalParagraph
Dafür ist es sinnvoll, dass der lokale Cluster in der Konfiguration weitgehend dem Cluster entspricht, auf dem der Softwarecode später ausgeführt wird. Dafür gibt es Tools wie z.B. minikube (siehe oben).
:::
:::globalParagraph
Zusätzlich ist es genauso sinnvoll, wenn der lokale Entwicklungscluster auch "vorgefüllt" ist, d.h. dass die im Cluster vorhandenen Daten ebenfalls weitgehend den Livedaten entsprechen. Dazu gehören zum Beispiel Datenbanken, Datenbankeinträge, integrierte Drittsysteme, wie zum Beispiel Tools zum Identifikationsmanagement, etc..
:::
:::globalParagraph
Das heißt, wir haben einerseits Tools, damit Cluster auf den lokalen Entwicklungsumgebung einzelner Entwickler erstellt werden können. Diese Tools stellen sicher, dass alle Entwickler jeweils über die gleichen Konfigurationen verfügen. Ein Beispiel dafür ist zum Beispiel minikube (siehe oben).
:::
:::globalParagraph
Andere Tools erlauben es den Entwicklern, bereits bestehenden Code im lokalen Entwicklungscluster zu bearbeiten und diesen Code dann vor dem Deployment im Cluster “auszuprobieren”. Beispieltools dafür sind “Telepresence” oder “Gefyra” (siehe oben).
:::
:::globalParagraph
Und dann gibt es noch die in diesem Abschnitt vorgestellten Tools, die es erlauben, lokale Cluster mit Daten und/oder Drittsystemen, die möglichst nahe am Livesystem sind, für die Entwickler zu provisionieren.
:::

:::globalTitle{:size="sm" :tag="h4" .mb-5}
**Welche Tools gibt es?**
:::
:::globalParagraph
Ein Tool, das die Vorprovisionierung von lokalen Clustern erlaubt, ist das von Blueshoe entwickelte Tool [“Getdeck”](/tools/){.bs-link-blue}. Wir sind von unserem Tool überzeugt und wenden es in unserer täglichen Arbeit an - gerne könnt ihr einen [Termin mit uns buchen](/kontakt/){.bs-link-blue}, in dem wir euch Getdeck näher vorstellen.
:::

:::globalTitle{:size="md" :tag="h3" .mb-5}
Technologien, um die Code-Qualität sicherzustellen
:::
:::globalTitle{:size="sm" :tag="h4" .mb-5}
Vorteile von CI/CD
:::
:::globalParagraph
Als Software nur auf Medien wie Disketten oder CD-Roms zur Verfügung stand, lag der Fokus für Entwickler auf der Erarbeitung einer dauerhaften Version von Software. Gab es ein Update, musste sich der User eine neue CD-Rom mit dem aktualisierten Code-Stand besorgen.
:::
:::globalParagraph
Heute ist dieses Vorgehen weitgehend überholt: Software entwickelt sich ständig weiter, Updates sind ständig verfügbar. Das heißt, dass heute auch ständig einzelne Programmbestandteile zusammengeführt und permanent auf deren Kompatibilität geprüft werden müssen.
:::
:::globalParagraph
Wird dieser Prozess rein linear gestaltet und die Komptabilität einzelner Softwarebestandteile erst ganz am Ende geprüft, können erhebliche Probleme auftreten. Für die Entwickler kann das zur “Integrationshölle” werden: Der Code für ein neues oder überarbeitetes Feature ist zwar fertiggestellt, aufgrund nicht-absehbarer Abhängigkeiten mit anderen Code-Bestandteilen läuft aber nichts wie geplant. Siehe dazu auch "<a href="https://www.hosttest.de/artikel/was-ist-continuous-integration-und-was-sind-die-vorteile-" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">Was ist Continuous Integration und was sind die Vorteile?</a>".
:::
:::globalParagraph
Die Methode CI/CD möchte dafür Abhilfe schaffen. CI steht für “Continuous Integration”, einem Automatisierungsprozess für Entwickler. CD bedeutet sowohl “Continuous Delivery” (Codeänderungen werden automatisch getestet) als auch “Continuous Deployment” (Freigabeprozess von Codeänderungen beim Verfügbarmachen für die Endnutzer - also dem Deployment).
:::

:::globalParagraph{.mt-4}
**Continuous Integration**
:::
:::globalParagraph
Codeänderungen einzelner Entwickler werden regelmäßig miteinander zusammengeführt. Das bietet daher vor allem den Vorteil, dass Inkompatibilitäten wesentlich früher aufgedeckt werden können.
:::

:::globalParagraph{.mt-4}
**Continuous Delivery & Continuous Deployment**
:::
:::globalParagraph
Codeänderungen werden automatisierten Tests unterzogen und in Repositorys wie GitHub verfügbar gemacht. Dabei soll auch geprüft werden, wie sich der neue Code im Zusammenspiel mit bereits bestehendem Code auf dem Live-System verhält.
:::
:::globalParagraph
Mittlerweile gibt es spezifische Tools, die den CD-Prozess speziell für Software, die in einem Kubernetes-Cluster ausgeführt wird, verfügbar machen, Prüfungstools, die also explizit auf ein Kubernetes-Umfeld ausgelegt sind.
:::

:::globalTitle{:size="sm" :tag="h4" .mb-5 .mt-4}
**Das Tool Argo CD**
:::
:::globalParagraph
Wir bei Blueshoe nutzen dafür das Tool <a href="https://argo-cd.readthedocs.io/en/stable/" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">Argo CD</a>. Argo CD ist ein Kubernetes Controller der ständig eine laufende Applikation überwacht und den aktuellen Livestand eines Codes gegen einen gewünschten Stand abgleicht, wie er in einem Git-Repository definiert ist (hier kann auch der neue Softwarecode enthalten sein). Abweichungen kann Argo CD entweder automatisiert beheben oder visualisiert Abweichungen für Entwickler, damit diese schnell manuell behoben werden können
:::

:::globalTitle{:size="md" :tag="h3" .mb-5}
Technologien zum Geheimnismanagement
:::
:::globalTitle{:size="sm" :tag="h4" .mb-5}
Geheimhaltung und Verschlüsselung von Daten
:::
:::globalParagraph
Bereits kleine Projekte benötigen für den Betrieb einige Daten, die geheim bleiben müssen und nur denjenigen Personen/Apps verfügbar sind, die sie auch wirklich brauchen. Dazu gehören unter anderem Passwörter für die Autorisierung bei anderen Services (Datenbank, [API](/loesungen/api-entwicklung/){.text-bs-blue .hover:underline .hover:decoration-bs-blue .hover:decoration-solid}
, etc.) oder Keys für die Verschlüsselung von gespeicherten Daten. Da diese nicht in falsche Hände gelangen sollten, dürfen sie nicht unverschlüsselt (plain-text) in die versionierten Kubernetes-Ressourcen (Kustomize-Manifeste, Helm-Charts, …) geschrieben werden. Es gibt verschiedene Tools, die das Management von solchen Geheimnissen ermöglichen und dabei unterschiedliche Ansätze verfolgen.
:::

:::globalTitle{:size="sm" :tag="h4" .mb-5}
**Welche Tools gibt es?**
:::
:::globalParagraph
**<a href="https://github.com/jkroepke/helm-secrets" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">Secrets Plugin für Helm</a>** verschlüsselt Werte in den Helm-YAML-Dateien lokal mithilfe eines Keys (z.B. mit Mozilla SOPS), der nicht im Repo lebt und den Bearbeitern auf anderem Wege gegeben wird. Versioniert werden dann nur die verschlüsselten Geheimnisse. Bei der Anwendung der Charts entschlüsselt das Plugin diese Werte und bringt so die geheimen Daten in den Cluster.
:::
:::globalParagraph
**<a href="https://bitnami.com/stack/sealed-secrets" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">Bitnami Sealed Secrets</a>** verfährt ähnlich, verschlüsselt die geheimen Daten allerdings im Cluster und generiert eigene Objekte, vom Typ SealedSecret, die versioniert werden können und die bei der Anwendung der Ressourcen dann von einem Operator entschlüsselt und in "echte" Kubernetes Secrets umgewandelt werden.
:::
:::globalParagraph
Andere Tools/Technologien, welche allein oder im Zusammenspiel mit den genannten Tools genutzt werden können, sind z.B. **<a href="https://www.vaultproject.io/" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">HashiCorp Vault,</a>** **<a href="https://azure.microsoft.com/en-us/products/key-vault/#product-overview" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">Azure Key Vault</a>** and **<a href="https://aws.amazon.com/secrets-manager/" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">AWS Secrets Manager.</a>**
:::

:::globalTitle{:size="md" :tag="h3" .mb-5}
3.8 Technologien für Monitoring, Logging und Metrics Collection
:::
:::globalParagraph
Um in einem System mit vielen Bestandteilen den Überblick zu behalten, ist es sinnvoll, Logs und andere Daten, die Aufschluss über den Zustand einzelner Komponenten geben, an einer zentralen Stelle zusammenfließen zu lassen und übersichtlich aufzubereiten. Tools, welche in diesem Kontext genutzt werden, sind z.B. **<a href="https://prometheus.io/" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">Prometheus</a>**, **<a href="https://opentelemetry.io/" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">Open Telemetry</a>**, **<a href="https://grafana.com/" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">Grafana</a>**, **<a href="https://www.elastic.co/logstash/" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">Logstash.</a>**
:::

![technology_ausserhalb-_luster](/img/blogs/technology-ausserhalb-cluster.jpg){.object-cover .w-full .mb-6}

:::globalTitle{:size="lg" .mb-5}
Cloud Native Development
:::
:::globalParagraph
[Cloud Native Development](/loesungen/cloud-native-development/){.bs-link-blue} beschreibt einen Software-Entwicklungsansatz, bei dem Applikationen von Anfang an für den Einsatz in der Cloud konzipiert werden (<a href="https://www.ionos.de/digitalguide/websites/web-entwicklung/was-ist-cloud-native/#:~:text=Definition%3A%20Cloud%20Native%20Cloud%20Native%20beschreibt%20einen%20Software-Entwicklungs-Ansatz%2C,die%20St%C3%A4rken%20der%20Cloud-Computing-Architektur%20vollst%C3%A4ndig%20zu%20nutzen%20wissen" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">Ionos</a>). Folglich ist es sinnvoll, auch die Entwicklung selbst schon so weit wie möglich in der späteren Cloud-Umgebung stattfinden zu lassen.
:::
:::globalParagraph
Mit unserem Blueshoe-eigenen Technologie-Stack bestehend aus [Unikube, Gefyra und Getdeck](/tools/){.bs-link-blue} haben wir wesentlich dazu beigetragen, diesen Prozess für ganze Entwicklerteams effizienter und effektiver zu gestalten.
:::
:::globalParagraph
Trotzdem möchten wir nicht verschweigen, dass es zu unseren eigenen Produkten auch einige nennenswerte Konkurrenten gibt, wie beispielsweise **<a href="https://www.okteto.com/" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">Okteto</a>** und **<a href="https://skaffold.dev/" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">Skaffold</a>**.
:::
:::globalParagraph
Trotzdem sind wir von unseren Produkten überzeugt: Sie bieten genau das, was Entwicklerteams benötigen, sind von uns umfangreich erprobt und finden immer weitere Wege in die Integration in andere Tools: [Gefyra](/tools/){.bs-link-blue} ist mittlerweile zu einer eigenen Docker Desktop Extension geworden.
:::
:::globalParagraph
Wenn du neugierig auf unsere Produkte geworden bist und mehr erfahren möchtest, [kontaktiere uns](/kontakt/){.bs-link-blue}!
:::

:::BlogRelatedPosts{:url='["/blog/kubernetes-fuer-anfaenger", "/blog/migration-nach-cloud-native", "/blog/managed-vs-unmanaged-kubernetes", "/blog/anforderungsanalyse-projektmanagement", "/blog/kubernetes-development"]'}

:::