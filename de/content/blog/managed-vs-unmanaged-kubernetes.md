---
head:
  title: 'Managed vs. Unmanaged Kubernetes'
  meta:
    - property: 'og:locale'
      content: 'de_DE'
    - name: 'description'
      content: 'Was ist managed und was is unmanaged Kubernetes? In diesem Blogpost widmen wir uns genau dieser Frage. Jetzt lesen!'
    - property: 'og:type'
      content: 'website'
    - property: 'og:title'
      content: 'Managed vs. Unmanaged Kubernetes'
    - property: 'og:description'
      content: 'Was ist managed und was is unmanaged Kubernetes? In diesem Blogpost widmen wir uns genau dieser Frage. Jetzt lesen!'
    - property: 'og:image'
      content: 'https://www.blueshoe.de/img/blogs/Bildschirmfoto_4.jpg'
    - property: 'og:image:secure_url'
      content: 'https://www.blueshoe.de/img/blogs/Bildschirmfoto_4.jpg'
    - name: 'twitter:card'
      content: 'summary'
    - name: 'twitter:title'
      content: 'Managed vs. Unmanaged Kubernetes'
    - name: 'twitter:description'
      content: 'Was ist managed und was is unmanaged Kubernetes? In diesem Blogpost widmen wir uns genau dieser Frage. Jetzt lesen!'
    - name: 'twitter:image'
      content: 'https://www.blueshoe.de/img/blogs/Bildschirmfoto_4.jpg'
src: '/blog/managed-vs-unmanaged-kubernetes'
img: '/img/blogs/Bildschirmfoto_4.jpg'
alt: 'Bildschirmfoto_4'
preTitle: 'Was ist der Unterschied?'
title: "Managed vs. Unmanaged Kubernetes"
description: 'Was ist managed und was is unmanaged Kubernetes? In diesem Blogpost widmen wir uns genau dieser Frage. Jetzt lesen!'
date: '17.05.2021'
autor:
  - Robert Gutschale
technologie: 
  - Kubernetes
  - Cloud Native
marketing: []
sonstiges: []
---
::globalParagraph
Wir Blueshoes merken in Gesprächen mit Techies und vor allem mit unseren Kunden, dass immer mehr Interesse am Thema Kubernetes (K8s) besteht. In diesem Blogpost widmen wir uns deshalb der Frage “Was ist eigentlich managed und was is unmanaged Kubernetes?”
::
<!--more-->

![Bildschirmfoto](/img/blogs/Bildschirmfoto_4.jpg){.object-cover .max-w-full .mb-5}

:::globalParagraph
Beim Thema [Kubernetes (K8s)](/loesungen/docker-kubernetes/){.bs-link-blue} stellen wir fest, dass bei einer der grundsätzlichen Entscheidungen und zwar, ob man managed oder unmanaged Kubernetes verwenden möchte, oftmals am wenigsten Wissen vorhanden ist. Das wollen wir ändern!
:::

:::globalTitle{:size="lg" .mb-5}
**Kubernetes-Überblick**
:::
:::globalParagraph
Wir setzen für diesen Blogpost ein gewisses [Grundverständnis von Kubernetes](/blog/kubernetes-development/){.bs-link-blue} (K8s) voraus. Dennoch wollen wir uns nochmal ganz kurz anschauen wie Kubernetes eigentlich funktioniert und vor allem wie damit interagiert wird:
:::
:::globalParagraph
Ganz unten an der Basis hat sich im Grunde nichts verändert, es werden “wie früher” immer noch virtuelle Server benutzt, um den Code auszuführen. **Kubernetes fungiert als eine Art Abstraktions-Schicht über den virtuellen Servern, die dort Nodes genannt werden und zu einem Cluster zusammengefasst werden** (siehe Schaubild unten von <a href="https://kubernetes.io/docs/concepts/overview/" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">Kubernetes.io</a>). Ich als Entwickler oder Operations-Spezialist muss mir also keine konkreten Gedanken machen, auf welcher Node meine Anwendung nun läuft. Ich muss Kubernetes nur in Form von Manifest-Dateien die Rahmenbedingungen meiner Anwendung beibringen, K8s kümmert sich dann darum, dass eine passende Node verwendet wird.
:::

![bildschirmfoto](/img/blogs/bildschirmfoto_1.jpg){.object-cover .w-full .mb-5}

:::globalParagraph
Die direkte **Interaktion mit den virtuellen Maschinen wird mir somit durch Kubernetes abgenommen**. Im K8s-Manifest sind einige Informationen angegeben, darunter das [Container-Image](/blog/strategien-fur-schlanke-docker-images/){.bs-link-blue} und dessen Version sowie die Spezifikation dazu, welcher Befehl ausgeführt wird. Hier findet man aber auch Dinge wie die Resource Requests und Limits – also Mindestanforderungen, die die Anwendung an CPU und Arbeitsspeicher stellt, bzw. welche Werte die Anwendung maximal beanspruchen darf.
:::

:::globalTitle{:size="lg" .mb-5}
**Unmanaged Kubernetes**
:::
:::globalParagraph
Das “unmanaged” im Begriff **unmanaged Kubernetes bezieht sich darauf, dass ich mich selbst um die Kubernetes Installation und Instandhaltung kümmern muss**, also selbst Kubernetes managen muss. Das ist vor allem nötig, wenn aus welchen Gründen auch immer ein Hosting bei einem Cloud-Anbieter nicht möglich oder nicht erwünscht ist.
:::
:::globalParagraph
Im Folgenden beschreiben wir einen üblichen, wenn auch gekürzten **exemplarischen Ablauf für die manuelle Installation**:
:::
:::globalParagraph
**Zunächst müssen die K8s-Nodes, also virtuelle Maschinen erstellt werden**. In diesem Beispiel gehen wir von 3 virtuellen Servern aus, einen für die sogenannte Master-Node und zwei weitere für sogenannte Worker-Nodes. Die Master-Node kontrolliert dabei die Worker-Nodes, d. h. die K8s-Software, die auf dem Master installiert ist, entscheidet letztendlich, auf welcher Worker-Node eine Anwendung ausgeführt wird.
:::
:::globalParagraph
**Als nächstes müssen die benötigten Software-Pakete installiert und konfiguriert werden**. Unter anderem wird _kubeadm_ benötigt, um einerseits die Master-Node zu initialisieren und um andererseits die Worker-Nodes dem Master zuzuweisen. Durch diesen Schritt ist der Kubernetes-Cluster geschaffen und im Grunde genommen betriebsbereit.
:::
:::globalParagraph
**Als nächstes können die K8s-Manifeste direkt, oder auch durch Anwendungen z. B. mittels _helm_ installiert werden.**
:::
:::globalParagraph
**Alternativ zur Installation aller benötigten einzelnen Komponenten wäre es z. B. auch möglich _microk8s_ von Canonical zu verwenden**. Dieses wird oftmals benutzt, um für die lokale Entwicklung Kubernetes zu simulieren. Aber seit ein paar Jahren bezeichnet Canonical selbst microk8s als production-ready. Der Vorteil zur vorigen Methode ist, dass man sich hier auf die Installation von einem Paket beschränken kann.
:::
:::globalParagraph
**Zu beachten ist, dass sich “unmanaged” natürlich auch auf die Instandhaltung bezieht**. Alle Maintenance-Aufgaben, sei es z. B. die Bereitstellung und Konfiguration weiterer Worker-Nodes, weil die zur Verfügung stehenden Ressourcen nicht mehr ausreichen, oder auch nur regelmäßige Updates der Kubernetes-Version müssen komplett händisch geschehen.
:::

:::globalTitle{:size="lg" .mb-5}
**Managed Kubernetes**
:::
:::globalParagraph
Managed Kubernetes bezeichnet im Unterschied dazu nun **eine Kubernetes-Installation, die von einem Provider zur Verfügung gestellt wird, bzw. bei einem Provider konfiguriert werden kann**. Provider bzw. deren Services sind z. B. die Google Kubernetes Engine (GKE), Amazons AWS Elastic Kubernetes Service (EKS) oder auch managed Kubernetes bei IONOS.
:::
:::globalParagraph
**Der Grad des “managed” ist dabei variabel**. Oftmals wird “nur” die Möglichkeit bereitgestellt eine Kubernetes-Infrastruktur zu provisionieren, d. h. einen Cluster zu erstellen, sowie die Anzahl und Spezifikation der Worker-Nodes zu konfigurieren. Das ist bereits wesentlich komfortabler als unmanaged Kubernetes. Üblicherweise wird ein Web-Interface oder auch ein Command-Line-Interface zur Interaktion zur Verfügung gestellt. Darüber hinaus können z. B. zusätzliche Worker-Nodes hinzugefügt werden oder auch Updates auf eine neue Kubernetes-Version bequem eingespielt werden.
:::
:::globalParagraph
Ganz oben auf der “managed”-Skala steht z. B. das managed Kubernetes Angebot von <a href="https://ubuntu.com/kubernetes/managed" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">Canonical</a>. Dabei wird die komplette Kubernetes-Infrastruktur durch den Provider installiert und gewartet. Mit so einem Angebot schrumpft der Operations-Anteil auf das Erstellen der Kubernetes-Manifeste bzw. Helm-Charts.
:::
:::globalParagraph
<b>Google hat am oberen Ende der “managed”-Skala den </b> **<a href="https://cloud.google.com/blog/products/containers-kubernetes/introducing-gke-autopilot" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">GKE Autopilot</a>** **im Angebot**. Bei diesem werden die Nodes automatisch passend zu den durch die Anwendung angeforderten Ressourcen skaliert. Als Entwickler bzw. Operations-Spezialist kann ich mich auch dort auf das Erstellen der Kubernetes-Manifeste bzw. Helm-Charts beschränken. Den GKE Autopilot werden wir uns in einem künftigen Blogpost nochmal etwas genauer anschauen.
:::

:::globalTitle{:size="lg" .mb-5}
**Zusammenfassung**
:::
:::globalParagraph
**Unserer Erfahrung nach sind die meisten Projekte und Unternehmen mit managed Kubernetes besser beraten.** Durch die verschiedenen Anbieter lassen sich viele Anforderungen hinsichtlich des Hostings abdecken. Je nach managed-Grad profitiert man von unterschiedlichem Komfort. Einer der größten Vorteile ist sicherlich, dass man sich nicht direkt um die Wartung des Clusters kümmern muss, sondern diese z. T. automatisiert erfolgt oder bequem per Web-Interface oder CLI zu erledigen ist.
:::
:::globalParagraph
**Bestehen explizite Anforderungen von on-premise Hosting,** oder aber triftige Gründe, Kubernetes z. B. in einem eigenen Rechenzentrum zu betreiben, dann **führt kein Weg an unmanaged Kubernetes vorbei.**
:::
:::globalParagraph
**Gut zu wissen:** Im Zusammenhang mit unserer neuen [Kubernetes-Service-Plattform Unikube](/loesungen/unikube/){.bs-link-blue} muss man sich die Frage managed vs. unmanaged Kubernetes gar nicht stellen. Für Unikube spielt es keine Rolle wie der K8s-Cluster installiert wurde, ob vollständig oder nur teilweise managed, unmanaged oder sogar nur lokal simuliert.
:::