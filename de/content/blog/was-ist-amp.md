---
head:
  title: 'Was steckt hinter Googles AMP?'
  meta:
    - property: 'og:locale'
      content: 'de_DE'
    - name: 'description'
      content: 'In diesem Artikel erklären wir, was sich hinter dem Projekt AMP von Google verbirgt, was es für Vorteile bringt und für wen sich die Umsetzung lohnt. Jetzt lesen!'
    - property: 'og:type'
      content: 'website'
    - property: 'og:title'
      content: 'Was steckt hinter Googles AMP?'
    - property: 'og:description'
      content: 'In diesem Artikel erklären wir, was sich hinter dem Projekt AMP von Google verbirgt, was es für Vorteile bringt und für wen sich die Umsetzung lohnt. Jetzt lesen!'
    - property: 'og:image'
      content: 'https://www.blueshoe.de/img/meta/blueshoe-cloud-native-devlopment.png'
    - property: 'og:image:secure_url'
      content: 'https://www.blueshoe.de/img/meta/blueshoe-cloud-native-devlopment.png'
    - name: 'twitter:card'
      content: 'summary'
    - name: 'twitter:title'
      content: 'Was steckt hinter Googles AMP?'
    - name: 'twitter:description'
      content: 'In diesem Artikel erklären wir, was sich hinter dem Projekt AMP von Google verbirgt, was es für Vorteile bringt und für wen sich die Umsetzung lohnt. Jetzt lesen!'
    - name: 'twitter:image'
      content: 'https://www.blueshoe.de/img/meta/blueshoe-cloud-native-devlopment.png'
src: '/blog/was-ist-amp'
img: '/img/blogs/magnet-me-Ayx2M0iiVFQl.jpg'
alt: 'magnet-me-Ayx2M0iiVFQl'
preTitle: "Wir haben das Tech-Projekt unter die Lupe genommen"
title: "Was steckt hinter Googles AMP?"
description: 'In diesem Artikel erklären wir, was sich hinter dem Projekt AMP von Google verbirgt, was es für Vorteile bringt und für wen sich die Umsetzung lohnt. Jetzt lesen!'
date: '17.03.2017'
autor:
  - Robert Stein
technologie: 
  - AMP
marketing: []
sonstiges: []
---
::globalParagraph
Im Netz tauchen immer mehr Artikel zu Googles AMP Technologie auf. Nur ein kurzer Hype, oder ein Trend, welcher zukünftig interessant für Webseiten-Betreiber wird? Wir wollen unsere Meinung dazu hier teilen und diskutieren.
::
<!--more-->

![magnet-me](/img/blogs/magnet-me-Ayx2M0iiVFQl.jpg){.object-cover .max-w-full .mb-5}

:::globalParagraph
Seit ca. einem Jahr taucht ein kleiner Blitz mit der Kennung „AMP“ in den mobilen SERPs (Search Engine Result Pages) auf. Dahinter versteckt sich ein Projekt, initiiert von Google: AMP.
:::

![google_result](/img/blogs/google_result.jpg){.object-cover .max-w-full .mb-5}

:::globalParagraph
Quelle: <a href="https://moz.com/blog/google-amp-search-results" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">https://moz.com/blog/google-amp-search-results</a>
:::

:::globalTitle{:size="lg" .mb-5}
WOFÜR STEHT AMP?
:::
:::globalParagraph
AMP steht für Accelerated Mobile Pages. Es geht also um die Beschleunigung von Mobilen Webseiten, richtig? Ungefähr. Mehr oder weniger. Das große Ziel von AMP ist es die User Experience unserer Nutzer auf Webseiten zu verbessern. Dies realisiert AMP hauptsächlich durch die Verbesserung der Geschwindigkeit der jeweiligen Page. Klickt man auf einen Link mit der oben dargestellten Kennung, so öffnet sich die Seite blitzschnell. Der Mehrwert wird schnell ersichtlich, schaut man auf den Impact, welchen die Geschwindigkeit einer Webseite auf Besucherzahlen, Verweildauer, CTR und Conversion-Rates hat.
:::
:::globalParagraph
Die Geschwindigkeit / Ladezeit von Webseiten hat eine signifikante Relevanz für Besucherzahlen und Conversion-Rates gewonnen. Der Artikel „Find Out How You Stack Up to New Industry Benchmarks for Mobile Page Speed“\[1\] befasst sich genau damit. Im Januar analysierte ein Team bei Google 900.000 „mobile ad landing pages“.
:::
:::globalParagraph
**Ergebnis:**
:::
:::globalParagraph
Egal in welche Branche wir schauen, mobile Webseiten sind absolut überladen.
:::
:::globalParagraph
Je mehr Elemente, seien es Bilder, Skripte oder Stylings, auf einer Webseite verwendet werden, desto schlechter wird die Performance.
:::
:::globalParagraph
Die Bounce Rate, zu Deutsch „Absprungrate“, sprich die Wahrscheinlichkeit das der Nutzer nur eine Seite anschaut, steigt enorm mit der Ladezeit einer Seite an.
:::

![avarage_load_time-amp](/img/blogs/avarage_load_time-amp.jpg){.object-cover .max-w-full .mb-5}

:::globalParagraph
Die durchschnittliche Zeit bis zum ersten Byte der Antwort (Time to first Byte oder auch TTFB) sollte im besten Falle unter 1.3s liegen. Das klingt simpel, scheint es aber nicht zu sein. Schauen wir uns die durchschnittliche TTFB in Deutschland an, schafft es niemand annähernd an diese Zeit.
:::

![avarage_ttfb](/img/blogs/avarage_ttfb.jpg){.object-cover .max-w-full .mb-5}

:::globalParagraph
Woran liegt das? Dies kann verschiedene Ursachen haben. Ein langsamer Server, ein schlecht konfigurierter oder fehlender Cache oder einfach die falsche Wahl des Hosting Anbieters (was somit eine der vorherigen Ursachen begünstigt) können dazu führen, dass eine Webseite erstmal 2-3 Sekunden braucht um überhaupt zu antworten. Das bedeutet, dass in dieser Zeit noch keine Inhalte ausgeliefert wurden, sondern lediglich die Kommunikation zwischen Browser und Webserver initiiert ist.
:::
:::globalParagraph
Eine Seite sollte im Idealfall weniger als 500kB „wiegen“. Das klingt logisch, je weniger zu übertragen ist, desto schneller ist die Übertragung abgeschlossen. Gerade für Nutzer welche auf mobilen Endgeräte surfen, wenn das Netz mal wieder etwas schlechter ist, sind schlanke Webseiten eine Freude. Wie schaut es denn da so im Schnitt bei den deutschen Webseiten aus?
:::

![avarage_weight](/img/blogs/avarage_weight.jpg){.object-cover .max-w-full .mb-5}

:::globalParagraph
Interessanterweise schafft es auch hier niemand annähernd an die Empfehlung von Google. Dabei müsste es doch so leicht sein, oder? Verzichtet man einfach auf ein wenig „Schnick-Schnack“, ein paar Bildchen weniger und schon geschafft? Dies wird wohl kaum die Lösung sein. Es gibt fast immer gute Gründe entsprechende Inhalte auf den Seiten zu platzieren. Entsprechend ist die Kürzung von Inhalten und Medien der letzte Schritt, welchen wir bei Blueshoe für die Optimierung einer Seite gehen würden. Vorher schauen wir auf andere Faktoren wie z.B. die Komprimierung von Bildern, Skripten und Styles oder das nachladen von Inhalten. Werden z.B. Bilder erst nachgeladen, sobald sie durch Scrollen in den Fokus des Nutzers kommen, wird der initiale Seitenaufruf wesentlich schneller.
:::
:::globalParagraph
Dies sind lediglich 2 Faktoren aus dem Bericht „Find Out How You Stack Up to New Industry Benchmarks for Mobile Page Speed“. Es gibt noch weitere Merkmale, nach denen man seine Seite optimieren kann und sollte. Google hilft bereits dabei die eigene Webseite zu untersuchen: https://testmysite.thinkwithgoogle.com - das Tool basiert auf den PageSpeed Insights\[2\] von Google.
:::
:::globalParagraph
Nun haben wir gelernt, dass noch vieles falsch läuft bezüglich der Gestaltung und Auslieferung von mobilen Webseiten. Aber wer kann nun eigentlich von AMP profitieren?
:::

:::globalTitle{:size="lg" .mb-5}
AMP - NUR FÜR PUBLISHER INTERESSANT?
:::
:::globalParagraph
Schaut man sich um, wer AMP bereits massiv einsetzt, stößt man vorrangig auf Publisher wie Wired, The Washington Post oder The New York Times\[3\]. Zufall? Nein, das Team hinter AMP ist früh eine Partnerschaft mit den Verlagen eingegangen, da diese in erster Linie von den schnellen Ladezeiten profitieren können. Hat es Ihnen etwas gebracht auf AMP zu setzen? Definitiv, ja. Schaut man auf die Case Studies erscheint der Mehrwert von AMP offensichtlich: 23% Anstieg von wiederkehrenden Besuchern für die Washington Post\[4\] und 25% Anstieg in der CTR der Suchergebnisse für Wired\[5\].
:::
:::globalParagraph
Für Webseiten, welche Inhalte veröffentlichen und bereitstellen macht es also anscheinend Sinn. Je nach Aufwand sicher auch für Blogger und Hobbyautoren. Aber was ist mit den anderen Seiten?
:::
:::globalParagraph
WeGo – eine der größten Suchmaschinen für Flüge und Hotels in Indien, haben ihre Landingpages für Flüge mit AMP und PWA (Progressive Web Apps) gestaltet. Das bedeutet konkret: Wenn ein Nutzer Flug Singapur – Bangalore bei Google eingibt, so erscheint die Landingpage für diesen Flug in den Suchergebnissen. Klickt der Nutzer auf jenes Suchergebnis, so öffnet sich die Seite mit einem bereits vorausgefüllten Formular. Im Hintergrund werden bereits die nächsten Schritte geladen (Eingabe von Hin- und Rückflugdatum usw.) Für den Nutzer erscheint der Prozess hierdurch ohne Ladezeit. Dadurch haben sich erhebliche Verbesserung in der Conversion bei WeGo eingestellt\[6\].
:::
:::globalParagraph
Ebay hat begonnen AMP für Ihre Seite auszurollen und wird dies weiterhin ausbauen\[7\].
:::
:::globalParagraph
Macht AMP also für E-Commerce Seiten Sinn? Auf jeden Fall. Das AMP Team hat bereits angekündigt, die Möglichkeiten für den Bau von Webseiten mit AMP im Sinne von E-Commerce zu erweitern. Einige der dazu benötigten Komponenten wurden vor kurzem auf der AMP Conference vorgestellt. Dieses Beispiel zeigt einen einfachen Konfigurator für ein Produkt auf einer Seite. Es ist (fast) alles da, was unser E-Commerce Herz begehrt: Galerie-Slider, Video, Auswahl von Farben und der „Warenkorb“-Button. Lediglich das Eingabefeld für die Menge ist noch ein Auswahlfeld. Somit kann die Menge vom Nutzer nicht frei bestimmt werden. Aber keine Sorge, Input Felder sind bereits verfügbar\[8\].
:::
:::globalParagraph
AMP Seiten werden also auch im E-Commerce relevant. Vorstellbar sind Produkt Landingpages, welche mit AMP ausgestattet sind oder einfach die Produktseiten der E-Commerce Webseite/des Shops. Die Landingpages könnten den Nutzer weiter zum Produkt führen oder sogar direkt in den Warenkorb legen lassen.
:::

:::globalTitle{:size="lg" .mb-5}
WELCHEN EINFLUSS HAT AMP AUF SUCHMASCHINEN-RANKINGS?
:::
:::globalParagraph
Schön und gut, Seiten werden also schneller, aber wie schaut es denn mit SEO aus? Verbessern sich meine Rankings? Google belohnt mich doch sicher, wenn ich AMP in meine Seite integriere!
:::
:::globalParagraph
Die Integration von AMP in eine Webseite bringt keinen Boost im Ranking\[9\]. Jedoch kann AMP indirekt Auswirkungen auf das Ranking haben: durch den PageSpeed, durch bessere Nutzerzahlen und daraus resultierenden Aktionen wie z.B. das Teilen von Links. Google hat bis jetzt noch kein Statement abgegeben, ob AMP zukünftig ein Ranking-Faktor wird, oder nicht. Es gibt viele Spekulationen, „googelt“ man nach „AMP ranking factor“. Dies könnte zum absoluten Durchbruch von AMP führen.
:::
:::globalParagraph
Nichtsdestotrotz ist AMP eine sehr gute Strategie Teile der eignen Webseite zu verbessern, die User Experience zu erhöhen und somit die eigene Präsenz im Web aufzuwerten. Verbessert man die eigene Webseite, so konsumieren Nutzer mehr Inhalte – was zu höheren Verkaufszahlen, einer stärkeren Bindung oder einfach nur zufriedeneren Lesern führt.
:::

:::globalTitle{:size="lg" .mb-5}
WIE GEHT ES WEITER MIT AMP?
:::
:::globalParagraph
AMP wird von Google professionell vorangetrieben und natürlich gibt es auch eine Roadmap\[10\]. Wie sieht es also in naher Zukunft aus, was für Möglichkeiten wird uns AMP bieten?
:::
:::globalParagraph
Die Möglichkeiten komplexe Webseiten sowie bestehende Konventionen in AMP umzusetzen werden in Zukunft stetig wachsen. Features wie Autocomplete, Smart Buttons, Tabs, Parallax Scrolling, Hero Video Player, Lightbox sind bereits in Planung oder sogar schon umgesetzt. Entwickler werden sich zwar auf AMP Komponenten beschränken, aber dank der hervorragenden Community (307 Contributors und 9777 Stars auf Github)\[11\] werden diese ständig weiterentwickelt, verbessert oder gar ganz neue Komponenten entwickelt.
:::
:::globalParagraph
Im nächsten Artikel wird es wieder etwas technischer: Wie AMP aus technischer Sicht funktioniert und auf wie man AMP in Kombination mit Django einsetzen kann werden wir in den nächsten Wochen hier zeigen. Stay tuned!
:::
:::globalParagraph
Als Webagentur für Softwareentwicklung haben wir bei Blueshoe bereits unsere Erfahrungen mit AMP gesammelt und in der Verbindung mit Django-CMS umgesetzt. Bei Fragen stehen wir gerne beratend zur Seite! Hier gibt es aber schon mal ein paar mehr Infos zu Django-CMS:
:::
:::globalParagraph
[Webseiten mit Django-CMS](/projekte/){.bs-link-blue}
:::
:::globalParagraph
Hier noch einer kleiner Talk von der PyConWeb in München, den Robert kürzlich über das Thema Google AMP in Django hielt:
:::

:::GlobalPodcastSection{:videoId="NkrucRmfPrM" :videoPosition="right" :bg="bg-white"}

:::

<hr class="mb-5" />

:::globalParagraph
\[1\][https://www.thinkwithgoogle.com/articles/mobile-page-speed-new-industry-benchmarks.html](https://www.thinkwithgoogle.com/articles/mobile-page-speed-new-industry-benchmarks.html){.bs-link-blue :target="_blank"}<br>

\[2\][https://developers.google.com/speed/pagespeed/insights/?hl=de](https://developers.google.com/speed/pagespeed/insights/?hl=de){.bs-link-blue :target="_blank"}<br>

\[3\][https://www.ampproject.org/learn/who-uses-amp/publishers](https://www.ampproject.org/learn/who-uses-amp/publishers/){.bs-link-blue :target="_blank"}<br>

\[4\][https://www.ampproject.org/case-studies/washingtonpost]([https://www.ampproject.org/case-studies/washingtonpost/){.bs-link-blue :target="_blank"}<br>

\[5\][https://www.ampproject.org/case-studies/wired]([https://www.ampproject.org/case-studies/wired/){.bs-link-blue :target="_blank"}<br>

\[6\][https://youtu.be/lX8szUWpfjk?t=3h14m28s](https://youtu.be/lX8szUWpfjk?t=3h14m28s){.bs-link-blue :target="_blank"}<br>

\[7\][https://youtu.be/lX8szUWpfjk?t=2h20m55s](https://youtu.be/lX8szUWpfjk?t=2h20m55s){.bs-link-blue :target="_blank"}<br>

\[8\][https://www.ampproject.org/docs/reference/components/dynamic/amp-form](https://www.ampproject.org/docs/reference/components/dynamic/amp-form){.bs-link-blue :target="_blank"}<br>

\[9\][https://moz.com/blog/google-amp-search-results](https://moz.com/blog/google-amp-search-results){.bs-link-blue :target="_blank"}<br>

\[10\][https://www.ampproject.org/roadmap]([https://www.ampproject.org/roadmap/){.bs-link-blue :target="_blank"}<br>

\[11\] Stand 12.12 Uhr 17. März 2017
:::