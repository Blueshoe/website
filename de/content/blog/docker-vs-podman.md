---
head:
  title: 'Docker vs. Podman'
  meta:
    - property: 'og:locale'
      content: 'de_DE'
    - name: 'description'
      content: 'Hier findest du einen Überblick darüber, was jedes Tool ist und warum du dich möglicherweise für das eine oder andere entscheiden möchtest bzw. welches Tool am besten für deine individuellen Bedürfnisse geeignet sein könnte.'
    - property: 'og:type'
      content: 'website'
    - property: 'og:title'
      content: 'Docker vs. Podman'
    - property: 'og:description'
      content: 'Hier findest du einen Überblick darüber, was jedes Tool ist und warum du dich möglicherweise für das eine oder andere entscheiden möchtest bzw. welches Tool am besten für deine individuellen Bedürfnisse geeignet sein könnte.'
    - property: 'og:image'
      content: 'https://www.blueshoe.io/img/meta/blueshoe-cloud-native-devlopment.png'
    - property: 'og:image:secure_url'
      content: 'https://www.blueshoe.io/img/meta/blueshoe-cloud-native-devlopment.png'
    - name: 'twitter:card'
      content: 'summary'
    - name: 'twitter:title'
      content: 'Docker vs. Podman'
    - name: 'twitter:description'
      content: 'Hier findest du einen Überblick darüber, was jedes Tool ist und warum du dich möglicherweise für das eine oder andere entscheiden möchtest bzw. welches Tool am besten für deine individuellen Bedürfnisse geeignet sein könnte.'
    - name: 'twitter:image'
      content: 'https://www.blueshoe.io/img/meta/blueshoe-cloud-native-devlopment.png'
src: '/blog/docker-vs-podman'
img: '/img/blogs/docker-vs-podman.jpg'
alt: 'Docker vs. Podman'
preTitle: 'Ein kritisches Verständnis für Entwicklung und Produktion'
title: "Docker vs. Podman"
description: 'Hier findest du einen Überblick darüber, was jedes Tool ist und warum du dich möglicherweise für das eine oder andere entscheiden möchtest bzw. welches Tool am besten für deine individuellen Bedürfnisse geeignet sein könnte.'
date: '13.02.2023'
author:
  - Michael Schilonka
technology:
    - Docker
productUpdates: []
topic:
  - Entwicklung
---
In diesem Artikel vergleichen wir Podman und Docker, um zu sehen, wie sie sich gegeneinander behaupten. Wir beginnen mit einem Überblick darüber, was jedes Tool ist und warum du dich möglicherweise für das eine oder andere entscheiden möchtest. Anschließend gehen wir auf die Details ein, was jedes Tool einzigartig macht, bevor wir zu unserem Fazit kommen, welches Tool am besten für deine Bedürfnisse geeignet ist: Podman oder Docker!
<!--more-->

![Docker vs. Podman](/img/blogs/docker-vs-podman.jpg){.object-cover .max-w-full .mb-5}

:::BlogNavigationCard{:title="Was wir in diesem Beitrag betrachten werden:"}

:::

:::globalTitle{:size="lg" .mb-5}
Was ist Docker im Jahr 2023?
:::
:::globalParagraph
Docker ist ein langjähriger Akteur in der Container-Welt und existiert seit 2013. Wenn du die Branche schon eine Weile verfolgst, hast du sicherlich schon von Docker gehört oder es sogar selbst verwendet!
:::
:::globalParagraph
In den letzten Jahren hat sich das Unternehmen darauf konzentriert, die Entwicklererfahrung zu verbessern und sicherzustellen, dass Container in allen Phasen des Anwendungslebenszyklus effektiv von Entwicklern genutzt werden können. Es bietet auch eine umfangreiche Funktionssammlung für den Betrieb von Containern in der Produktion. Das Unternehmen hinter der Technologie, Docker Inc., hat auch <a href="https://twitter.com/romeensheth/status/1597808112135651329" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">eine fantastische Geschäftsumstellung gemacht und ist jetzt sehr profitabel</a> mit seinem Abonnementmodell. Sich auf Docker als kommerziell unterstütztes Produkt zu verlassen, könnte eine solide Entscheidung für die Zukunft sein.
:::
:::globalParagraph
Da Docker schon lange auf dem Markt ist, unterstützt es auch viele Funktionen, wie den <a href="https://docs.docker.com/engine/security/rootless/" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">Rootless-Modus</a> (dazu später mehr). Dadurch ist es nicht mehr erforderlich, den Docker-Daemon mit Root-Rechten auf den Servern auszuführen. Das macht es für alle einfacher, da du Container verwenden kannst, ohne dich um privilegierten Zugriff oder die Sicherheitsprobleme kümmern zu müssen, die du als Root-Benutzer sonst hättest.
:::
:::globalParagraph
Docker bietet eine sehr umfassende Dokumentation zu nahezu jedem Thema, das bei der Arbeit mit Containern aufkommt.
:::

:::globalTitle{:size="lg" .mb-5}
Was ist das Besondere an Podman?
:::
:::globalParagraph
Podman ist eine relativ neue Container-Laufzeitumgebung, hat aber bereits Einzug in viele Standard-Software-Repositories für Linux gehalten. Du musst keine externen Quellen hinzufügen, um es auf deinem Host zu installieren. Es ist manchmal bereits bei einer frischen Installation verfügbar.
:::
:::globalParagraph
Podman läuft ohne Daemon und bietet eine Entwicklungserfahrung, die sich sehr nahe an der von Docker anfühlt. Die meisten Befehle in der Podman-Befehlszeilenschnittstelle sind identisch mit denen der Docker-Befehlszeile. Podman Desktop, eine grafische Benutzeroberfläche für Podman, sieht auch fast identisch mit Docker Desktop aus.
:::
:::globalParagraph
Die Dokumentation von Podman ist ehrlich gesagt etwas schlecht und lässt bestimmte Themen vollständig aus.
:::
:::globalParagraph
Die folgende Abbildung zeigt einen Graphen von Google Trends, der das wachsende Interesse an Podman in den letzten Jahren deutlich zeigt.
:::
![docker-vs-podman](/img/blogs/docker-vs-podman-1.jpg){.object-cover .max-w-full .mb-5}
:::globalParagraph
Podman ist ein von Red Hat gesponsertes Community-Projekt.
:::

:::globalTitle{:size="lg" .mb-5}
Was unterscheidet Podman von Docker?
:::
:::globalParagraph
Podman und Docker haben viele ähnliche Eigenschaften. Beide sind Tools zur Verwaltung von Containern unter Linux, die auf den gleichen Kernel-Funktionen (wie Namespaces und cgroups) aufbauen, die es ihnen ermöglichen, Prozesse voneinander isoliert auszuführen ('Sandboxing'). Die Benutzeroberfläche ist nahezu identisch, was einen einfachen und praktischen Wechsel zwischen den beiden ermöglicht. Du kannst sogar die meisten Container-Images, die du bereits hast, weiterhin verwenden (sofern sie mit dem <a href="https://github.com/opencontainers/image-spec/blob/main/spec.md" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">OCI-Container-Image-Format</a> kompatibel sind).
:::
:::globalParagraph
Lass uns einen genaueren Blick auf die Unterschiede zwischen Podman und Docker werfen.
:::

:::globalTitle{:size="lg" .mb-5}
Daemon – oder kein Daemon
:::
:::globalParagraph
Docker führt einen <a href="https://man7.org/linux/man-pages/man7/daemon.7.html" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">Daemon-Prozess</a> ('docked') auf dem Host-System aus, der in der Regel mit Root-Rechten ausgestattet ist. Was macht der Daemon-Prozess in den Tiefen des Systems? Nun, im Grunde alles, was zur Verwaltung von Containern auf dem Host benötigt wird: Überwachung laufender Container-Instanzen, Verwaltung der Container-Images, Bereitstellung von Speichervolumes und vieles mehr. Er erstellt Container-Netzwerke auf Anfrage und kümmert sich um alle niedrigstufigen Container-Dinge, insbesondere <a href="https://www.docker.com/blog/what-is-containerd-runtime/" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">containerd</a> und <a href="https://github.com/opencontainers/runc" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">runc</a>. Der Daemon-Prozess erstellt eine <a href="/our-services/api-development-company/" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid">API-Schnittstelle</a> mit einem HTTP-Protokoll, um seine Funktionalität für alle Arten von Benutzeroberflächen zugänglich zu machen, einschließlich der <a href="https://docs.docker.com/engine/reference/commandline/cli/" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">Docker-Befehlszeile</a>. Abhängig von der Plattform wird die Docker-Schnittstelle über einen Unix-Socket, einen benannten Pipe oder einen TCP-Port materialisiert (mit vielen Optionen, um sie sicher zu machen). Der Docker-Daemon läuft mit sehr geringem Ressourcenverbrauch.
:::

:::globalTitle{:size="sm" :tag="h3" .mb-5}
Kein Daemon mit Podman
:::
:::globalParagraph
Podman verzichtet dagegen auf den Daemon-Prozess ('daemonlose Container-Engine'). Das Container-Management erfolgt direkt vom Client aus. Wenn Podman mit einem Benutzer außer Root aufgerufen wird, sind nur Operationen möglich, die dieser Benutzer berechtigt ist. Das begrenzt die Möglichkeiten für den Benutzer - aber auch für Eindringlinge, die einen Container von innen kentern.
:::
:::globalParagraph
Aus Sicherheitssicht ist das 'rootless'-Phänomen also eine ziemlich gute Idee. Und doch könnte es irgendwann schnell zu Ende gehen. Darauf werden wir im nächsten Abschnitt genauer eingehen.
:::

:::globalTitle{:size="sm" :tag="h3" .mb-5}
Podman für die Produktion - etwas komplizierter
:::
:::globalParagraph
Ein entscheidender Nachteil des Fehlens eines Daemon-Prozesses bei der Verwendung von Podman für Produktions-Workloads wird deutlich, wenn versucht wird, Podman für Produktions-Workloads auszuführen. Mit Docker kannst du beispielsweise einfach eine 'Restart-Policy' für Container angeben und sicherstellen, dass sie im Falle eines Absturzes neu gestartet werden. Podman führt keinen Prozessmonitor aus und muss diese Aktivität daher an anderer Stelle delegieren: Hier kommt unser guter alter Freund systemd ins Spiel. Obwohl <a href="https://en.wikipedia.org/wiki/Systemd" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">systemd</a> sehr verbreitet und wahrscheinlich von den meisten Systemadministratoren gut verstanden wird, handelt es sich dennoch um eine sehr komplexe zusätzliche Lösung, die mit eigenen Kosten verbunden ist. Podman unterstützt den Benutzer, indem es die systemd-Einheiten generiert (die Konfiguration, mit der systemd weiß, wie ein Prozess überwacht und verwaltet werden soll), aber dies ist ein völlig anderes Ökosystem. Wenn du von Docker kommst, kann dies eine gewisse Einarbeitungszeit erfordern, um alles mit dem gewünschten Verhalten zum Laufen zu bringen. Ein weiterer Pluspunkt für systemd ist jedoch, dass eine Einheit genauso gut mit verringerten Benutzerrechten ausgeführt werden kann.
:::
:::globalParagraph
Ob Docker oder Podman - wenn die Produktionsbereitstellungen ernst genommen werden sollen, muss letztendlich irgendwo ein Daemon-Prozess involviert sein. Und natürlich, wenn du die Podman REST-API verwenden möchtest, <a href="https://github.com/containers/podman/tree/main/pkg/bindings" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">gibt es dafür einen Dienstprozess (Daemon)</a>.
:::

:::GlobalPodcastSection{:videoId="tyvE9VlSWkE" :videoPosition="left" .mb-6}
::::GlobalTitle{:tag="h3" .mb-6}
Tools for the craft - Ausgabe 1: Kubernetes-Entwicklungsumgebungen
::::
::::globalParagraph{:font-size="lg" .mb-4}
Hier findest du die erste Ausgabe unseres Kubernetes-Podcasts "Tools für das Handwerk: Die Navigation im Kubernetes-Ökosystem". Michael und Robert sprechen ausführlich über die Feinheiten der lokalen Kubernetes-Entwicklung und geben auch einige echte Codierungsbeispiele.
::::
::::globalParagraph{:font-size="lg" }
Weitere Ausgaben unseres Podcasts findest du hier:
::::
::::GlobalButton{:url="/podcast/" :label="Weitere Podcast-Ausgaben anzeigen" :color="green"}
::::
:::

:::globalTitle{:size="lg" .mb-5}
Rootful und rootless
:::
:::globalParagraph
Eine sehr nützliche (und manchmal unterschätzte) Funktion von Docker sind Overlay-Netzwerke. Diese ähneln 'echten' (virtuellen) Netzwerken auf einer Host-Maschine. Docker-Netzwerke ermöglichen alle Arten von komplexen Verbindungstopologien mit Routen, NATs und IP-Pools usw. Das ist besonders nützlich in Situationen, in denen eine bestimmte Produktionsumgebung erfüllt werden soll und verschiedene Dienste, die eine Anwendung ausmachen, locker gekoppelt werden sollen. Tatsächlich läuft jeder Container in seinem eigenen Namespace im Linux-Kernel, sodass es möglich ist, Ressourcenbeschränkungen für jeden Container, Netzwerkeinstellungen usw. festzulegen. Einer der grundlegenden Gedanken bei der Aufteilung des Linux-Kernels in mehrere Räume war die Prozesssicherheit. Im Moment ist dies größtenteils nur mit Root-Rechten möglich. Dennoch ist <a href="https://lwn.net/Articles/540087/" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">Sandboxing mit Namespaces auch mit nicht privilegierten Benutzern möglich</a>.
:::

:::globalTitle{:size="sm" :tag="h3" .mb-5}
Wie es in der Realität aussieht
:::
:::globalParagraph
Wichtige Funktionen verschwinden, wenn Docker im Rootless-Modus ausgeführt wird, und das gilt auch für Podman. Ich habe herausgefunden, dass es eine Option gibt, Podman rootful auszuführen, um diese Fähigkeiten, insbesondere eine ordnungsgemäße Netzwerkkommunikation, zu erlangen.
:::
:::globalParagraph
In der Praxis hat das Podman-Entwicklungsteam eine meiner bescheidenen Meinung nach fragwürdige Lösung für das fehlende Networking geschaffen, indem es das Konzept des 'Pods' als Alternative eingeführt hat.
:::
:::globalParagraph
Mit Podman kannst du mehrere Container in einem Pod kompilieren. 'Pod' ist der Name für eine höherstufige Organisation von Kernel-Namespaces. Alle Container, die denselben Pod teilen, befinden sich tatsächlich im selben Kernel-Namespace(s). Am wichtigsten ist, dass sie denselben <a href="https://man7.org/linux/man-pages/man7/network_namespaces.7.html" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">Netzwerk-Namespace</a> teilen. Dadurch können die Container-Prozesse über TCP-Sockets miteinander kommunizieren. Du kannst beispielsweise einen Prozess auf Port localhost:8000 und einen anderen Prozess auf localhost:8001 ausführen. Beide Prozesse können über den TCP-Socket auf localhost miteinander kommunizieren. Dies wäre nicht möglich für zwei separate 'podman run ...' (oder mit 'docker run ...'), da sie standardmäßig voneinander getrennt sind. Die Verwendung des Pod-Konzepts beseitigt letztendlich die Notwendigkeit für Networking vollständig und somit auch die Notwendigkeit für eine rootful-Betrieb.
:::

:::globalTitle{:size="md" :tag="h3" .mb-5}
Der Podman "Infra Container"
:::
:::globalParagraph
Übrigens: Jedes Podman-Pod erhält einen speziellen Container namens "Infra-Container". Er tut nichts weiter, als einzuschlafen, sobald das Pod erstellt ist. Alle Attribute, die das Pod definieren, werden tatsächlich diesem speziellen Container zugewiesen, einschließlich Port-Bindungen, Kernel-Namespaces, Ressourcenbeschränkungen usw. Sobald das Pod erstellt ist, können diese Attribute nie wieder geändert werden. Angenommen, du erstellst ein neues Pod und fügst später einen Container hinzu, der einen neuen Port mit dem Host bindet - Podman wird dazu nicht in der Lage sein. Du musst das gesamte Pod mit der neuen Port-Bindung (oder anderen Attributen) neu erstellen.

:::globalTitle{:size="sm" :tag="h3" .mb-5}
Privilegien vs. Fähigkeiten
:::
:::globalParagraph
Das Ausführen eines Prozesses mit reduzierten Privilegien geht mit erheblichen Einschränkungen der Fähigkeiten einher. Das macht Sinn, insbesondere um zu verhindern, dass ausgenutzte Container-Prozesse Systemänderungen vornehmen oder auf andere Prozesse zugreifen können. Das Herabsetzen der Ausführungsprivilegien ist im Allgemeinen vorzuziehen, und ich nehme dieses Thema sehr ernst. Der Verzicht auf den Sandbox-Mechanismus zugunsten fehlender Netzwerkfähigkeiten führt jedoch zu einer anderen Klasse von Systemanfälligkeiten (<a href="https://de.wikipedia.org/wiki/Privilege_Escalation" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">wir haben dies in der Vergangenheit häufig erlebt</a>).
:::

:::globalTitle{:size="lg" .mb-5}
Podman-Pods und Kubernetes
:::
:::globalParagraph
Das Podman-Team behauptet, dass die Arbeit mit Podman-Pods den Übergang zu Kubernetes viel einfacher macht. Tatsächlich kannst du mit Podman ein Pod erstellen (alle Container, die du benötigst, hinzufügen; bestimmte Attribute festlegen) und automatisch eine gültige Kubernetes YAML-Datei daraus generieren. Und ja, die technische Grundlage ist die gleiche. Aber trotzdem, wer hat nach diesem Feature gefragt?
:::

:::globalTitle{:size="sm" :tag="h3" .mb-5}
Der monolithische Pod
:::
:::globalParagraph
<a href="https://developers.redhat.com/blog/2019/01/15/podman-managing-containers-pods" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">Ich habe dieses Tutorial gefunden</a>, das vorschlägt, einen Webserver, einen Anwendungsserver und die Datenbank in einen Podman-Pod zu packen. Das wäre praktisch, wenn ich dies mit Podman auf einem Serverhost betreiben wollte. Aber hier ist der Punkt. Wer mit Erfahrung in Kubernetes würde jemals eine solche Pod-Definition in einer Kubernetes-Umgebung anwenden? Ich erhalte einen monolithischen Pod, der alles enthält, was eine Anwendung ausmacht. Was ist mit Skalierbarkeit, Ausfallsicherheit und natürlich Sicherheit? Eine ernsthafte Kubernetes-Bereitstellung verwendet abstrakte Arbeitslastdefinitionen, die in "Deployments", "StatefulSets" und anderen höheren Kubernetes-Objekten deklariert sind. Ich habe dieses Muster noch nie in der realen Welt gesehen (was nicht bedeutet, dass es nicht existiert). Die Verwendung von nackten Pods scheint für Kubernetes überhaupt kein praktischer Ansatz zu sein. Wenn es jedoch verwendet wird, um echte Kubernetes-Strukturbereitstellungsmuster wie Sidecars oder Adapter zu konstruieren, wäre ich sehr glücklich.
:::

:::globalTitle{:size="sm" :tag="h3" .mb-5}
Ungerechtfertigte Versprechungen
:::
:::globalParagraph
Daher finde ich dieses Feature irreführend, insbesondere in Bezug auf die Kommunikation und Dokumentation von Podman. Nein, ich kann keinen Podman-Pod auf einem lokalen Rechner definieren und ihn so einfach in die Produktionsumgebung von Kubernetes migrieren. In Kubernetes verwenden wir starke Netzwerkmechanismen wie Lastenausgleicher, IP-Routing, Netzwerkrichtlinien und damit lose Kopplung.
:::

:::globalTitle{:size="md" .mb-5}
Fazit
:::
:::globalParagraph
Ich hoffe, dieser Artikel hat dir ein besseres Verständnis für die Unterschiede zwischen Podman und Docker gegeben. Wie du sehen kannst, gibt es viele Ähnlichkeiten zwischen den beiden Tools, aber sie haben auch einige wesentliche Unterschiede, die je nach Anwendungsfall eine Option möglicherweise besser geeignet machen als die andere. Obwohl Podman sich noch in einem frühen Entwicklungsstadium befindet, hat es bereits Anzeichen dafür gezeigt, eine würdige Alternative zu Docker zu sein, indem es eine einfachere Benutzererfahrung bietet und gleichzeitig die Kompatibilität mit vorhandenen Images aus anderen Registern wie Docker Hub oder Google Container Registry (GCR) beibehält. Ich bin gespannt, wie sich diese Tools im Laufe der Zeit weiterentwickeln, während sie beide neue Funktionen hinzufügen. Schau dir auch <a href="https://podman-desktop.io/" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">Podman Desktop</a> an. Ich bin mir nicht sicher, ob Podman auch den Weg der Entwicklererfahrung („DX“) wie Docker geht oder ob sie versuchen, Produktionsserver zu betreiben. Lass mich wissen, was du denkst.
:::
:::globalParagraph
Fühle dich frei, <a href="https://www.linkedin.com/in/michael-schilonka/" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">folge mir auf LinkedIn</a> oder trete unserem <a href="https://discord.gg/eQBkQwYAYy" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">Discord</a> bei.
:::


:::BlogRelatedPosts{:url='["/blog/minikube-vs-k3d-vs-kind-vs-getdeck-beiboot", "/blog/strategien-fur-schlanke-docker-images", "/blog/evolution-der-applikationsentwicklung-zu-einem-cloud-native-ansatz"]'}

:::
