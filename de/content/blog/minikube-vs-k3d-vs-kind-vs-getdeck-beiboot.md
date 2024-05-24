---
head:
  title: 'Minikube vs. k3d vs. kind vs. Getdeck'
  meta:
    - property: 'og:locale'
      content: 'de_DE'
    - name: 'description'
      content: 'Falls Sie sich jemals gefragt haben, welches Tool für die lokale Kubernetes-Entwicklung das beste für Sie ist. Vielleicht finden Sie die Antwort in diesem Blogbeitrag, in dem wir die beliebtesten Optionen vergleichen.'
    - property: 'og:type'
      content: 'website'
    - property: 'og:title'
      content: 'Minikube vs. k3d vs. kind vs. Getdeck'
    - property: 'og:description'
      content: 'Falls Sie sich jemals gefragt haben, welches Tool für die lokale Kubernetes-Entwicklung das beste für Sie ist. Vielleicht finden Sie die Antwort in diesem Blogbeitrag, in dem wir die beliebtesten Optionen vergleichen.'
    - property: 'og:image'
      content: 'https://www.blueshoe.io/img/meta/blueshoe-cloud-native-devlopment.png'
    - property: 'og:image:secure_url'
      content: 'https://www.blueshoe.io/img/meta/blueshoe-cloud-native-devlopment.png'
    - name: 'twitter:card'
      content: 'summary'
    - name: 'twitter:title'
      content: 'Minikube vs. k3d vs. kind vs. Getdeck'
    - name: 'twitter:description'
      content: 'Falls Sie sich jemals gefragt haben, welches Tool für die lokale Kubernetes-Entwicklung das beste für Sie ist. Vielleicht finden Sie die Antwort in diesem Blogbeitrag, in dem wir die beliebtesten Optionen vergleichen.'
    - name: 'twitter:image'
      content: 'https://www.blueshoe.io/img/meta/blueshoe-cloud-native-devlopment.png'
src: '/blog/minikube-vs-k3d-vs-kind-vs-getdeck-beiboot'
img: '/img/blogs/minikube-vs-k3d-vs-kind-vs-getdeck-beiboot.jpg'
alt: 'minikube vs k3d vs kind vs getdeck'
preTitle: 'Kubernetes for Development'
title: "Minikube vs. k3d vs. kind vs. Getdeck"
description: 'Falls Sie sich jemals gefragt haben, welches Tool für die lokale Kubernetes-Entwicklung das beste für Sie ist. Vielleicht finden Sie die Antwort in diesem Blogbeitrag, in dem wir die beliebtesten Optionen vergleichen.'
date: '27.02.2023'
autor:
  - Michael Schilonka
technologie:
  - Kubernetes
productUpdates:
  - Getdeck
sonstiges:
  - Entwicklung
---
Was ist das beste Kubernetes-Tool für die Entwicklung im Jahr 2023? Dieser Artikel vergleicht drei der beliebtesten Lösungen. Getdeck, entwickelt von Blueshoe, ist eine neue Alternative zur lokalen Kubernetes-Entwicklung, die auf den Markt kommt.
<!--more-->

![minikube vs k3d vs kind vs getdeck](/img/blogs/minikube-vs-k3d-vs-kind-vs-getdeck-beiboot.jpg){.object-cover .max-w-full .mb-5}

:::BlogNavigationCard{:title="Inhaltsverzeichnis"}

:::

:::globalTitle{:size="lg" .mb-5 .mt-8}
Einführung
:::
:::globalParagraph
In diesem Artikel vergleichen wir drei beliebte lokale Kubernetes-Entwicklungstools. Zusätzlich wird Getdeck Beiboot als remote Kubernetes-basierte Entwicklungsumgebung in den Vergleich aufgenommen.
:::
:::globalParagraph
Der Schwerpunkt dieses Blogbeitrags liegt auf der Bewertung der DX ("Developer Experience") in tatsächlichen Entwicklungsszenarien. Dies ist besonders wichtig, da Sie diese Tools möglicherweise auch für Produktbereitstellungen verwenden könnten. Die wichtigen Dimensionen für die Bewertung dieser Tools unterscheiden sich jedoch sehr zwischen Entwicklung und Produktionshosting.
:::
:::globalParagraph
Die folgenden Aspekte sind für Softwareentwicklungsfälle relevant:
:::

:::GlobalBlock{.ul-disk .mb-5}
- Einfache Installation
- Einfache Bedienung, Komplexität
- Funktionsvollständigkeit (insbesondere für die Entwicklung und Produktionsparität)
- Ressourcenverbrauch
- Gesamte Benutzerfreundlichkeit (die sogenannte Entwicklererfahrung, DX)
:::

:::globalParagraph
Diese Liste der Bewertungskriterien ist nicht abschließend. Es gibt auch einige Bedenken, die die Arbeit mit diesen Tools attraktiv machen, wie persönliche Vorlieben. Ich werde jedoch nicht auf alle diese Kriterien in diesem Artikel eingehen.
:::
:::globalParagraph
Alle Tools sind in der Lage, dem Entwickler eine dedizierte Kubernetes-Umgebung zum Erlernen von Kubernetes, zum Herumspielen oder zur Lösung von Entwicklungsaufgaben bereitzustellen.
:::

:::globalTitle{:size="lg" .mb-5 .mt-8}
Minikube vs. k3d
:::
:::globalTitle{:size="lg" .mb-5 .mt-8}
Minikube
:::
:::globalParagraph
<a href="https://minikube.sigs.k8s.io/" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">minikube</a> ist eine der ausgereiftesten Lösungen auf dem Markt. Als unser Team bei Blueshoe im Jahr 2017 begann, Kubernetes zu übernehmen, war minikube bereits verfügbar. Die erste Version 0.1.0 wurde am 30. Mai 2016 veröffentlicht, kurz nach dem <a href="https://github.com/kubernetes/minikube" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">ersten Commit auf Github</a> am 16. April 2016.
:::
![minikube](/img/blogs/minikube-vs-k3d-vs-kind-vs-getdeck-beiboot-1.jpg){.object-cover .max-w-full .mb-5}

:::globalParagraph
minikube wurde von einer Kubernetes SIG, einer Interessengruppe, gestartet, die den Bedarf an lokalen Kubernetes-Umgebungen erkannte. Heute ist die <a href="https://minikube.sigs.k8s.io/community/" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">SIG eng mit dem Kubernetes-Entwicklungsteam verbunden</a> und daher auf dem neuesten Stand des offiziellen Kubernetes-Codebasis.
:::

:::GlobalPodcastSection{:videoId="tyvE9VlSWkE" :videoPosition="left" .mb-6}
::::GlobalPreTitle{:color="text-bs-green" .mb-3}
TOOLS FOR THE CRAFT
::::
::::GlobalTitle{:tag="h3" .mb-6}
E1: Kubernetes-Entwicklungsumgebungen
::::
::::globalParagraph{:font-size="lg" .mb-4}
Michael und Robert sprechen darüber, wie wir von Docker Compose zu einer echten Entwicklung mit Kubernetes gekommen sind. Sie diskutieren die verschiedenen Herausforderungen und welche Tools helfen können, Entwicklungsumgebungen näher an die Produktionsumgebung heranzuführen.
:::

:::globalTitle{:size="md" :tag="h3" .mb-5 .mt-8}
Alleskönner für verschiedene Plattformen
:::
:::globalParagraph
Ein sehr wichtiger Unterschied zwischen Minikube und allen anderen Teilnehmern ist, dass es Kubernetes-Cluster <a href="https://minikube.sigs.k8s.io/docs/drivers/" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">mit einem der verschiedenen Treiber</a> bereitstellen kann. Diese Treiber implementieren die Art und Weise, wie Sie den Kubernetes-Cluster auf einer Entwicklungs-Maschine ausführen: entweder in einer virtuellen Maschine (z.B. Hyper-V, KVM2, QEMU oder andere) oder in einer Container-Laufzeitumgebung (z.B. mit Docker oder Podman). Wenn man sich Minikube mit den oben genannten Bewertungsaspekten ansieht, kann man Unterschiede in den Details zwischen diesen Treibern feststellen. Aber im Allgemeinen abstrahiert Minikube die Implementierung des Treibers für den Entwickler.
:::
:::globalParagraph
Daher ist es sehr wahrscheinlich, dass Minikube Kubernetes für praktisch jede Plattform ausführen kann, an der ein Entwickler arbeitet. Mit einer einheitlichen Benutzeroberfläche ist Minikube eine sehr plattformunabhängige Lösung. Wenn Ihr Team mit Windows, macOS, Linux oder sogar exotischeren Plattformen arbeitet, ist es ein großer Vorteil, wenn alle Mitglieder das gleiche Tool verwenden. Sie können Wissen leichter teilen, Skripte für die Automatisierung bereitstellen und Dokumentation erstellen, die alle Plattformen gleichermaßen abdeckt.
:::
:::globalParagraph
Ein großer Pluspunkt für Minikube ist seine umfassende Dokumentation. Sie enthält nicht nur technische Referenzen, sondern auch eine lange Liste von Tutorials für viele spezifische Anwendungsfälle und Bereitstellungsszenarien.
:::

:::globalTitle{:size="md" :tag="h3" .mb-5 .mt-8}
Verwenden Sie alle K8s-Funktionen mit Minikube
:::
:::globalParagraph
Mit Minikube kann ein Entwickler praktisch jede erforderliche Kubernetes-Funktion verwenden. Einige von ihnen müssen mit dem Flag *–feature-gates* aktiviert werden. Dies ist eine Reihe von Schlüssel-Wert-Paaren, die Feature-Gates für experimentelle Funktionen beschreiben. Andere Funktionen werden vom Addons-System von Minikube gesteuert. *Addons* können von Drittanbietern integriert werden. Hier ist eine Liste von Addons von meinem System.
:::

:::BlogCode{.mb-5}
```
|-----------------------------|--------------------------------|
|         ADDON NAME          |           MAINTAINER           |
|-----------------------------|--------------------------------|
| ambassador                  | 3rd party (Ambassador)         |
| auto-pause                  | Google                         |
| csi-hostpath-driver         | Kubernetes                     |
| dashboard                   | Kubernetes                     |
| default-storageclass        | Kubernetes                     |
| efk                         | 3rd party (Elastic)            |
| freshpod                    | Google                         |
| gcp-auth                    | Google                         |
| gvisor                      | Google                         |
[...]
| nvidia-gpu-device-plugin    | 3rd party (Nvidia)             |
| olm                         | 3rd party (Operator Framework) |
| pod-security-policy         | 3rd party (unknown)            |
| portainer                   | 3rd party (Portainer.io)       |
| registry                    | Google                         |
| registry-aliases            | 3rd party (unknown)            |
| registry-creds              | 3rd party (UPMC Enterprises)   |
| storage-provisioner         | Google                         |
| storage-provisioner-gluster | 3rd party (Gluster)            |
| volumesnapshots             | Kubernetes                     |
|-----------------------------|--------------------------------|
```
:::

:::globalParagraph
Diese Addons werden aktiviert mit...
:::

:::BlogCode{.mb-5}
```
minikube addons enable [...]
```
:::

:::globalParagraph
...und ermöglicht es einem Minikube-Cluster, diese bestimmte Funktion im lokalen Entwicklungsscluster bereitzustellen. Wenn Sie beispielsweise Volumesnapshots benötigen, wie wir es beim Aufbau des Getdeck Beiboot-Regalfeatures getan haben, führen Sie einfach Folgendes aus:
:::

:::BlogCode{.mb-5}
```
minikube addons enable volumesnapshots
```
:::

:::globalParagraph
Das macht es sehr bequem, eine solche Funktion zu verwenden, ohne jede Entwicklungsumgebung von Anfang an aufzublähen. Außerdem stehen dem Team dieselben Addons zur Verfügung, vorausgesetzt, sie verwenden alle dieselbe Version von Minikube.
:::

:::globalTitle{:size="md" :tag="h3" .mb-5 .mt-8}
Minikube-Profile: mehrere logische Cluster auf einer Entwicklungs-Maschine
:::
:::globalParagraph
Als wir begannen, Kubernetes zu übernehmen, suchten wir nach einer Lösung, die es uns ermöglichte, mehrere logische Cluster auf einer Entwicklungs-Maschine zu verwalten. In den Jahren 2016/2017 legte Minikube nicht viel Wert auf dieses spezielle Feature. Es war nur möglich, einen Cluster pro Maschine zu starten, und es gab nur eine Single-Node-Cluster-Konfiguration. Aus diesem Grund haben wir uns bei Blueshoe entschieden, mit k3d zu arbeiten. Minikube hat jedoch dieses wichtige Entwickler-Feature aufgeholt und unterstützt jetzt mehrere sogenannte Minikube-Profile.
:::
:::globalParagraph
Minikube-Profile sind logische Cluster, die separat voneinander gestartet und gestoppt werden können. Es ermöglicht einem Entwickler, mehr als eine Kubernetes-basierte Entwicklungsumgebung zu haben. Denken Sie nur an mehrere getrennte Projekte, die unterschiedliche Kubernetes-API-Versionen, Funktionen oder einfach unterschiedliche Workloads erfordern, die in ihnen ausgeführt werden. <a href="https://minikube.sigs.k8s.io/docs/commands/start/" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">Sie können ausführen</a>:
:::

:::BlogCode{.mb-5}
```
minikube start -p myprofile1
```
:::
:::globalParagraph
und Sie erhalten einen leeren neuen Cluster mit einem frischen Profil, das neben anderen Profilen existieren kann.
:::

:::globalTitle{:size="lg" .mb-5 .mt-8}
k3d
:::
:::globalParagraph
k3d ist in Bezug auf die Bereitstellung auf einer Entwicklungs-Maschine eingeschränkter. Von Anfang an unterstützte k3d nur eine lokale Container-Runtime für die Ausführung des Kubernetes-Clusters. Wie ich zuvor erwähnt habe, war es jedoch immer möglich, mehrere separate Cluster für die Entwicklung auf einem Host zu verwalten. Das war ein echtes Killer-Feature, insbesondere für Blueshoe, da wir mehrere verschiedene Kubernetes-Projekte für verschiedene Kunden betreiben. Insbesondere bei unserer Wartungsarbeit ist es ein Muss, eine Entwicklungsumgebung auf dem neuesten Stand zu haben, sowie eine stabile Umgebung, die der Produktion nahe kommt, zur gleichen Zeit. Als Entwickler muss ich Fehlerkorrekturen in kürzester Zeit bereitstellen und die Entwicklung neuer Funktionen vorantreiben.
:::
![k3d](/img/blogs/minikube-vs-k3d-vs-kind-vs-getdeck-beiboot-2.jpg){.object-cover .max-w-full .mb-5}

:::globalParagraph
k3d basiert auf k3s, einer schlanken Kubernetes-Lösung, die von Rancher entwickelt wird. K3d ist jedoch nicht eng mit k3s verbunden und wird von einer <a href="https://k3d.io/v5.4.7/#what-is-k3d" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">Entwicklergemeinschaft</a> vorangetrieben.
:::
:::globalParagraph
Das Besondere an k3s ist, dass es einige der standardmäßigen Kubernetes-Komponenten wie <a href="https://etcd.io/" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">etcd</a> durch weniger skalierbare und ressourcenintensive Alternativen (z. B. SQLite) ersetzt. Darüber hinaus wird das gesamte System in eine sehr kleine ausführbare Binärdatei kompiliert (weniger als 40 MiB), was auch den Speicherplatzbedarf sehr gering hält. Das Basis-Kubernetes-System k3s wurde ursprünglich für IoT- und Edge-Computing-Umgebungen entwickelt. Ich würde sagen, dass es auch für Entwicklungsumgebungen perfekt ist, da diese geringen Ressourcenanforderungen perfekt passen. Den Vergleich des Ressourcenverbrauchs werden wir später in diesem Artikel sehen.
:::
:::globalParagraph
Da k3d nur ein Wrapper für k3s ist, kann es sich auf die Entwicklererfahrung konzentrieren. Es wird mit <a href="https://k3d.io/v5.4.7/usage/commands/k3d/" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">sehr guter Dokumentation</a> geliefert, genau wie Minikube, die auch Tutorials für bestimmte Anwendungsszenarien enthält. Zum Beispiel finden Sie ein Beispiel für einen Entwicklungsworkflow mit <a href="https://tilt.dev/" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">Tilt</a> und einen Build-Push-Test-Zyklus mit k3d's <a href="https://k3d.io/v5.4.7/usage/registries/#using-a-local-registry" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">Container-Image-Sharing</a>-Funktion.
:::

:::globalTitle{:size="md" :tag="h3" .mb-5 .mt-8}
Gut für Teams: Teilen von k3d-Konfigurationen
:::
:::globalParagraph
Ein großer Vorteil, den k3d bietet (den Minikube zu diesem Zeitpunkt vermisst), ist, dass k3d eine <a href="https://k3d.io/v5.4.7/usage/configfile/#using-config-files" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">Cluster-Konfigurationsdatei</a> bereitstellt (ab Version 4.0.0). Dadurch können Entwicklungsteams die Konfiguration eines k3d-Clusters in einer lokalen YAML-Datei speichern, die im Team geteilt werden kann. Diese Datei enthält die Konfiguration für fast alle Parameter, die einen Cluster ausmachen, z. B. die Anzahl der Clusterknoten, die Kubernetes-Version, die lokal zugeordneten Ports, Registrierungen, Funktionen und vieles mehr. Mit dieser Datei können Sie die gleiche Cluster-Konfiguration im Team problemlos bereitstellen, ohne dass der Entwickler einer Anleitung oder einem Skript folgen muss, um seinen lokalen Kubernetes-Cluster einzurichten. Sie können k3d cluster create --config mycluster1.yaml ausführen und alles wird wie angegeben bereitgestellt. Meiner Meinung nach ist das viel einfacher als das, was Sie derzeit mit Minikube tun können.e simple than what you can currently do with minikube.
:::

:::globalTitle{:size="md" :tag="h3" .mb-5 .mt-8}
Keine Sorge um kubectl
:::
:::globalParagraph
Mit beiden Lösungen, Minikube und k3d, wird der kubectl-Kontext des Entwicklers automatisch auf den neu erstellten Cluster gesetzt. Beide Alternativen benennen ihren kube-Kontext nach dem Cluster-Namen/Profil-Namen, der beim Erstellen des Clusters angegeben wurde. Auf diese Weise kann der Entwickler problemlos mit der Arbeit beginnen, ohne sich um die kubectl-Konfiguration kümmern zu müssen.
:::

:::globalTitle{:size="md" :tag="h3" .mb-5 .mt-8}
Weniger Komplexität, weniger CLI-Befehle
:::
:::globalParagraph
Da k3d nicht die Komplexität von Minikube bietet, ist die CLI viel weniger umfassend, aber dennoch einfach. Ich würde sagen, für Entwickler, die mit der CLI arbeiten, ist das ein Pluspunkt. Insbesondere bei Verwendung der k3d-Konfigurationsdatei kann ich die meisten Eingaben auf der Befehlszeilenschnittstelle einsparen und die Oberfläche der CLI auf die wenigen erforderlichen Befehle reduzieren: Starten, Stoppen und Löschen eines Clusters.
:::
:::globalParagraph
Ich vermute, dass in k3d nur wenige Funktionen fehlen, da sie in k3s nicht unterstützt werden, aber für 95% der Entwicklungsarbeit sollte es völlig ausreichend sein. Sogar der <a href="https://github.com/k3s-io/k3s/pull/6459" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">Snapshot-Controller</a> wurde kürzlich zu k3s hinzugefügt.
:::

:::globalTitle{:size="lg" .mb-5 .mt-8}
Minikube vs. kind
:::
:::globalParagraph
Kind ist ein weiteres Projekt, das von einer <a href="https://kind.sigs.k8s.io/" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">Kubernetes SIG</a> vorangetrieben wird. An diesem Punkt konnte ich nicht herausfinden, warum es noch gepflegt wird (ich habe einen Grund gefunden, aber lesen Sie weiter). Kind ist ein Akronym für "Kubernetes in Docker" und entstand aus der Idee, Kubernetes auf einer Container-Runtime (anstelle einer virtuellen Maschine) auszuführen. Heutzutage bevorzugt auch Minikube die Verwendung von Docker als Bereitstellungsoption, sodass es keinen Unterschied mehr zwischen Minikube und Kind gibt, was diesen wichtigen Punkt betrifft. Sie haben jedoch eine schöne Seite in ihrer Dokumentation, auf der die <a href="https://kind.sigs.k8s.io/docs/design/principles/" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">Prinzipien und Zielanwendungsfälle von Kind</a> erklärt werden. Ich würde sagen, es läuft alles auf Automatisierung hinaus.
:::
![minikube vs. kind](/img/blogs/minikube-vs-k3d-vs-kind-vs-getdeck-beiboot-3.jpg){.object-cover .max-w-full .mb-5}

:::globalTitle{:size="md" :tag="h3" .mb-5 .mt-8}
Konfigurationsdateien und K8s-Funktionen
:::
:::globalParagraph
Ähnlich wie k3d bietet auch Kind die Möglichkeit, <a href="https://kind.sigs.k8s.io/docs/user/configuration/#a-note-on-cli-parameters-and-configuration-files" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">Konfigurationsdateien</a> zu verwenden. Ähnlich wie bei k3d können Sie...
:::
:::BlogCode{.mb-5}
```
kind create cluster --config mycluster1.yaml
```
:::

:::globalParagraph
...um einen lokalen Kubernetes-Cluster basierend auf der angegebenen Konfiguration zu erstellen.
:::
:::globalParagraph
Kind bietet auch Feature Gates, um experimentelle Kubernetes-Funktionen und viele andere Konfigurationsoptionen zu aktivieren.
:::

:::globalTitle{:size="md" :tag="h3" .mb-5 .mt-8}
Podman? Rootless? Kind!
:::
:::globalParagraph
Im Vergleich zu Minikube, wo die Verwendung von Podman als experimentell betrachtet wird, bietet Kind solide Unterstützung für Podman. Das Projektteam hat sogar erhebliche Anstrengungen unternommen, um Kind auch im <a href="https://kind.sigs.k8s.io/docs/user/rootless/" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">rootless</a>-Modus auszuführen. Für diejenigen, für die dies wichtig ist, ist Kind derzeit die einzige Lösung. Es gibt jedoch einige Einschränkungen, natürlich.
:::
:::globalParagraph
Kind verfügt über eine weniger komplexe Befehlszeilenschnittstelle im Vergleich zu Minikube. Die Befehlszeilenschnittstelle verzichtet auch auf Emojis, was ein Vorteil sein kann. Aber das ist Geschmackssache.
:::
:::globalParagraph
Wenn man die Startseite beider Produkte vergleicht, behauptet Minikube, sich "[...] <a href="https://minikube.sigs.k8s.io/docs/" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">auf die Unterstützung von Anwendungsentwicklern und neuen Kubernetes-Benutzern zu konzentrieren</a>.", während Kind "ursprünglich für das Testen von Kubernetes selbst entwickelt wurde, aber auch für die lokale Entwicklung oder CI verwendet werden kann". Ich denke, das gibt eine gewisse Vorahnung davon, worum es geht.
:::

:::globalTitle{:size="lg" .mb-5 .mt-8}
Vergleich von Minikube, k3d und Kind im Jahr 2023
:::
:::globalParagraph
Lassen Sie uns nun einen direkten Vergleich dieser drei Alternativen für die lokale Kubernetes-Entwicklung im Jahr 2023 durchführen.
:::

:::globalTitle{:size="lg" .mb-5 .mt-8}
Beliebtheit
:::
:::globalParagraph
Beliebtheit ist ein Indikator dafür, wie sicher die fortlaufende Wartung eines Produkts ist. Eine gute Währung, um dies zu messen, ist die Anzahl der GitHub-Stargazers:
:::
:::GlobalBlock{.ol-decimal .mb-5}
1. Minikube: >25,8k Sterne auf GitHub
2. Kind: >11,1k Sterne auf GitHub
3. k3d: >4,1k Sterne auf GitHub
:::
:::globalParagraph
Wie Sie sehen können, haben alle drei Kandidaten bereits eine signifikante Beliebtheit auf GitHub. Minikube ist jedoch bei weitem die beliebteste Option. Ich würde sagen, dass alle drei Lösungen aufgrund ihrer lebendigen Community dauerhaft gewartet werden.
:::

<!--- Störer -->
::GlobalPartial{content=catcher-1}

:::globalTitle{:size="lg" .mb-5 .mt-8}
Leistungsbewertung
:::
:::globalParagraph
Die folgende Leistungsbewertung wurde auf einem Ubuntu-System durchgeführt, das auf einem Intel Core i7 (8. Generation) mit 16 GiB RAM läuft. Obwohl ich auf Linux arbeite, habe ich Docker Desktop auf meinem Rechner verwendet und hoffe, vergleichbare Ergebnisse mit anderen Plattformen zu sammeln.
:::
:::globalParagraph
Hinweis: Docker Desktop führt auf Linux ebenfalls eine QEMU-basierte virtuelle Maschine aus, genau wie auf Windows und macOS. Das Kubernetes in Docker Desktop wurde deaktiviert.
:::
:::globalParagraph
Ich habe die folgenden Versionen der Tools verwendet:
:::
:::GlobalBlock{.ul-disk .mb-5}
- Minikube: Minikube-Version: v1.26.1
- Kind: Kind v0.17.0 go1.19.2 linux/amd64
- k3d: k3d-Version v5.4.1
:::

:::globalTitle{:size="md" :tag="h3" .mb-5 .mt-8}
Cluster-Startzeit
:::
:::globalParagraph
In diesem Testfall messe ich die Zeit vom Anfordern eines neuen lokalen Clusters bis zu dessen Start. Ich habe keine speziellen Konfigurationen angegeben, sondern die Standardwerte verwendet.
:::
:::globalParagraph
Ich habe diesen Test fünfmal durchgeführt und das beste Ergebnis aller Messungen genommen, damit keine Container-Images während der gemessenen Zeit heruntergeladen werden.
:::
:::globalParagraph
Die Startzeiten sind wie folgt:
:::
:::GlobalBlock{.ul-disk .mb-5}
- Minikube (Docker): 29,448s
- k3d: 15,576 s
- Kind: 19,691 s
:::
:::globalParagraph
Die Startzeiten aller Kandidaten sind ziemlich nah beieinander. Wenn Sie beispielsweise zuerst die erforderlichen Container-Images herunterladen müssen, wird dies wahrscheinlich den Gesamtprozess mehr beeinflussen als der zugrunde liegende Bootstrapping-Prozess. Mit Ausnahme des kvm2-Treibers von Minikube. Dieser Prozess ist viel aufwändiger und beinhaltet das Hochfahren einer gesamten virtuellen Maschine. Ich gehe davon aus, dass VM-basierte Treiber sowieso nicht die erste Wahl für die Mehrheit der Entwickler sind.
:::

:::globalTitle{:size="md" :tag="h3" .mb-5 .mt-8}
Cluster-Abschaltzeit
:::
:::globalParagraph
Ich habe die Zeiten für das Stoppen und Löschen eines Clusters gemessen. Ich habe diesen Test mehrmals durchgeführt und das beste Ergebnis aller Messungen genommen:
:::
:::GlobalBlock{.ul-disk .mb-5}
- Minikube (Docker): 2,616 s
- k3d: 0,700 s
- Kind: 0,805 s
:::
:::globalParagraph
Alle Tools stoppen und löschen ihre Cluster sehr schnell. Kein großer Unterschied zwischen ihnen.
:::

:::globalTitle{:size="md" :tag="h3" .mb-5 .mt-8}
Cluster-Ressourcenverbrauch
:::
:::globalParagraph
Ich habe einen lokalen Kubernetes-Cluster gestartet und etwa 120 s nach dem abgeschlossenen Start die Ressourcenverbräuche für einen im Leerlauf befindlichen Einzelknoten-Cluster überprüft. Dafür habe ich den Befehl "docker stats" verwendet.
:::
:::globalParagraph
Bitte beachten Sie, dass ich traefik bei k3d deaktiviert habe, um eine vergleichbare Konfiguration zu erhalten. Da k3d mindestens zwei Container ausführt, habe ich die Verbräuche aggregiert.
:::
:::globalParagraph
Hier sind die Ergebnisse:
:::
:::GlobalBlock{.ul-disk .mb-5}
- Minikube mit Docker (CPUs=8, Memory=15681 MiB):<br />
  CPU: ~20% Speicherauslastung: ~680,8 MiB
- K3d (CPUs=8, Memory=15681 MiB):<br />
  CPU: ~20% Speicherauslastung: ~502 MiB
- Kind (CPUs=8, Memory=15681 MiB):<br />
  CPU: ~20% Speicherauslastung: ~581 MiB
:::
:::globalParagraph
Bei Betrachtung der Ergebnisse kann man einige Unterschiede zwischen Minikube und k3d oder Kind erkennen. Für einen leeren und im Leerlauf befindlichen Cluster allokiert Minikube etwa 35% mehr Speicher als k3d und 17% mehr Speicher als Kind. Ich vermute, dass mit zunehmender Anzahl von Workloads der Ressourcenverbrauch von Minikube sehr schnell an die Grenze der Entwicklungsmaschine stoßen wird.
:::
:::globalParagraph
In jedem Fall war ich sehr überrascht von der CPU-Auslastung, die von 10% auf 50% stieg, obwohl in diesen Clustern nichts los war. Dieses Muster trat bei allen Kubernetes-Anbietern auf.
:::

:::globalTitle{:size="lg" .mb-5 .mt-8}
Benutzerfreundlichkeit und Entwicklererfahrung (DX)
:::
:::globalParagraph
Benutzerfreundlichkeit und DX sind sehr komplexe Themen und es ist schwierig, quantitative Metriken zu finden. Dennoch möchte ich einige meiner Erkenntnisse hervorheben, die mir an den Tools gefallen oder nicht gefallen.
:::
:::globalParagraph
Alle Tools sind derzeit nur als CLI (Befehlszeilenschnittstelle) verfügbar. Das ist für mich in Ordnung und wahrscheinlich für einen Großteil der Entwickler auf Linux und macOS. Soweit ich weiß, arbeiten nur wenige Entwickler unter Windows gerne mit einem Terminal. Aus ihrer Sicht bietet eine CLI wahrscheinlich nicht die bestmögliche DX. Es gibt jedoch einige GUIs (grafische Benutzeroberflächen). Meine Ergebnisse dazu habe ich im nächsten Kapitel hinzugefügt.
:::

:::globalTitle{:size="md" :tag="h3" .mb-5 .mt-8}
Minikube
:::
:::globalParagraph
Minikube wird mit einer CLI geliefert, die viele Emojis verwendet. Das ist eine sehr individuelle Vorliebe, aber ich finde sie ein wenig nervig. Allerdings können <a href="https://github.com/kubernetes/minikube/issues/5024" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">sie deaktiviert werden</a>.
:::
:::globalParagraph
Die Installation ist sehr einfach, Sie können es über Brew, ein Skript oder als Binärdatei herunterladen und manuell in Ihren Pfad legen.
:::
:::globalParagraph
Minikube macht es sehr einfach und schnell, einen neuen Cluster zu erstellen. Es ist nur ein Befehl mit zwei Wörtern: *minikube start*. Das ist einfach genug. Wie würden Sie denken, Konfigurationsoptionen zu übergeben? Richtig! Direkt als Argument an die Startoperation. Eine sehr wichtige Konfiguration ist die Kubernetes-API-Version. Es spielt keine Rolle, welche Version von Minikube Sie auf Ihrem lokalen Rechner installiert haben, Sie können <a href="https://kubernetes.io/releases/" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">immer eine andere Kubernetes-API-Version</a> als die Standardversion auswählen. Und das ist sehr einfach und intuitiv. Ihr Produktionscluster läuft auf Version 1.25.5, dann möchten Sie ausführen:
:::
:::BlogCode{.mb-5}
```
minikube start --kubernetes-version=1.25.5
```
:::
:::globalParagraph
...und Sie erhalten die richtige [API-](/our-services/api-development-agency/){.text-bs-blue .hover:underline .hover:decoration-bs-blue .hover:decoration-solid} version.
:::
:::globalParagraph
Andere grundlegende Cluster-Operationen sind ebenso: das Anhalten des Clusters, das Stoppen oder Löschen ist immer nur ein Befehl.
:::

:::globalParagraph{.mt-8 .text-xl}
**Saubere CLI, schnelles Kubernetes Dashboard**
:::
:::globalParagraph
Die Befehlspalette der minikube CLI ist sauber und übersichtlich. Wenn Sie mit mehreren Clustern parallel arbeiten, die entweder gestartet sind oder sich im Ruhezustand befinden, können Sie immer das Argument *-p/--profile* zu den meisten Aktionen hinzufügen und die gewünschte Aktion auf dem angegebenen Cluster ausführen.
:::
:::globalParagraph
Wie können Sie alle vorhandenen Cluster auf dem Rechner auflisten? Das ist eine
:::
:::BlogCode{.mb-5}
```
minikube profile list
```
:::
:::globalParagraph
...und es wird Ihnen eine Liste der erstellten Cluster angezeigt.
:::
:::globalParagraph
Wenn Sie einen laufenden Cluster haben, können Sie immer das offizielle Kubernetes-Dashboard mit *minikube dashboard* öffnen (für das Standardprofil). Natürlich können Sie das Kubernetes-Dashboard immer auf jedem Cluster installieren, aber dieser Befehl ist wirklich eine Abkürzung, um nach wenigen Sekunden eine visuelle Benutzeroberfläche für diesen Cluster zu erhalten.
:::

![minikube dashboard](/img/blogs/minikube-vs-k3d-vs-kind-vs-getdeck-beiboot-4.jpg){.object-cover .w-full .mb-5}

:::globalParagraph
**Fügen Sie diese Ingress hinzu**
:::
:::globalParagraph
Wenn Sie eine Kubernetes-Bereitstellung oder einen Service auf Ihre lokale Entwicklungsmaschine freigeben müssen, verwenden Sie einfach die Befehle für Netzwerk und Konnektivität:
:::
:::GlobalBlock{.ul-disk .mb-5}
- *minikube service*: gibt eine URL zurück, um eine Verbindung zu einem Service herzustellen
- *minikube tunnel*: Verbindung zu LoadBalancer-Services herstellen
:::
:::globalParagraph
Ein häufiges Komponente, die über Addons aktiviert werden muss, ist der Ingress-Controller. Normalerweise ist dies die bevorzugte Methode, um eine Anwendung freizugeben. Mit Minikube haben Sie standardmäßig keinen Ingress-Controller zur Verfügung, stattdessen müssen Sie ihn manuell bereitstellen. Glücklicherweise gibt es ein Addon mit dem bekannten und weit verbreiteten "nginx-ingress". Führen Sie einfach aus:
:::
:::BlogCode{.mb-5}
```
minikube addons enable ingress
```
:::

:::globalParagraph
und Sie können Ingress-Objekte erstellen, die unter http://192.168.49.2 bereitgestellt werden. Bitte beachten Sie, dass die IP-Adresse Ihres Clusters eine andere sein kann. Sie können sie herausfinden mit
:::
:::BlogCode{.mb-5}
```
minikube ip
```
:::

:::globalParagraph{.mt-8}
**Kritik**
:::
:::globalParagraph
Es gibt nur eine Kritik, die ich an Minikube habe: die schlechten Automatisierungsoptionen. Es gibt keine Konfigurationsdatei, die ich einfach dem Befehl übergeben kann, um einen ganzen Cluster wie spezifiziert einzurichten. Stattdessen muss ich all diese Befehle sequentiell ausführen. Das ist schade und kann in Zukunft verbessert werden.
:::
:::globalParagraph
Ein Befehl zum Generieren des Tab-Completion-Skripts ist auch für viele Terminals verfügbar.
:::

:::globalTitle{:size="md" :tag="h3" :tag="h3" .mb-5}
k3d
:::
:::globalParagraph
Die Installation der k3d CLI ist sehr einfach. Sie können es über Brew, ein Skript oder als Binärdatei herunterladen und manuell in Ihren Pfad legen. Die CLI benötigt jedoch etwas Zeit, um sich daran zu gewöhnen. Im Vergleich zu Minikube bietet k3d nicht so viele Funktionen auf der Befehlszeile, aber Sie können mit k3d fast alle erforderlichen Setups genauso gut realisieren.
:::

:::globalTitle{:size="sm" :tag="h3" .mb-5}
Weniger CLI-Optionen, aber Ingress out of the box
:::
:::globalParagraph
Ein Entwickler wird die meisten praktischen Funktionen vermissen, die die Minikube CLI bietet, aber die k3d CLI vermisst. Das ist jedoch kein großes Problem. Wenn Sie ein erfahrenerer Entwickler sind, arbeiten Sie wahrscheinlich sehr effizient mit kubectl und kennen andere Tools aus dem Ökosystem wie Helm oder Kustomize. Wenn Sie beispielsweise das Kubernetes-Dashboard benötigen, müssen Sie es über Helm installieren (oder eine andere Installationsmethode). Das ist kein großes Problem, aber es ist nicht so bequem wie bei Minikube. Sobald Sie einen Cluster erstellt haben, wird Ihr globaler kubeconfig-Kontext so eingestellt, dass er auf den neuen Cluster zeigt.
:::
:::globalParagraph
k3d wird mit Traefik als Ingress-Controller geliefert. Es ist immer installiert, es sei denn, Sie deaktivieren es explizit mit einem Konfigurationsflag. Bei Blueshoe haben wir es als sehr hilfreich empfunden, es immer verfügbar zu haben, da wir dieses wichtige Feature während der Entwicklungseinrichtung nicht behandeln mussten.
:::


:::globalTitle{:size="sm" :tag="h3" .mb-5}
Port-Mapping meh
:::
:::globalParagraph
Das Festlegen des Port-Mappings auf Ihrem lokalen Rechner kann etwas umständlich sein. Wenn Sie beispielsweise eine Anwendung über Ingress auf Port 8080 auf Ihrer Entwicklungsmaschine freigeben möchten, müssen Sie dies während der Clustererstellung angeben. Und die Notation ist für Entwickler nicht super intuitiv. Schauen Sie sich die Dokumentation an. Erstellen Sie einen Cluster mit einer festen Reihe von Port-Mappings wie folgt:
:::

:::BlogCode{.mb-5}
```
k3d cluster create -p "8080:80@loadbalancer" -p "8443:443@loadbalancer" …
```
:::
:::globalParagraph
Es sind auch andere Portkonfigurationen möglich, aber aus Sicht der Entwicklererfahrung ist es nicht sehr praktisch, den gesamten Cluster neu zu erstellen, nur weil man vergessen hat, die Ports zuzuordnen.
:::
:::globalParagraph
Wenn Sie nur als Entwickler in einem Team arbeiten möchten, erhalten Sie wahrscheinlich sowieso eine Cluster-Konfigurationsdatei. Mit dieser und den richtigen Spezifikationen werden Sie eine sehr gute Zeit haben, alles einzurichten. Sie müssen nur Folgendes ausführen:
:::

:::BlogCode{.mb-5}
```
k3d cluster create --config myconfig.yaml
```
:::
:::globalParagraph
...und innerhalb weniger Sekunden sind Sie bereit. Das ist schnell und sehr praktisch. Ein großer Vorteil für die Entwicklererfahrung bei k3d.
:::
:::globalParagraph
Es gibt auch einen Befehl, um das Tab-Completion-Skript für viele Terminals zu generieren.
:::

:::globalTitle{:size="sm" :tag="h3" .mb-5}
kind
:::
:::globalParagraph
kind ist in den meisten Aspekten sehr ähnlich zu k3d. Genau wie k3d und minikube können Sie es mit beliebten Paketmanagern, Skripten und als einzelne ausführbare Datei installieren.
:::
:::globalParagraph
Wenn Sie bereits mit der k3d-Befehlszeilenschnittstelle vertraut sind, werden Sie sich wahrscheinlich schnell an die kind-Befehlszeilenschnittstelle gewöhnen. Die Optionen sind fast identisch, und auch die Einschränkungen sind ähnlich.
:::
:::globalParagraph
In diesem Abschnitt gibt es nicht viel hinzuzufügen.
:::


:::globalTitle{:size="lg" .mb-5}
Entwicklungsoptionen
:::
:::globalParagraph
Es kann herausfordernd und umständlich sein, Ihren eigenen Code in einem der Kubernetes-Tools auszuführen. Zunächst müssen Sie Container-Images erstellen, da Kubernetes nur das Ausführen von Container-Instanzen zulässt. Normalerweise bezieht Kubernetes diese Images aus einem externen Container-Register (wie Dockerhub, quay.io oder einem selbst gehosteten Register). Wenn ein Entwickler eigenen Code ausführen möchte, erfordert dies eine Arbeitslastspezifikation und ein Register, das das Container-Image bereitstellt. Dies kann zu einem enormen Effizienzverlust führen.
:::
:::globalParagraph
Glücklicherweise bieten alle Tools einige Workarounds oder Abkürzungen, um diese Hürde zu überwinden (zumindest teilweise).
:::


:::globalTitle{:size="sm" :tag="h5" .mb-5 .mt-8}
Lokalen Code einbinden
:::

:::globalParagraph
minikube und k3d bieten die Möglichkeit, Code direkt von der Entwicklermaschine in den laufenden Kubernetes-Knoten einzubinden.
:::
:::globalParagraph
Mit k3d ist dies mit dem <a href="https://docs.k3s.io/storage" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">lokalen Pfadbereitsteller</a> von k3s möglich. Ein Entwickler kann einen <a href="https://kubernetes.io/docs/concepts/storage/persistent-volumes/" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">PersistentVolumeClaim</a> erstellen, der auf einen Pfad im Host-System verweist. Anschließend kann dieser PVC in eine Container-Instanz eingebunden und im Container-Prozess verwendet werden. Dadurch können Sie entweder einen Container-Prozess mit dem aktuellen Code ausführen (den Container neu starten, sobald der Code geändert wurde) oder den Container-Prozess mit *Hot-Reloading-Funktionen* starten. Natürlich ist dies stark abhängig von einem Framework oder Prozess, der ausgeführt wird, und hat nichts mit Kubernetes zu tun. Dies funktioniert jedoch nur bei der Erstellung des Clusters wie folgt:
:::

:::BlogCode{.mb-5}
```
k3d cluster create my-cluster --volume /my/home/go/src/github.com/nginx:/data
```
:::

:::globalParagraph
Das Hinzufügen von Volumes nachdem der Cluster erstellt und ausgeführt wird, ist <a href="https://github.com/k3d-io/k3d/issues/566" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">noch ein offenes Problem</a>.
:::
:::globalParagraph
Mit dem <a href="https://minikube.sigs.k8s.io/docs/handbook/mount/" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">minikube mount</a>-Befehl ist dasselbe möglich. Sie können sogar Speichervolumes nach der Erstellung des Clusters einbinden. Anstatt einen Kubernetes PVC zu verwenden, können Sie den Code mit der *hostPath*-Eigenschaft eines Pods einbinden, was es etwas bequemer macht.
:::


:::globalTitle{:size="sm" :tag="h5" .mb-5 .mt-8}
Lokales Container-Image laden
:::

:::globalParagraph
Ein praktischerer und weniger invasiver Ansatz, um lokalen Code in minikube, k3d und kind auszuführen, ist die Load-Image-Funktion. Warum weniger invasiv? - Als Entwickler müssen Sie die Kubernetes-Objekte (Pods, PVCs usw.) für Ihre lokale Umgebung nicht anpassen, basierend auf den Pfaden, die möglicherweise einzigartig für Ihr System sind (z. B. das Einbinden von Home-Verzeichnissen unterscheidet sich normalerweise zwischen Entwicklern). Stattdessen stellen Sie ein Container-Image für Ihren lokalen Cluster zur Verfügung, ohne dass ein dediziertes Container-Register erforderlich ist. Das bedeutet, Sie erstellen ein lokales Container-Image basierend auf Ihrem aktuellen Code (z. B. *docker build . -t myimage*) und übertragen es direkt in Ihr lokales Kubernetes, um es auszuführen.
:::
:::globalParagraph
Dieser Ansatz wird von fast allen Kubernetes-Entwicklungstools wie <a href="https://tilt.dev/" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">tilt.dev</a>, <a href="https://www.devspace.sh/" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">devspace</a> und anderen genutzt. Diese Arten von Entwicklungstools führen automatisch einen Build-Load-Execute-Zyklus durch, während sie auf Codeänderungen achten. Dieser Ansatz ist langsamer als das Einbinden von lokalem Code mit einem angepassten Container-Prozess, aber zumindest modifiziert er (normalerweise) nicht die Kubernetes-Objekte.
:::
:::globalParagraph
Um dies mit minikube zu tun, führen Sie aus...
:::

:::BlogCode{.mb-5}
```
minikube image load <name>
```
:::
:::globalParagraph
Bei k3d laden Sie ein Image mit...
:::
:::BlogCode{.mb-5}
```
k3d image import <name>
```
:::
:::globalParagraph
und bei kind ist es...
:::
:::BlogCode{.mb-5}
```
kind load docker-image <name>
```
:::

:::globalParagraph
...von Ihrer Konsole aus.
:::
:::globalParagraph
Es gibt noch einige andere verfügbare Tools wie ksync, das Code in in Kubernetes ausgeführte Container kopiert, aber mit einem allgemeineren technischen Ansatz. Eine großartige Option für Entwickler, die mit jeder Art von Kubernetes-Umgebung, sei es lokal oder remote, arbeiten, wird im nächsten Abschnitt vorgestellt.
:::


:::globalTitle{:size="sm" :tag="h5" .mb-5 .mt-8}
Die beste Alternative für die lokale Kubernetes-Entwicklung
:::

:::globalParagraph
Die oben genannten Optionen machen nicht alle erforderlichen Entwicklungsfunktionen leicht zugänglich. Zum Beispiel ist das Überschreiben von Umgebungsvariablen nicht sehr einfach, da sie aus verschiedenen Kubernetes-Objekten stammen können: ConfigMaps, Secrets, Pod-Spezifikationen, Downward API und andere. Ein Entwickler, der nicht daran gewöhnt ist, mit Kubernetes zu arbeiten, könnte Schwierigkeiten haben, mit Umgebungsvariablen herumzuspielen.
:::
:::globalParagraph
Der allmächtige Debugger, der nicht einfach an einen in Kubernetes ausgeführten Prozess angehängt werden kann, ist mit den oben genannten Optionen nicht sehr praktisch. Die oben genannten Optionen haben auch einige andere Nachteile.
:::

:::globalParagraph
An diesem Punkt hat Blueshoe beschlossen, ein anspruchsvolleres Entwicklungstool zu entwickeln, das Entwickler von der Zeit im Build-Load-Execute-Zyklus oder vom Ausführen lokaler Verzeichnisse in Kubernetes entlastet: <a href="https://gefyra.dev/" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">Gefyra</a>.
:::
:::globalParagraph
Gefyra verbindet sich nicht nur mit lokalen Kubernetes-Clustern, die auf minikube, k3d oder kind basieren. Es verbindet sich mit praktisch jedem Kubernetes-Cluster, der irgendwo läuft. Dies ermöglicht Gefyra-Benutzern, dedizierte Entwicklungsumgebungen in der Cloud zu erstellen und gleichzeitig lokales Codieren für die Entwickler bereitzustellen.
:::

:::globalParagraph
Gefyra führt den Code auf einer lokalen Docker-Laufzeitumgebung aus (ohne Kubernetes überhaupt) und führt einige Netzwerk- und Prozessmagie durch, um die lokale Container-Instanz mit einem Kubernetes-Cluster zu verbinden. Der Prozess auf einer Entwicklermaschine fühlt sich an, als würde er direkt in einem Kubernetes-Namespace ausgeführt (einschließlich Netzwerkfunktionen) und bietet den Vorteil, dass alle gängigen Entwicklungstools lokal verfügbar sind. Dies kann die Entwicklungsgeschwindigkeit drastisch verbessern und gleichzeitig eine sehr gute Übereinstimmung zwischen Entwicklung und Produktion gewährleisten.
:::
:::globalParagraph
Wenn Sie eine Meinung zu Gefyra haben, fehlende Funktionen haben oder einen Fehler melden möchten, können Sie gerne ein Issue oder eine Diskussion auf <a href="https://github.com/gefyrahq/gefyra" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">GitHub</a> eröffnen.
:::


:::globalTitle{:size="lg" .mb-5 .mt-8}
Grafische Benutzeroberflächen und Docker Desktop
:::
:::globalParagraph
Wenn Sie nach einer grafischen Benutzeroberfläche für Ihren lokalen Kubernetes-Cluster suchen, werfen Sie einen Blick auf <a href="https://github.com/inercia/k3x" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">K3x</a> und <a href="https://github.com/kubernetes-sigs/minikube-gui" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">minikube GUI</a>. Beide Projekte befinden sich zum Zeitpunkt des Verfassens dieses Artikels noch in einem sehr frühen Entwicklungsstadium.
:::
:::globalParagraph
Die Hauptziele dieser Projekte sind es, dem Benutzer zu ermöglichen, Kubernetes-Cluster mit einem Mausklick zu erstellen, zu starten und zu beenden. Darüber hinaus ermöglichen sie Entwicklern, die wichtigsten Operationen mit Tastenkombinationen zu verwalten und die Lernkurve bei der Verwendung von Kubernetes zu reduzieren.
:::
:::globalParagraph
Und dann gibt es Docker Desktop, das eine eigene Kubernetes-Lösung mitbringt. Allerdings bietet Kubernetes in Docker Desktop nicht wirklich die Funktionen, die minikube, k3d oder kind bieten. Sie können lediglich einen Kubernetes-Cluster mit einer grafischen Benutzeroberfläche starten und stoppen.
:::

:::globalTitle{:size="lg" .mb-5 .mt-8}
Eine cloud-basierte Kubernetes-Entwicklungsumgebung mit Getdeck
:::
:::globalParagraph
Bei Blueshoe haben wir festgestellt, dass lokale Kubernetes-Cluster mit wachsenden Arbeitslasten eine Herausforderung darstellen. Insbesondere unter Windows und macOS verwandelt selbst eine geringe Anzahl von Entwicklungsaufgaben in Kubernetes die Entwicklungsmaschine in einen langsamen Zombie. Das war sehr unpraktisch, daher haben wir uns entschieden, nach anderen Lösungen für unsere Entwicklungsteams zu suchen. Für die komplexe Kubernetes-native Softwarearchitektur, an der wir arbeiten, war es nicht möglich, eine gemeinsame Cluster-Konfiguration zu erstellen. Das Aufteilen eines physischen Clusters mit Namespaces ist etwas, das viele Entwicklungsteams derzeit tun. Stattdessen wollten wir unseren Entwicklern dedizierte, vollwertige, bedarfsgesteuerte Kubernetes-Cluster zur Verfügung stellen. Aber mit allen Funktionen, die eine reife Entwicklungsorganisation benötigt, wie z.B. Lebenszyklusmanagement, Ressourcenbeschränkungen usw.
:::
:::globalParagraph
Dafür haben wir Getdeck entwickelt.
:::
:::globalParagraph
Mit Getdeck Beiboot muss ein Team von Entwicklern nur einen physischen Kubernetes-Cluster betreiben. Der Beiboot-Operator erstellt "virtuelle" Kubernetes-Cluster innerhalb des Host-Clusters und verwaltet deren Lebenszyklen. Die Erstellung einer ad-hoc Kubernetes-Umgebung dauert etwa 20 Sekunden und beansprucht keine Ressourcen auf einer Entwicklungsmaschine.
:::
:::globalParagraph
Darüber hinaus ermöglicht die Beiboot Shelf-Funktion Entwicklern, vorkonfigurierte Kubernetes-Cluster von der Stange zu erstellen. Das bedeutet, es dauert nur wenige Sekunden länger und Entwickler haben einen dedizierten Kubernetes-Cluster, der alle erforderlichen Arbeitslasten für ihre Aufgaben enthält und alle Daten enthält, die erforderlich sind, um die Produktionsinfrastruktur abzubilden. Dies ist nicht nur bequem für Entwicklungszwecke, sondern auch für automatisierte Aufgaben in CI/CD-Szenarien.
:::
:::globalParagraph
Und das Beste daran: Diese Cluster werden zum lokalen Rechner getunnelt, so dass es sich so anfühlt, als würden sie auf dem lokalen Host ausgeführt werden. Das ist sehr praktisch.
:::
:::globalParagraph
Getdeck kommt jetzt auch mit einer grafischen Benutzeroberfläche: <a href="https://github.com/Getdeck/Getdeck-Desktop" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">Getdeck Desktop</a>.
:::
:::globalParagraph
Damit können Entwickler Beiboot-Cluster in kürzester Zeit verwalten. Sie können eine Verbindung dazu herstellen und damit arbeiten, als würde es auf ihrem lokalen Rechner laufen, aber ohne dass der Computer abstürzt.
:::
:::globalParagraph
Sie können dies mit unserem kostenlosen Getdeck-as-a-Service-Angebot einfach testen. Laden Sie einfach die Desktop-App herunter, geben Sie einige Ports ein, erstellen Sie einen Cluster und beginnen Sie mit der Entwicklung in einem virtuellen Kubernetes-Cluster, der von uns gehostet und bezahlt wird. Der Cluster unterliegt folgenden Einschränkungen:
:::

:::GlobalBlock{.ul-disk .mb-5}
- maximale Lebensdauer des Clusters von 4 Stunden
- keine Sitzungszeitüberschreitung
- maximal 3 Knoten (maximal 2 Kerne, 6 GB RAM, 50 GB Speicher)
- maximal 1 Cluster gleichzeitig
:::


:::globalTitle{:size="lg" .mb-5 .mt-8}
Abschließende Bemerkungen
:::
:::globalParagraph
Es ist sehr schwierig, einen Gewinner in diesem Vergleich zu wählen. Alle drei etablierten Lösungen, minikube, k3d und kind, sind sehr ähnlich zueinander. Es gibt einige Vor- und Nachteile für jede Lösung, aber nichts, was wirklich herausragt. Das ist gut, denn es ist auch nicht wirklich möglich, das falsche Tool auszuwählen. Mir gefällt die allgemeine Benutzerfreundlichkeit aller dieser Tools, da sie eine professionelle Arbeitsumgebung ansprechen. Alle sind schnell, einfach zu installieren und ziemlich einfach zu bedienen.
:::
:::globalParagraph
Ich habe das Gefühl, dass minikube etwas voraus ist und am nächsten an der offiziellen Kubernetes-Entwicklungsroadmap liegt. Insbesondere für einen einzelnen (potenziell unerfahrenen) Entwickler scheint die Einstiegshürde ziemlich niedrig zu sein. Es ist jedoch die Option mit dem höchsten Ressourcenbedarf. Ich würde minikube Anfängern von Kubernetes empfehlen.
:::
:::globalParagraph
Bei Blueshoe waren wir in der Vergangenheit sehr zufrieden mit k3d. Besonders wenn Sie viele verschiedene Kubernetes-Cluster ausführen, werden Sie über den geringeren Ressourcenverbrauch im Vergleich zu minikube erfreut sein. Wenn Sie in einem Team arbeiten, werden die mit k3d oder kind gelieferten Konfigurationsdateien für alle von großem Nutzen sein.
:::
:::globalParagraph
Für einige unserer automatisierten Testfälle sind wir auf minikube umgestiegen, aufgrund des *--kubernetes-version* Arguments. Es ist sehr einfach, die gewünschte Kubernetes-Version festzulegen und voila, es läuft. Bei k3d müssen Sie sich das entsprechende k3s Docker-Image ansehen, das verwendet werden soll.
:::
:::globalParagraph
Langfristig betrachten wir die lokale Kubernetes-Entwicklung tatsächlich nicht als nachhaltige Option. Remote-Entwicklungsumgebungen sind die Zukunft! Getdeck Beiboot wird alle auf Kubernetes basierenden Ressourcen ausführen, und mit Tools wie Gefyra ermöglichen wir Entwicklern, in einer echten Kubernetes-basierten Entwicklungsumgebung zu arbeiten.
:::
:::globalParagraph
Wenn Sie mehr über die Kubernetes-basierte Entwicklung erfahren möchten, können Sie mir auf LinkedIn <a href="http://www.linkedin.com/in/michael-schilonka" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">folgen</a>, unserem Discord <a href="https://discord.gg/7A8mnvQjRp" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">beitreten</a> oder uns bei Blueshoe kontaktieren.
:::


:::BlogRelatedPosts{:url='["/blog/docker-vs-podman", "/blog/performance-comparison-gke-vs-eks", "/blog/kubernetes-logging-with-promtail-loki-and-grafana", "/blog/local-kubernetes-development", "/blog/vuejs-error-tracking-with-sentry"]'}

:::
