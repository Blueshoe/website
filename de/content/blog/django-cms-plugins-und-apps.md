---
head:
  title: 'Django CMS Plugins und Apps'
  meta:
    - property: 'og:locale'
      content: 'de_DE'
    - name: 'description'
      content: 'Die Unterschiede zwischen Apps und Plugins in django CMS werden in diesem Blog Post behandelt - sowohl für Redakteure als auch für Entwickler.'
    - property: 'og:type'
      content: 'website'
    - property: 'og:title'
      content: 'Django CMS Plugins und Apps'
    - property: 'og:description'
      content: 'Die Unterschiede zwischen Apps und Plugins in django CMS werden in diesem Blog Post behandelt - sowohl für Redakteure als auch für Entwickler.'
    - property: 'og:image'
      content: 'https://www.blueshoe.de/img/meta/blueshoe-cloud-native-devlopment.png'
    - property: 'og:image:secure_url'
      content: 'https://www.blueshoe.de/img/meta/blueshoe-cloud-native-devlopment.png'
    - name: 'twitter:card'
      content: 'summary'
    - name: 'twitter:title'
      content: 'Django CMS Plugins und Apps'
    - name: 'twitter:description'
      content: 'Die Unterschiede zwischen Apps und Plugins in django CMS werden in diesem Blog Post behandelt - sowohl für Redakteure als auch für Entwickler.'
    - name: 'twitter:image'
      content: 'https://www.blueshoe.de/img/meta/blueshoe-cloud-native-devlopment.png'
src: '/blog/django-cms-plugins-und-apps'
img: '/img/blogs/clint-patterson-exfrR9KkzlE.jpg'
alt: 'clint-patterson-exfrR9KkzlE'
preTitle: "Das sind die Unterschiede"
title: "Django CMS Plugins und Apps"
description: 'Die Unterschiede zwischen Apps und Plugins in django CMS werden in diesem Blog Post behandelt - sowohl für Redakteure als auch für Entwickler.'
date: '30.07.2017'
autor:
  - Robert Stein
technologie: 
  - Django CMS
  - Django
marketing: []
sonstiges: []
---
::globalParagraph
Egal ob als neuer Benutzer, oder als Entwickler, der Unterschied zwischen Plugins und Apps ist nicht immer sofort klar. Im Folgenden wollen wir den Unterschied sowohl für Anwender, als auch für Entwickler erklären.
::
<!--more-->

![clint-patterson](/img/blogs/clint-patterson-exfrR9KkzlE.jpg){.object-cover .max-w-full .mb-5}

:::globalTitle{:size="lg" :tag="h2" .mb-5}
DJANGO CMS PLUGINS - LAYOUTING UND GROSSE FREIHEITE
:::
:::globalParagraph
Bei der Entwicklung von Templates in django CMS werden sogenannte Platzhalter in diesen eingesetzt. Die Platzhalter können dann später von den Nutzern des CMS mit Plugins befüllt werden.
:::
:::globalParagraph
Plugins erlauben dem Nutzer Seiteninhalte zu erstellen und zu strukturieren. Vom einfachen Darstellen eines Bildes, über Tabellen, Videos, Kacheln ist wirklich alles möglich. Viele Plugins gibt es bereits für django CMS, die Entwicklung von maßgeschneiderten Plugins ist sehr gut dokumentiert. Plugins werden immer innerhalb der Platzhalter eingesetzt. In der Strukturansicht kann man ihre Reihenfolge einfach per Drag’n’Drop manipulieren. In der Inhaltsansicht lassen sich ihre Inhalte einfach per Doppelklick bearbeiten.
:::

![text_edit_django_cms](/img/blogs/text_edit_django_cms.png){.object-cover .max-w-full .mb-5}

:::globalParagraph
Plugins sind verschachtelbar. Beispielsweise kann ein Textplugin auch Bilder enthalten.
:::
:::globalParagraph
Alle Plugins unterliegen dem Entwurf- und Veröffentlichen-Status einer Seite. Änderungen an Plugins werden also erst veröffentlicht, wenn der blaue Button „Änderungen Veröffentlichen“ oben rechts in der Toolbar betätigt wird.
:::

:::globalTitle{:size="lg" :tag="h2" .mb-5}
DJANGO CMS PLUGINS - WAS SIND DIE STANDARDS?
:::
:::globalParagraph
Welche Plugins sind bei django CMS vorinstalliert? Die Dokumentation von django CMS bietet <a href="https://docs.django-cms.org/en/release-3.4.x/topics/commonly_used_plugins.html" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">eine Liste der django CMS Core Addons</a>, welche mit der Installation des CMS bereits vorinstalliert sind. Diese umfasst die folgenden Plugins:
:::
:::GlobalBlock{.ul-disk .mb-5}
- <a href="https://github.com/django-cms/django-filer" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">Django Filer</a> – Management von Dateien und Bildern
- <a href="https://github.com/django-cms/djangocms-text-ckeditor" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">django CMS Text CKEditor</a> – der „standard“ WYSIWYG Editor für Benutzer von django CMS
- <a href="https://github.com/django-cms/djangocms-link" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">django CMS Link</a> – zum Verlinken von Inhalten
- <a href="https://github.com/django-cms/djangocms-picture" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">django CMS Picture</a> – zum Hinzufügen von Bildern
- <a href="https://github.com/django-cms/djangocms-file" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">django CMS File</a> – zum Einbinden von Dateien
- <a href="https://github.com/django-cms/djangocms-style" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">django CMS Style</a> - für Nutzer, welche manuelle Anpassungen am Styling vornehmen wollen
- <a href="https://github.com/django-cms/djangocms-snippet" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">django CMS Snippet</a> – zum Einfügen von HTML Code
- <a href="https://github.com/django-cms/djangocms-audio" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">django CMS Audio</a> – zum Einfügen von Audio Dateien
- <a href="https://github.com/django-cms/djangocms-video" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">django CMS Video</a> – zum Einfügen von Videos (intern und extern z.B. Youtube)
- <a href="https://github.com/django-cms/djangocms-googlemap" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">django CMS GoogleMap</a> – Darstellung von Google Maps, basierend auf Adressen oder Koordinaten
:::

:::globalParagraph
Natürlich ist dies nicht das Ende der Fahnenstange. Es gibt zahlreiche weitere Plugins, welche von der Community entwickelt, betreut und konstant verbessert werden.
:::
:::globalParagraph
Weiterhin besteht natürlich immer die Möglichkeit Individual- oder Neuentwicklung für Plugins zu betreiben. Später in diesem Artikel ist ein Absatz zur Entwicklung von Plugins zu finden – und es ist gar nicht so schwer, wie man denken könnte. Indem <a href="https://github.com/Blueshoe/" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">Blueshoe Github Repository</a> sind eine unserer eigenen Entwicklungen zu finden.
:::

:::globalTitle{:size="lg" :tag="h2" .mb-5}
KOMPLEXE ANSICHTEN UND ANWENDUNGEN IN DJANGO CMS
:::
:::globalParagraph
django-CMS-Apps werden auf Seitenebene eingebunden. Sie können komplexe Zusammenhänge abbilden und erzeugen festgelegte Ansichten automatisch. Ihr Layout ist entsprechend oft statisch, jedoch ist die Verwendung von Plugins innerhalb von Apps nicht ausgeschlossen. Während sich die Funktionalität von Plugins auf ihre jeweilige Seite beschränken lässt, können Apps selbstständig Ansichten erzeugen. Ein typisches Beispiel für eine App ist ein Blog. Man aktiviert die App für eine Seite im CMS, z.B. /blog. Werden nun Artikel geschrieben, generiert die Blog-App selbstständig durchsuchbare Listen, Kategorie-Ansichten sowie die Detail-Ansichten der Blogeinträge. Ein weiteres Beispiel für eine App könnte ein Fragenbogen sein, welche vom Redakteur erstellt wird. Je nach Beantwortung der Fragen wird der Nutzer nach Abschluss auf eine speziell zugeschnittene Ergebnisseite weitergeleitet.
:::

:::globalTitle{:size="lg" :tag="h2" .mb-5}
STANDARD-APPS IN DJANGO CMS
:::
:::globalParagraph
Mit der Installation von django CMS werden keine Apps im Sinne eine django CMS App installiert. Das hat den einfachen Grund, dass Apps immer spezielle Anforderungen abbilden, welche nicht auf alle Benutzer abgebildet werden können (im Gegensatz zu z.B. Text und Bild Plugin). Nicht jeder braucht zwangsweise einen Blog, oder eine Verwaltung und Darstellung für Events. Dahingehend verfolgt django CMS das Prinzip den Kern der Software schlank zu halten und zusätzlich benötigte Komponenten nachträglich zu installieren. Dieses Github Repository bietet eine, leider nicht ganz aktuelle, aber umfangreiche Sammlung von guten django CMS Add-ons (Plugins und Apps).
:::

:::globalTitle{:size="lg" :tag="h2" .mb-5}
DER UNTERSCHIED ZWISCHEN APPS UND PLUGINS
:::
:::globalParagraph
Plugins dienen als Bausteine zur Gestaltung einer einzelnen Seite. Sie erlauben es dem Redakteur oder Editor auf den Seiten in django CMS Inhalte einzupflegen und auf verschiedene Art und Weise darzustellen. Alle Einstellungen, welche für ein Plugin getroffen werden, gelten nur für die einzelne Instanz und nicht übergreifend. Plugins werden i.d.R. mehrmals im CMS verwendet. Ihre Inhalte können direkt aus dem Input der Benutzer des Systems kommen, aber auch über Schnittstellen und vom CMS generierte Daten (z.B. Listen von Artikeln).
:::
:::globalParagraph
Apps definieren die gesamte Funktion einer Seite im CMS. Sie haben die Möglichkeit über eine Seite hinaus weitere Ansichten (Unterseiten) zu erzeugen. Auch Apps haben sind über Einstellungen individualisierbar und können selber über Platzhalter verfügen, in welche wiederum Plugins eingesetzt werden können.
:::

:::globalTitle{:size="lg" :tag="h2" .mb-5}
WIE ENTWICKELT MAN EIN DJANGO CMS PLUGIN?
:::
:::globalParagraph
Jedes django CMS Plugin besteht aus drei Basiskomponenten: eine Konfiguration, einem Publisher und einem Template. Die Konfiguration entspricht leitet sich von der Klasse cms.models.pluginmodel.CMSPlugin ab, wobei diese selbst von der bekannten Django Model Klasse ableitet. Sie enthält alle wichtigen Einstellungen, welche benötigt werden um die jeweilige Instanz darzustellen:
:::
:::BlogCode{.mb-5}
```docker
class ImageWithCaptionModel(CMSPlugin):
    image = models.Imagefield(...)
    caption = models.TextField(...)
```
:::
:::globalParagraph
In dieser konkreten Klasse werden also die Daten gehalten, welche eine Instanz der Plugins dann später zur Darstellung von einem Bild mit Unterschrift verwenden kann.
:::
:::globalParagraph
Der Publisher ist im Django-Jargon die „Admin-Oberfläche“ zum jeweiligen Model. Die Klasse CMSPluginBase, welcher zur Erstellung dieser Publisher verwendet wird, leitet selbst auch die ModelAdmin Klasse ab. Publisher kontrollieren, wie die Daten ins Template gelangen, welches Template zum rendern verwendet werden soll, ob Caching beim rendern verwendet werden sollte, welche Felder der Konfiguration der Redakteur bearbeiten kann und einiges mehr.
:::
:::BlogCode{.mb-5}
```docker
class ImageWithCaptionPlugin(CMSPluginBase):
    model = ImageWithCaptionModel
```
:::
:::globalParagraph
Dies ist eine simple Version eines Publishers, welche es erlaubt neue ImageWithCaption Instanzen im CMS zu erzeugen, diese zu bearbeiten und zu löschen.
:::
:::globalParagraph
Zu guter Letzt benötigt man ein Template, welches vorgibt wie das Plugin auf einer Seite dargestellt wird. Es enthält alle Variablen, welche vom Publisher in den Kontext gegeben werden. Standardmäßig ist das die Instanz des Models.
:::
:::BlogCode{.mb-5}
```docker
<img src=“{% thumbnail instance.image 200x200 %}“>
<div>{{ instance.caption }}</div>
```
:::
:::globalParagraph
Die Entwicklung von django CMS Plugins ist weitestgehend in der <a href="https://docs.django-cms.org/en/stable/how_to/custom_plugins.html" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">Dokumentation</a> beschrieben.
:::

:::globalTitle{:size="lg" :tag="h2" .mb-5}
**WIE ENTWICKELT MAN EINE DJANGO CMS APP?**
:::
:::globalParagraph
Eine django CMS App ist im Grunde genommen eine normale Django App – mit ein paar Anpassungen. Wie bereits zuvor erwähnt werden Apps auf Seitenebene angelegt und zwar mit sogenannten Apphooks. Diese ermöglichen es dem CMS eine App, welche gegebenenfalls eine eigene Seitenstruktur mitbringt, einzubinden.
:::
:::BlogCode{.mb-5}
```docker
class ShowRoomApphook(CMSApp):
    name = _("Showroom")
    app_name = "showroom"

    def get_urls(self, page=None, language=None, **kwargs):
        return ["showroom.urls"]
        
apphook_pool.register(ShowRoomApphook)
```
:::
:::globalParagraph
In diesem Beispiel bauen wir eine Showroom-App – sie dient zur Darstellung der Kunstwerke eines Malers, welche die Webseite betreibt. Nachdem wir unsere URLs nun auch noch in die urls.py unseres Projektes eingetragen haben, ist prinzipiell der django CMS spezifische Teil um:
:::
:::BlogCode{.mb-5}
```docker
url(r'^showroom/', include('showroom.urls', namespace='showroom', app_name='showroom')),
```
:::
:::globalParagraph
Die urls.py für die App selbst muss auch angelegt werden:
:::
:::BlogCode{.mb-5}
```docker
urlpatterns = patterns('showroom.views',
    url(r'^$', CategoryListView.as_view(), name='category_list'),
    url(r'^artpiece/(?P<cat_id>\d+)/$',
        ArtPieceListView.as_view(), name='artpiece_list'),
)
```
:::
:::globalParagraph
Nun erstellen wir 2 Models, damit wir die Werke in der Datenbank repräsentieren können:
:::
:::BlogCode{.mb-5}
```docker
class Category(models.Model):
    name = models.Charfield(...)
    slug = models.Charfield(...)
```
:::
:::BlogCode{.mb-5}
```docker
class ArtPiece(models.Model):
    name = models.Charfield(...)
    image = models.ImageField(...)
    category = models.Foreignkey('Category', ...)
```
:::
:::globalParagraph
Weiterhin benötigen wir nun Views, zur Darstellung der Kunstwerke im Browser:
:::
:::BlogCode{.mb-5}
```docker
class CategoryListView(ListView):
    model = Category
    template = 'category_list.html'


class ArtPieceListView(ListView):
    model = ArtPiece
    template = 'art_piece_list.html'
    
  
  def get_queryset(self):
        qs = super(...)
        cat_id = kwargs.get('cat_id', None)
        if cat_id:
            qs = qs.filter(category__id=cat_id)
        return qs
```
:::
:::globalParagraph
Diese benutzen wiederum 2 Templates zur Darstellung der jeweiligen Listen. Der CategoryListView gibt eine Liste alle Kategorien der Kunstwerke aus, der ArtPieceListView gibt eine gefilterte Liste der Kunstwerke (gefiltert nach Kategorie). Diese beiden Views werden nun den URLs im Apphook hinzugefügt und schon können wir unsere neue App verwenden. Natürlich müssen wir die Models vorher Migrationen durchgeführt werden.
:::
:::globalParagraph
Eine detailierte Dokumentation zum Erstellen von Apps in django CMS ist hier zu finden: [http://docs.django-cms.org/en/release-3.4.x/how_to/apphooks.html](http://docs.django-cms.org/en/release-3.4.x/how_to/apphooks.html){.bs-link-blue :target="_blank"}.
:::

:::globalTitle{:size="lg" :tag="h2" .mb-5}
UNTERSCHIED UND GLEICHHEIT – DJANGO CMS APPS UND PLUGINS
:::
:::globalParagraph
Nachdem wir nun herausgestellt haben, wie sich die Unterschiede zwischen Apps und Plugins sowohl für Benutzer als auch für Entwickler darstellen sollte hier auch nochmal gesagt werden: Bei entsprechender Implementierung, kann man dieselbe Darstellung von bestimmten Problemen sowohl mit Apps als auch mit Plugins erreichen. Es gibt auch Problemstellungen, bei denen es nun nicht offensichtlich ist, ob man eine App braucht, oder ein Plugin. Dazu sollte man sich immer genau den Verwendungszweck anschauen, für welchen die Komponente erstellt wird. Sollen viele Informationen automatisiert dargestellt werden, werden Unterseiten gebraucht, bzw. Logiken und Workflows, welche sicher immer wieder wiederholen? Dann ist wohl in der Regel eine App die richtige Lösung. Wird viel Flexibilität in der Darstellung gebraucht und lässt sich kein Muster in der Verwendung erkennen, so sollte man eher dazu tendieren ein Plugin als Problemlösung herzunehmen.
:::
:::globalParagraph
Die Implementierung der django CMS App ist auch auf Github zu finden: [https://github.com/Blueshoe/django_cms_example](https://github.com/Blueshoe/django_cms_example){.bs-link-blue :target="_blank"}.
:::