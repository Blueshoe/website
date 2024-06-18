---
head:
  title: 'Kubernetes für Anfänger: Der Cluster'
  meta:
    - property: 'og:locale'
      content: 'de_DE'
    - name: 'description'
      content: 'Kubernetes ist “das ganz heiße Zeug”, aber schwer zugänglich für Entwickler, Anfänger und Nicht-Entwickler. Hier findest du einen Startpunkt.'
    - property: 'og:type'
      content: 'website'
    - property: 'og:title'
      content: 'Kubernetes für Anfänger: Der Cluster'
    - property: 'og:description'
      content: 'Kubernetes ist “das ganz heiße Zeug”, aber schwer zugänglich für Entwickler, Anfänger und Nicht-Entwickler. Hier findest du einen Startpunkt.'
    - property: 'og:image'
      content: 'https://www.blueshoe.de/img/blogs/header_unikube-kubernetes.jpg'
    - property: 'og:image:secure_url'
      content: 'https://www.blueshoe.de/img/blogs/header_unikube-kubernetes.jpg'
    - name: 'twitter:card'
      content: 'summary'
    - name: 'twitter:title'
      content: 'Kubernetes für Anfänger: Der Cluster'
    - name: 'twitter:description'
      content: 'Kubernetes ist “das ganz heiße Zeug”, aber schwer zugänglich für Entwickler, Anfänger und Nicht-Entwickler. Hier findest du einen Startpunkt.'
    - name: 'twitter:image'
      content: 'https://www.blueshoe.de/img/blogs/header_unikube-kubernetes.jpg'
src: '/blog/kubernetes-fuer-anfaenger'
img: '/img/blogs/header_unikube-kubernetes.jpg'
alt: 'header_unikube-kubernetes'
preTitle: 'Für die, die keinen Code schreiben aber mit Kubernetes arbeiten'
title: "Kubernetes für Anfänger: Der Cluster"
description: 'Kubernetes ist “das ganz heiße Zeug”, aber schwer zugänglich für Entwickler, Anfänger und Nicht-Entwickler. Hier findest du einen Startpunkt.'
date: '24.11.2022'
autor:
  - Tina Söll
technologie: 
  - Kubernetes
  - Cloud Native
marketing: []
sonstiges: 
  - Projekt Management
---
::globalParagraph
Kubernetes ist derzeit “das ganz heiße Zeug”. Auch für Entwickler ist es manchmal schwierig, Zugang zu dieser Technologie zu bekommen. Schwieriger ist es aber für Nicht-Entwickler. Was kann Kubernetes? Was unterscheidet die Anbieter? Welche Vorteile hat es?
::
::globalParagraph
Wir betrachten diese Fragen und geben einen Überblick über Kubernetes und verwandte Themen. Nicht bis ins kleinste Detail, aber so, dass auch Nicht-Entwickler verstehen, was Kubernetes ist.
::
<!--more-->

![header_unikube-kubernetes](/img/blogs/header_unikube-kubernetes.jpg){.object-cover .max-w-full .mb-5}

:::BlogNavigationCard{:title="Inhaltsverzeichnis"}

:::

:::globalTitle{:size="lg" .mb-5}
Was ist Kubernetes
:::
:::globalParagraph
Kubernetes selbst ist keine Dienstleistung, die einzelne Anbieter anbieten. Vielmehr ist Kubernetes eine open-source Technologie, um Applikationen, die in Containern verpackt sind, zu managen und zu orchestrieren.
:::
:::globalParagraph
Theoretisch kann Kubernetes kostenlos auf GitHub heruntergeladen werden und wird dann auf lokalen Servern oder öffentlich (z.B. für einen Kunden) bereitgestellt.
:::
:::globalParagraph
Zusätzlich gibt es kostenpflichtige Angebote, die Kubernetes als open-source Technologie nutzen, aber darüber hinaus noch weitere Services zur Vereinfachung und Erweiterung von Kubernetes bereitstellen. Die bekanntesten Beispiele dafür sind Azure Kubernetes Service (AKS), Google Kubernetes Engine (GKE) oder Amazon Elastic Kubernetes Service (EKS). Die Nutzung dieser Services wird wahrscheinlich von den meisten Entwicklern genutzt werden.
:::
:::globalParagraph
Kubernetes ist in all diesen Angeboten weiterhin kostenlos, nicht aber die Cloud-Ressourcen oder Oberflächen, die die Anbieter bereitstellen. Die Kosten für die Verwaltung von EKS, AKS oder GKE sind oft gering, die Rechen- und Speicherkosten für Ressourcen, die die Dienste für Cloud-Ressourcen oder Oberflächen erheben, können sich aber schnell summieren.
:::

:::globalTitle{:size="md" .mb-5}
Back to the roots: Monolithen vs. Microservices
:::
:::globalParagraph
Sehr vereinfacht gesagt gibt es in der Software-Entwicklung 2 Ansätze, um Software zu entwickeln: den monolithischen Ansatz und den Bau von Microservices.
:::
:::globalParagraph
Bei Monolithen sind alle relevanten Bestandteile in einer Applikation enthalten. Bei Microservices gibt es für jeden Bestandteil dagegen jeweils eine eigenständige Applikation, die nur einen eng umrissenen Aufgabenteil bearbeitet. Benötigt ein Microservice zur Erledigung seiner Aufgaben Input eines anderen Microservice, kommunizieren die einzelnen Microservices via Schnittstellen untereinander. Ein Vorteil von Microservices gegenüber einer monolithischen Architektur ist, dass, sollte ein Microservice ausfallen, nicht zwangsläufig das ganze System nicht mehr einsatzbereit ist. Es gibt aber nicht das überlegene Verfahren. Blueshoe nutzt bei seiner Arbeit meist Microservices, da für unsere Zwecke hier die Vorteile überwiegen.
:::
:::globalParagraph
Zur Nutzung von Kubernetes ist es nicht notwendig, dass Microservices genutzt werden. Kubernetes kann auch zum Betreiben von Monolithen herangezogen werden.
:::
:::globalParagraph
Für die Nutzung von Kubernetes ist es aber unabdingbar, dass die Softwareanwendung in einen Container verpackt ist - und das geht mit Monolithen und Microservices.
:::

![monolith vs. microservices](/img/blogs/kubernetes-explained-for-non-developers-1.jpg){.object-cover .max-w-full .mb-5}

:::globalTitle{:size="md" .mb-5}
Back to the roots: Container
:::
:::globalParagraph
Um auch Nicht-Entwicklern eine kurzen Einblick zu geben, warum Container genutzt werden, wollen wir ganz kurz und vereinfacht darauf eingehen.
:::
:::globalParagraph
Bei Software-Containern handelt es sich auch buchstäblich um Container. Sie bilden eine vordefinierte Umwelt, in der Code ausgeführt werden kann. Ein Container enthält also nicht nur Software, sondern bietet auch die Möglichkeit, die Umgebung, in der die Software ausgeführt wird (also den Container), vorzukonfigurieren. Bevor die Praxis der containerisierten Software aufgekommen ist, musste Software immer in unterschiedlichen Umgebungen ausgeführt werden, z.B. auf verschiedenen Computern. Es bestand also nicht nur die Herausforderung, dass die Software an sich fehlerfrei sein musste, sondern jede Umgebung musste auch gleich konfiguriert sein. Mit der Containerisierung von Software stellt der Container selbst die Umgebung dar, in der die Software ausgeführt wird. Der Container kann also auf unterschiedlichen Servern betrieben werden, ohne dass die einzelnen Server jeweils einzeln konfiguriert werden müssen.
:::
:::globalParagraph
Der bekannteste Anbieter, der das Verpacken von Software in Containern erlaubt, ist Docker. Daraus ergeben sich also “Docker Container.” “Container” wird also oft mit “Docker-Container” synonym verwendet. Für die Nutzung von Kubernetes ist es notwendig, dass Software in Container verpackt ist. Mit welcher Technik das herbeigeführt wird, ist nicht relevant.
:::
:::globalParagraph
Wie groß die einzelnen, in Container verpackten Applikationen dabei sind (siehe oben: monolithische Architektur vs. Microservices) ist ebenfalls nicht relevant - Kubernetes kann für beide Ansätze genutzt werden.
:::
:::globalParagraph
Die Software, die in einen Container verpackt wurde, wird an einem definierten Ort abgelegt. Das wird als Docker-Image bezeichnet. Wird die Software ausgeführt, wird immer auf dieses Image referenziert. Die Software kann also in mehreren Instanzen ausgeführt werden, wenn auf dasselbe Image referenziert wird.
:::

:::globalTitle{:size="lg" .mb-5}
Was Kubernetes genau macht
:::
:::globalParagraph
Die open-source Technologie Kubernetes erlaubt es, Container in einem definierten Umfeld zu verwalten. Dieses Umfeld muss sich von seiner Umgebung klar abgrenzen, also einen so genannten Cluster bilden und auf einem lokalen System oder z.B. einer öffentlichen Cloud (die für Kunden zugangsbeschränkt werden kann) hergestellt werden.
:::
:::globalParagraph
Ein Cluster ist ein Zusammenschluss von verschiedenen Teilelementen, die zur Ausführung der Kubernetes Technologie benötigt werden, zum Beispiel Nodes, Pods, etc. Eine Node entspricht dabei einem Server, der eine Softwareapplikation ausführt. Damit eine Node eine Softwareapplikation ausführen kann, muss die Software in einem Container verpackt sein und in der Node bereitgestellt werden (mehr dazu später).
:::

:::globalTitle{:size="md" .mb-5}
“Server vs. Node” oder: “pet vs. cattle”
:::
:::globalParagraph
Ohne die Nutzung von Kubernetes wird Software direkt auf einem Server ausgeführt. Die Software ist dabei nur auf diesem einen Server verfügbar. Ist der Server nicht mehr erreichbar, kann auch die Software nicht mehr ausgeführt werden.
:::
:::globalParagraph
Neben der Pflege der eigentlichen Software ist bei dieser Lösung die Serverpflege essentiell. Der Server ist damit wie ein pet - ein Haustier. Er wird gehegt und gepflegt, es soll ihm gut gehen, er soll lange leben und nie krank werden. Alles, damit der Server die Software stabil ausliefern kann.
:::
:::globalParagraph
Demgegenüber ist eine Node ein anonymes Arbeitstier oder eine Drohne - also ein cattle. Nur eine Nummer, ohne Namen, ohne Gesicht. Stirbt ein Arbeitstier, wird es, ohne Aufsehen zu erregen, direkt durch ein anderes ausgetauscht. Viele Arbeitstiere bilden eine Herde anonymer Individuen. Analog dazu bilden mehrere Nodes einen Cluster.
:::
:::globalParagraph
Wird Software auf einem individuellen Server ausgeführt und der Server ist nicht mehr erreichbar, kann die Software auch nicht mehr ausgeführt werden, der Service ist für die User nicht mehr nutzbar. Ist die Node, auf der eine in Containern verpackte Applikation ausgeführt wird, nicht mehr erreichbar, kann der Container sehr schnell auf eine andere Node transferiert und damit die Software weiter ausgeführt werden.
:::
:::globalParagraph
Für die Verschiebung eines Containers in eine andere Node sorgt dabei Kubernetes “ganz von selbst”. Kubernetes ist im Beispiel also wie ein Aufseher, der dafür sorgt, dass immer ein Arbeitstier zur Verfügung steht, das die Applikation trägt. Kubernetes wird auch oft als ein Dienst bezeichnet, der Container orchestriert, indem er die Container wie ein Dirigent verfügbaren Nodes zuordnet.
:::

:::globalTitle{:size="md" .mb-5}
Alternativen zu Kubernetes
:::
:::globalParagraph
Kubernetes ist nicht der einzige Dienst, um die Ausführung von Software in Container auf virtuellen Maschinen (den Nodes) zu orchestrieren. Neben Kubernetes gibt es noch eine ganze Reihe anderer Anbieter: Docker Swarm, Nomad oder Kontena seien hier als Alternativen genannt. Hier gibt es einen Überblick über die <a href="https://www.linux-magazin.de/ausgaben/2018/08/kubernetes-alternativen/" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">Vor- und Nachteile dieser und weiterer Applikationen im Vergleich zu Kubernetes</a>. (Stand: 19.05.2022):
:::

:::globalTitle{:size="md" .mb-5}
Warum Kubernetes nutzen?
:::
:::globalParagraph
Kubernetes bietet unbestreitbar viele Vorteile - aber gleichzeitig auch einige Nachteile. Ob Kubernetes genutzt werden soll oder nicht, will also gut überlegt sein.
:::
:::globalParagraph
Wir haben hier einige Argumente für und gegen Kubernetes zusammengetragen.
:::

![monolith vs. microservices](/img/blogs/kubernetes-explained-for-non-developers-2.jpg){.object-cover .max-w-full .mb-5}

:::globalParagraph
Jedem Vorteil von Kubernetes kann auch ein Nachteil zugeordnet werden. Eine einfache Antwort auf die Frage “Soll ich Kubernetes nutzen?” gibt es also nicht. Jede Antwort ist so individuell wie jede Software oder jeder Kunde von Blueshoe.
:::
:::globalParagraph
Wir bei Blueshoe haben uns aus folgenden Gründen entschieden Kubernetes als Erste-Wahl-Lösung zur Orchestrierung von Applikationen in Container zu nutzen:
:::

:::GlobalBlock{.ul-disk .mb-5}
- Die Projekte, die wir betreuen bringen meist so komplexe Applikationen hervor, das sich der Einsatz von Kubernetes lohnt
- Unsere Entwickler können nicht alle alternativen Produkte, die es zur Orchestrierung von containerisierter Software gibt, gleich gut beherrschen. Wir haben uns entschlossen, Kubernetes-Experten zu werden. Unser Wissen dabei können wir auf viele Projekte übertragen. Die Ramp-up-Phase für uns war hoch, aber wir profitieren nun davon
- Kubernetes wird von (fast) allen Cloud-Anbietern unterstützt - anders als alternative Systeme zur Orchestrierung von containerisierter Software. Damit sind unsere Kunden bei der Anbieterwahl nicht beschränkt.
:::

:::globalTitle{:size="md" .mb-5}
Soll man Kubernetes selbst hosten oder einen managed Service in Anspruch nehmen?
:::
:::globalParagraph
Wie oben beschrieben handelt es sich bei Kubernetes um eine open-source Technologie, die Nutzung ist also grundsätzlich (lizenz)kostenfrei und kann vollkommen selbstständig gehostet werden. AKS, GKE, EKS oder andere Anbieter haben dazu gemanaged Services im Angebot, die die Nutzung von Kubernetes erleichtern sollen. Die Nutzung dieser Services ist das, was die Anbieter in Rechnung stellen.
:::
:::globalParagraph
Was also tun? Selbst hosten oder Geld für einen managed Service bezahlen?
:::
:::globalParagraph
Dabei sind zwei Faktoren zu berücksichtigen: Einerseits der Faktor, welche “Hardware” und welche Services die Anbieter bereitstellen. Diesen Aspekt haben wir in unserem Blogpost "[Managed vs. Unmanaged Kubernetes](/blog/managed-vs-unmanaged-kubernetes/){.bs-link-blue}" bereits zusammengestellt.
:::
:::globalParagraph
Andererseits darf nicht vergessen werden, dass auch die Personalkosten für die Verwaltung eines vollständig selbst-gehosten Kubernetesclusters nicht zu vernachlässigen sind. [Hier](https://www.koyeb.com/blog/the-true-cost-of-kubernetes-people-time-and-productivity){.bs-link-blue} wird anschaulich verdeutlicht, dass wenn ein Cluster 24/7 gewartet werden muss, zumindest 4 Vollzeit-beschäftigte Entwickler vorgehalten werden sollen um auch Urlaubs- und Krankheitszeiten kompensieren zu können. Es wird davon ausgegangen, dass bei der Nutzung eines gemanagten Services, der zwar auch durch einen Entwickler betreut wird, eine Vollzeitstelle genügt.
:::
:::globalParagraph
Zu bedenken ist außerdem, dass die Kostenstruktur für Nodes, Rechenleistungen, etc. bei den einzelnen Anbietern zum Teil sehr undurchsichtig ist. Welche Kosten hier genau auf einen zukommen hängt wesentlich vom Umfang der zu verarbeitenden Informationen und der dafür notwendigen Rechenleistung ab. Die Kosten sind oft so dargestellt, dass es für Personen, die nicht mit der technischen Entwicklung und/oder Umsetzung von Software (z.B. Fachabteilungen) vertraut sind, kaum zu beurteilen ist, wie hoch die notwendigen Kapazitäten sind und welche Kosten anfallen werden. So können die Kosten beispielsweise je nach spontanem Nutzeraufkommen sehr stark variieren, da dadurch wesentlich mehr Rechenkapazität benötigt wird. Eine grobe Kostenschätzung für einen managed Service sollte auch immer mit einem inhaltlich involvierten Entwickler vorgenommen und nicht zu knapp kalkuliert werden.
:::

:::globalTitle{:size="md" .mb-5}
Was man zum Bau von Kubernetes braucht
:::
:::globalParagraph
Im zweiten Teil wollen wir nun zu Kubernetes selbst kommen. Dabei sollen Begrifflichkeiten geklärt und aufgezeigt werden, wie diese im Einzelnen zusammenhängen.
:::
:::globalParagraph
Hier findet sich ein guter erster <a href="https://kubernetes.io/docs/tutorials/kubernetes-basics/" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">Überblick sowohl für Nicht-Entwickler als auch für Entwickler, die sich zum ersten Mal mit Kubernetes befassen</a>. Wir greifen im Folgenden hauptsächlich auf diese Quelle zurück.
:::

:::globalTitle{:size="md" .mb-5}
Cluster
:::
:::globalParagraph
Kubernetes kann nur in einem definierten Umfeld verwendet werden. Der Cluster selbst kann _nicht_ mit Kubernetes gleichgestellt werden. Kubernetes bietet als Technologie aber die Möglichkeit, einen Cluster zu erstellen, der verschiedene Bestandteile gegen seine Umgebung abgrenzt.
:::
:::globalParagraph
Im Kontext von Kubernetes ist ein Cluster also ein Zusammenschluss von verschiedenen Bestandteilen, die für die Nutzung von Kubernetes benötigt werden, der klar von der Umwelt abgegrenzt ist. Neue Bestandteile (z.B. neue Nodes) müssen dem Cluster explizit durch einen Entwickler zugeordnet werden und können nicht _automatisch_ in den Cluster gelangen.
:::

![Cluster](/img/blogs/kubernetes-explained-for-non-developers-3.jpg){.object-cover .max-w-full .mb-5}

:::globalTitle{:size="md" .mb-5}
Node
:::
:::globalParagraph
Eine Node ist eine virtuelle Maschine oder ein physischer Computer. Eine Node ist der Bestandteil des Clusters, der die in Container verpackte Software ausführt. Die containerisierte Software selbst wird über Pods auf die Node gebracht.
:::
:::globalParagraph
Die Node selbst besitzt kleinere Applikationen um diese Arbeit auch durchführen zu können:
:::
:::GlobalBlock{.ul-disk .mb-5}
- **Kubelet**: Jede Node besitzt ein sogenanntes Kubelet, der die Node selbst managt und via API mit dem Control Plane kommuniziert
- **Tools um die Container innerhalb der Node zu betreiben:** Die Node stellt Platz zur Verfügung, um die containerisierte Software zu beherbergen. Allerdings kann es notwendig werden, dass Arbeiten an der containerisierten Software durchgeführt werden. Um die Software auf der Node bearbeiten zu können (z.B. zu starten) verfügt die Node über Tools, um die Software, die im Container auf der Node liegt, ansprechen zu können. In der Darstellung werden Docker-Container genutzt. Aus diesem Grund handelt es sich um ein spezielles Tool, um Docker-Container zu verwalten.
:::
:::globalParagraph
Zusätzlich können Nodes Pods umfassen, die wiederum containerisierte Software beinhalten. Dazu aber später mehr.
:::

:::globalTitle{:size="md" .mb-5}
Control Plane
:::
:::globalParagraph
Der Control Plane ist das Herzstück von Kubernetes, die ausführende Kubernetes-Instanz (sozusagen die Schaltzentrale), die alle Aktivitäten im Cluster koordiniert. Ein Control Plane ist ebenfalls eine Node, allerdings mit der speziellen Aufgabe, den Cluster zu koordinieren.
:::
:::globalParagraph
Der Control Plane stellt eine API zur Verfügung, um mit den anderen Clusterbestandteilen zu kommunizieren.
:::

:::globalTitle{:size="md" .mb-5}
Pods
:::
:::globalParagraph
Der Begriff “Pod” gehört bestimmt zu denjenigen, die im Kubernetes-Umfeld am meisten Verwendung finden. Pods haben nichts mit Star Wars zu tun, sondern sind die kleinsten Einheiten im Kubernetes-Universum.
:::
:::globalParagraph
Pods als kleinste eigenständige Einheiten im Cluster fassen mehrere Elemente sinnhaft zusammen, die im Deployment-Prozess in den Cluster gebracht werden. Pods sind also “Hülsen” und können beispielsweise folgende Elemente umschließen:
:::
:::GlobalBlock{.ul-disk .mb-5}
- geteilte Speichereinheiten, z.B. Volumes
- cluster-spezifische IP-Adressen
- Informationen darüber, wie Container betrieben werden, z.B. Image-Versionen der Applikation, Informationen zu Ports, etc.
:::
:::globalParagraph
Jeder Pod verfügt dabei über eine eigene IP-Adresse, die nur innerhalb des Clusters bekannt ist. Das heißt, die einzelnen Pods können nur im Cluster angesprochen und nicht von außen gesteuert werden.
:::
:::globalParagraph
Eine Node kann mehrere Pods beherbergen. Jeder Pod ist immer nur einer Node zugeordnet und verbleibt bei dieser Node bis sie gelöscht wird oder aufgrund anderer Fehler “stirbt”. Passiert das,”stirbt” auch der Pod. Wenn das passiert, kann durch den Deployment-Prozess (siehe unten) der Pod auf einer anderen Node aber neu erzeugt werden und somit “ewig leben”.
:::


![Cluster](/img/blogs/kubernetes-explained-for-non-developers-41.jpg){.object-cover .max-w-full .mb-5}

![node.js](/img/blogs/kubernetes-explained-for-non-developers-4.jpg){.object-cover .max-w-full .mb-5}

:::globalTitle{:size="md" .mb-5}
Replica-Sets und der Deployment-Prozess
:::
:::globalParagraph
Mit Node, Control Plane und Pods haben wir jetzt die einzelnen Bestandteile des Cluster besprochen. Aber wie agieren die einzelnen Bestandteile miteinander und wie tragen sie dazu bei, dass von Entwicklern geschriebener Code korrekt ausgeführt wird?
:::
:::globalParagraph
Dafür ist der Deployment-Prozess zuständig. Erst mit dem Deployment bringen Entwickler den Code in den Cluster. Im Deployment-Prozess wird beschrieben, wie oft einzelne Softwarebestandteile im Cluster ausgeführt werden sollen.
:::
:::globalParagraph
Hier wird beispielsweise beschrieben, welche Software ausgeführt werden soll. Die Software ist in ein Container-Image verpackt und das Image ist an einer definierten Stelle abgelegt (siehe oben). Wird im Deployment beschrieben, dass die Software einmalig ausgeführt werden soll, ist die Anzahl des Replica-Sets = 1 und es wird dafür ein Pod etabliert. Soll die Software öfters ausgeführt werden, ist die Anzahl des Replica-Sets beispielsweise =3. Im Replica-Set werden nun 3 Pods etabliert, die jeweils auf dasselbe Container-Image referenzieren.
:::
:::globalParagraph
Ist das Replica-Set = 3 und umfasst somit 3 Pods, können diese 3 Pods auf derselben Node ausgeführt werden. Alle drei Pods führen über die Referenz zum Container-Image mit demselben Code dann zwar dieselbe Software aus, es handelt sich aber um unterschiedliche Pods. Somit bleibt die oben beschriebene Prämisse bestehen, dass jeder Pod nur einmalig im Cluster enthalten sein kann und immer nur einer Node zugeordnet ist.
:::
:::globalParagraph
Ein Deployment kann mehrere Replica-Sets umfassen, die auf unterschiedliche oder auch dieselbe Software referenzieren.
:::
:::globalParagraph
Wie zuvor beschrieben bietet der Deployment-Prozess den Vorteil, dass, sollte eine Node z.B. gelöscht werden oder fehlerhaft sein, der Pod mit der beinhalteten Software auf einer anderen Node erneut erstellt werden kann. Die Information, wie ein Pod im Cluster ausgeführt werden soll, ist im Deployment beschrieben. Durchgeführt wird der Schritt, den Pod einer Node zuzuordnen durch einen Service (siehe unten).
:::
:::globalParagraph
Um das Deployment zu starten und zu managen, wird bei Kubernetes das Command-Line-Interface genutzt - das Kubectl. Kubectl ist für Nicht-Entwickler aber weniger relevant, die Bezeichnung sollte aber an dieser Stelle einmal erwähnt werden.
:::

![ReplicaSets](/img/blogs/kubernetes-explained-for-non-developers-5.jpg){.object-cover .max-w-full .mb-5}
![ReplicaSets](/img/blogs/kubernetes-explained-for-non-developers-6.jpg){.object-cover .max-w-full .mb-5}

:::globalTitle{:size="md" .mb-5}
Service, Label und Selector
:::

![ReplicaSets](/img/blogs/kubernetes-explained-for-non-developers-7.jpg){.object-cover .max-w-full .mb-5}

:::globalParagraph
Ein Service in Kubernetes hat nichts mit einem “managed Kubernetes-Service” (siehe oben) zu tun, sondern ist ein Bestandteil im Cluster. Ein Service kann als eine Abstraktion verstanden werden, die Pods logisch zusammenfasst und definiert, wie die Pods miteinander interagieren können. Dabei interagieren die Pods nicht direkt miteinander. Vielmehr können den Pods Labels zugeordnet werden. Der Service verfügt dabei über den komplementären Selector. Über die Labels am Pod und die Selektoren am Service können Pods miteinander interagieren.
:::

:::globalTitle{:size="lg" .mb-5}
Der Cluster im Überblick
:::
:::globalParagraph
Zusammengefasst besteht ein Cluster aus mehreren Nodes, wovon eine Node den Control Plane darstellt.
:::
:::globalParagraph
Die Software, die im Cluster ausgeführt werden soll, ist in einen Container verpackt und als Container-Image an einem definierten Ort festgelegt. Im Cluster selbst wird also nicht die Software selbst abgelegt, sondern immer nur auf das Container-Image referenziert.
:::
:::globalParagraph
Im Deployment-Prozess wird beschrieben, welche Software in welcher Form (z.B. wie oft) ausgeführt werden soll. Dafür werden ein oder mehrere Replica-Sets angelegt. Der Deployment-Prozess ist auf dem Control Plane abgelegt.
:::
:::globalParagraph
Nach dem Deployment werden die im Deployment-Prozess definierten Pods im Cluster angelegt und auf die verschiedenen Nodes verteilt.
:::
:::globalParagraph
Services im Cluster verfügen über Selektoren, Pods können über die komplementären Labels zu den Selektoren verfügen. Durch dieses Schlüssel-/Schloss-Prinzip ist es möglich, dass die Pods miteinander in Interaktion stehen. Nur wenn ein Pod über ein Label verfügt, kann er mit anderen Pods interagieren, ansonsten steht der Pod für sich alleine.
:::

![Cluster](/img/blogs/kubernetes-explained-for-non-developers-8.jpg){.object-cover .max-w-full .mb-5}


:::globalTitle{:size="md" .mb-5}
Clustergröße
:::
:::globalParagraph
Der Vorteil von Kubernetes ist, dass das System erkennen kann, wann eine Node (= virtuelle Maschine) nicht mehr betriebsbereit ist. Anstatt dass die Software dann nicht mehr ausgeführt werden könnte (wie das der Fall wäre, würde die Software auf einem einzelnen Server ausgeführt werden), kann Kubernetes die Software im Container automatisiert einer anderen funktionsfähigen Node zuordnen. Aus diesem Grund sollte ein Cluster im Produktivsystem aus mind. 3 Nodes bestehen: Davon ist eine Node der notwendige Control plane, die anderen beiden Nodes beherbergen die auszuführende Software in Pods. Ein Pod läuft dabei nur auf einer Node, die verbleibende Node steht dann “nur” für den Fall bereit, dass die andere ausfällt.
:::


:::globalTitle{:size="lg" .mb-5}
Zusammenfassung
:::
:::globalParagraph
Kubernetes selbst ist eine open-source-Software, die von jedem kostenfrei genutzt werden kann. Es handelt sich dabei um einen Dienst, der Software ausführt und gegenüber dem Betrieb von eigenständigen Servern eine ganze Reihe Vorteile bietet.
:::
:::globalParagraph
Anbieter wie AKS, GKE oder EKS stellen darüber hinaus weitere Services in Zusammenhang mit Kubernetes bereit, die die Administration erleichtern sollen. Für diese Services fallen aber eine ganze Reihe von Kosten an, die nicht leicht zu überblicken sind.
:::
:::globalParagraph
Kubernetes bezeichnet eine Technologie, die eine Reihe einzelner Komponenten umfasst. Erst im Zusammenspiel von Nodes, Pods und dem Controle Plane kann ein Cluster erstellt werden, der zum Betrieb von Kubernetes notwendig ist.
:::
:::globalParagraph
Kubernetes ist kein Allheilmittel, das für jede Software gleichermaßen geeignet ist. Ob Kubernetes für den Betrieb einer speziellen Software oder für eine Organisation als ganze geeignet ist und ob die Services von AKS, GKE, EKS oder anderen hinzugekauft werden sollen, muss im Einzelfall beurteilt werden.
:::
:::globalParagraph
Wir hoffen, wir konnten euch einen guten Überblick geben, was Kubernetes ist, wie es sich von anderen Technologien zum Ausführen von Software unterscheidet und dass ein Pod in der Kubernetes-Welt nichts mit Podrennen in Star Wars Filmen zu tun hat.
:::