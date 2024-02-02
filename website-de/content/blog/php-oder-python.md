---
src: '/blog/php-oder-python'
img: '/img/blogs/luca-bravo-XJXWbfSo2f0.jpg'
alt: 'luca-bravo-XJXWbfSo2f0'
preTitle: "Unter die Haube geschaut"
title: "PHP oder Python? Wir vergleichen!"
description: 'Warum setzt Blueshoe auf django und Python, und nicht auf PHP? In diesem Artikel erläutern wir, warum wir django lieben und keine Fans von PHP sind.'
date: '30.01.2017'
autor:
  - Robert Stein
technologie: 
  - Python
marketing: []
sonstiges: []
---
::globalParagraph
Warum setzt Blueshoe auf Django und Python, wenn doch PHP viel verbreiteter ist? Wir haben unsere Gründe und halten diese auch sicher nicht geheim.
::
::globalParagraph
In diesem Artikel vergleichen wir Python und Django mit PHP.
::
<!--more-->

![luca-bravo](/img/blogs/luca-bravo-XJXWbfSo2f0.jpg){.object-cover .max-w-full .mb-5}

:::globalTitle{:size="lg" .mb-5}
WARUM SETZT BLUESHOE AUF DJANGO?
:::
:::globalParagraph
In vielen unserer Projekte setzen wir Django ein. Insbesondere, wenn wir uns einem neuen, potentiellen Kunden vorstellen, fragt dieser: „Warum setzt [Blueshoe](/team/){.bs-link-blue} auf Django? Ihre Mitbewerber setzen vorrangig auf PHP Systeme wie Wordpress, Drupal bzw. Magento, Shopware oder WooCommerce.“
:::
:::globalParagraph
An dieser Stelle muss ich sagen, dass der Vergleich zwischen PHP-Systemen, wie den oben genannten, und Django nicht ganz fair ist.
:::
:::globalParagraph
PHP ist eine Programmiersprache, Django ein Web Framework, Wordpress und Drupal sind CMS Systeme, Magento und WooCommerce sind E-Commerce-Systeme.
:::

:::globalTitle{:size="lg" .mb-5}
PHP IST EINE KRUX
:::
:::globalParagraph
PHP ist eine Programmiersprache mit weiter Verbreitung. Es gibt viele Quellen und viele Projekte. Jedoch entfernt sich die moderne Welt der Webentwicklung langsam aber sicher von PHP:
:::
:::globalParagraph
Suchanfragen für PHP:
:::

![php_blog_graph](/img/blogs/php-blog-graph.jpg){.object-cover .max-w-full .mb-5}

:::globalParagraph
Suchanfragen für das weit verbreitete Zend Framework (PHP basiert):
:::

![zend](/img/blogs/zend.jpg){.object-cover .max-w-full .mb-5}

:::globalParagraph
Jeff Atwood beschreibt PHP in seinem Artikel „The PHP Singularity“\[1]: „PHP isn't so much a language as a random collection of arbitrary stuff, a virtual explosion at the keyword and function factory.“
:::
:::globalParagraph
Folgt man Jeff Atwood’s Artikel, wird schnell klar: PHP ist eine schrecklich schlecht designte Programmiersprache. Warum gibt es dann so viele Projekte, welche auf PHP basieren? Dafür könnte es folgende Gründe geben:
:::
:::GlobalBlock{.ul-disk .mb-5}
- PHP war frühzeitig (PHP 1 erschien 1995)\[2] eine Möglichkeit serverseitige Logik zu implementieren.
- PHP ist billig. Nahezu jeder Webspace-Anbieter erlaubt es PHP auszuführen. Das Deployment ist simpel, simpler geht es nicht. Einfach die Dateien auf den Server laden und schon läuft’s.
- Aufgrund der früh wachsenden Nachfrage sind natürlich viele Jobs im PHP Umfeld entstanden, was zur Folge hat, dass auch mehr Projekte in PHP umgesetzt werden
:::
:::globalParagraph
Systeme, die auf dieser Basis aufsetzen, sind auf den ersten Blick billig und einfach zu handhaben. Genauso einfach läuft aber auch das Boot aus dem Ruder: Sicherheitslücken, schlechte Wartbarkeit, schlechte Code Qualität\[3]. Schlechte Wartbarkeit ist bekanntlich teuer, da die Einarbeitungszeit in vorhandenen Code für Entwickler in der Regel höher ist oder weil der Entwickler eine so spezielle Kenntnis von dem System hat, dass er mit der Zeit immer mehr Geld verlangen kann. Eine Abhängigkeit des Auftraggebers, ein „Vendor lock-in“, entsteht.
:::

:::globalTitle{:size="lg" .mb-5}
PYTHON ALS FUNDAMENT
:::
:::globalParagraph
Saubere Strukturen, eine gute Code-Qualität sowie eine entsprechend leichtgewichtige Wartbarkeit liegen in der Natur von Python. Im Gegensatz zu anderen Programmiersprachen bildet Python seine Struktur durch Einrückung ab. Dies zwingt den Entwickler nicht nur, eine konstante Struktur bei der Einrückung und Strukturierung seines Codes zu verwenden, sondern macht es wesentlich einfacher für andere Entwickler, sich in ein Projekt einzulesen.
:::
:::globalParagraph
Ein kurzes Beispiel:
:::
:::globalTitle{:size="md" .mb-5}
PHP
:::
:::BlogCode{.mb-5}
```php
for ($i = 1; $i < 10; $i++) {
  if $($i % 2 == 0) {
    echo $I;
  }
}
```
:::
:::globalTitle{:size="md" .mb-5}
Python
:::
:::BlogCode{.mb-5}
```javascript
for i in range(0, 10, 2):
   print i
```
:::
:::globalParagraph
Natürlich repräsentiert dieses Beispiel keinen umfassenden Vergleich beider Sprachen. Es soll lediglich eine grobe Vorstellung über die Lesbarkeit beider Sprachen vermitteln.
:::
:::globalParagraph
Weiterhin gibt es mit PEP8\[4] eine klare Richtlinie, wie Python Code zu formatieren ist. Unsere Entwicklungsumgebungen bei Blueshoe sind so konfiguriert, dass diese auf Konformität zu PEP8 prüfen.
:::
:::globalParagraph
Schön und gut, wir haben nun gezeigt, dass Python seinen Entwickler zu einer gewissen Strukturierung „erzieht“. Aber können professionelle PHP Entwickler dies nicht auch?
:::
:::globalParagraph
Natürlich gibt es auch PHP Entwickler, welche es schaffen, ihren Code sauber zu strukturieren und lesbar zu halten. In der Praxis sieht man heute leider noch viel zu oft sogenannten Spaghetti Code, wenn man durch PHP Projekte schaut. Python sollte somit auf langfristige Sicht nicht teurer als PHP sein, da die Wartungskosten in der Regel gering gehalten werden können.
:::

:::globalTitle{:size="lg" .mb-5}
DJANGO – DAS GERÜST UNSERER WEBANWENDUNG
:::
:::globalParagraph
Warum genau setzt Blueshoe nun auf Django und was genau ist Django eigentlich?
:::
:::globalParagraph
Django ist ein Framework zur Entwicklung von Webanwendungen. Damit gibt Django einen gewissen Workflow vor – eine Struktur in der Entwicklung von Webanwendungen. Hält man diese ein, fällt es wiederum neuen Entwicklern leicht, sich in den Code eines neuen Projektes einzulesen. Dies hat nicht nur zur Folge, dass das Projekt besser strukturiert und organisiert ist, sondern auch Zeit eingespart wird, was sich sich wiederum in den Kosten widerspiegelt.
:::
:::globalParagraph
Django bringt von Haus aus verschiedene Sicherheitsmechanismen mit, welche standardmäßig Pflicht bei der Implementierung sind. Beispielsweise Cross-Site Request Forgery (CSRF) wird durch den Einsatz von CSRF-Token unterbunden. Cross-Site Scripting wird ebenfalls von Haus aus von der Django-Template Engine unterbunden. Ein Entwickler muss sich aktiv gegen diesen Schutz für eine Variable entscheiden, um diesen Schutz zu deaktivieren. Unter anderen Angriffsvektoren, welche Django so klein wie nur möglich hält, ist auch SQL Injection. Das Open Web Application Security Project (OWASP) kategorisierte SQL Injection 2013 als Nummer 1 Schwachstelle oder auch den potenziell größten Angriffsvektor.\[5]
:::
:::globalParagraph
Django bezeichnet sich selbst als „The web framework for perfectionists with deadlines“\[6]. Das Entwicklungs-Team um Django hat sich grundlegende Philosophien für die Entwicklung des Frameworks festgelegt\[7]. Diese sind natürlich keine Neuerfindung in der IT-Welt, sondern gelten auch für andere Projekte und Softwaresysteme. Es ist jedoch bemerkenswert, wie strikt diese im Django-Projekt verfolgt und eingehalten werden. Dies wird von der Community sehr gut angenommen und liegt uns bei Blueshoe sehr am Herzen. Die Folgen sind der Traum eines jeden Auftraggebers (von Software):
:::
:::GlobalBlock{.ul-disk .mb-5}
- Wiederverwendbare Komponenten = weniger Zeit, geringere Kosten
- Einfache Erweiterbarkeit des Systems = Projekt als Grundlage für Weiterentwicklung
- Einfachheit, Lesbarkeit = Keine Abhängigkeit vom Auftragnehmer
- Up to date Sicherheitsmechanismen (für Webanwendungen)
:::
:::globalParagraph
Gut, Django ist sicher, es ist sehr strukturiert, hat eine sehr gute Wartbarkeit und erlaubt es, in kurzer Zeit viel Funktionalität umzusetzen. Aber wer setzt auf Django? Gibt es Beispiele bekannter Webseiten, welche auf Python/Django setzen?
:::

:::globalParagraph
Wer setzt sonst noch auf Python/Django?
:::
:::globalParagraph
Es gibt zahlreiche, darunter sehr bekannte, Webseiten die Python/Django einsetzen. Ein paar hier:
:::

![platforms](/img/blogs/platforms.jpg){.object-cover .max-w-full .mb-5}

:::globalTitle{:size="md" :tag="h3" .mb-5}
Dropbox:
:::
:::globalParagraph
Viele Instanzen in der Dropbox-Infrastruktur führen Python-Code aus. Der hauptsächliche Grund für Dropbox war die schnelle Entwicklung ihrer Features, welche Python ermöglichte.
:::

:::globalTitle{:size="md" :tag="h3" .mb-5}
YouTube\[8]:
:::
:::globalParagraph
2009 sprengte YouTube die Grenze von einer Milliarde Views pro Tag. YouTube setzt auf einen Application Server, welcher in Python geschrieben wurde. Um verschiedenen Auslastungen gerecht zu werden, kann YouTube einfach Maschinen hinzu- bzw. abschalten. Python ist bei hoher Auslastung der YouTube-Infrastruktur in der Regel nicht das Bottleneck. YouTube setzt Python außerdem vor allem wegen seiner Möglichkeiten zur schnellen und flexiblen Entwicklung ein.
:::

:::globalTitle{:size="md" :tag="h3" .mb-5}
Pinterest\[9]:
:::
:::globalParagraph
Pinterest zahlt in Hochzeiten 52$ pro Stunde für ihre Server. Der meiste Traffic kommt dabei nachmittags und abends. Über Nacht kann die Gesamtanzahl der Instanzen auf 40% reduziert werden, was in einer Kostenreduktion bis auf 15$ pro Stunde resultieren kann. Hauptsächlich werden zum Ausliefern der Inhalte Django und Tornado (ein Python-Web-Framework und Asynchronous Network Library)\[10] eingesetzt.
:::

:::globalTitle{:size="md" :tag="h3" .mb-5}
Spotify\[11]:
:::
:::globalParagraph
Spotifys Backend besteht aus vielen unterschiedlichen Services. 80% dieser Dienste sind in Python geschrieben. Einer der wesentlichen Gründe für Spotify ist die schnelle Entwicklung, die Python mit sich bringt. Für die Abarbeitung asynchroner Tasks sowie (ca. 90% der) Map-Reduce Tasks in Spotify’s Hadoop Cluster wird Python hergenommen.
:::

:::globalTitle{:size="md" :tag="h3" .mb-5}
Instagram\[12]:
:::
:::globalParagraph
Mit mehreren Millionen Requests pro Sekunde zeigt Instagram erfolgreich, wie perfekt Django zum Bauen von Web-Applications ist. Die Gesamtarchitektur ist natürlich komplex, Kern der Instagram Server ist jedoch Django als Application Server.
:::

:::globalTitle{:size="md" :tag="h3" .mb-5}
Disqus\[13]:
:::
:::globalParagraph
Disqus wird auf zahlreichen Webseiten als Kommentar-Plugin verwendet. Mit (Stand 2013) 45.000 Anfragen pro Sekunde ist Disqus eine Webanwendung, welche extrem skaliert. Django wird fast ausschließlich für die Bearbeitung aller Anfragen auf Disqus verwendet. Natürlich kommen hier Technologien zum Einsatz, welche „Django das Leben erleichtern“ (z.B. Caches). Trotzdem gilt auch hier: Ein solides Fundament (wie beispielsweise Django) wird gebraucht, um stabile, sichere und skalierbare Webanwendungen zu entwickeln.
:::

:::globalTitle{:size="lg" .mb-5}
BLUESHOE <3 PYTHON/DJANGO
:::
:::globalParagraph
Python und Django haben aktive Communities, sie werden ständig weiterentwickelt und erlauben es uns, in kurzer Zeit hochqualitative Software zu schreiben. Deshalb lieben wir Python und Django. Kürzere Umsetzungszeiten bei Change Requests , hohe Sicherheitsstandards und geringe Kosten bei der Wartung/Pflege, diese Dinge lieben unsere Kunden. Es ist uns bei Blueshoe wichtig, dass unsere Kunden und Partner verstehen, warum wir diese Technologie als Grundlage vieler Projekte für uns gewählt haben.
:::
:::globalParagraph
Lange Rede, kurzer Sinn: Python/Django sind grandiose Fundamente für unterschiedlichste Projekte. Wir setzen darauf und unsere Erfahrungen sprechen für sich. Täglich erwarten uns neue Herausforderungen und wir wurden niemals von Django enttäuscht. Es trifft einfach den Kern unserer Mentalität: Auch wir sind Perfektionisten mit Deadlines.
:::
:::globalParagraph
Es gibt übrigens auch ein wundervolles Content Management System, dass auf Django basiert:
:::

<hr class='mb-5'>

:::globalParagraph
\[1][http://blog.codinghorror.com/the-php-singularity/](http://blog.codinghorror.com/the-php-singularity/){.bs-link-blue :target="_blank"}<br>

\[2][http://php.net/manual/de/history.php.php](http://php.net/manual/de/history.php.php){.bs-link-blue :target="_blank"}<br>

\[3][https://eev.ee/blog/2012/04/09/php-a-fractal-of-bad-design/#stance](https://eev.ee/blog/2012/04/09/php-a-fractal-of-bad-design/#stance){.bs-link-blue :target="_blank"}<br>

\[4][https://www.python.org/dev/peps/pep-0008](https://www.python.org/dev/peps/pep-0008){.bs-link-blue :target="_blank"}<br>

\[5][https://www.owasp.org/index.php/Top_10_2013-Top_10](https://www.owasp.org/index.php/Top_10_2013-Top_10){.bs-link-blue :target="_blank"}<br>

\[6][https://www.djangoproject.com/](https://www.djangoproject.com/){.bs-link-blue :target="_blank"}<br>

\[7][https://docs.djangoproject.com/en/stable/misc/design-philosophies/](https://docs.djangoproject.com/en/stable/misc/design-philosophies/){.bs-link-blue :target="_blank"}<br>

\[8][http://highscalability.com/youtube-architecture](http://highscalability.com/youtube-architecture){.bs-link-blue :target="_blank"}<br>

\[9][http://highscalability.com/blog/2012/5/21/pinterest-architecture-update-18-million-visitors-10x-growth.html](http://highscalability.com/blog/2012/5/21/pinterest-architecture-update-18-million-visitors-10x-growth.html){.bs-link-blue :target="_blank"}<br>

\[10][http://www.tornadoweb.org/en/stable/](http://www.tornadoweb.org/en/stable/){.bs-link-blue :target="_blank"}<br>

\[11][https://labs.spotify.com/2013/03/20/how-we-use-python-at-spotify/](https://labs.spotify.com/2013/03/20/how-we-use-python-at-spotify/){.bs-link-blue :target="_blank"}<br>

\[12][http://instagram-engineering.tumblr.com/post/13649370142/what-powers-instagram-hundreds-of-instances](http://instagram-engineering.tumblr.com/post/13649370142/what-powers-instagram-hundreds-of-instances){.bs-link-blue :target="_blank"}<br>

\[13][http://blog.disqus.com/post/62187806135/scaling-django-to-8-billion-page-views](http://blog.disqus.com/post/62187806135/scaling-django-to-8-billion-page-views){.bs-link-blue :target="_blank"}<br>
:::