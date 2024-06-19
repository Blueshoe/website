---
head:
  title: 'Kubernetes Logging mit Promtail, Loki und Grafana'
  meta:
    - property: 'og:locale'
      content: 'de_DE'
    - name: 'description'
      content: 'Sammle Logs aus deinem Kubernetes-Cluster mit Promtail, Loki und Grafana. Installation, Konfiguration und Nutzung. Jetzt entdecken!'
    - property: 'og:type'
      content: 'website'
    - property: 'og:title'
      content: 'Kubernetes Logging mit Promtail, Loki und Grafana'
    - property: 'og:description'
      content: 'Sammle Logs aus deinem Kubernetes-Cluster mit Promtail, Loki und Grafana. Installation, Konfiguration und Nutzung. Jetzt entdecken!'
    - property: 'og:image'
      content: 'https://www.blueshoe.io/img/blogs/kubernetes-logging-with-promtail-loki-and-grafana.jpg'
    - property: 'og:image:secure_url'
      content: 'https://www.blueshoe.io/img/blogs/kubernetes-logging-with-promtail-loki-and-grafana.jpg'
    - name: 'twitter:card'
      content: 'summary'
    - name: 'twitter:title'
      content: 'Kubernetes Logging mit Promtail, Loki und Grafana'
    - name: 'twitter:description'
      content: 'Sammle Logs aus deinem Kubernetes-Cluster mit Promtail, Loki und Grafana. Installation, Konfiguration und Nutzung. Jetzt entdecken!'
    - name: 'twitter:image'
      content: 'https://www.blueshoe.io/img/blogs/kubernetes-logging-with-promtail-loki-and-grafana.jpg'
src: '/blog/kubernetes-logging-mit-promtail-loki-und-grafana'
img: '/img/blogs/kubernetes-logging-with-promtail-loki-and-grafana.jpg'
alt: 'Kubernetes Logging mit Promtail, Loki und Grafana'
preTitle: 'Logs aus dem gesamten Cluster sammeln'
title: "Kubernetes Logging mit Promtail, Loki und Grafana"
description: 'Sammle Logs aus deinem Kubernetes-Cluster mit Promtail, Loki und Grafana. Installation, Konfiguration und Nutzung. Jetzt entdecken!'
date: '24.08.2022'
autor:
  - Tobias Frölich
technologie:
  - Kubernetes
  - Grafana
  - Loki
  - Promtail
productUpdates: []
sonstiges:
  - Betrieb
---
Das Lesen von Protokollen aus mehreren Kubernetes-Pods mit kubectl kann schnell umständlich werden. Was wäre, wenn es eine Möglichkeit gäbe, Protokolle aus dem gesamten Cluster an einem einzigen Ort zu sammeln und sie einfach zu filtern, abzufragen und zu analysieren? Hier kommen Promtail, Loki und Grafana ins Spiel.
<!--more-->

![my image](/img/blogs/kubernetes-logging-with-promtail-loki-and-grafana.jpg){.object-cover .max-w-full .mb-5}

:::BlogNavigationCard{:title="Table of contents"}

:::

:::globalTitle{:size="lg" .mb-5}
Einführung (Was ist das, warum brauchen wir es)
:::
:::globalParagraph
Standardmäßig halten Logs in Kubernetes nur während der Lebensdauer eines Pods. Um Logs länger als die Lebensdauer eines einzelnen Pods aufzubewahren, verwenden wir Log-Aggregation. Das bedeutet, dass wir Logs aus verschiedenen Quellen an einem einzigen Ort speichern, um sie auch nach einem Fehler leicht analysieren zu können. Während der ELK-Stack (kurz für Elasticsearch, Logstash, Kibana) eine beliebte Lösung für die Log-Aggregation ist, haben wir uns für etwas leichtgewichtigeres entschieden: Loki.
:::
:::globalParagraph
Entwickelt von Grafana Labs, ist "Loki ein horizontal skalierbares, hochverfügbares, mandantenfähiges Log-Aggregationssystem, das von Prometheus inspiriert ist". Loki ermöglicht eine einfache Sammlung von Logs aus verschiedenen Quellen mit unterschiedlichen Formaten, skalierbare Persistenz über Objektspeicher und einige weitere coole Funktionen, die wir später im Detail erklären werden. Werfen wir jetzt einen Blick auf das von uns erstellte Setup.
:::

:::globalTitle{:size="lg" .mb-5}
Deck
:::
:::globalParagraph
Wenn du nur einen schnellen Blick darauf werfen möchtest, kannst du Deck verwenden, um diesen Stack mit einem Befehl auf deinem Computer einzurichten. Nach der <a href="https://getdeck.dev/docs/deck/installation" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">Installation von Deck</a> kannst du Folgendes ausführen:
:::
:::BlogCode{.mb-5}
```docker
$ deck get https://raw.githubusercontent.com/Getdeck/wharf/main/loki/deck.yaml
```
:::
:::globalParagraph
Folge den Anweisungen, die nach Abschluss des Installationsprozesses angezeigt werden, um sich bei Grafana anzumelden und mit der Erkundung zu beginnen.
:::

:::globalTitle{:size="lg" .mb-5}
Setup
:::
:::globalParagraph
In diesem Artikel konzentrieren wir uns auf die Helm-Installation. Grafana Labs bietet eine Reihe von <a href="https://grafana.com/docs/loki/latest/installation/?pg=get&plcmt=selfmanaged-box2-cta1" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">anderen Installationsmethoden</a> an.
:::
:::globalParagraph
Im <a href="https://github.com/grafana/helm-charts" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">Helm-Chart-Repository von Grafana</a> findest du 5 Charts, die mit Loki zusammenhängen. *Loki-canary* ermöglicht dir die Installation von Canary-Builds von Loki in deinem Cluster. *Loki-distributed* installiert die relevanten Komponenten als [Microservices](/leistungen/microservice-architektur-beratung/){.text-bs-blue .hover:underline .hover:decoration-bs-blue .hover:decoration-solid} und bietet dir die üblichen Vorteile von Microservices wie Skalierbarkeit, Ausfallsicherheit usw., während du sie unabhängig voneinander konfigurieren kannst. *Loki-simple-scalable* ist ähnlich, jedoch sind einige der Komponenten immer aktiviert, was einige der Konfigurationsmöglichkeiten einschränkt. Das Chart mit dem Namen *Loki* wird einen einzelnen StatefulSet in deinem Cluster bereitstellen, der alles enthält, was du zum Ausführen von Loki benötigst. Das letzte in der Gruppe ist *loki-stack*, das zusätzlich zum Loki-Chart dasselbe StatefulSet bereitstellt, auch Promtail, Grafana und einige andere. Für unseren Anwendungsfall haben wir uns für das Loki-Chart entschieden. Neben Loki selbst werden in unserem Cluster auch Promtail und Grafana ausgeführt. Im folgenden Abschnitt zeigen wir dir, wie du diesen Log-Aggregations-Stack in deinem Cluster installieren kannst!
:::

<!--- Störer -->
::GlobalPartial{content=catcher-1}
::

:::globalTitle{:size="lg" .mb-5}
Voraussetzungen
:::
:::globalParagraph
Um mitzumachen, benötigst du einen Kubernetes-Cluster, auf den du über kubectl zugreifen kannst, und Helm muss auf deinem Computer eingerichtet sein.
:::
:::globalParagraph
Zunächst müssen wir das Chart-Repository von Grafana zu unserer lokalen Helm-Installation hinzufügen und die neuesten Charts abrufen, wie folgt:
:::
:::BlogCode{.mb-5}
```docker
$ helm repo add grafana https://grafana.github.io/helm-charts
$ helm repo update
```
:::

:::globalParagraph
Sobald das erledigt ist, können wir mit dem eigentlichen Installationsprozess beginnen.
:::

:::globalTitle{:size="lg" .mb-5}
Loki Installation
:::
:::globalParagraph
Lass uns damit beginnen, Loki in unserem Cluster zum Laufen zu bringen. Um deine Installation zu konfigurieren, wirf einen Blick auf die Werte, die das Loki-Chart über den Befehl 'helm show values' akzeptiert, und speichere diese in einer Datei.
:::
:::BlogCode{.mb-5}
```docker
$ helm show values grafana/loki > loki-values.yaml
```
:::
:::globalParagraph
Wir werden die Einstellungen nicht im Detail besprechen, da die meisten Werte auf ihren Standardwerten belassen werden können. Du solltest jedoch einen Blick auf den persistence-Schlüssel werfen, um Loki so zu konfigurieren, dass deine Protokolle tatsächlich in einem PersistentVolume gespeichert werden.
:::
:::BlogCode{.mb-5}
```json
persistence:
    enabled: true
    accessModes:
    - ReadWriteOnce
    size: 10Gi
    annotations: {}
```
:::
:::globalParagraph
Sobald du die Werte an deine Vorlieben angepasst hast, installiere Loki in deinem Cluster mit dem folgenden Befehl:
:::
:::BlogCode{.mb-5}
```docker
$ helm upgrade --install loki grafana/loki -n loki -f loki-values.yaml
```
:::

:::globalParagraph
Nachdem das erledigt ist, kannst du überprüfen, ob alles funktioniert hat, indem du kubectl verwendest:
:::

:::BlogCode{.mb-5}
```docker
$ kubectl get pods -n loki
NAME                            READY   STATUS    RESTARTS   AGE
loki-0                          1/1     Running   0          1h
```
:::
:::globalParagraph
Wenn die Ausgabe ähnlich aussieht, herzlichen Glückwunsch! Das ist einer von drei Komponenten, die erfolgreich installiert wurden.

:::globalTitle{:size="lg" .mb-5}
Promtail Installation
:::
:::globalParagraph
Als nächstes schauen wir uns Promtail an. Promtail hat 3 Hauptfunktionen, die für unsere Einrichtung wichtig sind:
:::
:::GlobalBlock{.ol-decimal .mb-5}
1. Es erkennt Ziele (Pods, die in unserem Cluster ausgeführt werden)
2. Es beschriftet Logstreams (hängt Metadaten wie Pod/Dateinamen usw. an, um sie später einfacher identifizieren zu können)
3. Es versendet sie an unsere Loki-Instanz
:::

:::globalParagraph
Um es zu installieren, benötigen wir zuerst eine Werte-Datei, genau wie wir es für Loki getan haben:
:::
:::BlogCode{.mb-5}
```docker
$ helm show values grafana/promtail > promtail-values.yaml
```
:::
:::globalParagraph
Wie bei Loki können die meisten Werte auf ihren Standardwerten belassen werden, um Promtail zum Laufen zu bringen. Wir müssen jedoch Promtail mitteilen, wohin es die gesammelten Protokolle senden soll, indem wir Folgendes tun:
:::
:::BlogCode{.mb-5}
```docker
$ kubectl get svc -n loki
NAME            TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)    AGE
loki            ClusterIP   10.101.163.181   <none>        3100/TCP   1h
```
:::
:::globalParagraph
Wir fragen kubectl nach den Diensten im Loki-Namespace und es wird uns mitgeteilt, dass es einen Dienst namens Loki gibt, der den Port 3100 freigibt. Um Promtail dazu zu bringen, unsere Protokolle an das richtige Ziel zu senden, zeigen wir es über den 'config'-Schlüssel in unserer Werte-Datei auf den Loki-Dienst.
:::
:::BlogCode{.mb-5}
```json
config:
 logLevel: info
 serverPort: 3101
 lokiAddress: http://loki:3100/loki/api/v1/push
```
:::
:::globalParagraph
Unter 'lokiAddress' geben wir an, dass Promtail Protokolle an '[http://loki:3100/loki/api/v1/push](http://loki:3100/loki/api/v1/push){.bs-link-blue :target="_blank"}' senden soll. Beachtem dass du, wenn Loki nicht im selben Namespace wie Promtail läuft, die vollständige Service-Adressnotation verwenden musst, z. B. '<service-name>.<namespace>.svc.cluster.local:<service-port>'. Promtail läuft als DaemonSet und hat die folgenden Tolerations, um auf Master- und Worker-Knoten ausgeführt zu werden.
:::
:::BlogCode{.mb-5}
```json
tolerations:
    - key: node-role.kubernetes.io/master
    operator: Exists
    effect: NoSchedule
    - key: node-role.kubernetes.io/control-plane
    operator: Exists
    effect: NoSchedule
```
:::
:::globalParagraph
Wenn du nicht möchtest, dass Promtail auf deinen Master-/Control-Plane-Knoten ausgeführt wird, kannst du dies hier ändern.
:::
:::globalParagraph
Jetzt, da wir die wichtigsten Werte festgelegt haben, lass uns das installieren!
:::

:::BlogCode{.mb-5}
```
$ helm upgrade --install promtail grafana/promtail --namespace=loki -f promtail-values.yaml
```
:::
:::globalParagraph
Überprüfe, ob alles wie erwartet funktioniert:
:::
:::BlogCode{.mb-5}
```
$ kubectl get ds -n loki
NAME       DESIRED   CURRENT   READY   UP-TO-DATE   AVAILABLE   NODE SELECTOR   AGE
promtail   8         8         8       8            8           <none>          1h
```
:::
:::globalParagraph
Du kannst auch mit dem Flag '-o wide' einen Blick auf die Pods werfen, um zu sehen, auf welchem Knoten sie ausgeführt werden:

:::
:::BlogCode{.mb-5}
```
$ kubectl get pods -n loki -o wide
NAME                            READY   STATUS    RESTARTS   AGE    IP         NODE                     NOMINATED NODE   READINESS GATES
promtail-2j9dj                  1/1     Running   0          1h    1.1.1.1     control-plane-3          <none>           <none>
promtail-5wjxl                  1/1     Running   0          1h    1.1.1.1     control-plane-1          <none>           <none>
promtail-9nvps                  1/1     Running   0          1h    1.1.1.1     worker-1                 <none>           <none>
promtail-brgj2                  1/1     Running   0          1h    1.1.1.1     worker-2                 <none>           <none>
promtail-cfnff                  1/1     Running   0          1h    1.1.1.1     control-plane-2          <none>           <none>
promtail-gtt6m                  1/1     Running   0          1h    1.1.1.1     worker-3                 <none>           <none>
promtail-hnh4z                  1/1     Running   0          1h    1.1.1.1     worker-4                 <none>           <none>
promtail-r4xsz                  1/1     Running   0          1h    1.1.1.1     worker-5                 <none>           <none>
```
:::

:::globalTitle{:size="lg" .mb-5}
Grafana Installation
:::
:::globalParagraph
Zu guter Letzt, lass uns eine Instanz von Grafana in unserem Cluster starten.
:::
:::globalParagraph
Die folgenden Werte ermöglichen die Persistenz. Wenn du möchtest, dass deine Grafana-Instanz E-Mails senden kann, kannst du SMTP wie unten gezeigt konfigurieren. Füge einfach deinen SMTP-Host und 'from_address' hinzu, um ein Secret mit deinen Anmeldeinformationen zu erstellen.
:::

:::BlogCode{.mb-5}
```json
persistence:
 type: pvc
 enabled: true
 # storageClassName: default
 accessModes:
   - ReadWriteOnce
 size: 10Gi
grafana.ini:
 smtp:
   enabled: true
   host: smtp.smtpserver.io:465
   from_address: grafana@collectallthelogs.io
   skip_verify: true
smtp:
 # `existingSecret` is a reference to an existing secret containing the smtp configuration
 # for Grafana.
 existingSecret: "grafana-smtp"
 userKey: "user"
 passwordKey: "password"
```
:::
:::globalParagraph
Sobald du deine Werte konfiguriert hast, kannst du Grafana wie folgt in deinem Cluster installieren:
:::

:::BlogCode{.mb-5}
```json
helm upgrade --install loki-grafana grafana/grafana --namespace=loki -f grafana-values.yaml
```
:::
:::globalParagraph
Überprüfe, ob alles reibungslos verlaufen ist:
:::
:::BlogCode{.mb-5}
```json
$ kubectl get pods -n loki
NAME                            READY   STATUS    RESTARTS   AGE
loki-grafana-64b4b79494-8bt7c   1/1     Running   0          1h
```
:::
:::globalParagraph
Alle drei Komponenten sind einsatzbereit, super! Jetzt, da alles eingerichtet ist, schauen wir uns an, wie wir dies tatsächlich nutzen können.
:::

:::GlobalPodcastSection{:videoId="tyvE9VlSWkE" :videoPosition="left" .mb-6}
::::GlobalPreTitle{:color="text-bs-green" .mb-3}
UNSER KUBERNETES-PODCAST
::::
::::GlobalTitle{:tag="h3" .mb-6}
Werkzeuge für das Handwerk: Die Navigation im Kubernetes-Ökosystem
::::
::::globalParagraph{:font-size="lg" .mb-4}
Michael und Robert sprechen ausführlich über die Feinheiten der lokalen Kubernetes-Entwicklung und geben auch einige echte Codierungsbeispiele.
::::
::::globalParagraph{:font-size="lg" }
Weitere Ausgaben unseres Podcasts findest du hier:
::::
::::GlobalButton{:url="/kubernetes-podcast/" :label="Mehr anzeigen" :color="green"}
::::
:::

:::globalTitle{:size="lg" .mb-5}
Verwendung
:::
:::globalParagraph
Verbinde deine neu erstellte Loki-Instanz einfach mit Grafana. Alles, was du tun musst, ist eine Datenquelle in Grafana zu erstellen. Unter Konfiguration → Datenquellen klicke auf 'Datenquelle hinzufügen' und wähle Loki aus der Liste aus. Dir wird dieses Einstellungsfenster angezeigt, in dem du nur die URL deiner Loki-Instanz konfigurieren musst, um deine Protokolle mit Grafana zu analysieren. Da Grafana im selben Namespace wie Loki läuft, reicht es aus, '[http://loki:3001](http://loki:3001){.bs-link-blue :target="_blank"}' anzugeben.
:::
![Verwendung](/img/blogs/kubernetes-logging-with-promtail-loki-and-grafana-1.jpg){.object-cover .max-w-full .mb-5}
:::globalParagraph
Wenn du fertig bist, klicke auf 'Speichern & Testen' und voilà, du bist bereit, Abfragen gegen Loki auszuführen.
:::

:::globalTitle{:size="lg" .mb-5}
LogQL
:::
:::globalParagraph
‘LogQL ist die von Grafana Loki inspirierte Abfragesprache, ähnlich wie PromQL. Abfragen fungieren wie ein verteilter grep, um Log-Quellen zu aggregieren. LogQL verwendet Labels und Operatoren zur Filterung.’
:::
:::globalParagraph
Mit LogQL kannst du einfach Abfragen gegen deine Protokolle ausführen. Du kannst entweder Protokollabfragen ausführen, um den Inhalt tatsächlicher Protokollzeilen zu erhalten, oder Metrikabfragen verwenden, um Werte basierend auf den Ergebnissen zu berechnen.
:::
:::globalParagraph
LogQL ist <a href="https://grafana.com/docs/loki/latest/logql/" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">gut dokumentiert</a>, daher gehen wir nicht auf jedes Feature im Detail ein, sondern geben dir stattdessen einige Abfragen, die du sofort gegen deine Protokolle ausführen kannst, um loszulegen. Gehe zum Explore-Panel in Grafana (${grafanaUrl}/explore), wähle deine Loki-Datenquelle im Dropdown-Menü aus und schau dir an, was Loki bisher für dich gesammelt hat.
:::

:::globalTitle{:size="md" .mb-5}
Simple Log Query
:::
:::globalParagraph
Wenn du nur die Protokolle eines einzelnen Pods haben möchtest, ist es so einfach, eine Abfrage wie diese auszuführen:
:::
:::BlogCode{.mb-5}
```
{pod="loki-0"}
```
:::
:::globalParagraph
Grafana wählt automatisch das richtige Panel für dich aus und zeigt an, was dein Loki Pod protokolliert.
:::

:::globalTitle{:size="md" .mb-5}
Fehler in einem Namespace
:::
:::globalParagraph
Diese Abfrage filtert Protokolle aus einem bestimmten Namespace, die das Wort "Fehler" enthalten. Sie zählt sie über den im Dashboard ausgewählten Bereich und gibt die Summe zurück, um dir einen einfachen Überblick darüber zu geben, was in deinem Cluster passiert.
:::
:::BlogCode{.mb-5}
```
sum(count_over_time({namespace="loki"} |= "error" [$__range]))
```
:::

:::globalTitle{:size="md" .mb-5}
Durchschnittliche Antwortzeit in einem Namespace, nach Pfad und Anwendung
:::
:::globalParagraph
Diese Abfrage ist so komplex wie es in diesem Artikel wird. Sie sammelt Protokolle aus einem Namespace und wendet dann mehrere nützliche Funktionen von LogQL an, wie zum Beispiel Musterabgleich, reguläre Ausdrücke, Zeilenformatierung und Filterung. Am Ende erhältst du die durchschnittliche Antwortzeit von Anwendungen, die im angegebenen Namespace innerhalb des ausgewählten Intervalls ausgeführt werden. Sie filtern effektiv die Protokollzeilen heraus, die von Kubernetes Liveness- und Readiness-Probes generiert werden, gruppiert nach App-Label und Pfad. Hinweis: Diese genaue Abfrage funktioniert für das Protokollformat von Django Hurricane, aber du kannst sie anpassen, indem du das Muster an dein Protokollformat anpasst.
:::
:::BlogCode{.mb-5}
```
avg_over_time({namespace="application"} | pattern "<date> <time> <access> <level>     <code> <method> <path> <ip> <latency>" | regexp "(?P<latencyDecimal>[0-9]+\\.[0-9]+ms)" | line_format "{{.latencyDecimal}}" | regexp "(?P<latencyClean>[0-9]+\\.[0-9])" | unwrap latencyClean | __error__="" | path!="/alive" | path!="/ready" [$__interval]) by (path, app)
```
:::

:::globalTitle{:size="lg" .mb-5}
Sonstige Merkmale/Weitere Lektüre/Heiligtümer
:::
:::globalParagraph
Wenn du deine Logs nicht in deinem Cluster speichern möchtest, kannst du die gesammelten Daten an S3-kompatible Speicherlösungen wie Amazon S3 oder MinIO senden. Der Prozess der Log-Analyse/-Ansicht bleibt derselbe.
:::
:::globalParagraph
Die Dateispeicherung funktioniert nicht, wenn du das verteilte Chart verwendest, da mehrere Pods Lese-/Schreibvorgänge auf demselben PV durchführen müssten. Dies ist im <a href="https://github.com/kubernetes-sigs/kind" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">Chart-Repository</a> dokumentiert, wird jedoch leider nicht in der offiziellen Dokumentation von Loki erwähnt.
:::
:::globalParagraph
<a href="https://grafana.com/docs/loki/latest/tools/logcli/" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">LogCLI</a> ist das CLI-Tool von Loki, mit dem du deine Protokolle bequem von der Kommandozeile aus durchsuchen kannst. Hierfür musst du deine Loki-Instanz über HTTP freigeben oder Port-Forwarding von deinem Cluster zu deinem Computer verwenden.
:::



:::BlogRelatedPosts{:url='["/blog/richtige-api-technologie-auswaehlen", "/blog/function-as-a-service-faas-vs-kubernetes", "/blog/kubernetes-development", "/blog/minikube-vs-k3d-vs-kind-vs-getdeck-beiboot", "/blog/evolution-der-applikationsentwicklung-zu-einem-cloud-native-ansatz"]'}

:::
