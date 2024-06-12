---
head:
  title: 'Docker Desktop und Kubernetes'
  meta:
    - property: 'og:locale'
      content: 'de_DE'
    - name: 'description'
      content: 'Docker Desktop kann das Leben eines Entwicklers erleichtern, aber je nach Betriebssystem gibt es Einschränkungen. Lies unseren Artikel und finde heraus, ob Docker Desktop etwas für dich ist.'
    - property: 'og:type'
      content: 'website'
    - property: 'og:title'
      content: 'Docker Desktop und Kubernetes'
    - property: 'og:description'
      content: 'Docker Desktop kann das Leben eines Entwicklers erleichtern, aber je nach Betriebssystem gibt es Einschränkungen. Lies unseren Artikel und finde heraus, ob Docker Desktop etwas für dich ist.'
    - property: 'og:image'
      content: 'https://www.blueshoe.io/img/blogs/docker-desktop-and-kubernetes.jpg'
    - property: 'og:image:secure_url'
      content: 'https://www.blueshoe.io/img/blogs/docker-desktop-and-kubernetes.jpg'
    - name: 'twitter:card'
      content: 'summary'
    - name: 'twitter:title'
      content: 'Docker Desktop und Kubernetes'
    - name: 'twitter:description'
      content: 'Docker Desktop kann das Leben eines Entwicklers erleichtern, aber je nach Betriebssystem gibt es Einschränkungen. Lies unseren Artikel und finde heraus, ob Docker Desktop etwas für dich ist.'
    - name: 'twitter:image'
      content: 'https://www.blueshoe.io/img/blogs/docker-desktop-and-kubernetes.jpg'
src: '/blog/docker-desktop-und-kubernetes'
img: '/img/blogs/docker-desktop-and-kubernetes.jpg'
alt: 'docker desktop und kubernetes'
preTitle: 'Einige Erfahrungen mit Docker Desktop und Kubernetes'
title: "Docker Desktop und Kubernetes"
description: 'Docker Desktop kann das Leben eines Entwicklers erleichtern, aber je nach Betriebssystem gibt es Einschränkungen. Lies unseren Artikel und finde heraus, ob Docker Desktop etwas für dich ist.'
date: '08.03.2023'
autor:
  - Michael Schilonka
technologie:
  - Kubernetes
  - Docker
productUpdates: []
sonstiges:
  - Entwicklung
---
In diesem Artikel werfen wir einen Blick auf Docker Desktop im Jahr 2023 und konzentrieren uns darauf, wie Entwickler mit [Kubernetes](/blog/kubernetes-development/){.text-bs-blue .hover:underline .hover:decoration-bs-blue .hover:decoration-solid} arbeiten können. Unser Team bei Blueshoe hat kürzlich eine eigene Docker Desktop-Erweiterung für unser Open-Source-Entwicklungstool [Gefyra](/tools/){.text-bs-blue .hover:underline .hover:decoration-bs-blue .hover:decoration-solid} veröffentlicht. Wir möchten die bequemste Entwicklererfahrung ("DX") für Kubernetes-basierte Entwicklungsworkflows bieten, und Docker Desktop könnte eine gute Grundlage sein. Dann schauen wir es uns an.

<!--more-->

![mein Bild](/img/blogs/docker-desktop-and-kubernetes.jpg){.object-cover .max-w-full .mb-5}

:::BlogNavigationCard{:title="Inhaltsverzeichnis"}

:::

:::globalTitle{:size="lg" .mb-5 .mt-8}
Installation
:::
:::globalParagraph
Die <a href="https://www.docker.com/products/docker-desktop/" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">Installation von Docker Desktop</a> ist für alle gängigen Plattformen recht einfach. Es gibt auch Installationskandidaten für Apples neue Silicon- und Intel-basierte Chipsätze. Das ist praktisch und erleichtert den Einstieg für Entwickler, die mit der Container-basierten Entwicklung beginnen möchten.
:::
:::globalParagraph
Als jemand, der mit Linux (speziell mit Ubuntu) arbeitet, stört es mich jedoch ein wenig, ein >500 MiB Installationspaket aus dem Browser auf meinen Rechner herunterzuladen. Normalerweise möchte ich ein Software-Repository hinzufügen und damit automatisch Update-Strategien konfigurieren. Wenn ich Docker Desktop aktualisieren möchte (ja, Docker Desktop sagt mir in der Benutzeroberfläche Bescheid), muss ich ein weiteres Installationspaket von der Website herunterladen und den <a href="https://docs.docker.com/desktop/install/ubuntu/#upgrade-docker-desktop" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">Updater entsprechend ausführen</a>.
:::
:::globalParagraph
Im Kern ist die Idee einfach: Führe einen logischen oder "virtuellen" <a href="https://kubernetes.io/de/docs/concepts/overview/what-is-kubernetes/" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">Kubernetes</a>-Cluster innerhalb eines physischen oder "Host"-Kubernetes-Clusters aus. Dieses Konzept bringt eine neue Ebene der Flexibilität, da es Entwicklern ermöglicht, schnell isolierte Umgebungen zu erstellen, ohne den Aufwand, mehrere physische Cluster zu verwalten. Mit diesem Ansatz können Entwickler Produktionsumgebungen replizieren, sicher experimentieren und Anwendungen für das Kubernetes-Ökosystem optimieren.
:::

:::globalTitle{:size="lg" .mb-5 .mt-8}
VM-Backend auf allen Plattformen erforderlich
:::
:::globalParagraph
Docker Desktop benötigt ein virtuelles Maschinen (VM)-Backend auf allen Plattformen, einschließlich Linux. Das ist erforderlich, da Software-Container eine Linux-native Technologie sind und daher auf Windows und Mac nicht direkt unterstützt werden. Auf Windows kannst du entweder das <a href="https://learn.microsoft.com/en-us/windows/wsl/faq" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">WSL2-Subsystem</a> verwenden (eine leichte VM mit einem begrenzten Hyper-V-Toolset, um den Linux-Kernel auszuführen) oder ein Hyper-V-Backend. Je nach Windows-Edition wird die <a href="https://docs.docker.com/desktop/install/windows-install/" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">erste oder zweite Option empfohlen</a>. Auf macOS läuft Docker Desktop mit HyperKit, einem Toolkit zur Einbettung von Hypervisor-Funktionen in eine Anwendung. Auf Linux wird <a href="https://www.qemu.org/" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">QEMU</a> verwendet.
:::
:::globalParagraph
Die Frage, warum Docker Desktop auf Linux genau eine VM benötigt, wird <a href="https://docs.docker.com/desktop/faqs/linuxfaqs/#why-does-docker-desktop-for-linux-run-a-vm" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">hier</a> beantwortet. Ich finde die aufgeworfenen Punkte nachvollziehbar, auch wenn es bedeutet, dass ich Leistungseinbußen hinnehmen muss.
:::
:::globalParagraph
Zumindest unter Linux besteht die Alternative darin, nur den Docker-Daemon (auch als Docker-Engine bezeichnet) auszuführen. Dadurch kann ich Container mit systemweiter Leistung ausführen und verwalten. Das ist ein großer Vorteil gegenüber anderen Plattformen. Es scheint jedoch nicht möglich zu sein, Docker Desktop mit einem nativen Docker-Daemon zu verwenden. Das wäre das Beste aus beiden Welten: die Funktionen und Bequemlichkeit von Docker Desktop und die Leistung einer nativen Docker-Engine. Nun, diese Option wird wahrscheinlich nie eintreten.
:::

<!--- Störer -->
::GlobalPartial{content=catcher-1}
::

:::globalTitle{:size="lg" .mb-5 .mt-8}
Leistung & Bequemlichkeit
:::
:::globalParagraph
Wenn wir über Bequemlichkeit sprechen: Worum geht es genau bei der Entwicklererfahrung mit Docker Desktop? Lass mich mit dem wichtigsten Nachteil im Jahr 2023 beginnen.
:::
:::globalParagraph
Da ich täglich mit der Docker CLI (zusammen mit der Docker-Engine) in Linux arbeite, bin ich sehr daran gewöhnt. Bisher war der Docker-Daemon (prominent) auf Windows oder macOS nicht verfügbar und konnte nur über die Docker Desktop-VM auf diesen Plattformen installiert werden. In der Vergangenheit habt mein Team bei Blueshoe erhebliche Unterschiede in der Geschwindigkeit der Containerausführung und dem Ressourcenverbrauch des VM-basierten Workarounds von Docker Desktop festgestellt. Wir haben beispielsweise [lokale Kubernetes-Cluster](/blog/kubernetes-development/){.text-bs-blue .hover:underline .hover:decoration-bs-blue .hover:decoration-solid}
 mit k3d auf Basis von Docker-Containern ausgeführt, was für Linux-Benutzer in Ordnung war, aber für Mac-Benutzer selbst mit vergleichbaren oder besseren Hardware-Spezifikationen (d.h. CPU, Speicher usw.) nahezu unmöglich war.
:::

:::globalTitle{:size="lg" .mb-5 .mt-8}
Echte Rechenleistung erforderlich
:::
:::globalParagraph
Die Startzeit von Docker Desktop, insbesondere auf macOS, ist sehr lang und die Containerleistung ist ehrlich gesagt ziemlich schlecht. Da du die Systemressourcen nur für die gesamte VM anpassen kannst, musst du viel verfügbare Kapazität deines Host-Systems zugunsten der Docker-VM abzweigen. Der Nachteil ist, dass du eine sehr unflexible Ressourcenzuweisung erhältst. Wenn du viel Kapazität in die Docker-VM steckst, wirst du sie wahrscheinlich auf deinem Host-System vermissen und umgekehrt. Nur eine sehr leistungsstarke Maschine (mit mehr als 8 Kernen und mehr als 16 GiB Speicher) wird für ernsthafte containerbasierte Entwicklungsaufgaben ausreichen. In der Realität betreibst du auch eine ressourcenintensive IDE, einen Webbrowser mit vielen geöffneten StackOverflow-Tabs, einige Instant-Messenger und mehr auf deiner Entwicklungsmaschine. Das frisst auch viel Kapazität. Das Ausführen von Docker Desktop erfordert eine weitere enorme Anforderung, die einen gewöhnlichen Entwicklungsscomputer wahrscheinlich in die Knie zwingen wird. Das mindert die Bequemlichkeit und die Entwicklererfahrung von Docker Desktop erheblich.
:::
:::globalParagraph
Das Starten der integrierten Kubernetes-Distribution dauert ebenfalls sehr lange. Dies hat sich mit der WSL2-Integration unter Windows deutlich verbessert. Ich vermute, dass die Ressourcenzuweisung von WSL2 flexibler ist als bei Hyper-V-basierten VMs. Auf macOS ist dies immer noch sehr zeitaufwändig und frustrierend, wenn es mehrmals am Tag durchgeführt wird.
:::

:::globalTitle{:size="lg" .mb-5 .mt-8}
Viel besser als nur eine CLI
:::
:::globalParagraph
Aber abgesehen von der Leistung bietet Docker Desktop eine sehr saubere und intuitive grafische Benutzeroberfläche.Meiner Meinung nach ist es sehr einfach, wenn du bereits zuvor mit Containern gearbeitet hast. Zum Beispiel ist es ein großer Vorteil, mit einem Klick von Logs zu interaktiven Terminals zu Umgebungsvariablen zu wechseln. Das ist ein großer Vorteil gegenüber der reinen CLI (auch wenn du damit sehr schnell bist) und fühlt sich eher wie ein Entwicklungstool an, das nicht nur zum "Ausführen eines Software-Containers" entwickelt wurde. Möchtest du mit Kubernetes arbeiten? - Kein Problem. Aktiviere einfach das Kontrollkästchen in den Einstellungen und warte, bis Kubernetes verfügbar ist.
:::
:::globalParagraph
Alles, was du zusätzlich benötigst, ist kubectl, die primäre Schnittstelle zu jedem Kubernetes-Cluster. Die kubeconfig wird automatisch mit dem richtigen Kontext vorbereitet, sodass kubectl sofort einsatzbereit ist.
:::

![kubernetes](/img/blogs/docker-desktop-and-kubernetes-1.jpg){.object-cover .w-full .mb-5}

:::globalTitle{:size="lg" .mb-5 .mt-8}
Einrichten von Docker Desktop Kubernetes
:::
:::globalParagraph
Die Arbeit mit Kubernetes in Docker Desktop erfordert eine ziemlich leistungsstarke Entwicklungsmaschine. Abgesehen von dieser Anforderung kannst du auf die Einschränkung stoßen, dass nur eine Kubernetes-Version verfügbar ist: diejenige, die mit der installierten Docker Desktop-Version geliefert wird. Das kann ein Problem sein, wenn du die spezifische Kubernetes-Version deines Produktionssystems abstimmen möchtest (im Hinblick auf die <a href="https://12factor.net/dev-prod-parity" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">Übereinstimmung von Entwicklung und Produktion</a>).
:::
:::globalParagraph
[Wenn du eine bestimmte Kubernetes-Version installieren möchtest, schaue dir diesen Artikel an](/blog/minikube-vs-k3d-vs-kind-vs-getdeck-beiboot/){.bs-link-blue}. Du könntest minikube mit dem --kubernetes-version-Flag und dem Docker-Treiber verwenden, um jede verfügbare Kubernetes-Version auf Docker Desktop zu installieren. Das könnte sogar hinsichtlich der Startzeit schneller sein.
:::
:::globalParagraph
Die mit Docker Desktop gelieferte Kubernetes-Distribution ist neutral. Das ist ein Vorteil, wenn du mit einer produktionsnahen Umgebung arbeiten möchtest. Der Nachteil ist jedoch, dass Entwickler alle Bausteine selbst bereitstellen müssen. Zum Beispiel ist standardmäßig kein Ingress-Controller verfügbar. Im Vergleich zu k3d sind einige zusätzliche Schritte erforderlich, um ihn verfügbar zu machen:
:::


:::globalTitle{:size="lg" .mb-5 .mt-8}
Welcher Ingress-Controller sollte verwendet werden?
:::
:::globalParagraph
Du kannst aus einer Reihe verschiedener Ingress-Controller für Kubernetes wählen. Die Plattform "learnk8s" pflegt eine sehr umfassende <a href="https://docs.google.com/spreadsheets/d/191WWNpjJ2za6-nbG4ZoUMXMpUK8KlCIosvQB0f-oq3k/edit#gid=907731238" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">Tabelle</a>, die praktisch alle Kubernetes Ingress-Controller vergleicht:
:::

![kubernetes](/img/blogs/docker-desktop-and-kubernetes-2.jpg){.object-cover .w-full .mb-5}


:::globalParagraph
Diese Entscheidung sollte für Entwickler jedoch nicht sehr relevant sein. Wenn du immer noch nicht weißt, welchen Ingress-Controller du mit Docker Desktop verwenden sollst, kannst du wahrscheinlich jeden von ihnen wählen. Ich persönlich empfehle den <a href="https://github.com/kubernetes/ingress-nginx" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">Ingress-Nginx-Controller</a>, der auch ein offizielles Kubernetes-Projekt ist.
:::


:::globalTitle{:size="lg" .mb-5 .mt-8}
Installiere Ingress-Nginx auf deinem Docker Desktop Kubernetes
:::
:::globalParagraph
Um es zu installieren, musst du zunächst sicherstellen, dass dein kubeconfig-Kontext auf docker-desktop festgelegt ist. In einem Terminal kannst du den folgenden Befehl ausführen:
:::

:::BlogCode{.mb-5}
```json
> kubectl config current-context

docker-desktop
```
:::

:::globalParagraph
Wenn dieser Befehl etwas anderes sagt, setze den Kontext auf docker-desktop mit:
:::
:::BlogCode{.mb-5}
```json
> kubectl config use-context docker-desktop

Switched to context "docker-desktop".
```
:::

:::globalParagraph
Wende dann einfach die Ingress-Controller-Konfigurationen für Kubernetes an, etwa so:
:::
:::BlogCode{.mb-5}
```json
> kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.6.4/deploy/static/provider/cloud/deploy.yaml
```
:::

:::globalParagraph
Du kannst den ingress-controller mit diesem Befehl überprüfen und er sollte folgendes anzeigen:
:::
:::BlogCode{.mb-5}
```json
> kubectl -n ingress-nginx get pod

  NAME                                        READY   STATUS      RESTARTS   AGE
  ingress-nginx-admission-create-szn97        0/1     Completed   0          70s
  ingress-nginx-admission-patch-plpcx         0/1     Completed   0          70s
  ingress-nginx-controller-6b94c75599-vpjjd   1/1     Running     0          70s
```
:::


:::globalParagraph
Et voilà, dein lokaler Kubernetes-Cluster ist bereit, echten HTTP-Verkehr zu bedienen.
:::
:::globalParagraph
**Wichtig:** Das Kubernetes von Docker Desktop bindet direkt an die Ports deines lokalen Computers. Das bedeutet, dass der gerade installierte Ingress-Controller auf Port 80 gestartet wird, der auf deinem Computer frei sein muss.
:::

:::globalTitle{:size="lg" .mb-5 .mt-8}
Testen des Ingress-Controllers mit einer kleinen Demo-Anwendung
:::
:::globalParagraph
Bestätigen wir, dass es funktioniert, indem wir eine Test-Workload anwenden und sie mit einem Ingress-Objekt freigeben:
:::
:::BlogCode{.mb-5}
```json
> kubectl apply -f https://raw.githubusercontent.com/gefyrahq/gefyra/main/testing/workloads/hello_dd.yaml
```
:::

:::globalParagraph
Dies ist die "hello-nginx" Anwendung, von unserem Kubernetes-Entwicklungstool <a href="https://github.com/gefyrahq/gefyra/blob/main/testing/workloads/hello_dd.yaml" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">Gefyra</a>
:::
:::globalParagraph
Wenn du die Ingress-Objekte überprüfen möchtest, verwende:
:::
:::BlogCode{.mb-5}
```json
> kubectl get ingress

NAME            CLASS    HOSTS                    ADDRESS   PORTS   AGE
hello-ingress   <none>   hello.127.0.0.1.nip.io             80      7s
```
:::
:::globalParagraph
Du erreichst das hello-ingress-Objekt unter http://hello.127.0.0.1.nip.io (dafür müssen nip.io-Domains in deinem aktuellen Netzwerk funktionieren; falls nicht, suche nach "DNS rebind protection"). Sobald du deinen Browser auf diese Adresse richtest, wirst du mit dem Hello Nginx-Bildschirm begrüßt.
:::

![kubernetes](/img/blogs/docker-desktop-and-kubernetes-3.jpg){.object-cover .max-w-full .mb-5}

:::globalParagraph
Es gibt einige Informationen über deinen Cluster preis: den Namen des Pods, der diesen einfachen Prozess ausführt, und die IP-Adresse des Pods.
:::

:::globalTitle{:size="lg" .mb-5 .mt-8}
Wie sieht die Docker Desktop GUI aus?
:::
:::globalParagraph
Wenn du zu Docker Desktop zurückkehrst, findest du alle Container, die wir gerade in Kubernetes installiert haben, auch im Abschnitt "Container".
:::

![kubernetes](/img/blogs/docker-desktop-and-kubernetes-4.jpg){.object-cover .w-full .mb-5}

:::globalParagraph
Durch Klicken auf die Schaltfläche "Details anzeigen" des Containers "k8s_hello-nginx_hellp-nginxdemo" erhältst du Protokolle und viele andere nützliche Informationen. Du kannst sogar über den Tab "Terminal" eine interaktive Shell starten.
:::

![kubernetes](/img/blogs/docker-desktop-and-kubernetes-5.jpg){.object-cover .w-full .mb-5}

:::globalParagraph
Das ist sehr praktisch, wenn du den Zustand des Containers überprüfen oder einen einmaligen Verwaltungsbefehl deiner Anwendung ausführen möchtest.
:::

:::GlobalPodcastSection{:videoId="tyvE9VlSWkE" :videoPosition="left" .mb-6}
::::GlobalPreTitle{:color="text-bs-green" .mb-3}
UNSER PODCAST: TOOLS FOR THE CRAFT
::::
::::GlobalTitle{:tag="h3" .mb-6}
E3: Tiefere Einblicke in Getdeck
::::
::::globalParagraph{:font-size="lg" .mb-4}
Michael und Robert stellen Getdeck vor, demonstrieren es und vergleichen lokale und entfernte Kubernetes- und Vorproduktionscluster.
::::
::::globalParagraph{:font-size="lg" }
Weitere Ausgaben unseres Podcasts findest du hier:
::::
::::GlobalButton{:url="/kubernetes-podcast/" :label="Mehr anzeigen" :color="green"}
::::
:::

:::globalTitle{:size="lg" .mb-5 .mt-8}
Code schreiben mit Docker Desktop Kubernetes
:::
:::globalParagraph
Als Entwickler ist es nur natürlich, dass ich Code schreiben und schnell iterieren möchte. In vielen modernen Umgebungen findet man Kubernetes-basierte Produktionsumgebungen. Daher ist es konsequent, dass auch Kubernetes-basierte Entwicklungsumgebungen im Trend liegen.
:::
:::globalParagraph
Wenn DevOps viel Aufwand betreiben, um gute Kubernetes-Konfigurationen für alle erforderlichen Ressourcen zu schreiben, die die Anwendung ausmachen, warum stellen wir diese Ressourcen dann nicht auch unseren Entwicklern zur Verfügung?
:::
:::globalParagraph
Angenommen, du möchtest eine Kubernetes-basierte Entwicklungsumgebung erstellen. Hier ist, was du brauchst:
:::

:::GlobalBlock{.ol-decimal .mb-5}
1. Sammele alle Ressourcen zur Bereitstellung eines Kubernetes-Clusters (z.B. brauchst du Helm-Charts, Kustomize-Ressourcen oder einfache YAML-Dateien). Wenn du unsicher bist, frage deinen DevOps, dir Anleitungen zur Verfügung zu stellen.
2. Installiere alle Komponenten, die die Anwendung ausmachen, in deinem lokalen Kubernetes-Cluster  (z.B. erforderliche Datenbanken, Caches, Indizes, [APIs](/our-services/api-development-agency/){.text-bs-blue .hover:underline .hover:decoration-bs-blue .hover:decoration-solid} und andere Anwendungen). Alternativ kannst du nur die Komponenten installieren, die wirklich für deine spezielle Anwendung erforderlich sind, um Rechenkapazität zu sparen.
3. Stelle sicher, dass alles läuft.
:::
:::globalParagraph
Von hier aus hast du im Grunde genommen einige Optionen, um die Entwicklungswerkzeuge einzurichten.
:::

:::globalTitle{:size="lg" .mb-5 .mt-8}
Lokale Container-Images in Kubernetes ausführen
:::
:::globalParagraph
Kubernetes ruft normalerweise Images aus einem Container-Register ab, was bedeutet, dass du das von uns erstellte Image nach jeder Änderung hochladen und herunterladen musst. Docker Desktop erleichtert dies, indem es <a href="https://kubernetes.io/docs/tasks/administer-cluster/migrating-from-dockershim/check-if-dockershim-removal-affects-you/" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">dockershim</a> verwendet, um den Image-Cache zwischen dem Docker-Engine und Kubernetes gemeinsam zu nutzen.
:::
:::globalParagraph
Das dockershim ist eine Komponente, die mit Docker Desktop Kubernetes geliefert wird und zwischen dem Kubernetes <a href="https://kubernetes.io/docs/reference/command-line-tools-reference/kubelet/" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">kubelet</a> und der Docker-Engine übersetzt.
:::
:::globalParagraph
Das ist ein großer Vorteil für Entwickler, da sie ihre Container-Images nicht hochladen und herunterladen müssen, bevor sie sie in Docker Desktop Kubernetes ausführen können. Diese Funktion ist in gewisser Weise ähnlich zu dem, was du <a href="https://www.blueshoe.io/blog/minikube-vs-k3d-vs-kind-vs-getdeck-beiboot/" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">mit k3d, minikube und kind erreichen kannst, indem du das Container-Image auf deine Cluster-Knoten importierst</a>. Mit Docker Desktop musst du jedoch das Container-Image wie gewohnt erstellen und es nicht in einen Kubernetes-Knoten importieren. Das ist sogar schneller als bei anderen lokalen Kubernetes-Lösungen.
:::
:::globalParagraph
Wenn du die Ausgabe der oben genannten <a href="https://github.com/nginxinc/NGINX-Demos/tree/master/nginx-hello-nonroot" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">"hello-nginx"</a>-Anwendung ändern möchtest, wirf zuerst einen Blick auf die Workload-Spezifikation:
:::

:::BlogCode{.mb-5}
```json
apiVersion: apps/v1
kind: Deployment
metadata:
  name: hello-nginxdemo
spec:
  selector:
    matchLabels:
      app: hello-nginx
  replicas: 1
  template:
    metadata:
      labels:
        app: hello-nginx
      spec:
        containers:
            - name: hello-nginx
            image: nginxdemos/hello
            ports:
            - containerPort: 80
```
:::

:::globalParagraph
Es sagt, dass das ausgeführte Container-Image "nginxdemos/hello" ist, das vom Dockerhub abgerufen wurde. Du kannst diese Informationen auch mit Docker Desktop im Abschnitt "Container" finden (siehe Screenshot von oben).
:::
:::globalParagraph
Jetzt kannst du entweder eine neue Version dieses Container-Images mit docker build . -t nginxdemos/hello erstellen und den Kubernetes-Pod löschen:
:::

:::BlogCode{.mb-5}
```json
> kubectl get pod

NAME                               READY   STATUS    RESTARTS   AGE
hello-nginxdemo-6c4f96b577-2rkcp   1/1     Running   0          51m

> kubectl delete pod hello-nginxdemo-6c4f96b577-2rkcp

pod "hello-nginxdemo-6c4f96b577-2rkcp" deleted
```
:::

:::globalParagraph
Du erhältst fast sofort einen neuen Pod, der jedoch diesmal dein benutzerdefiniertes Container-Image ausführt, das du gerade erstellt hast.
:::
:::globalParagraph
Anstatt das ursprüngliche Container-Image, das mit der Kubernetes-Ressource geliefert wird, wiederzuverwenden, kannst du auch ein benutzerdefiniertes Container-Image erstellen und es beliebig benennen. Anschließend kannst du die Bereitstellung einfach ändern und dieses Image ausführen:
:::


:::BlogCode{.mb-5}
```json
> kubectl patch deployment hello-nginxdemo -p '{"spec":{"template":{"spec":{"containers":[{"name":"hello-nginx","image":"my-custom-image"}]}}}}'
```
:::

:::globalParagraph
Dies führt zum gleichen Ergebnis: Der Pod wird mit dem neuen Image neu gestartet, das du gerade erstellt habst. Kubernetes wird sich nicht die Mühe machen, das Image abzurufen, da der Docker-Engine, den du zum Erstellen des Container-Images verwendest, genau derselbe ist wie der von Docker Desktop Kubernetes verwendete. Sie teilen sich den gleichen Image-Cache, was es sehr bequem macht, ein beliebiges Image im lokalen Cluster auszuführen.
:::
:::globalParagraph
Übrigens werden dem Container alle Kubernetes-Ressourcen und -Konfigurationen zur Verfügung stehen. Dies macht ihn der Produktionsumgebung sehr nahe.
:::

:::globalTitle{:size="lg" .mb-5 .mt-8}
Verwendung zusätzlicher Tools für noch schnellere Interaktion
:::
:::globalParagraph
Wenn du das Container-Image nicht jedes Mal neu erstellen möchtest, wenn du eine Code-Änderung vornimmst, brauchst du zusätzliche Tools. Wenn du einen Debugger an den Container-Prozess anhängen möchtest, kannst du dies nicht einfach mit dem [lokalen Kubernetes](/blog/kubernetes-development/){.text-bs-blue .hover:underline .hover:decoration-bs-blue .hover:decoration-solid} tun. Darüber hinaus musst du deine Kubernetes-Konfigurationen im Cluster ändern, wenn du Umgebungsvariablen überschreiben musst (sagen wir, du möchtest einen DEBUG-Flag setzen).
:::
:::globalParagraph
Blueshoe hat [Gefyra](/tools){.text-bs-blue .hover:underline .hover:decoration-bs-blue .hover:decoration-solid} genau für diesen Anwendungsfall entwickelt. Damit kannst du einfach docker run ... – pardon, ich meinte gefyra run ... (es ist fast dasselbe) – dein Container-Image ausführen, ohne einen Kubernetes-Pod neu laden zu müssen. Auf diese Weise kannst du dein aktuelles Arbeitsverzeichnis in den Container einbinden und das Hot-Reloading-Flag in deinem Prozess aktivieren (falls verfügbar). Du kannst ganz einfach Umgebungsvariablen setzen und das Beste daran ist, dass du diesen Container auf einem dedizierten lokalen Port exponieren kannst, um noch schneller iterieren zu können. Der Container verhält sich wie in einem Kubernetes-Pod (einschließlich Netzwerksemantik) und erreicht daher alle auf Kubernetes basierenden Ressourcen wie Datenbanken oder andere Anwendungen.
:::
:::globalParagraph
Dies funktioniert mit der Befehlszeilenanwendung gefyra oder alternativ können Entwickler von der <a href="https://hub.docker.com/extensions/gefyra/docker-desktop-extension" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">Gefyra Docker Desktop-Erweiterung aus dem Marketplace</a> profitieren.
:::
:::globalParagraph
Schaue dir Gefyra und unseren <a href="https://gefyra.dev/getting-started/docker-desktop-kubernetes-osx/" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">Getting Started Guide zur Verwendung mit Docker Desktop Kubernetes</a> oder der <a href="https://gefyra.dev/docker-desktop-extension/" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">Docker Desktop-Erweiterung</a> an.
:::

:::globalTitle{:size="lg" .mb-5 .mt-8}
Abschließende Bemerkungen
:::
:::globalParagraph
Obwohl Docker Desktop die Entwicklung mit Kubernetes vereinfacht, gibt es immer noch einige Herausforderungen. Die Ressourcenanforderungen sind überwältigend und der Aufbau eines Clusters, der der Produktion nahe kommt, erfordert Zeit und Wissen. <a href="https://github.com/docker/extension-ideas/discussions/152" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">Ich habe eine Diskussion im Docker-Ideenboard auf GitHub erstellt</a>, um diesen Prozess in Zukunft einfacher zu gestalten. Vielleicht wird es aufgegriffen und umgesetzt.
:::
:::globalParagraph
Es gibt bereits einige interessante Docker Desktop-Erweiterungen im Marketplace, die das Entwicklungserlebnis noch weiter verbessern können. Bleib dran für einen weiteren Artikel, in dem wir bestehende Kubernetes-basierte Entwicklungserweiterungen vorstellen möchten.
:::
:::globalParagraph
Langfristig betrachtet sehe ich die lokale Kubernetes-Entwicklung jedoch nicht als nachhaltige Option. Remote-Entwicklungsumgebungen sind die Zukunft! Getdeck Beiboot wird alle auf Kubernetes basierenden Ressourcen ausführen, und mit [Tools](/tools/){.text-bs-blue .hover:underline .hover:decoration-bs-blue .hover:decoration-solid} wie Gefyra ermöglichen wir Entwicklern, in einer echten Kubernetes-basierten Entwicklungsumgebung mit nur wenigen lokal ausgeführten Containern zu arbeiten.
:::
:::globalParagraph
Wenn du mehr über die Kubernetes-basierte Entwicklung erfahren möchtest, <a href="https://www.linkedin.com/in/michael-schilonka/" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">folge mir auf LinkedIn</a> oder schreibe uns bei Blueshoe.
:::



:::BlogRelatedPosts{:url='["/blog/minikube-vs-k3d-vs-kind-vs-getdeck-beiboot", "/blog/cilium-kubernetes-networking-observability", "/blog/kubernetes-development", "/blog/kubernetes-logging-mit-promtail-loki-und-grafana", "/blog/richtige-api-technologie-auswaehlen"]'}

:::

