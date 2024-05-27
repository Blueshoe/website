---
head:
  title: 'Docker Desktop und Kubernetes'
  meta:
    - property: 'og:locale'
      content: 'de_DE'
    - name: 'description'
      content: 'Docker Desktop kann das Leben eines Entwicklers erleichtern, aber je nachdem, welches Betriebssystem Sie verwenden, können einige Einschränkungen auftreten. Lesen Sie unseren Artikel und sehen Sie, ob Docker Desktop etwas für Sie sein könnte.'
    - property: 'og:type'
      content: 'website'
    - property: 'og:title'
      content: 'Docker Desktop und Kubernetes'
    - property: 'og:description'
      content: 'Docker Desktop kann das Leben eines Entwicklers erleichtern, aber je nachdem, welches Betriebssystem Sie verwenden, können einige Einschränkungen auftreten. Lesen Sie unseren Artikel und sehen Sie, ob Docker Desktop etwas für Sie sein könnte.'
    - property: 'og:image'
      content: 'https://www.blueshoe.io/img/meta/blueshoe-cloud-native-devlopment.png'
    - property: 'og:image:secure_url'
      content: 'https://www.blueshoe.io/img/meta/blueshoe-cloud-native-devlopment.png'
    - name: 'twitter:card'
      content: 'summary'
    - name: 'twitter:title'
      content: 'Docker Desktop und Kubernetes'
    - name: 'twitter:description'
      content: 'Docker Desktop kann das Leben eines Entwicklers erleichtern, aber je nachdem, welches Betriebssystem Sie verwenden, können einige Einschränkungen auftreten. Lesen Sie unseren Artikel und sehen Sie, ob Docker Desktop etwas für Sie sein könnte.'
    - name: 'twitter:image'
      content: 'https://www.blueshoe.io/img/meta/blueshoe-cloud-native-devlopment.png'
src: '/blog/docker-desktop-und-kubernetes'
img: '/img/blogs/docker-desktop-and-kubernetes.jpg'
alt: 'docker desktop und kubernetes'
preTitle: 'Einige Erfahrungen mit Docker Desktop und Kubernetes'
title: "Docker Desktop und Kubernetes"
description: 'Docker Desktop kann das Leben eines Entwicklers erleichtern, aber je nachdem, welches Betriebssystem Sie verwenden, können einige Einschränkungen auftreten. Lesen Sie unseren Artikel und sehen Sie, ob Docker Desktop etwas für Sie sein könnte.'
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
In diesem Artikel werfen wir einen Blick auf Docker Desktop im Jahr 2023 und konzentrieren uns darauf, wie Entwickler mit Kubernetes arbeiten können. Unser Team bei Blueshoe hat kürzlich eine eigene Docker Desktop-Erweiterung für unser Open-Source-Entwicklungstool Gefyra veröffentlicht. Wir möchten die bequemste Entwicklererfahrung ("DX") für Kubernetes-basierte Entwicklungsworkflows bieten, und Docker Desktop könnte eine gute Grundlage sein. Also lasst uns sehen.
<!--mehr-->

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
Im Kern ist die Idee einfach: Führen Sie einen logischen oder "virtuellen" <a href="https://kubernetes.io/de/docs/concepts/overview/what-is-kubernetes/" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">Kubernetes</a>-Cluster innerhalb eines physischen oder "Host"-Kubernetes-Clusters aus. Dieses Konzept bringt eine neue Ebene der Flexibilität mit sich und ermöglicht es Entwicklern, isolierte Umgebungen schnell und ohne den Overhead der Verwaltung mehrerer physischer Cluster bereitzustellen. Mit diesem Ansatz können Entwickler Produktionsumgebungen replizieren, sicher experimentieren und Anwendungen für das Kubernetes-Ökosystem optimieren.
:::

:::globalTitle{:size="lg" .mb-5 .mt-8}
VM-Backend auf allen Plattformen erforderlich
:::
:::globalParagraph
Docker Desktop benötigt ein virtuelles Maschinen (VM)-Backend auf allen Plattformen, einschließlich Linux. Das ist erforderlich, da Software-Container eine Linux-native Technologie sind und daher auf Windows und Mac nicht direkt unterstützt werden. Auf Windows können Sie entweder das <a href="https://learn.microsoft.com/en-us/windows/wsl/faq" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">WSL2-Subsystem</a> verwenden (eine leichte VM mit einem begrenzten Hyper-V-Toolset, um den Linux-Kernel auszuführen) oder ein Hyper-V-Backend. Je nach Windows-Edition wird die <a href="https://docs.docker.com/desktop/install/windows-install/" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">erste oder zweite Option empfohlen</a>. Auf macOS läuft Docker Desktop mit HyperKit, einem Toolkit zur Einbettung von Hypervisor-Funktionen in eine Anwendung. Auf Linux wird <a href="https://www.qemu.org/" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">QEMU</a> verwendet.
:::
:::globalParagraph
Die Frage, warum Docker Desktop auf Linux genau eine VM benötigt, wird hier beantwortet. Ich finde die aufgeworfenen Punkte nachvollziehbar, auch wenn es bedeutet, dass ich Leistungseinbußen hinnehmen muss.
:::
:::globalParagraph
Zumindest unter Linux besteht die Alternative darin, nur den Docker-Daemon (auch als Docker-Engine bezeichnet) auszuführen. Dadurch kann ich Container mit systemweiter Leistung ausführen und verwalten. Das ist ein großer Vorteil gegenüber anderen Plattformen. Es scheint jedoch nicht möglich zu sein, Docker Desktop mit einem nativen Docker-Daemon zu verwenden. Das wäre das Beste aus beiden Welten: die Funktionen und Bequemlichkeit von Docker Desktop und die Leistung einer nativen Docker-Engine. Nun, diese Option wird wahrscheinlich nie eintreten.
:::

<!--- Störer -->
::GlobalPartial{content=catcher-1}

:::globalTitle{:size="lg" .mb-5 .mt-8}
Leistung & Bequemlichkeit
:::
:::globalParagraph
Wenn es um Bequemlichkeit geht: Was genau ist die Entwicklererfahrung mit Docker Desktop? Lassen Sie mich mit dem wichtigsten Nachteil im Jahr 2023 beginnen.
:::
:::globalParagraph
Da ich täglich mit der Docker CLI (zusammen mit der Docker-Engine) in Linux arbeite, bin ich sehr daran gewöhnt. Bisher war der Docker-Daemon (prominent) auf Windows oder macOS nicht verfügbar und konnte nur über die Docker Desktop-VM auf diesen Plattformen installiert werden. In der Vergangenheit haben mein Team bei Blueshoe erhebliche Unterschiede in der Geschwindigkeit der Containerausführung und dem Ressourcenverbrauch des VM-basierten Workarounds von Docker Desktop festgestellt. Wir haben beispielsweise lokale Kubernetes-Cluster mit k3d auf Basis von Docker-Containern ausgeführt, was für Linux-Benutzer in Ordnung war, aber für Mac-Benutzer selbst mit vergleichbaren oder besseren Hardware-Spezifikationen (d.h. CPU, Speicher usw.) nahezu unmöglich war.
:::

:::globalTitle{:size="lg" .mb-5 .mt-8}
Echte Rechenleistung erforderlich
:::
:::globalParagraph
Die Startzeit von Docker Desktop, insbesondere auf macOS, ist sehr lang und die Containerleistung ist ehrlich gesagt ziemlich schlecht. Da Sie die Systemressourcen nur für die gesamte VM anpassen können, müssen Sie Ihrem Hostsystem viel verfügbare Kapazität zugunsten der Docker-VM entziehen. Der Nachteil dabei ist, dass Sie eine sehr unflexible Ressourcenzuweisung erhalten. Wenn Sie der Docker-VM viel Kapazität zuweisen, werden Sie sie wahrscheinlich auf Ihrem Host vermissen und umgekehrt. Nur eine sehr leistungsstarke Maschine (mit mehr als 8 Kernen und mehr als 16 GiB Speicher) wird für ernsthafte containerbasierte Entwicklungsaufgaben ausreichen. In der Realität führen Sie auch eine ressourcenintensive IDE, einen Webbrowser mit vielen geöffneten StackOverflow-Tabs, einen Instant Messenger und mehr auf Ihrem Entwicklungssystem aus. Das frisst auch viel Kapazität. Das Ausführen von Docker Desktop erfordert eine weitere enorme Anforderung, die einen gewöhnlichen Entwicklungsscomputer wahrscheinlich in die Knie zwingen wird. Das mindert die Bequemlichkeit und die Entwicklererfahrung von Docker Desktop erheblich.p.ahrscheinlich in die Knie zwingen wird. Das mindert die Bequemlichkeit und die Entwicklererfahrung von Docker Desktop erheblich.p.ahrscheinlich in die Knie zwingen wird. Das mindert die Bequemlichkeit und die Entwicklererfahrung von Docker Desktop erheblich.p.ahrscheinlich in die Knie zwingen wird. Das mindert die Bequemlichkeit und die Entwicklererfahrung von Docker Desktop erheblich.p.
:::
:::globalParagraph
Das Starten der integrierten Kubernetes-Distribution dauert ebenfalls sehr lange. Dies hat sich mit der WSL2-Integration unter Windows deutlich verbessert. Ich vermute, dass die Ressourcenzuweisung von WSL2 flexibler ist als bei Hyper-V-basierten VMs. Auf macOS ist dies immer noch sehr zeitaufwändig und frustrierend, wenn es mehrmals am Tag durchgeführt wird.
:::

:::globalTitle{:size="lg" .mb-5 .mt-8}
Viel besser als nur eine CLI
:::
:::globalParagraph
Aber abgesehen von der Leistung bietet Docker Desktop eine sehr saubere und intuitive grafische Benutzeroberfläche. Meiner Meinung nach ist es sehr einfach, wenn Sie bereits mit Containern gearbeitet haben. Zum Beispiel ist es ein großer Vorteil, mit einem Klick von Logs zu interaktiven Terminals zu Umgebungsvariablen zu wechseln. Das ist ein großer Vorteil gegenüber der reinen CLI (auch wenn Sie damit sehr schnell sind) und fühlt sich eher wie ein Entwicklungstool an, das nicht nur zum "Ausführen eines Software-Containers" entwickelt wurde. Möchten Sie mit Kubernetes arbeiten? - Kein Problem. Aktivieren Sie einfach das Kontrollkästchen in den Einstellungen und warten Sie, bis Kubernetes verfügbar ist.
:::
:::globalParagraph
Alles, was Sie zusätzlich benötigen, ist kubectl, die primäre Schnittstelle zu jedem Kubernetes-Cluster. Die kubeconfig wird automatisch mit dem richtigen Kontext vorbereitet, sodass kubectl sofort einsatzbereit ist.
:::

![kubernetes](/img/blogs/docker-desktop-and-kubernetes-1.jpg){.object-cover .w-full .mb-5}

:::globalTitle{:size="lg" .mb-5 .mt-8}
Einrichten von Docker Desktop Kubernetes
:::
:::globalParagraph
Die Arbeit mit Kubernetes in Docker Desktop erfordert eine ziemlich leistungsstarke Entwicklungsmaschine. Abgesehen von dieser Anforderung können Sie auf die Einschränkung stoßen, dass nur eine Kubernetes-Version verfügbar ist: diejenige, die mit der installierten Docker Desktop-Version geliefert wird. Das kann ein Problem sein, wenn Sie die spezifische Kubernetes-Version Ihres Produktionssystems abstimmen möchten (im Hinblick auf die <a href="https://12factor.net/dev-prod-parity" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">Übereinstimmung von Entwicklung und Produktion</a>).
:::
:::globalParagraph
[Wenn Sie eine bestimmte Kubernetes-Version installieren möchten, schauen Sie sich diesen Artikel an](/blog/minikube-vs-k3d-vs-kind-vs-getdeck-beiboot/){.bs-link-blue}. Sie könnten minikube mit der Option --kubernetes-version und dem Docker-Treiber verwenden, um eine beliebige verfügbare Kubernetes-Version auf Docker Desktop zu installieren. Das könnte sogar schneller sein, was die Startzeit betrifft.
:::
:::globalParagraph
Die mit Docker Desktop gelieferte Kubernetes-Distribution ist unvoreingenommen. Das ist ein Vorteil, wenn Sie mit einer produktionsnahen Konfiguration arbeiten möchten. Der Nachteil ist jedoch, dass Entwickler alle Bausteine selbst bereitstellen müssen. Zum Beispiel ist standardmäßig kein Ingress-Controller verfügbar. Im Vergleich zu k3d sind einige zusätzliche Schritte erforderlich, um ihn verfügbar zu machen:
:::


:::globalTitle{:size="lg" .mb-5 .mt-8}
Welcher Ingress-Controller sollte verwendet werden?
:::
:::globalParagraph
Sie können aus einer Reihe verschiedener Ingress-Controller für Kubernetes wählen. Die Plattform "learnk8s" pflegt eine sehr umfassende Tabelle, die praktisch alle Kubernetes Ingress-Controller vergleicht: [https://docs.google.com/spreadsheets/d/191WWNpjJ2za6-nbG4ZoUMXMpUK8KlCIosvQB0f-oq3k/edit#gid=907731238](https://docs.google.com/spreadsheets/d/191WWNpjJ2za6-nbG4ZoUMXMpUK8KlCIosvQB0f-oq3k/edit#gid=907731238){.bs-link-blue :target="_blank"}
:::

![kubernetes](/img/blogs/docker-desktop-and-kubernetes-2.jpg){.object-cover .w-full .mb-5}


:::globalParagraph
Diese Entscheidung sollte für Entwickler jedoch nicht sehr relevant sein. Wenn Sie immer noch nicht wissen, welchen Ingress-Controller Sie mit Docker Desktop verwenden sollen, können Sie wahrscheinlich jeden von ihnen wählen. Ich persönlich empfehle den <a href="https://github.com/kubernetes/ingress-nginx" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">Ingress-Nginx-Controller</a>, der auch ein offizielles Kubernetes-Projekt ist.
:::


:::globalTitle{:size="lg" .mb-5 .mt-8}
Installieren Sie Ingress-Nginx auf Ihrem Docker Desktop Kubernetes
:::
:::globalParagraph
Um es zu installieren, müssen Sie zunächst sicherstellen, dass Ihr kubeconfig-Kontext auf docker-desktop festgelegt ist. In einem Terminal können Sie den folgenden Befehl ausführen:
:::

:::BlogCode{.mb-5}
```json
> kubectl config current-context

docker-desktop
```
:::

:::globalParagraph
Wenn dieser Befehl etwas anderes sagt, setzen Sie den Kontext auf docker-desktop mit:
:::
:::BlogCode{.mb-5}
```json
> kubectl config use-context docker-desktop

Switched to context "docker-desktop".
```
:::

:::globalParagraph
Wenden Sie dann einfach die Ingress-Controller-Konfigurationen für Kubernetes an, etwa so:
:::
:::BlogCode{.mb-5}
```json
> kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.6.4/deploy/static/provider/cloud/deploy.yaml
```
:::

:::globalParagraph
Sie können den ingress-controller mit diesem Befehl überprüfen und er sollte folgendes anzeigen:
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
Et voilà, Ihr lokaler Kubernetes-Cluster ist bereit, echten HTTP-Verkehr zu bedienen.
:::
:::globalParagraph
**Wichtig:** Das Kubernetes von Docker Desktop bindet direkt an die Ports Ihres lokalen Computers. Das bedeutet, dass der gerade installierte Ingress-Controller auf Port 80 gestartet wird, der auf Ihrem Computer frei sein muss.
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
Dies ist die "hello-nginx" Anwendung, von unserem Kubernetes-Entwicklungstool <a href="https://github.com/gefyrahq/gefyra/blob/main/testing/workloads/hello_dd.yaml" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">Gefyra</a>)
:::
:::globalParagraph
Wenn Sie die Ingress-Objekte überprüfen möchten, verwenden Sie:
:::
:::BlogCode{.mb-5}
```json
> kubectl get ingress

NAME            CLASS    HOSTS                    ADDRESS   PORTS   AGE
hello-ingress   <none>   hello.127.0.0.1.nip.io             80      7s
```
:::
:::globalParagraph
Sie finden das hello-ingress-Objekt unter http://hello.127.0.0.1.nip.io erreichbar (dies erfordert, dass nip.io-Domains in Ihrem aktuellen Netzwerk funktionieren; wenn nicht, suchen Sie nach "DNS-Rebind-Schutz"). Wenn Sie Ihren Browser auf diese Adresse zeigen, werden Sie mit dem Hello Nginx-Bildschirm begrüßt.
:::

![kubernetes](/img/blogs/docker-desktop-and-kubernetes-3.jpg){.object-cover .max-w-full .mb-5}

:::globalParagraph
Es gibt ein paar Informationen über Ihren Cluster: den Namen des Pods, der diesen einfachen Bildschirm ausführt, und die IP-Adresse des Pods.
:::

:::globalTitle{:size="lg" .mb-5 .mt-8}
Wie sieht die Docker Desktop GUI aus?
:::
:::globalParagraph
Wenn Sie zu Docker Desktop zurückkehren, finden Sie alle Container, die wir gerade in Kubernetes installiert haben, auch im Abschnitt "Container".
:::

![kubernetes](/img/blogs/docker-desktop-and-kubernetes-4.jpg){.object-cover .w-full .mb-5}

:::globalParagraph
Durch Klicken auf die Schaltfläche "Details anzeigen" des Containers "k8s_hello-nginx_hellp-nginxdemo" erhalten Sie Protokolle und viele andere nützliche Informationen. Sie können sogar über den Tab "Terminal" eine interaktive Shell starten.
:::

![kubernetes](/img/blogs/docker-desktop-and-kubernetes-5.jpg){.object-cover .w-full .mb-5}

:::globalParagraph
Das ist sehr praktisch, wenn Sie den Zustand des Containers überprüfen oder einen einmaligen Verwaltungsbefehl Ihrer Anwendung ausführen möchten.
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
Weitere Ausgaben unseres Podcasts finden Sie hier:
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
Angenommen, Sie möchten eine Kubernetes-basierte Entwicklungsumgebung erstellen. Hier ist, was Sie benötigen:
:::

:::GlobalBlock{.ol-decimal .mb-5}
1. Sammeln Sie alle Ressourcen zur Bereitstellung eines Kubernetes-Clusters (z. B. benötigen Sie Helm-Charts, Kustomize-Ressourcen oder einfache YAML-Dateien). Wenn Sie sich nicht sicher sind, bitten Sie Ihren DevOps um Unterstützung.
2. Installieren Sie alle Komponenten, die die Anwendung ausmachen, in Ihren lokalen Kubernetes-Cluster (z. B. erforderliche Datenbanken, Caches, Indizes, [APIs](/our-services/api-development-agency/){.text-bs-blue .hover:underline .hover:decoration-bs-blue .hover:decoration-solid} und andere Anwendungen). Alternativ können Sie auch nur die Komponenten installieren, die für Ihre spezifische Anwendung wirklich erforderlich sind, um Rechenkapazität zu sparen.
3. Stellen Sie sicher, dass alles läuft.
:::
:::globalParagraph
Von hier aus haben Sie im Grunde genommen einige Optionen, um die Entwicklungswerkzeuge einzurichten.
:::

:::globalTitle{:size="lg" .mb-5 .mt-8}
Lokale Container-Images in Kubernetes ausführen
:::
:::globalParagraph
Kubernetes ruft normalerweise Images aus einem Container-Register ab, was bedeutet, dass Sie das von uns erstellte Image nach jeder Änderung hochladen und herunterladen müssen. Docker Desktop erleichtert dies, indem es <a href="https://kubernetes.io/docs/tasks/administer-cluster/migrating-from-dockershim/check-if-dockershim-removal-affects-you/" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">dockershim</a> verwendet, um den Image-Cache zwischen dem Docker-Engine und Kubernetes gemeinsam zu nutzen.
:::
:::globalParagraph
Das dockershim ist eine Komponente, die mit Docker Desktop Kubernetes geliefert wird und zwischen dem Kubernetes <a href="https://kubernetes.io/docs/reference/command-line-tools-reference/kubelet/" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">kubelet</a> und der Docker-Engine übersetzt.
:::
:::globalParagraph
Das ist ein großer Vorteil für Entwickler, da sie ihre Container-Images nicht hochladen und herunterladen müssen, bevor sie sie in Docker Desktop Kubernetes ausführen können. Diese Funktion ist in gewisser Weise ähnlich zu dem, was Sie <a href="https://www.blueshoe.io/blog/minikube-vs-k3d-vs-kind-vs-getdeck-beiboot/" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">mit k3d, minikube und kind erreichen können, indem Sie das Container-Image auf ihre Cluster-Knoten importieren</a>. Mit Docker Desktop müssen Sie jedoch das Container-Image wie gewohnt erstellen und es nicht in einen Kubernetes-Knoten importieren. Das ist sogar schneller als bei anderen lokalen Kubernetes-Lösungen.
:::
:::globalParagraph
Wenn Sie die Ausgabe der oben genannten <a href="https://github.com/nginxinc/NGINX-Demos/tree/master/nginx-hello-nonroot" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">"hello-nginx"</a>-Anwendung ändern möchten, werfen Sie zuerst einen Blick auf die Workload-Spezifikation:
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
Es sagt, dass das ausgeführte Container-Image "nginxdemos/hello" ist, das vom Dockerhub abgerufen wurde. Sie können diese Informationen auch mit Docker Desktop im Abschnitt "Container" finden (siehe Screenshot von oben).
:::
:::globalParagraph
Jetzt können Sie entweder eine neue Version dieses Container-Images mit docker build . -t nginxdemos/hello erstellen und den Kubernetes-Pod löschen:
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
Sie erhalten fast sofort einen neuen Pod, der jedoch diesmal Ihr benutzerdefiniertes Container-Image ausführt, das Sie gerade erstellt haben.
:::
:::globalParagraph
Anstatt das ursprüngliche Container-Image, das mit der Kubernetes-Ressource geliefert wird, wiederzuverwenden, könnten Sie auch ein benutzerdefiniertes Container-Image erstellen und es beliebig benennen. Anschließend können Sie die Bereitstellung einfach ändern und dieses Image ausführen:
:::


:::BlogCode{.mb-5}
```json
> kubectl patch deployment hello-nginxdemo -p '{"spec":{"template":{"spec":{"containers":[{"name":"hello-nginx","image":"my-custom-image"}]}}}}'
```
:::

:::globalParagraph
Dies führt zum gleichen Ergebnis: Der Pod wird mit dem neuen Image neu gestartet, das Sie gerade erstellt haben. Kubernetes wird sich nicht die Mühe machen, das Image abzurufen, da der Docker-Engine, den Sie zum Erstellen des Container-Images verwenden, genau derselbe ist wie der von Docker Desktop Kubernetes verwendete. Sie teilen sich den gleichen Image-Cache, was es sehr bequem macht, ein beliebiges Image im lokalen Cluster auszuführen.:::
:::globalParagraph
Übrigens werden dem Container alle Kubernetes-Ressourcen und -Konfigurationen zur Verfügung stehen. Dies macht ihn der Produktionsumgebung sehr nahe.
:::

:::globalTitle{:size="lg" .mb-5 .mt-8}
Verwendung zusätzlicher Tools für noch schnellere Interaktion
:::
:::globalParagraph
Wenn Sie das Container-Image nicht jedes Mal neu erstellen möchten, wenn Sie eine Code-Änderung vornehmen, benötigen Sie zusätzliche Tools. Wenn Sie einen Debugger an den Container-Prozess anhängen möchten, können Sie dies nicht einfach mit dem lokalen Kubernetes tun. Darüber hinaus müssen Sie Ihre Kubernetes-Konfigurationen im Cluster ändern, wenn Sie Umgebungsvariablen überschreiben müssen (sagen wir, Sie möchten einen DEBUG-Flag setzen).
:::
:::globalParagraph
Blueshoe hat Gefyra genau für diesen Anwendungsfall entwickelt. Damit können Sie einfach docker run ..., Verzeihung, ich meinte gefyra run ... (es ist fast ähnlich) Ihr Container-Image ausführen, ohne dass ein Kubernetes-Pod neu geladen werden muss. Auf diese Weise können Sie Ihren aktuellen Arbeitsbaum in den Container einbinden und die Hot-Reloading-Funktion in Ihrem Prozess aktivieren (sofern verfügbar). Sie können Umgebungsvariablen einfach festlegen und am besten von allem, diesen Container auf einem dedizierten lokalen Port freigeben, um noch schneller zu iterieren. Der Container verhält sich wie in einem Kubernetes-Pod (einschließlich Netzwerksemantik) und erreicht daher alle auf Kubernetes basierenden Ressourcen wie Datenbanken oder andere Anwendungen.
:::
:::globalParagraph
Dies funktioniert mit der Befehlszeilenanwendung gefyra oder alternativ können Entwickler von der <a href="https://hub.docker.com/extensions/gefyra/docker-desktop-extension" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">Gefyra Docker Desktop-Erweiterung aus dem Marketplace</a> profitieren.
:::
:::globalParagraph
Schauen Sie sich Gefyra und unseren <a href="https://gefyra.dev/getting-started/docker-desktop-kubernetes-osx/" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">Getting Started Guide zur Verwendung mit Docker Desktop Kubernetes</a> oder der <a href="https://gefyra.dev/docker-desktop-extension/" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">Docker Desktop-Erweiterung</a> an.
:::

:::globalTitle{:size="lg" .mb-5 .mt-8}
Abschließende Bemerkungen
:::
:::globalParagraph
Obwohl Docker Desktop die Entwicklung mit Kubernetes vereinfacht, gibt es immer noch einige Herausforderungen. Die Ressourcenanforderungen sind überwältigend und der Aufbau eines Clusters, der der Produktion nahe kommt, erfordert Zeit und Wissen. <a href="https://github.com/docker/extension-ideas/discussions/152" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">Ich habe eine Diskussion im Docker-Ideenboard auf GitHub erstellt</a>, um diesen Prozess in Zukunft einfacher zu gestalten. Vielleicht wird es aufgegriffen und umgesetzt.
:::
:::globalParagraph
Es gibt bereits einige interessante Docker Desktop-Erweiterungen im Marketplace, die das Entwicklungserlebnis noch weiter verbessern können. Bleiben Sie dran für einen weiteren Artikel, in dem wir vorhandene Kubernetes-basierte Entwicklungserweiterungen vorstellen möchten.
:::
:::globalParagraph
Langfristig betrachtet sehe ich die lokale Kubernetes-Entwicklung jedoch nicht als nachhaltige Option. Remote-Entwicklungsumgebungen sind die Zukunft! Getdeck Beiboot wird alle auf Kubernetes basierenden Ressourcen ausführen, und mit Tools wie Gefyra ermöglichen wir Entwicklern, in einer echten Kubernetes-basierten Entwicklungsumgebung mit nur wenigen lokal ausgeführten Containern zu arbeiten.
:::
:::globalParagraph
Wenn Sie mehr über die Kubernetes-basierte Entwicklung erfahren möchten, <a href="https://www.linkedin.com/in/michael-schilonka/" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">folgen Sie mir auf LinkedIn</a> oder schreiben Sie uns bei Blueshoe.
:::



:::BlogRelatedPosts{:url='["/blog/minikube-vs-k3d-vs-kind-vs-getdeck-beiboot", "/blog/docker-vs-podman", "/blog/kubernetes-development/", "/blog/kubernetes-logging-with-promtail-loki-and-grafana", "/blog/performance-comparison-gke-vs-eks"]'}

:::

