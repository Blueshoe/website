---
head:
  title: 'Django CMS Layout / Grid-System mit Bootstrap'
  meta:
    - property: 'og:locale'
      content: 'de_DE'
    - name: 'description'
      content: 'Welche Lösungen bietet Django-CMS zur Strukturierung von Inhalten? Wir zeigen dir ein benutzerfreundliches Layout und Grid-System auf Basis von Bootstrap.'
    - property: 'og:type'
      content: 'website'
    - property: 'og:title'
      content: 'Django CMS Layout / Grid-System mit Bootstrap'
    - property: 'og:description'
      content: 'Welche Lösungen bietet Django-CMS zur Strukturierung von Inhalten? Wir zeigen dir ein benutzerfreundliches Layout und Grid-System auf Basis von Bootstrap.'
    - property: 'og:image'
      content: 'https://www.blueshoe.de/img/meta/blueshoe-cloud-native-devlopment.png'
    - property: 'og:image:secure_url'
      content: 'https://www.blueshoe.de/img/meta/blueshoe-cloud-native-devlopment.png'
    - name: 'twitter:card'
      content: 'summary'
    - name: 'twitter:title'
      content: 'Django CMS Layout / Grid-System mit Bootstrap'
    - name: 'twitter:description'
      content: 'Welche Lösungen bietet Django-CMS zur Strukturierung von Inhalten? Wir zeigen dir ein benutzerfreundliches Layout und Grid-System auf Basis von Bootstrap.'
    - name: 'twitter:image'
      content: 'https://www.blueshoe.de/img/meta/blueshoe-cloud-native-devlopment.png'
src: '/blog/django-cms-grid-bootstrap'
img: '/img/blogs/pankaj-patel-Ylk5n.jpg'
alt: 'pankaj-patel-Ylk5n'
preTitle: "Für flexible Seitenlayouts"
title: "Django CMS Layout / Grid-System mit Bootstrap"
description: 'Welche Lösungen bietet Django-CMS zur Strukturierung von Inhalten? Wir zeigen dir ein benutzerfreundliches Layout und Grid-System auf Basis von Bootstrap.'
date: '19.02.2017'
autor:
  - Robert Stein
technologie: 
  - Django CMS
  - Django
  - Python
marketing: 
  - UX
sonstiges: []
---
::globalParagraph
Django-CMS ermöglicht einfaches editieren seiner Inhalte. Durch einfache Aktionen wie Doppelklick können beispielsweise Texte geändert, Bilder ausgetauscht und Videoplayer eingebettet werden. Doch wie sieht aus mit der Anordnung dieser Elemente aus?
::
<!--more-->

![pankaj-patel](/img/blogs/pankaj-patel-Ylk5n.jpg){.object-cover .max-w-full .mb-5}

:::globalTitle{:size="lg" .mb-5}
Django CMS: Das großartige Content-Management-System
:::
:::globalParagraph
Es zeichnet sich durch eine hervorragende Usability, gute Wartbarkeit und leichte Erweiterbarkeit aus. Wie gut es letztendlich auf den Redakteur/Benutzer angepasst ist liegt letztendlich, in den meisten Fällen, am Entwickler selbst. Da uns stets die Usability unserer Lösungen am Herzen liegt, haben wir früh angefangen eine Lösung zum Erstellen des Layouts von Seiten im CMS gesucht. Bei dieser Suche stößt man schnell auf djangocms-column und aldryn-bootstrap3. Im Folgenden möchte ich diese 2 Plugins analysieren und gegenüberstellen. Daraufhin folgt eine Vorstellung unserer eigenen Lösung: djangocms-layouter.
:::

:::globalTitle{:size="lg" .mb-5}
Djangocms-column
:::
:::globalParagraph
Djangocms-column ist ein simples Plugin zum Strukturieren der Seiteninhalte. Fügt man ein „Mehrspalten“-Plugin im Struktur-Modus hinzu, so In erscheint folgender Dialog.
:::

![1_column-blog](/img/blogs/1_column-blog.jpg){.object-cover .max-w-full .mb-5}

:::globalParagraph
Hier kann der Nutzer nun einstellen wie viele Spalten mit welcher Breite erstellt werden sollen. Die Breite der Spalten verhält sich auf allen Bildschirmgrößen gleich. Spalten können im Nachhinein noch in ihrer Breite angepasst werden, sodass auch Spalten mit unterschiedlichen Breiten innerhalb eines Mehrspalten-Plugins möglich sind:
:::

![2_column-blog](/img/blogs/2_column-blog.jpg){.object-cover .max-w-full .mb-5}

:::globalParagraph
In jede der Spalten können nun nach Belieben weitere Plugins hinzugefügt werden.
:::

![3_column-blog](/img/blogs/3_column-blog.jpg){.object-cover .max-w-full .mb-5}

:::globalParagraph
Bei der oben dargestellten Variante, stellt sich schnell heraus, dass die erste Spalte (mit 50%) nicht dargestellt wird, solange diese keinen Inhalt hat. Man kann also keine Inhalte vom linken Rand wegschieben.
:::

:::globalTitle{:size="lg" .mb-5}
BOOTSTRAP IN DJANGO CMS: ALDRYN-BOOTSTRAP3
:::
:::globalParagraph
Das Bootstrap3 Plugin von Aldryn/Divio ist definitiv komplexer als djangocms-columns. Hier wird die Grid Logik, welche sonst Frontend-Entwickler implementieren, dem User als Werkzeug in die Hand gegeben. Fügt der Nutzer eine Zeile (Row) hinzu, so erscheint folgender Dialog:
:::

![4_column](/img/blogs/4_column.jpg){.object-cover .max-w-full .mb-5}

:::globalParagraph
Hier kann der Nutzer nun entscheiden, wie viele Spalten (Columns) er erstellen möchte, und wie diese sich auf verschiedenen Bildschirmgrößen verhalten.
:::
:::globalParagraph
Hierzu ein kurzer Exkurs zu Bootstrap3. Das populäre Frontend-Framework sieht vor, dass man seine Inhalte in Zeilen gliedert, welche wiederrum in Spalten unterteilt sind. Insgesamt ist der Platz von 12 Spalten zu vergeben. Dabei kann eine Spalte verschiedene Breiten einnehmen und zwar 1 bis 12. Entsprechend kann man in einer Zeile beispielsweise 12 Spalten der Breite 1 einordnen oder auch 6 Spalten der Breite 2. Die Breite der Spalten kann man basierend auf der Breite des Endgerätes auf dem die Website angeschaut wird definieren. Daraus ergibt sich, dass eine Zeile auf dem Desktop 6 Spalten der Breite 2 hat, auf dem Tablet werden in der Darstellung dann aber 2 Zeilen mit jeweils 3 Zeilen der Breite 4. Lange Rede, kurzer Sinn auf <a href="http://getbootstrap.com/css/#grid-example-mixed" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">http://getbootstrap.com/css/#grid-example-mixed</a> lässt sich sehr gut beobachten, wie sich entsprechende Spalten verhalten.
:::
:::globalParagraph
Hat man nun seine Zeile mit ihren Spalten erstellt, kann man Inhalte in die Spalten ziehen.
:::

![5_column](/img/blogs/5_column.jpg){.object-cover .max-w-full .mb-5}

:::globalParagraph
Somit gibt das Aldryn-Bootstrap 3 Plugin dem Nutzer quasi die Freiheit des Frontend-Entwicklers bei der Strukturierung der Inhalte. Weiterhin können noch Klassen ergänzt, sowie der Tag für die Spalte gesetzt werden.
:::

:::globalTitle{:size="lg" .mb-5}
AUSWERTUNG VON DJANGOCMS-COLUMN UND ALDRYNS BOOTSTRAP3 PLUGIN
:::
:::globalParagraph
Ein Fazit zu djangocms-column lässt sich schnell ziehen: Das Plugin bietet wenig Flexibilität, funktioniert nicht responsive und bietet auch keine visuelle Unterstützung beim Anlegen der Seitenstruktur. Vielleicht war es auch gar nicht die Absicht des Entwicklers responsive Funktionalität in dem Plugin zu verankern. Es eignet sich lediglich in solchen Fällen, in denen die Anordnung der Inhalte auf Endgeräten verschiedener Größe gleich sein sollte. Dies ist aber eher untypisch.
:::
:::globalParagraph
Da das Aldryn Bootstrap3 Plugin wesentlich komplexer ist, muss man hier beim Ziehen eines Fazits auch tiefer einsteigen. Es ist vorrangig sehr gut geeignet Inhalte für verschiedene Bildschirmgrößen anzuordnen. Durch die Möglichkeit die Tags zu bestimmen, kann eine saubere Strukturierung der Seite gewährleistet werden. Weiterhin können durch das Feld „Classes“ CSS-Klassen ergänzt werden, wodurch der Nutzer auch Zugriff auf das Styling der Inhalte bekommt.
:::
:::globalParagraph
Bei all der Flexibilität, die das Bootstrap3 Plugin bietet, die Bedienung ist für einen durchschnittlichen Autor oder Editor durchaus nicht leicht, da meistens das Wissen über das Grid-System und seine Funktionsweise nicht bekannt ist.
:::

:::globalTitle{:size="lg" .mb-5}
Django-CMS LAYOUTER AUF BOOTSTRAP BASIS
:::
:::globalParagraph
Die Strukturierung/Anordnung der Inhalte, ohne komplizierte Bedienung oder Spezialwissen. Dies ist das hauptsächliche Ziel, welches der django-CMS Layouter erreichen sollte. Der Nutzer sollte intuitiv wählen können, wie Inhalte auf seinem Bildschirm angeordnet sein sollten, sich jedoch nicht um die Optimierung auf anderen Auflösungen kümmern müssen. Somit haben wir die Entscheidung getroffen, vorerst, auf gewisse Flexibilität zu verzichten, zugunsten von einer einfacheren Bedienung. Der Nutzer sollte das Grid nicht nur in der Strukturansicht sehen können, sondern auch in der Inhaltsansicht. Dies würde das Verständnis für den Aufbau und die Strukturierung von Seiten maßgeblich vereinfachen. Die Baumstruktur in der Strukturansicht von django-CMS sollte nicht unnötig tief sein; diese führt sonst auch zur einer Erschwerung der Bearbeitung der Inhalte. Fehler sollten dem Nutzer kenntlich gemacht werden und das Layout der Seite möglichst wenig beeinflussen.
:::
:::globalParagraph
Aus diesen Gedanken heraus haben wir django-CMS Layouter gestartet.
:::
:::globalParagraph
Ergebnis ist eine schlanke Administration zur Strukturierung der eignen Plugins:
:::

![6_column](/img/blogs/6_column.jpg){.object-cover .max-w-full .mb-5}

:::globalParagraph
Man wählt die Struktur und den Abstand nach außen, welche/n man für seine Plugins vorsehen möchte. Wird ein spezielles Styling benötigt, so kann man dies einfach per CSS Klassen, getrennt durch Leerzeichen hinzufügen.
:::
:::globalParagraph
Django-CMS Layouter basiert auf dem populären Frontend-Framework Bootstrap. Dadurch, dass Zeilen und Spalten gleichzeitig angelegt werden, hat man eine flache Baustruktur in der Strukturansicht.
:::
:::globalParagraph
Fügt man zu viele Kind-Plugins in das django-CMS Layouter Plugin ein, so wird man durch einen roten Warntext darauf aufmerksam gemacht:
:::

![7_column](/img/blogs/7_column.jpg){.object-cover .max-w-full .mb-5}

:::globalParagraph
Nutzer haben nun die Möglichkeit, ihre Plugins einfach in einen Container zu ziehen, welcher sich um die Anordnung kümmert. Die Anordnung auf kleineren Bildschirmen, wie Tablets und Smartphones wird ebenfalls automatisch über das Plugin gesteuert und erleichtert somit auch den Umgang für den Nutzer.
:::
:::globalParagraph
Um die Anordnung der Plugins in der Inhaltsansicht besser zu verstehen wurde die Toolbar um einen Button ergänzt: Toggle Grid.
:::

![8_column-toggle_grid](/img/blogs/8_column-toggle_grid.jpg){.object-cover .max-w-full .mb-5}

:::globalParagraph
Dieser Button ermöglicht es das Grid, welches die Inhalte umschließt anzuzeigen. Hierdurch bekommt der Nutzer nun einen besseren Eindruck, warum seine Inhalte entsprechend angeordnet sind.
:::

![9_column](/img/blogs/9_column.jpg){.object-cover .max-w-full .mb-5}

:::globalParagraph
Mit der erleichterten Bedienung kommt, wie so oft, auch ein Verlust an Flexibilität. Im Gegensatz zum Aldryn Bootstrap 3 Plugin ist es mit dem django-CMS Layouter nicht möglich die Darstellung der Spalten auf den verschiedenen Auflösungen granular zu steuern. Weiterhin sind die Spalten im django-CMS Layouter immer zentriert, sobald man Ihnen einen Rand zuweist, in Aldryn’s Bootstrap 3 Plugin, kann man den Spalten auch einzeln Offsets zuweisen und somit die Einrückung im Detail steuern. Um Spalten im Grid zu überspringen ist ein „Spacer-Plugin“ angedacht, aber noch nicht verfügbar.
:::
:::globalParagraph
Welches Plugin sollte man nun wann verwenden? Wir empfehlen bei erfahrenen Nutzern, die bestenfalls sogar mit dem Bootstrap 3 Framework vertraut sind, auf Aldryn Bootstrap 3 zu setzen. Dieses bietet eine großartige Flexibilität, wird aktiv gepflegt und eignet sich sehr gut um Inhalte zu strukturieren.
:::
:::globalParagraph
Für Autoren und Editoren, welche nicht entsprechende Erfahrungen in der Gestaltung von Webseiten haben, empfehlen wir unseren django-CMS Layouter.
:::
:::globalParagraph
Als Nachtrag noch ein kleines GIF zum Django CMS Layouter:
:::

![layouter.png](/img/blogs/layouter.png){.object-cover .max-w-full .mb-5}

:::globalParagraph
Der Django-CMS Layouter ist Open-Source und kann hier gefunden werden:
:::
:::globalParagraph
[https://github.com/Blueshoe/djangocms-layouter](https://github.com/Blueshoe/djangocms-layouter){.bs-link-blue :target="_blank"}
:::
:::globalParagraph
Und hier geht's zu [Projekten](/projekte/){.bs-link-blue} die wir mit Django CMS umgesetzt haben .
:::