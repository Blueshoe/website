---
head:
  title: 'Coole neue Features für Django-Hurricane'
  meta:
    - property: 'og:locale'
      content: 'de_DE'
    - name: 'description'
      content: 'Mit dem Open-Source-Projekt Django-Hurricane wollen wir bei Blueshoe die Entwicklung in dem Bereich django und Kubernetes vorantreiben. Heute möchten wir dir einige neue Features vorstellen.'
    - property: 'og:type'
      content: 'website'
    - property: 'og:title'
      content: 'Coole neue Features für Django-Hurricane'
    - property: 'og:description'
      content: 'Mit dem Open-Source-Projekt Django-Hurricane wollen wir bei Blueshoe die Entwicklung in dem Bereich django und Kubernetes vorantreiben. Heute möchten wir dir einige neue Features vorstellen.'
    - property: 'og:image'
      content: 'https://www.blueshoe.de/img/meta/blueshoe-cloud-native-devlopment.png'
    - property: 'og:image:secure_url'
      content: 'https://www.blueshoe.de/img/meta/blueshoe-cloud-native-devlopment.png'
    - name: 'twitter:card'
      content: 'summary'
    - name: 'twitter:title'
      content: 'Coole neue Features für Django-Hurricane'
    - name: 'twitter:description'
      content: 'Mit dem Open-Source-Projekt Django-Hurricane wollen wir bei Blueshoe die Entwicklung in dem Bereich django und Kubernetes vorantreiben. Heute möchten wir dir einige neue Features vorstellen.'
    - name: 'twitter:image'
      content: 'https://www.blueshoe.de/img/meta/blueshoe-cloud-native-devlopment.png'
src: '/blog/neue-features-fuer-django-hurricane'
img: '/img/blogs/whats_new2.jpg'
alt: 'whats_new2'
preTitle: "What's new?"
title: "Coole neue Features für Django-Hurricane"
description: 'Mit dem Open-Source-Projekt Django-Hurricane wollen wir bei Blueshoe die Entwicklung in dem Bereich django und Kubernetes vorantreiben. Heute möchten wir dir einige neue Features vorstellen.'
date: '13.04.2021'
autor:
  - Viktor Studenyak
technologie: 
  - Django
  - Kubernetes
marketing: []
sonstiges: []
---
::globalParagraph
Mit dem Open-Source-Projekt Django-Hurricane wollen wir bei Blueshoe die Entwicklung in dem Bereich django und Kubernetes vorantreiben. Heute möchten wir dir einige neue Features vorstellen.
::
<!--more-->

![whats_new2](/img/blogs/whats_new2.jpg){.object-cover .max-w-full .mb-5}

:::globalParagraph
Ende 2020 haben wir dir unser neues <b>Open-Source-Projekt </b> <a href="https://django-hurricane.io/" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">Django-Hurricane</a> präsentiert. Den Blogpost zur Vorstellung von Django-Hurricane kannst du [hier lesen](/blog/django-fuer-kubernetes/){.bs-link-blue}. Mit diesem Projekt wollen wir bei Blueshoe die Entwicklung in dem Bereich **Django und Kubernetes** vorantreiben und viele Routineaufgaben, die beim Aufsetzen des Projektes entstehen, von den Schultern der Entwickler nehmen und in ein robustes Framework verlagern.
:::
:::globalParagraph
Wir haben außerdem an der To-do-Liste im <a href="https://github.com/django-hurricane/django-hurricane" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">GitHub Repository</a> gearbeitet und können jetzt hier einige **neue Features von Django-Hurricane** präsentieren.
:::

![hurricane](/img/blogs/hurricane_logo_text.jpg){.object-cover .max-w-[350px] .mb-5}

:::globalTitle{:size="lg" .mb-5}
Dokumentation
:::
:::globalParagraph
Wir haben intensiv an der <a href="https://django-hurricane.readthedocs.io/en/latest/" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">Dokumentation</a> gearbeitet. Neben dem **User’s Guide**, gibt es auch eine Low-Level API Dokumentation. Der User’s Guide gibt hilfreiche Informationen für die Nutzung von **Django-Hurricane** z. B. die verfügbaren Command-Optionen, nützliche Tipps für die Konfiguration und die allgemeine Aufklärung über die einzelnen Komponenten von Django-Hurricane. In der API-Dokumentation kann man die Funktionalitäten einzelner Komponente besser nachschauen.
:::

![christina-wocintechchat](/img/blogs/christina-wocintechchat.jpg){.object-cover .mb-5}

:::globalTitle{:size="lg" .mb-5}
**Management-Commands-Ausführung**
:::
:::globalParagraph
Außerdem haben wir ein Feature implementiert, welches es ermöglicht, die **Management-Commands** direkt in dem „serve“-Command zu spezifizieren und auszuführen. Die **neuen Command-Optionen** sind:
:::
:::GlobalBlock{.ul-disk .mb-5}
- no-metrics: Das Metriksammeln deaktivieren.
- command: Der wiederholbare Befehl, der die Management-Commands definiert. Die Commands werden vor dem Starten des HTTP-Servers ausgeführt. Da der Befehl wiederholbar ist, kann es mehrmals mit den unterschiedlichen Management-Commands definiert werden, die auch weitere Optionen haben können. In diesem Fall muss man die Optionen zusammen mit dem Namen des Commands in einem String angeben.
:::
:::globalParagraph
Ein Command mit den Management-Commands könnte wie folgt aussehen:
:::

:::BlogCode{.mb-5}
```docker
python manage.py serve --command makemigrations --command “compilemessages --locale =de_DE”
```
:::

:::globalTitle{:size="lg" .mb-5}
**Probe-Endpoints**
:::
:::globalParagraph
Probe-Endpoints können jetzt separat mit dem „serve“-Command definiert werden. Die Optionen dafür sind:
:::
:::GlobalBlock{.ul-disk .mb-5}
- startup-probe: Der Pfad für Startup-Endpoint (default: /startup).
- readiness-probe: Der Pfad für Readiness-Endpoint (default: /ready).
- liveness-probe: Der Pfad für Liveness-Endpoint (default: /alive).
- req-queue-len: Der Schwellenwert für die Request-Warteschlange. Wenn dieser Wert überschritten wird, liefert der Readiness-Probe einen Request mit dem Status-Code 400.
:::

:::globalTitle{:size="lg" .mb-5}
**Webhooks für Probe-Events**
:::
:::globalParagraph
Darüber hinaus haben wir noch ein Feature für <a href="https://django-hurricane.io/" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">Django-Hurricane</a> implementiert: Die Möglichkeit die **Webhooks** auf eine bestimmte Adresse zu verschicken. Es gibt mittlerweile drei Webhooks, die den drei Probes entsprechen. Der erste Webhook ist der Startup-Webhook. Er wird nach dem Start des HTTP-Servers ausgeführt und an die angegebene Adresse verschickt. Im Falle des Fehlstarts der Applikation wird ein Startup-Webhook mit dem Status _„failed“_ initiiert. Anschließend wird die Applikation gestoppt.
:::
:::globalParagraph
Die Liveness- und Readiness-Webhooks sind nach den entsprechenden **Probe-Anfragen** initiiert. Die Webhooks werden nur nach einer State-Änderung ausgeführt, d. h. entweder bei der ersten Probe-Anfrage, wobei der State von „None“ auf _„Healthy/Unhealthy“_ geändert wird. Ansonsten wird der Webhook bei der Änderung der States von _„Healthy“_ zu _„Unhealthy“_ oder von _„Unhealthy“_ zu _„Healthy“_ initiiert. Für die Webhooks mit dem Status _„failed“_ wird entsprechend auch der Fehler-Traceback mitgeschickt.
:::
:::globalParagraph
Damit die Webhooks überhaupt geschickt werden können, muss der **Webhook-Command** mit der URL-Adresse mitgegeben werden. Die Command-Option heißt _„webhook-url”_ und wird als URL-Adresse für Webhooks mitgegeben. Der gesamte Befehl für die Ausführung der Applikation mit Webhooks würde wie folgt aussehen.
:::
:::BlogCode{.mb-5}
```docker
python manage.py serve --webhook-url „http://<Adresse>“
```
:::

:::globalTitle{:size="lg" .mb-5}
Dabei enthält jedes Webhook einige Daten:
:::
:::GlobalBlock{.ul-disk .mb-5}
- Status: _„failed“_ oder _„succeeded“_, hängt davon ab, ob der Probe erfolgreich ausgeführt wird oder fehlt.
- Typ: _„startup“_, _„readiness“_ oder _„liveness“_.
- Timestamp: Zeitpunkt, wenn der Webhook initiiert wurde.
- Hostname: die Rechner- bzw. Serverbezeichnung.
- Version: Die Hurricane-Version.
- Error trace: Wenn der Webhook den Status _„failed“_ hat, schickt der Server auch die Fehlermeldung mit dem Fehlerpfad.
:::

![cyclone](/img/blogs/cyclone.jpg){.object-cover .max-w-full .mb-5}

:::globalParagraph
Trotz unserer fleißigen Arbeit an der **Django-Hurricane-**<a href="https://django-hurricane.readthedocs.io/en/latest/todos.html" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">To-do-Liste</a> in den letzten Monaten, gibt es noch mehrere offene Checkboxen. Wir wären daher sehr dankbar für jegliche Hilfe bei der Weiterentwicklung von <a href="https://django-hurricane.io/" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">Django-Hurricane</a> sowie bei allen unseren anderen **Open-Source-Projekten.** Wir freuen uns schon jetzt auf die neuen Challenges in der Weiterentwicklung und das Abhaken weiterer Checkboxen auf unserer To-do-Liste im GitHub Repository.
:::