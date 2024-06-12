---
head:
  title: Verwendung von Cilium für Kubernetes-Netzwerke und Beobachtbarkeit'
  meta:
    - property: 'og:locale'
      content: 'de_DE'
    # - name: 'description'
    #   content: 'Erfahren Sie, wie Sie mit Cilium eBPF für leistungsstarke Netzwerk-, Sicherheits- und Überwachungsaufgaben in Kubernetes nutzen. Jetzt lesen und Kubernetes optimieren!'
    - property: 'og:type'
      content: 'website'
    - property: 'og:title'
      content: 'Using Cilium for Kubernetes networking and observability'
    - property: 'og:description'
      content: 'Erfahre, wie du Cilium eBPF für leistungsstarke Netzwerk-, Sicherheits- und Überwachungsaufgaben in Kubernetes nutzt. Jetzt lesen und Kubernetes optimieren!'
    - property: 'og:image'
      content: 'https://www.blueshoe.io/img/blogs/cilium-kubernetes.jpg'
    - property: 'og:image:secure_url'
      content: 'https://www.blueshoe.io/img/blogs/cilium-kubernetes.jpg'
    - name: 'twitter:card'
      content: 'summary'
    - name: 'twitter:title'
      content: 'Using Cilium for Kubernetes networking and observability'
    - name: 'twitter:description'
      content: 'Erfahre, wie du Cilium eBPF für leistungsstarke Netzwerk-, Sicherheits- und Überwachungsaufgaben in Kubernetes nutzt. Jetzt lesen und Kubernetes optimieren!'
    - name: 'twitter:image'
      content: 'https://www.blueshoe.io/img/blogs/cilium-kubernetes.jpg'
src: '/blog/cilium-kubernetes-networking-observability'
img: '/img/blogs/cilium-kubernetes.jpg'
alt: 'cilium kubernetes'
preTitle: 'eBPF-basiertes Networking, Beobachtbarkeit, Sicherheit'
title: "Verwendung von Cilium für Kubernetes-Netzwerke und Beobachtbarkeit"
description: 'Erfahre, wie du Cilium eBPF für leistungsstarke Netzwerk-, Sicherheits- und Überwachungsaufgaben in Kubernetes nutzt. Jetzt lesen und Kubernetes optimieren!'
date: '19.04.2023'
autor:
  - Tobias Frölich
technologie:
  - Kubernetes
productUpdates: []
sonstiges: []
---

In diesem Artikel geben wir eine Einführung in <a href="https://cilium.io/" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">Cilium</a>
, eine Netzwerklösung für Kubernetes, die eBPF für leistungsstarke Netzwerkaufgaben, Sicherheit und Beobachtbarkeit verwendet. Wir behandeln die Installation von Cilium, die Konfiguration von Netzwerkrichtlinien und die Verwendung von Hubble zur Beobachtbarkeit.
<!--more-->

![cilium_kubernetes](/img/blogs/cilium-kubernetes.jpg){.object-cover .max-w-full .mb-6}

:::BlogNavigationCard{:title="Inhaltsverzeichnis"}
:::

<!--Einführung in Cilium und seine Verwendung in Kubernetes-->

:::GlobalTitle{:size="lg" .mb-5}
Einführung in Cilium und seine Verwendung in Kubernetes
:::
:::GlobalParagraph
Cilium ist eine Netzwerklösung für Kubernetes, die fortschrittliche Netzwerk- und Sicherheitsfunktionen bietet. Sie verwendet eBPF, um leistungsstarke Netzwerkaufgaben, Sicherheit und Beobachtbarkeit in Kubernetes durchzuführen.
:::
:::GlobalParagraph
In diesem Artikel werden wir untersuchen, wie man Cilium für das Kubernetes-Netzwerk verwendet. Wir werden die Grundlagen der Einrichtung von Cilium in einem Cluster, die Konfiguration von Netzwerkrichtlinien und die Verwendung von Hubble zur Beobachtbarkeit behandeln. Wir werden auch bewährte Verfahren für die Verwendung von Cilium in Produktionsumgebungen und die Behebung häufiger Probleme besprechen. Fangen wir an, indem wir Cilium in unseren Kubernetes-Cluster installieren!
:::
:::GlobalParagraph
Hinweis: Wir empfehlen dir die Verwendung von <a href="https://github.com/kubernetes-sigs/kind" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">kind</a>, um dies auf deinem lokalen Rechner auszuprobieren. K3d (das unter der Haube k3s verwendet) enthält in seinen Knoten-Images kein Bash, was dazu führt, dass die Cilium-Installation fehlschlägt.
:::

<!--Cilium installieren-->

:::GlobalTitle{:size="lg" .mb-5}
Cilium installieren
:::
:::GlobalParagraph
Zunächst müssen wir das Cilium CLI gemäß der <a href="https://docs.cilium.io/en/stable/gettingstarted/k8s-install-default/#install-the-cilium-cli" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">Dokumentation</a> installieren.
:::
:::GlobalParagraph
Sobald die CLI-Installation abgeschlossen ist, können wir Cilium in unseren Cluster installieren, indem wir Folgendes ausführen:
:::

:::BlogCode{.mb-5}
```docker
$ cilium install
```
:::

:::GlobalParagraph
Dies installiert Cilium in den Cluster, auf den unser aktueller kubectl-Kontext zeigt. Um eine funktionierende Installation zu überprüfen, verwenden wir:
:::

:::BlogCode{.mb-5}
```docker
$ cilium status --wait
```
:::

:::GlobalParagraph
Die Ausgabe sollte ungefähr so aussehen:
:::

:::BlogCode{.mb-5}
```docker
    /¯¯\
 /¯¯\__/¯¯\    Cilium:         OK
 \__/¯¯\__/    Operator:       OK
 /¯¯\__/¯¯\    Hubble:         disabled
 \__/¯¯\__/    ClusterMesh:    disabled
    \__/

DaemonSet         cilium             Desired: 1, Ready: 1/1, Available: 1/1
Deployment        cilium-operator    Desired: 1, Ready: 1/1, Available: 1/1
Containers:       cilium             Running: 1
                  cilium-operator    Running: 1
Cluster Pods:     0/3 managed by Cilium
Image versions    cilium             quay.io/cilium/cilium:v1.12.5@sha256:06ce2b0a0a472e73334a7504ee5c5d8b2e2d7b72ef728ad94e564740dd505be5: 1
                  cilium-operator    quay.io/cilium/operator-generic:v1.12.5@sha256:b296eb7f0f7656a5cc19724f40a8a7121b7fd725278b7d61dc91fe0b7ffd7c0e: 1
```
:::

:::GlobalParagraph
Wenn alles gut aussieht, können wir die ordnungsgemäße Netzwerkverbindung überprüfen, indem wir Folgendes ausführen:
:::

:::BlogCode{.mb-5}
```docker
$ cilium connectivity test
```
:::

:::GlobalParagraph
Dies erstellt einen dedizierten Namespace und führt einige Tests auf vordefinierten Workloads aus, um die Netzwerkverbindung des Clusters zu testen.
:::
:::GlobalParagraph
Die erfolgreiche Ausgabe sieht wie folgt aus:
:::

:::BlogCode{.mb-5}
```docker
All 31 tests (151 actions) successful, 0 tests skipped, 1 scenarios skipped.
```
:::

:::GlobalParagraph
Wenn alle Tests erfolgreich durchgeführt wurden, herzlichen Glückwunsch! Wir haben Cilium erfolgreich in unseren Kubernetes-Cluster installiert!
:::

:::GlobalPodcastSection{:videoId="5wNTUUSk1jA" :videoPosition="left" .mb-6}
::::GlobalPreTitle{:color="text-bs-green" .mb-3}
UNSER PODCAST: TOOLS FOR THE CRAFT
::::
::::GlobalTitle{:tag="h3" .mb-6}
E3: Deep dive into Getdeck
::::
::::globalParagraph{:font-size="lg" .mb-4}
Michael und Robert stellen Getdeck vor und demonstrieren es. Außerdem vergleichen sie lokale und entfernte Kubernetes- und Pre-Production-Cluster.
::::
::::globalParagraph{:font-size="lg" }
Weitere Ausgaben unseres Podcasts finden Sie hier:
::::
::::GlobalButton{:url="/kubernetes-podcast/" :label="Show more" :color="green"}
::::
:::
<!--Konfigurieren von Netzwerkrichtlinien mit Cilium-->

:::GlobalTitle{:size="lg" .mb-5}
Konfigurieren von Netzwerkrichtlinien mit Cilium
:::
:::GlobalParagraph
Netzwerkrichtlinien in Kubernetes werden zur Kontrolle und Filterung des Datenverkehrs verwendet. Standardmäßig kann jeder Pod, der in einem Cluster läuft, mit jedem anderen Pod kommunizieren, was je nach Einrichtung unsicher sein kann. Mithilfe von Netzwerkrichtlinien können wir Regeln implementieren, die nur den Verkehr zulassen, den wir explizit zulassen wollen. Cilium ermöglicht es uns, Regeln auf der HTTP-Ebene festzulegen, wodurch die Netzwerkregeln von unserem Anwendungscode entkoppelt werden.
:::
:::GlobalParagraph
Nun, da Cilium in unserem Cluster läuft, wollen wir es testen, indem wir einige Netzwerkrichtlinien anwenden, um festzulegen, welcher Datenverkehr innerhalb des Clusters sowie nach innen und außen erlaubt ist.
:::
:::GlobalParagraph
Die häufig verwendete Richtlinie "default-deny-ingress" kann mit Cilium wie folgt implementiert werden:
:::

:::BlogCode{.mb-5}
```docker
apiVersion: "cilium.io/v2"
kind: CiliumNetworkPolicy
metadata:
  name: "deny-all-ingress"
spec:
  endpointSelector:
    matchLabels:
  ingress:
  - {}
```
:::

:::GlobalParagraph
Da der matchLabels-Schlüssel leer ist, wird dies auf jeden Endpunkt angewendet und sperrt effektiv den gesamten eingehenden Datenverkehr innerhalb des Clusters.
:::
:::GlobalParagraph
Da wir möchten, dass unsere Dienste miteinander kommunizieren, fügen wir eine Richtlinie hinzu, die explizit den eingehenden Datenverkehr zwischen zwei Diensten erlaubt.
:::
:::GlobalParagraph
Eine einfache "ingress-allow" Richtlinie könnte wie folgt aussehen:
:::

:::BlogCode{.mb-5}
```docker
apiVersion: "cilium.io/v2"
kind: CiliumNetworkPolicy
metadata:
  name: "ingress-allow"
spec:
  endpointSelector:
    matchLabels:
      role: backend-api
  ingress:
  - fromEndpoints:
    - matchLabels:
        role: client
```
:::

:::GlobalParagraph
Diese Netzwerkrichtlinie erlaubt allen eingehenden Datenverkehr von Endpunkten mit dem Label ```role: client```, die sich mit Endpunkten mit dem Label ```role: backend-api```.
:::
:::GlobalParagraph
Bewegen wir uns auf den <a href="https://de.wikipedia.org/wiki/OSI-Modell" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">OSI-Modellschichten</a> nach oben, können wir auch HTTP-Methoden und Pfade wie folgt einschränken:
:::

:::BlogCode{.mb-5}
```docker
apiVersion: "cilium.io/v2"
kind: CiliumNetworkPolicy
metadata:
  name: "rule1"
spec:
  description: "Allow HTTP GET /api from app=client to app=api"
  endpointSelector:
    matchLabels:
      app: api
  ingress:
  - fromEndpoints:
    - matchLabels:
        app: client
    toPorts:
    - ports:
      - port: "80"
        protocol: TCP
      rules:
        http:
        - method: "GET"
          path: "/api"
```
:::

:::GlobalParagraph
Dies erlaubt eingehenden HTTP-Verkehr von Endpunkten mit dem Label ```app: client``` zu Endpunkten mit dem Label ```app: api```, solange die HTTP-Methode GET ist und der Pfad "/public" ist. Anfragen an andere Ports als 80 werden abgelehnt, während andere HTTP-Verben und andere Pfade abgelehnt werden.
:::

<!--Cilium für Observability verwenden-->

:::GlobalTitle{:size="lg" .mb-5}
Cilium für Observability verwenden
:::
:::GlobalParagraph
Cilium Hubble ist ein leistungsstarkes Observability-Tool, das tiefe Einblicke in den Netzwerkverkehr und die Sicherheit eines Kubernetes-Clusters bietet. In diesem Abschnitt werden wir erkunden, wie man Hubble für Observability einrichtet und verwendet.
:::

:::GlobalTitle{:size="md" :tag="h3" .mb-5}
Einrichten von Hubble
:::
:::GlobalParagraph
Um Hubble zu verwenden, müssen wir es, wie folgt, in unserem Kubernetes-Cluster bereitstellen:
:::

:::BlogCode{.mb-5}
```docker
$ cilium hubble enable --ui
```
:::

:::GlobalParagraph
Wenn wir "cilium status" erneut ausführen, sehen wir, dass Hubble aktiviert und ausgeführt wird.
:::
:::GlobalParagraph
Um die gesammelten Daten zu nutzen, installieren wir das Hubble CLI wie in der <a href="https://docs.cilium.io/en/stable/gettingstarted/hubble_setup/#install-the-hubble-client" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">Dokumentation</a> beschrieben. Sobald die Installation abgeschlossen ist, können wir den Hubble-API-Zugriff überprüfen, indem wir zuerst ein Port-Forwarding für Hubble erstellen und dann die Hubble CLI verwenden, um den Hubble-Status zu überprüfen und die [API](/leistungen/api-entwicklung/){.text-bs-blue .hover:underline .hover:decoration-bs-blue .hover:decoration-solid} abzufragen. Dies geschieht wie folgt:
:::

:::BlogCode{.mb-5}
```docker
$ cilium hubble port-forward&
$ hubble status
$ hubble observe
Apr  4 07:14:29.119: 10.244.0.166:37906 (host) -> cilium-test/echo-same-node-9f8754876-ns7tx:8181 (ID:2357) to-endpoint FORWARDED (TCP Flags: ACK)
Apr  4 07:14:29.120: 10.244.0.166:41980 (host) <- cilium-test/echo-same-node-9f8754876-ns7tx:8080 (ID:2357) to-stack FORWARDED (TCP Flags: ACK, PSH)
Apr  4 07:14:29.121: 10.244.0.166:41980 (host) -> cilium-test/echo-same-node-9f8754876-ns7tx:8080 (ID:2357) to-endpoint FORWARDED (TCP Flags: ACK, FIN)
Apr  4 07:14:29.121: 10.244.0.166:41980 (host) <- cilium-test/echo-same-node-9f8754876-ns7tx:8080 (ID:2357) to-stack FORWARDED (TCP Flags: ACK, FIN)
Apr  4 07:14:29.121: 10.244.0.166:41980 (host) -> cilium-test/echo-same-node-9f8754876-ns7tx:8080 (ID:2357) to-endpoint FORWARDED (TCP Flags: ACK)
Apr  4 07:14:30.119: 10.244.0.166:41986 (host) -> cilium-test/echo-same-node-9f8754876-ns7tx:8080 (ID:2357) to-endpoint FORWARDED (TCP Flags: SYN)
Apr  4 07:14:30.119: 10.244.0.166:41986 (host) <- cilium-test/echo-same-node-9f8754876-ns7tx:8080 (ID:2357) to-stack FORWARDED (TCP Flags: SYN, ACK)
Apr  4 07:14:30.119: 10.244.0.166:41986 (host) -> cilium-test/echo-same-node-9f8754876-ns7tx:8080 (ID:2357) to-endpoint FORWARDED (TCP Flags: ACK)
Apr  4 07:14:30.119: 10.244.0.166:37912 (host) -> cilium-test/echo-same-node-9f8754876-ns7tx:8181 (ID:2357) to-endpoint FORWARDED (TCP Flags: SYN)
Apr  4 07:14:30.119: 10.244.0.166:37912 (host) <- cilium-test/echo-same-node-9f8754876-ns7tx:8181 (ID:2357) to-stack FORWARDED (TCP Flags: SYN, ACK)
Apr  4 07:14:30.119: 10.244.0.166:37912 (host) -> cilium-test/echo-same-node-9f8754876-ns7tx:8181 (ID:2357) to-endpoint FORWARDED (TCP Flags: ACK)
Apr  4 07:14:30.119: 10.244.0.166:37912 (host) -> cilium-test/echo-same-node-9f8754876-ns7tx:8181 (ID:2357) to-endpoint FORWARDED (TCP Flags: ACK, PSH)
Apr  4 07:14:30.119: 10.244.0.166:41986 (host) -> cilium-test/echo-same-node-9f8754876-ns7tx:8080 (ID:2357) to-endpoint FORWARDED (TCP Flags: ACK, PSH)
Apr  4 07:14:30.120: 10.244.0.166:37912 (host) <- cilium-test/echo-same-node-9f8754876-ns7tx:8181 (ID:2357) to-stack FORWARDED (TCP Flags: ACK, PSH)
Apr  4 07:14:30.120: 10.244.0.166:37912 (host) <- cilium-test/echo-same-node-9f8754876-ns7tx:8181 (ID:2357) to-stack FORWARDED (TCP Flags: ACK, FIN)
Apr  4 07:14:30.120: 10.244.0.166:37912 (host) -> cilium-test/echo-same-node-9f8754876-ns7tx:8181 (ID:2357) to-endpoint FORWARDED (TCP Flags: ACK, FIN)
Apr  4 07:14:30.120: 10.244.0.166:37912 (host) -> cilium-test/echo-same-node-9f8754876-ns7tx:8181 (ID:2357) to-endpoint FORWARDED (TCP Flags: ACK)
Apr  4 07:14:30.121: 10.244.0.166:41986 (host) <- cilium-test/echo-same-node-9f8754876-ns7tx:8080 (ID:2357) to-stack FORWARDED (TCP Flags: ACK, PSH)
Apr  4 07:14:30.121: 10.244.0.166:41986 (host) -> cilium-test/echo-same-node-9f8754876-ns7tx:8080 (ID:2357) to-endpoint FORWARDED (TCP Flags: ACK, FIN)
Apr  4 07:14:30.121: 10.244.0.166:41986 (host) <- cilium-test/echo-same-node-9f8754876-ns7tx:8080 (ID:2357) to-stack FORWARDED (TCP Flags: ACK, FIN)
```
:::

:::GlobalParagraph
Wenn du grafische Benutzeroberflächen bevorzugst, kannst du auch <a href="https://docs.cilium.io/en/stable/gettingstarted/hubble_setup/#install-the-hubble-client" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">Hubble UI</a> in deinem Cluster bereitstellen.  Hubble UI bietet dir Zugriff auf eine grafische Servicemap, die zur visuellen Überprüfung des Datenverkehrs im Cluster verwendet werden kann. Für unser Beispiel-Setup sieht Hubble UI folgendermaßen aus:
:::

![hubble_ui](/img/blogs/hubble-ui.jpg){.object-cover .max-w-full .mb-6}

:::GlobalTitle{:size="lg" .mb-5}
Fazit
:::
:::GlobalParagraph
Zusammenfassend bietet Cilium eine robuste Netzwerklösung für Kubernetes, die es Benutzern ermöglicht, präzise Netzwerkrichtlinien durchzusetzen und Netzwerkaktivitäten in Echtzeit zu verfolgen. Durch sein cloud-natives Design und seine auf eBPF basierende Architektur ist Cilium die erste Wahl für Benutzer, die erweiterte Netzwerkfunktionen in ihren Kubernetes-Setups suchen.
:::

:::GlobalTitle{:size="lg" .mb-5}
Weitere Schritte
:::
:::GlobalParagraph
Cilium bietet noch viele weitere Funktionen, die wir in diesem Beitrag nicht behandeln können. Hier ist eine kurze Zusammenfassung dessen, wozu Cilium noch fähig ist.
:::

:::GlobalTitle{:size="md" .mb-5}
Cluster Mesh
:::
:::GlobalParagraph
Mit <a href="https://docs.cilium.io/en/stable/network/clustermesh/" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">Cluster Mesh</a> können wir Netzwerkpfade über mehrere Kubernetes-Cluster hinweg erweitern, sodass Endpunkte in verbundenen Clustern miteinander kommunizieren können, während gleichzeitig Netzwerkrichtlinien durchgesetzt werden.
:::

:::GlobalTitle{:size="md" .mb-5}
Service Mesh
:::
:::GlobalParagraph
Cilium <a href="https://docs.cilium.io/en/stable/network/servicemesh/" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">Service Mesh</a> zielt darauf ab, traditionelle Service-Mesh-Lösungen wie Linkerd zu ersetzen. Es gibt jedoch einen entscheidenden Unterschied: Während Linkerd auf Sidecar-Proxies zur Verwaltung des Datenverkehrs zwischen Pods angewiesen ist, verwendet Cilium Service Mesh auf der Knotenebene eBPF, um den Datenverkehr zu verwalten. Dies verbessert die Leistung, reduziert die Last und entkoppelt den Service Mesh weiter von den tatsächlichen Workloads.
:::

:::BlogRelatedPosts{:url='["/blog/docker-desktop-und-kubernetes", "/blog/minikube-vs-k3d-vs-kind-vs-getdeck-beiboot", "/blog/richtige-api-technologie-auswaehlen", "/blog/kubernetes-logging-mit-promtail-loki-und-grafana", "/blog/function-as-a-service-faas-vs-kubernetes"]'}

:::
