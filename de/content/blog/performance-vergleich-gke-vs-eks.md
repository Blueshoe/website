---
head:
  title: 'Leistungsvergleich: GKE vs. EKS'
  meta:
    - property: 'og:locale'
      content: 'de_DE'
    - name: 'description'
      content: '/blog/migration-nach-cloud-native/'
    - property: 'og:type'
      content: 'website'
    - property: 'og:title'
      content: 'Leistungsvergleich: GKE vs. EKS'
    - property: 'og:description'
      content: 'Vergleiche die Performance von GKE und EKS. Erfahre, welche Kubernetes-Plattform bei CPU, RAM und Dateisystem besser abschneidet. Jetzt mehr erfahren!'
    - property: 'og:image'
      content: 'https://www.blueshoe.io/img/blogs/performance-comparison-gke-vs-eks.jpg'
    - property: 'og:image:secure_url'
      content: 'https://www.blueshoe.io/img/blogs/performance-comparison-gke-vs-eks.jpg'
    - name: 'twitter:card'
      content: 'summary'
    - name: 'twitter:title'
      content: 'Leistungsvergleich: GKE vs. EKS'
    - name: 'twitter:description'
      content: 'Vergleiche die Performance von GKE und EKS. Erfahre, welche Kubernetes-Plattform bei CPU, RAM und Dateisystem besser abschneidet. Jetzt mehr erfahren!'
    - name: 'twitter:image'
      content: 'https://www.blueshoe.io/img/blogs/performance-comparison-gke-vs-eks.jpg'
src: '/blog/performance-vergleich-gke-vs-eks'
img: '/img/blogs/performance-comparison-gke-vs-eks.jpg'
alt: 'Leistungsvergleich: GKE vs. EKS'
preTitle: 'Container-Runtime-Leistung'
title: "Leistungsvergleich: GKE vs. EKS"
description: 'Vergleiche die Performance von GKE und EKS. Erfahre, welche Kubernetes-Plattform bei CPU, RAM und Dateisystem besser abschneidet. Jetzt mehr erfahren!'
date: '09.02.2023'
author:
  - Michael Schilonka
technology:
  - Kubernetes
productUpdates: []
topic:
  - Operation
---
Die solide Leistung von verwalteten Kubernetes-Plattformen wird im Allgemeinen als selbstverständlich angesehen und wird kaum jemals in Frage gestellt. Allerdings könnte es Unterschiede in der Performance von Containern auf verschiedenen beliebten verwalteten Kubernetes-Plattformen geben. Ich wollte einen genaueren Blick darauf werfen und habe die beiden beliebtesten Kubernetes-Dienste ausgewählt, die wir bei Blueshoe für unsere Kunden nutzen: Amazon Elastic Kubernetes Service (EKS) und Google Kubernetes Engine (GKE).
<!--more-->

![Leistungsvergleich: GKE vs. EKS](/img/blogs/performance-comparison-gke-vs-eks.jpg){.object-cover .max-w-full .mb-5}

:::BlogNavigationCard{:title="Inhaltsverzeichnis"}
:::

:::globalTitle{:size="lg" .mb-5}
EKS vs. GKE – und warum ist das wichtig?
:::
:::globalParagraph
Laut <a href="https://www.statista.com/statistics/1230308/container-technology-orchestrator-use/" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">dieser Statistik</a> von Februar 2020 haben 540 Befragte auf die Frage "Welche der folgenden Container-Orchestratoren verwenden Sie?" geantwortet:
:::
:::GlobalBlock{.ul-disk .mb-5}
- 37% aller Befragten verwenden EKS
- 21% der Befragten verwenden GKE
:::
:::globalParagraph
Bitte beachte, dass die Auswahl mehrerer Antworten möglich war, daher sind die Gruppen nicht exklusiv. Die Zahlen haben sich wahrscheinlich seitdem etwas geändert, aber es ist offensichtlich, dass diese beiden sehr beliebte Optionen in der Welt des verwalteten Kubernetes sind. Die Zahlen entsprechen auch der Verteilung der von Blueshoe verwalteten Kubernetes-Plattformen bis heute.
:::
:::globalParagraph
Natürlich sollten wir die Analyse der Container-Runtime-Leistung mit diesen beiden Lösungen beginnen.
:::

:::globalTitle{:size="lg" .mb-5}
Aber warum?
:::
:::globalParagraph
Einerseits ist es einfach interessant festzustellen, wie diese beiden großen Player im Vergleich zueinander abschneiden. Auf der einen Seite hast du Amazon Web Services - den Riesen auf dem Markt der Hyperscaler. Und auf der anderen Seite gibt es Google - den Technologieriesen und Pionier von [Kubernetes](/blog/kubernetes-development){.text-bs-blue .hover:underline .hover:decoration-bs-blue .hover:decoration-solid}
.
:::
:::globalParagraph
Aber noch wichtiger ist, dass es immer auf die Kosten ankommt. Wenn du bei vergleichbarem Preis 10% mehr Leistung bekommen kannst, möchten einige vielleicht die Portabilität von Kubernetes nutzen. Dabei geht es nicht um das Ökosystem oder potenziell angehängte Dienste (wie verwaltete Datenbanken oder Speicher), sondern um die reine Container-Runtime-Leistung. Ich wollte die Frage beantworten: "Mit welcher Geschwindigkeit läuft mein Code in einem ganz normalen Kubernetes-Cluster?". Und das ist, was ich gefunden habe:
:::

:::globalTitle{:size="lg" .mb-5}
Das Benchmark-Setup
:::
:::globalParagraph
Auf EKS habe ich einen Kubernetes-Cluster mit folgenden Spezifikationen erstellt:
:::
:::GlobalBlock{.ul-disk .mb-5}
- Instanztyp: t3.xlarge
- Region: eu-west-1
- K8s-Version: 1.23
- Betriebssystem: Amazon Linux 2
- Container-Runtime: Docker
- Node-VM-Preis: 0,1824 USD pro Stunde
:::
:::globalParagraph
Um diese Parameter so genau wie möglich anzupassen, habe ich einen Google Kubernetes Engine-Cluster mit folgenden Spezifikationen erstellt:
:::
:::GlobalBlock{.ul-disk .mb-5}
- Instanztyp: e2-standard-4
- Region: europe-north1-a
- K8s-Version: 1.23.14-gke.401
- Betriebssystem: Container-Optimized OS mit containerd (cos_containerd)
- Container-Runtime: containerd
- Node-VM-Preis: 0,147552 USD pro Stunde
:::
:::globalParagraph
Beide Maschinentypen umfassen eine 4 vCPU-Maschine mit 16 GB RAM, basierend auf einem Intel-Prozessor. Der Kubernetes-Knoten, auf dem der Test ausgeführt wurde, war ausschließlich dem Test-Pod gewidmet und nur mit anderen "Standard"-Pods dieses verwalteten Kubernetes-Angebots gefüllt. Ich habe keine speziellen Konfigurationen verwendet, sondern einfach einen Cluster mit den voreingestellten Werten bestellt.
:::

:::globalTitle{:size="lg" .mb-5}
Wie man die Container-Runtime benchmarkt
:::
:::globalParagraph
Eines der Hauptziele bei der Durchführung einer Leistungsanalyse besteht darin, eine sehr einfache Reproduktion zu ermöglichen. Glücklicherweise sprechen wir über Kubernetes, was bedeutet, dass es nur eine Frage des Schreibens von Kubernetes-Konfigurationen und deren Anwendung auf den Cluster ist. Dennoch gibt es einige wichtige Dinge zu beachten:
:::
:::GlobalBlock{.ul-disk .mb-5}
- Wähle vergleichbare Kubernetes-Knoteninstanztypen, um den Vergleich so fair wie möglich zu gestalten
- Deploye die Benchmark-Workload nicht neben anderen Containern
- Verwende die gleiche Kubernetes-Version
- Notiere wichtige Unterschiede zwischen den Teilnehmern
:::
:::globalParagraph
Leider war es nicht gerade einfach, ein gutes Benchmark-Tool zu finden, das den Anforderungen entspricht, um die folgenden Teile zu benchmarken:
:::
:::GlobalBlock{.ul-disk .mb-5}
- die CPU
- den Arbeitsspeicher (RAM)
- das Container-Dateisystem (nicht die angehängten Volumes, es geht um das native Dateisystem)
:::

:::globalParagraph
Ein recht häufig verwendetes Tool mit nur wenigen bekannten Schwächen ist <a href="https://github.com/akopytov/sysbench" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">sysbench</a>. Mit etwa 5.000 Sternen auf GitHub und einer recht großen und aktiven Community könnte es für meine Anforderungen geeignet sein. Ein großer Pluspunkt ist die Erweiterbarkeit und die vielen integrierten komplexen Benchmark-Typen, wie z.B. Datenbank-Benchmarks usw.
:::
:::globalParagraph
Glücklicherweise hat jemand bei <a href="https://severalnines.com/blog/" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">Severalnines</a> bereits ein Container-Image für sysbench erstellt und es öffentlich zugänglich gemacht. Das Benchmark-Tool ist also einsatzbereit.
:::
:::globalParagraph
Um diesen Prozess zu vereinfachen und reproduzierbar zu machen, habe ich einen kleinen Test-Runner für sysbench gestartet. Dieses Tool plant das Benchmark im Cluster (mit einem Node-Selector), wartet auf den Abschluss des Jobs, analysiert das Ergebnis und erstellt eine Datei mit den Testergebnissen.
:::
:::globalParagraph
<a href="https://github.com/Schille/k8s-perf" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">Ich habe den Code hier öffentlich gemacht</a>. Er basiert auf Python und Poetry. Wenn du Poetry installiert hast, kannst du einfach *'poetry run benchmark'* <node selector> ausführen und es wird die Kapazität der CPU, des Arbeitsspeichers und des Dateisystems benchmarken.
:::

:::GlobalPodcastSection{:videoId="tyvE9VlSWkE" :videoPosition="left" .mb-6}
::::GlobalPreTitle{:color="text-bs-green" .mb-3}
UNSER KUBERNETES-PODCAST
::::
::::GlobalTitle{:tag="h3" .mb-6}
TftC E1: Kubernetes-Entwicklungsumgebungen
::::
::::globalParagraph{:font-size="lg" .mb-4}
Michael und Robert sprechen ausführlich über die Vor- und Nachteile der lokalen Kubernetes-Entwicklung und geben auch einige echte Codebeispiele.
::::
::::globalParagraph{:font-size="lg" }
Weitere Ausgaben unseres Podcasts findest du hier:
::::
::::GlobalButton{:url="/podcast/" :label="Mehr anzeigen" :color="green"}
::::
:::

:::globalTitle{:size="lg" .mb-5}
Die Ergebnisse
:::
:::globalParagraph
Zusammenfassend lässt sich sagen, dass EKS in allen Metriken eine höhere Leistung bietet. Insbesondere die Datei-E/A-Leistung bei GKE ist ehrlich gesagt schlecht. Wir sprechen über 10% weniger Leistung bei der CPU, 9% weniger beim Arbeitsspeicher und eine große Lücke bei den Dateioperationen für einen Standard-Kubernetes-Cluster. Schauen wir uns die Ergebnisse genauer an.
:::

:::globalTitle{:size="md" .mb-5}
CPU-Leistung
:::
:::globalParagraph
Der sysbench-Befehl zum Ausführen des CPU-Tests lautet: sysbench --test=cpu --time=60 run
:::
:::globalParagraph
Dieser Befehl führt den CPU-Benchmark eine Minute lang aus.
:::

:::globalTitle{:size="md" .mb-5}
1\) GKE vs. EKS: CPU-Ereignisse pro Sekunde
:::
:::globalParagraph
Sysbench erfasst die ausgeführten Schleifen (auch Ereignisse genannt) und berechnet alle Primzahlen bis zu einem bestimmten Parameter in einem bestimmten Zeitrahmen. Es zeigt an, wie viel CPU-Zeit dem Prozess gewährt wurde und wie schnell die Berechnung im Allgemeinen war.
:::
![kubernetes](/img/blogs/performance-comparison-gke-vs-eks-1.jpg){.object-cover .w-max-full .mb-5}
:::globalParagraph
Das Ergebnis zeigt einen schockierenden Unterschied von etwa 11% mehr Ereignissen auf EKS im Vergleich zu GKE. Da du für die Zeit deines Kubernetes-Knotens bezahlst, ist es entscheidend, dass in dieser Zeit möglichst viele Berechnungen durchgeführt werden.
:::

:::globalTitle{:size="md" .mb-5}
2\) GKE vs. EKS: CPU-Latenz
:::
:::globalParagraph
Sysbench erfasst die CPU-Latenz für ein angefordertes Ereignis. Es aggregiert die Ergebnisse und gibt die minimalen, maximalen, durchschnittlichen und 95. Perzentil-Werte zurück.
:::
![kubernetes](/img/blogs/performance-comparison-gke-vs-eks-2.jpg){.object-cover .w-max-full .mb-5}

:::globalParagraph
Wie du sehen kannst, ist die Leistung des containerd-basierten Runtimes von GKE nicht signifikant langsamer als der docker-basierte Runtime von EKS. Dennoch beträgt der Unterschied im 95. Perzentil etwa 2%. Dies kann auf die relativ kurze Laufzeit des Benchmarks und andere Faktoren zurückzuführen sein.
:::

:::globalTitle{:size="md" .mb-5}
Speicherleistung
:::
:::globalParagraph
Der sysbench-Befehl zum Ausführen des Speichertests (RAM) lautet: sysbench --test=memory --memory-total-size=500G run
:::
:::globalParagraph
Dieser Befehl schreibt 500 Gigabyte in den Hauptspeicher und erfasst die Schreibgeschwindigkeit.
:::
![kubernetes](/img/blogs/performance-comparison-gke-vs-eks-3.jpg){.object-cover .w-max-full .mb-5}

:::globalParagraph
Auch hier ist GKE etwa 9% langsamer als der Container-Runtime von EKS, wenn es darum geht, viel in den Hauptspeicher zu schreiben. Auf einem EKS-Cluster kann dein Code potenziell mit 4,25 Gigabyte pro Sekunde in den RAM schreiben, während auf GKE dein Container nur mit 3,87 Gigabyte pro Sekunde schaufeln kann. Im Vergleich dazu läuft mein Laptop mit etwa 6,36 Gigabyte pro Sekunde. Daher ist keines der Ergebnisse überwältigend.
:::

:::globalTitle{:size="md" .mb-5}
GKE vs EKS: Datei-E/A-Leistung
:::
:::globalParagraph
Die Ergebnisse zur Dateisystemleistung zeichnen ein besonders dramatisches Bild. Der sysbench-Befehl zum Ausführen des Dateitests lautet:
:::

:::GlobalBlock{.ul-disk .mb-5}
- sysbench --test=fileio --file-num=5 --file-total-size=5G prepare
- sysbench --test=fileio --file-total-size=5G --file-num=5 --file-test-mode=rndrw --time=100 --max-requests=0 run
:::

:::globalTitle{:size="md" .mb-5}
1\) GKE vs EKS: Dateidurchsatz
:::
:::globalParagraph
Der Dateidurchsatz-Benchmark schreibt einfach eine Datei in das Dateisystem und liest eine künstliche Datei aus dem Dateisystem.
:::
![kubernetes](/img/blogs/performance-comparison-gke-vs-eks-4.jpg){.object-cover .w-max-full .mb-5}

:::globalParagraph
Die Schreib- und Leseleistung eines Containers, der auf EKS läuft, ist bei Lesevorgängen etwa 95% besser und bei Schreibvorgängen etwa 94% besser. Diese Metrik könnte relevant werden, wenn eine Anwendung Dateien aus dem temporären Speicher im Container schreibt und liest.
:::

:::globalTitle{:size="md" .mb-5}
2\) Datei-E/A-Latenz
:::
![kubernetes](/img/blogs/performance-comparison-gke-vs-eks-5.jpg){.object-cover .w-max-full .mb-5}

:::globalParagraph
Die Dateilatenz ist für beide Plattformen nahezu gleich. Persönlich würde ich der maximalen Latenz nicht allzu viel Bedeutung beimessen (diese kann von Lauf zu Lauf stark variieren), sondern eher das 95. Perzentil betrachten. Mit dieser Metrik übertrifft EKS GKE um eine Größenordnung.
:::

:::globalTitle{:size="md" .mb-5}
3\) Dateioperationen pro Sekunde
:::
![kubernetes](/img/blogs/performance-comparison-gke-vs-eks-6.jpg){.object-cover .w-max-full .mb-5}

:::globalParagraph
Die geringe Anzahl von Dateioperationen pro Sekunde auf GKE ist nur eine Folge der vorherigen Ergebnisse. Bitte beachte, dass diese Bewertungen zur Dateisystemleistung auf dem nativen Dateisystem des Containers ausgeführt werden. Es ist keine zusätzliche Storage Class an den Pod angehängt, auf dem der Benchmark läuft.
:::

:::globalTitle{:size="lg" .mb-5}
Abschließende Bemerkungen
:::

:::globalParagraph
Ich war etwas schockiert über die Ergebnisse nach dem Vergleich dieser beiden verwalteten Kubernetes-Plattformen und ihrer Container-Runtime-Leistung. Wie du sehen kannst, ist der Preis des GKE-Knotens in diesen Regionen etwa 22% niedriger als der entsprechende Preis bei AWS EKS. Das gleicht zumindest ein wenig den Unterschied in der Leistung aus, aber diese Fakten können die Entscheidung beeinflussen, wo eine containerisierte Workload in Zukunft platziert werden soll.
:::
:::globalParagraph
Beim Versuch, die Ergebnisse zu verstehen, stieß ich auf das Nitro-System von Amazon, eine Hardware-Technologie, die Amazon Web Service für ihre eigene Cloud-Computing-Plattform entwickelt hat. Sind diese Ergebnisse ein Beweis für die versprochenen Leistungsgewinne? Spielt der docker-basierte Container-Runtime von AWS dabei eine Rolle?
:::
:::globalParagraph
Bei Blueshoe arbeiten wir gerne mit der Google Cloud Platform, da wir sie im Allgemeinen als benutzerfreundlicher und übersichtlicher im Vergleich zur AWS-Konsole betrachten. Leistungsüberlegungen sind in der Tat sehr wichtig, aber es gibt auch andere wesentliche Kriterien bei der Auswahl eines verwalteten Kubernetes-Angebots. Bitte nimm diesen Benchmark auch mit einer Prise Salz, da es viele Konfigurationen gibt, die einen großen Einfluss auf die Gesamtsystemleistung haben können.
:::
:::globalParagraph
Fühle dich frei, <a href="https://www.linkedin.com/in/michael-schilonka/" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">folge mir auf LinkedIn</a> oder trete unserem <a href="https://discord.gg/eQBkQwYAYy" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">Discord</a> bei.
:::




:::BlogRelatedPosts{:url='["/blog/managed-vs-unmanaged-kubernetes", "/blog/strategien-fur-schlanke-docker-images", "/blog/evolution-der-applikationsentwicklung-zu-einem-cloud-native-ansatz", "/blog/kubernetes-aufbau-plattform-kubernetes", "/blog/migration-nach-cloud-native"]'}

:::