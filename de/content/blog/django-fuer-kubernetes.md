---
head:
  title: 'Django Entwicklung für Kubernetes'
  meta:
    - property: 'og:locale'
      content: 'de_DE'
    - name: 'description'
      content: 'Wie kann man das Ausführen von Django-Anwendungen mehr Cloud Native gestalten? Mit unserem Open-Source-Projekt Django-Hurricane. Jetzt lesen!'
    - property: 'og:type'
      content: 'website'
    - property: 'og:title'
      content: 'Django Entwicklung für Kubernetes'
    - property: 'og:description'
      content: 'Wie kann man das Ausführen von Django-Anwendungen mehr Cloud Native gestalten? Mit unserem Open-Source-Projekt Django-Hurricane. Jetzt lesen!'
    - property: 'og:image'
      content: 'https://www.blueshoe.de/img/meta/blueshoe-cloud-native-devlopment.png'
    - property: 'og:image:secure_url'
      content: 'https://www.blueshoe.de/img/meta/blueshoe-cloud-native-devlopment.png'
    - name: 'twitter:card'
      content: 'summary'
    - name: 'twitter:title'
      content: 'Django Entwicklung für Kubernetes'
    - name: 'twitter:description'
      content: 'Wie kann man das Ausführen von Django-Anwendungen mehr Cloud Native gestalten? Mit unserem Open-Source-Projekt Django-Hurricane. Jetzt lesen!'
    - name: 'twitter:image'
      content: 'https://www.blueshoe.de/img/meta/blueshoe-cloud-native-devlopment.png'
src: '/blog/django-fuer-kubernetes'
img: '/img/blogs/hurricane_logo_text.jpg'
alt: 'hurricane_logo_text'
preTitle: "Neues aus der Blueshoe Open Source-Schmiede"
title: "Django Entwicklung für Kubernetes"
description: 'Wie kann man das Ausführen von Django-Anwendungen mehr Cloud Native gestalten? Mit unserem Open-Source-Projekt Django-Hurricane. Jetzt lesen!'
date: '27.12.2020'
autor:
  - Robert Gutschale
technologie: 
  - Django
  - Kubernetes
  - Cloud Native
marketing: []
sonstiges: []
---
::globalParagraph
Wir haben uns erneut Gedanken gemacht, wie wir das Ausführen von Django-Anwendungen mehr Cloud Native und "ready for kubernetes" gestalten können. Als Resultat ist Django-Hurricane herausgekommen, welches wir in diesem Blogpost vorstellen und als Open Source-Projekt zur Verfügung stellen.
::
<!--more-->

![hurricane_logo](/img/blogs/hurricane_logo_text.jpg){.object-cover .max-w-full .mb-5}

:::globalParagraph
Wir bei Blueshoe sind schon immer Fans von **Open Source**. In sehr vielen unserer Projekten kommen Open Source-Komponenten zum Einsatz, wir nutzen ja auch u. a. sehr stark das **Django Framework** und wir bemühen uns auch, Open Source-Projekte bei der Maintenance und Weiterentwicklung zu unterstützen. Seit einiger Zeit hat nun auch **Kubernetes** bei uns Einzug erhalten, wodurch wir uns mehr und mehr der Herausforderung stellen, wie wir möglichst **Cloud Native** entwickeln können. Dazu haben wir auch schon Blog-Posts geschrieben, z. B.: [Cloud Native Kubernetes development](/leistungen/cloud-native-development){.bs-link-blue}.
:::
:::globalParagraph
Heute möchten wir euch unser neues Open Source-Projekt **<a href="https://django-hurricane.io/" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">Django-Hurricane</a>** vorstellen.
:::

:::globalTitle{:size="lg" .mb-5}
“Klassisches” Deployment
:::
:::globalParagraph
Zunächst wollen wir kurz betrachten, wie Django oftmals auf einem Server, bzw. einer VM ausgeführt wird. Üblicherweise verwenden wir dazu einen Stack mit <a href="https://www.nginx.com/" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">nginx</a> als Web Server, sowie uwsgi als Application Server, welcher den Django-Code ausführt. Appserver wie <a href="https://uwsgi-docs.readthedocs.io/en/latest/" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">uwsgi</a> haben ein **hochgradig optimiertes** Prozessmodell für diese Art von Deployments mit vielen CPUs, mehreren Threads, usw. Mit genügend Wissen über die Anwendung und genügend Erfahrung im Betrieb von Django-Anwendungen, lässt sich der Application Server nun möglichst optimal konfigurieren, wofür i. d. R. genügend Optionen zur Verfügung stehen.
:::

:::globalTitle{:size="lg" .mb-5}
Kubernetes Deployment von Django-Anwendungen
:::
![Kubernetes deployment of Django](/img/blogs/django-development-for-kubernetes-1.jpg){.object-cover .max-w-full .mb-5}

:::globalParagraph
In **Kubernetes** sieht das nun etwas anders aus. Auch dort lässt sich unsere Django-Anwendung in einem **Container** mittels uwsgi ausführen. Allerdings ist eine auf die Hardware abgestimmte **Optimierung** des Application Servers im Container eher fehl am Platze. Schon allein, da sich ja nicht direkt beeinflussen lässt, auf welcher Node im Cluster der Container nun tatsächlich ausgeführt wird. In Kubernetes kann weiterhin mit dem **Replication-Wert** die **horizontale** Skalierung der Anwendung konfiguriert werden. Zusätzlich kann mit dem Horizontal Pod Autoscaler eine Mindest- und Maximalanzahl an Pods spezifiziert werden. Kommt die App beispielsweise mit den Requests nicht mehr zurecht, kann Kubernetes einfach einen **neuen** Container **parallel** starten.
:::
:::globalParagraph
Es gibt noch weitere Punkte, die wir in unserer Django-Anwendung beachten müssen, wenn sie mit Kubernetes ausgeführt wird. Hier sind z. B. die **Liveness-, Readiness-** und **Startup-Probes** genannt. Unsere Anwendung muss Endpunkte für die Probes zur Verfügung stellen, die regelmäßig von Kubernetes abgefragt werden, um zu beurteilen, ob ein Container z. B. neu gestartet werden muss, oder ob er gerade **Traffic** empfangen kann. Das kann dann doch zu etwas **Boilerplate-Code** führen, oder auch dazu, dass die Django-Anwendung u. U. Funktionalität einfach nur für das **Hosting** bereitstellen muss.
:::
:::globalParagraph
All das wollen wir eigentlich nicht: Wir wollen einen **Application Server, der direkter mit Kubernetes verzahnt ist.**
:::

:::globalTitle{:size="lg" .mb-5}
Django-Hurricane
:::
![Django Hurricane](/img/blogs/django-development-for-kubernetes-2.jpg){.object-cover .max-w-full .mb-5}

:::globalParagraph
Aus diesem Grund haben wir **<a href="https://django-hurricane.io/" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">Django Hurricane</a>** entwickelt. Dabei bauen wir auf dem <a href="https://github.com/tornadoweb/tornado" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">Tornado web server</a> auf. Hurricane lässt sich als einfacher **Django-Management-Command** ausführen und mittels **Flags** auch konfigurieren. Es sind keine weiteren Konfigurationsdateien nötig.
:::
:::globalParagraph
Die Installation kann einfach mittels _pip_ erfolgen:
:::
:::BlogCode{.mb-5}
```docker
pip install hurricane
```
:::

:::globalParagraph
Hurricane muss daraufhin in die INSTALLED_APPS des Django-Projekts hinzugefügt werden. Weiterhin sollte auch ein Logger konfiguriert werden, damit Log-Nachrichten angezeigt werden:
:::
:::BlogCode{.mb-5}
```json
INSTALLED_APPS += (
  'hurricane',
)

LOGGING = {
    # [...]
    “loggers”: {
        # [...]
        “hurricane:”: {
          "handlers": ["console"],
          "level": os.getenv("HURRICANE_LOG_LEVEL", "INFO"),
          "propagate": False,
        },
    },
    # [...]
}
```
:::

:::globalParagraph
Starten lässt sich Django-Hurricane mit dem Management-Command:
:::
:::BlogCode{.mb-5}
```docker
python manage.py serve
```
:::

:::globalParagraph
Auch die Konfiguration findet komplett mit Optionen des Management-Commands statt. Hier ist eine Auflistung der momentan vorhandenen Optionen:
:::
:::GlobalBlock{.ul-disk .mb-5}
- static: Ausliefern von Static-Files
- media: Ausliefern von Media-Files
- auto-reload: Code-Änderungen dynamisch laden
- debug: Debug Flag von Tornado setzen (nicht mit Djangos DEBUG=True zu verwechseln)
- port: Der Port auf dem Tornado laufen soll (default: 8000)
- probe: Der Pfad für die Liveness- und Readiness-Probes (default: /alive)
- probe-port: Der Port unter welchem die Probes zu erreichen sind (default: ein Port nach --port)
- no-probe: Probe-Endpunkt deaktivieren
:::

:::globalParagraph
Mit diesen grundlegenden Konfigurationsmöglichkeiten lassen sich bereits einige Szenarien abdecken und wir können Django-Hurricane damit bereits auf **Produktivsystemen** einsetzen.
:::
:::globalParagraph
Damit die Probes auch ihren Sinn erfüllen können, muss gewährleistet sein, dass sie tatsächlich eine Aussage über die **Erreichbarkeit** und **Verfügbarkeit** der Anwendung treffen und es nicht einfach nur ein Endpunkt ist, der eher unabhängig von der Anwendung zu erreichen ist. Bei Hurricane werden der Django-Code und der Probe-Endpunkt zwar auf zwei verschiedenen Ports ausgeliefert, da die komplette Code-Basis in der gleichen **asyncio-Loop** ausgeführt wird, lässt sich aber implizit ein Rückschluss auf die Erreichbarkeit und Verfügbarkeit der Anwendung treffen.
:::
:::globalParagraph
Es kann durchaus nötig sein, dass es mehr Logik benötigt, um die Liveness oder Readiness einer Anwendung zu ermitteln, als einfach nur einen Endpunkt, der eine 200 zurückliefert. Hurricanes Probe-Endpunkt ruft Djangos <a href="https://docs.djangoproject.com/en/2.2/topics/checks/" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">Check Framework</a>  auf. Dadurch ist es möglich, die benötigte **zusätzliche Logik** für die Anwendung in Django-Checks abzubilden.
:::

:::globalTitle{:size="md" .mb-5}
Roadmap und weitere Entwicklungen
:::
![Roadmap](/img/blogs/django-development-for-kubernetes-3.jpg){.object-cover .max-w-full .mb-5}

:::globalParagraph
Auch wenn Hurricane bereits für Produktivsysteme verwendet werden kann, steht die Entwicklung erst ganz am **Anfang**. Uns schweben noch einige **weitere Features** vor, die <a href="https://github.com/django-hurricane/django-hurricane" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">To-do-Liste im GitHub Repository</a> bietet noch einige freie Checkboxen an. **Unterstützung** bei der Weiterentwicklung ist natürlich wie bei allen Open Source-Projekten immer willkommen. Wir bleiben auf jeden Fall weiter am Ball, es wird künftig sicherlich auch noch den ein oder anderen Blogpost, z. B. über **[neue Django-Hurricane-Features](/blog/neue-features-fuer-django-hurricane/){.bs-link-blue}**, oder auch Anwendungsszenarien geben.
:::