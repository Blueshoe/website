---
head:
  title: 'Grundlagen der API-Strategie: Wie du die richtige Technologie für deine Anwendung auswählst'
  meta:
    - property: 'og:locale'
      content: 'de_DE'
    - name: 'description'
      content: "Erfahre, wie du die richtige API-Technologie für deine Anwendung auswählst. Vergleiche REST, GraphQL, gRPC und SOAP."
    - property: 'og:type'
      content: 'website'
    - property: 'og:title'
      content: 'Grundlagen der API-Strategie: Wie du die richtige Technologie für deine Anwendung auswählst'
    - property: 'og:description'
      content: "Erfahre, wie du die richtige API-Technologie für deine Anwendung auswählst. Vergleiche REST, GraphQL, gRPC und SOAP."
    - property: 'og:image'
      content: 'https://www.blueshoe.io/img/blogs/api-technologies-rest-graphql.svg'
    - property: 'og:image:secure_url'
      content: 'https://www.blueshoe.io/img/blogs/api-technologies-rest-graphql.svg'
    - name: 'twitter:card'
      content: 'summary'
    - name: 'twitter:title'
      content: 'Grundlagen der API-Strategie: Wie du die richtige Technologie für deine Anwendung auswählst'
    - name: 'twitter:description'
      content: "Erfahre, wie du die richtige API-Technologie für deine Anwendung auswählst. Vergleiche REST, GraphQL, gRPC und SOAP."
    - name: 'twitter:image'
      content: 'https://www.blueshoe.io/img/blogs/api-technologies-rest-graphql.svg'
src: '/blog/richtige-api-technologie-auswaehlen'
img: '/img/blogs/api-technologies-rest-graphql.svg'
alt: 'Erfahre, wie du die richtige API-Technologie für deine Anwendung auswählst. Vergleiche REST, GraphQL, gRPC und SOAP.'
preTitle: 'Navigieren in der API-Landschaft für moderne Anwendungen' 
title: "Grundlagen der API-Strategie: Wie du die richtige Technologie für deine Anwendung auswählst"
description: "Erfahre, wie du die richtige API-Technologie für deine Anwendung auswählst. Vergleiche REST, GraphQL, gRPC und SOAP."
date: '15.05.2024'
autor:
  - Korbinian Habereder
technologie:
  - Kubernetes
  - API
  - Python
productUpdates: []
sonstiges:
  - Entwicklung
---
Kannst du dir eine Welt ohne [APIs](/leistungen/api-entwicklung/) vorstellen? Eine Welt ohne die Leichtigkeit und Zuverlässigkeit eines OpenAPI-Schemas? Ja, ich auch nicht - und doch mussten Entwickler noch vor wenigen Jahren geniale Wege finden, um Systeme miteinander kommunizieren zu lassen.
<!--more-->

![Grundlagen der API-Strategie: Wie du die richtige Technologie für deine Anwendung auswählst](/img/blogs/api-technologies-rest-graphql.svg){.object-cover .max-w-full .mb-5}

:::BlogNavigationCard{:title="Inhaltsverzeichnis"}
:::

<!---  Die Bedeutung von APIs in der modernen Softwareentwicklung -->

:::globalTitle{:size="lg" .mb-5}
Die Bedeutung von APIs in der modernen Softwareentwicklung
:::
:::globalParagraph
Es gibt einen sehr guten Artikel von Darius Kazemi mit dem Titel <a href="https://increment.com/apis/land-before-modern-apis/" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">"The land before modern APIs"</a> über die Anfänge von ARPANET im Jahr 1970 und wie diese Entscheidungen die heutige Softwareentwicklung immer noch beeinflussen. Eine dieser Entscheidungen war die Spezifikation von Fehler- und Antwortcodes für das <a href="https://en.wikipedia.org/wiki/Remote_job_entry" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">"RJE-Protokoll"</a>, was zu den HTTP-Statuscodes führte, die wir alle kennen und <a href="https://http.cat/" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">"lieben"</a>.
:::
:::globalParagraph
Aber warum sind diese frühen Entscheidungen so wichtig und das moderne API-Design so bedeutsam für unsere tägliche Arbeit?
:::globalParagraph
Nun, der von Entwicklern im Jahr 1970 geebnete Weg führte zur Entwicklung von Web-APIs in den frühen 2000er Jahren. Der Artikel von Kin Lane mit dem Titel <a href="https://blog.postman.com/intro-to-apis-history-of-apis/" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">"Intro to APIs: History of APIs"</a> fasst die Geschichte von APIs sehr gut zusammen. Kurz gesagt, APIs gingen von einem kommerziellen Anwendungsfall über die Sozialisierung des Internets bis hin zur Unterstützung von Geräten der nächsten Generation. Es gibt sogar einen <a href="https://rapidapi.com/hub" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">"API-Hub"</a> für APIs! Das alles zeigt, dass APIs eine große Rolle in der modernen Softwareentwicklung spielen.
:::
:::globalParagraph
Obwohl wir unsere APIs lieben, gibt es immer noch eine laufende Debatte darüber, wie eine API unter der Haube funktionieren sollte. Vor 2015 entschied man sich in der Regel für ein REST-basiertes API-Design. Aber dann hat Facebook die GraphQL-Sprache für die API-Entwicklung als Open Source veröffentlicht und uns eine neue Möglichkeit gegeben, mit unseren Daten zu interagieren.
:::
:::globalParagraph
In diesem Beitrag möchte ich einen kleinen Überblick über REST und GraphQL geben, diese beiden vergleichen und schließlich einige andere Ansätze für das API-Design erwähnen.
:::
:::globalParagraph{.mb-5}
Also, wollen wir anfangen?
:::

:::GlobalButton{:url="/leistungen/api-entwicklung/" :label="Erfahre mehr über unsere API-Entwicklungsdienste" :color="blue" .mb-6} 
:::

<!---  Die Grundlagen und Stärken von REST-APIs verstehen -->

:::globalTitle{:size="lg" .mb-5}
Die Grundlagen und Stärken von REST-APIs verstehen
:::
:::globalTitle{:color="text-bs-blue" :font="font-oswald" :size="md" :tag="h3" .mb-5}
Eigenschaften von REST-APIs
:::
:::globalParagraph
REST [APIs](/leistungen/api-entwicklung/){.text-bs-blue .hover:underline .hover:decoration-bs-blue .hover:decoration-solid} weisen zwei grundlegende Eigenschaften auf, die ihrem Design zugrunde liegen: Zustandslosigkeit und die Verwendung von HTTP-Methoden. Erstens implementieren REST-APIs das zustandslose Paradigma, was bedeutet, dass jede Anfrage eines Clients an den Server alle erforderlichen Informationen enthalten muss, um sie zu verstehen und zu erfüllen, ohne auf vorherige Interaktionen angewiesen zu sein. Dies vereinfacht die Serverimplementierung und Skalierbarkeit, da keine Sitzungsdaten auf dem Server gespeichert werden müssen. Zweitens nutzen REST-APIs die vielseitigen Methoden des HTTP-Protokolls, wie z.B. GET, POST, PUT, DELETE, um verschiedene Aktionen auf Ressourcen auszuführen. Diese Methoden ermöglichen es Entwicklern, APIs zu erstellen, die eng mit den Prinzipien von CRUD (Create, Read, Update, Delete) übereinstimmen und die Klarheit, Vorhersagbarkeit und Zugänglichkeit ihrer API-Endpunkte verbessern.
:::
:::globalTitle{:color="text-bs-blue" :font="font-oswald" :size="md" :tag="h3" .mb-5}
Anwendungsfälle von REST
:::
:::globalParagraph
Wenn du eine [API](/leistungen/api-entwicklung/){.text-bs-blue .hover:underline .hover:decoration-bs-blue .hover:decoration-solid} mit einem klar definierten Client-Server-Vertrag planst (das bedeutet unter anderem weniger Flexibilität bei den Serverantworten), ist REST eine sehr gute Option für dich. REST ist nicht nur effizient und einfach zu implementieren, sondern wird auch von allen Programmiersprachen weitgehend unterstützt, die mit HTTP-Methoden arbeiten können.
:::
:::globalParagraph
Obwohl REST vordefinierte Anfragen erwartet und nur festgelegte Antworten liefert, bietet es dennoch eine hohe Flexibilität für die Erstellung einer API. Mit REST kannst du alles aufbauen!
:::
:::globalParagraph
Ein einfaches Beispiel könnte eine einfache API sein, die die Bilder von http.cat abruft und an den Benutzer zurückgibt:
:::
::BlogCode{.mb-5}

```python
from fastapi import FastAPI
from fastapi.responses import Response
import requests

app = FastAPI()

@app.get("/{status_code}", description="Get cat status code", response_class=Response)
async def get_cat_status_code(status_code: int):
    response = requests.get(f"https://http.cat/{status_code}")
    return Response(response.content, media_type="image/jpeg")
```

::
:::globalParagraph
Bitte beachte, dass http.cat bereits eine API ist, die ein Bild zurückgibt (es ist nicht ungewöhnlich, andere APIs in deiner API aufzurufen). Aber dieses Beispiel soll nur zeigen, was mit einer einfachen REST-API möglich ist und wie sie dem HTTP-Methodenmodell entspricht. Lass uns das genauer betrachten!
:::
:::globalParagraph
In diesem Beispiel habe ich das beliebte <a href="https://fastapi.tiangolo.com/" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">FastAPI-Paket</a> für Python verwendet. Es ermöglicht die einfache Erstellung von REST-APIs.
:::
:::globalParagraph
`@app.get` definiert eine HTTP-GET-Methode auf dem Stammverzeichnis mit dem Pfadparameter `status_code`. In der Methode `get_cat_status_code` mache ich dann eine GET-Anfrage an die http.cat-API (unter Verwendung des bereitgestellten status_code) und gebe schließlich die Bildbytes als FastAPI Response-Objekt zurück.
:::
:::globalParagraph{.mb-6}
Damit ist dieses kurze REST-Beispiel abgeschlossen.
:::

<!--- Störer -->
::GlobalPartial{content=catcher-1}

<!---  GraphQL: An API “newcomer” -->

:::globalTitle{:size="lg" .mb-5}
GraphQL: Ein "Neuling" unter den APIs
:::
:::globalParagraph
Obwohl GraphQL seit 2015 existiert, ist es im Vergleich zu REST oder sogar älteren Technologien wie SOAP-basierten APIs immer noch recht neu in der API-Welt.
:::
:::
:::globalTitle{:color="text-bs-blue" :font="font-oswald" :size="md" :tag="h3" .mb-5}
Eigenschaften von GraphQL
:::
:::globalParagraph{.mb-5}
GraphQL [APIs](/leistungen/api-entwicklung/){.text-bs-blue .hover:underline .hover:decoration-bs-blue .hover:decoration-solid} besitzen charakteristische Merkmale, die sie von traditionellen REST-APIs unterscheiden und einen flexibleren und effizienteren Ansatz für die Datenabfrage bieten. Eine bemerkenswerte Funktion von GraphQL ist seine Fähigkeit, Abfragen zu optimieren und den Datentransfer zu minimieren. Im Gegensatz zu REST-APIs, bei denen Endpunkte festgelegt sind und vordefinierte Datenstrukturen zurückgeben, ermöglicht GraphQL den Clients, genau anzugeben, welche Daten sie mit einer einzigen Abfrage benötigen. Diese Fähigkeit beseitigt Probleme mit Über- und Unterabfrage, die bei REST-APIs häufig auftreten, bei denen Clients möglicherweise mehr oder weniger Daten erhalten als erforderlich. Darüber hinaus ermöglicht das Typsystem von GraphQL Clients, verschachtelte oder verwandte Daten in einer einzigen Abfrage anzufordern, wodurch die Notwendigkeit für mehrere Anfragen an den Server reduziert wird. Durch Bereitstellung einer präzisen und deklarativen Syntax für die Datenabfrage ermöglicht GraphQL den Clients, nur die erforderlichen Daten abzurufen, was zu einer effizienteren Netzwerknutzung und einer verbesserten Leistung führt. Darüber hinaus unterstützt GraphQL Funktionen wie Query Batching und Caching, wodurch der Datentransfer optimiert und die Latenz für Client-Anwendungen reduziert wird. Insgesamt verbessern die Abfrageoptimierungsfunktionen von GraphQL die Effizienz und Reaktionsfähigkeit von API-Interaktionen und machen es zu einer hervorragenden Wahl für die moderne Anwendungsentwicklung. resulting in more efficient network usage and improved performance.
:::
:::globalTitle{:color="text-bs-blue" :font="font-oswald" :size="md" :tag="h3" .mb-5}
Anwendungsfälle von GraphQL
:::
:::globalParagraph
Der Anwendungsfall für GraphQL-APIs unterscheidet sich etwas von REST. GraphQL sollte in datenreichen Umgebungen mit komplexen Anforderungen verwendet werden. Es ist auch sinnvoll, wenn du mehrere Clients mit unterschiedlichen Datenanforderungen hast.
:::
:::globalParagraph
Lass uns das gleiche Beispiel wie bei der REST-API einrichten und mit GraphQL einige http.cat-Bilder abrufen!
:::
:::globalParagraph
Hier ist der Hauptcode für die API mit FastAPI und seiner GraphQL-Integration mit <a href="https://strawberry.rocks/" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">strawberry</a>:
:::
::BlogCode{.mb-5}

```python
import strawberry
from fastapi import FastAPI
from strawberry.asgi import GraphQL

@strawberry.type
class Cat:
    url: str

@strawberry.type
class Query:
    @strawberry.field
    def cat(self, status_code: int) -> Cat:
        return Cat(url=f"https://http.cat/{status_code}")

schema = strawberry.Schema(query=Query)

graphql_app = GraphQL(schema)

app = FastAPI()
app.add_route("/graphql", graphql_app)
app.add_websocket_route("/graphql", graphql_app)
```

::
:::globalParagraph
Zuerst definieren wir einen strawberry-Typ namens *Cat*, dann einen weiteren namens *Query*. Query hat ein Feld namens *cat*, das ein implizites Feld *url* hat. Das Erstellen eines GraphQL-Schemas kann mit strawberry-Schema erfolgen, indem es der *Query class* übergeben wird.
:::
:::globalParagraph
Wie du sehen kannst, ist GraphQL nicht in der Lage, die Bildbytes direkt zurückzugeben, was bedeutet, dass du solche Dinge selbst erledigen musst. Es benötigt auch einen Client auf der anderen Seite, der eine Abfrage gegen unsere API ausführen kann. Glücklicherweise hat strawberry einen integrierten Server, der einen solchen Client bereitstellt:
![Anwendungsfälle von GraphQL](/img/blogs/GraphQL-strawberry.png){.object-cover .max-w-full .mb-5}
:::
:::globalParagraph
Auf der linken Seite siehst du die von mir zusammengestellte Abfrage und auf der rechten Seite die JSON-Antwort von der GraphQL-API.
:::

<!---  Comparing REST and GraphQL -->

:::globalTitle{:size="lg" .mb-5}
Vergleich von REST und GraphQL
:::
:::globalParagraph
Im Internet liest man oft über REST vs GraphQL. Meiner Meinung nach kann man diese beiden Technologien nicht gegeneinander antreten lassen. Es handelt sich um zwei sehr unterschiedliche Ansätze zur Interaktion mit Daten, auf die wir zugreifen möchten. Daher ist ein Vergleich zwischen diesen beiden nicht fair und man kann nicht generell sagen, dass ein Ansatz besser ist als der andere. Ich würde eher vorschlagen, wann man welchen Ansatz verwenden sollte.
:::
:::globalParagraph
Wenn du dich in einer Umgebung befindest, in der du die Anforderungen mehrerer Clients erfüllen musst, die unterschiedlich geformte Daten benötigen, solltest du wahrscheinlich GraphQL verwenden. Mit seiner einfachen Abfragesprache kannst du schnelle, effiziente Antworten für deine Clients und ihre unterschiedlichen Anforderungen erzielen.
:::
:::globalParagraph
Auf der anderen Seite, wenn du etwas strenger in Bezug auf Serverantworten sein kannst und gern eine gute Zwischenspeicherung von Anfragen hättest, könnte eine REST-basierte API das Richtige für dich sein. Aufgrund ihrer Standardisierung und der Verwendung von HTTP-Methoden ist REST weit verbreitet und verwendbar. Mit ihrem Aufruf zur klaren Trennung von Zuständigkeiten und der architektonischen Kommunikation ohne Zustand ist sie auch eine sehr skalierbare Lösung.
:::

<!---  Übersicht über alternative API-Technologien -->

:::globalTitle{:size="lg" .mb-5}
Übersicht über alternative API-Technologien
:::
:::globalParagraph
Zum Schluss möchte ich zwei alternative Ansätze zur [API-Entwicklung](/leistungen/api-entwicklung/){.text-bs-blue .hover:underline .hover:decoration-bs-blue .hover:decoration-solid} erwähnen, die wir bei Blueshoe ebenfalls verwenden und anbieten.
:::
:::globalTitle{:color="text-bs-blue" :font="font-oswald" :size="md" :tag="h3" .mb-5}
gRPC und seine Rolle in Microservices
:::
:::globalParagraph
gRPC (das g steht nicht für Google) ist ein Open-Source-RPC-Framework, das ursprünglich von Google entwickelt wurde. Es basiert auf HTTP/2, Protocol Buffers (protobuf) und anderen modernen Technologien und bietet eine robuste und effiziente Möglichkeit, Dienste in verschiedenen Umgebungen zu verbinden.
:::
:::globalParagraph
gRPC bietet viele Vorteile in [Microservice-Architekturen](/leistungen/microservice-architektur-beratung/){.text-bs-blue .hover:underline .hover:decoration-bs-blue .hover:decoration-solid}. Einige davon sind:
:::
::GlobalBlock{:font-size="lg" :color="text-bs-text" .ul-disk .mb-5}
  - **Effiziente Serialisierung mit Protocol Buffers**: gRPC verwendet Protocol Buffers als seine Interface Definition Language (IDL) zur Definition von Serviceverträgen und zur Serialisierung von Daten. Protocol Buffers bieten ein kompaktes Binärformat und effiziente Serialisierungs- und Deserialisierungsprozesse, was zu kleineren Nachrichtengrößen und schnellerer Datenübertragung führt. Diese Effizienz ist insbesondere in [Microservices](/leistungen/microservice-architektur-beratung/){.text-bs-blue .hover:underline .hover:decoration-bs-blue .hover:decoration-solid}-Umgebungen mit hohem Datendurchsatz von Vorteil.
  - **Starke Typisierung und Codegenerierung**: Die gleiche Technologie von Protocol Buffers wird auch für die Typisierung und Codegenerierung verwendet. Dadurch kann die Entwicklung beschleunigt und menschliche Fehler minimiert werden.
  - **Bidirektionales Streaming und Flusssteuerung**: gRPC unterstützt verschiedene Kommunikationsmuster, einschließlich unärer, serverseitiger Streaming, clientseitiger Streaming und bidirektionaler Streaming. Diese Flexibilität ermöglicht es Diensten, Daten in Echtzeit effizient auszutauschen und unterstützt Anwendungsfälle wie Chat-Anwendungen, Echtzeitanalyse und ereignisgesteuerte Architekturen. Darüber hinaus verhindern die integrierten Flusssteuerungsmechanismen von gRPC Probleme wie Rückstau und gewährleisten eine optimale Ressourcennutzung und Systemstabilität.
::

:::globalTitle{:color="text-bs-blue" :font="font-oswald" :size="md" :tag="h3" .mb-5}
SOAP als Unternehmenslösung
:::
:::globalParagraph
SOAP (Simple Object Access Protocol), ein Protokoll zum Austausch strukturierter Informationen bei der Implementierung von Webdiensten, ist seit Jahrzehnten Teil von Unternehmensanwendungen. Es bietet eine standardisierte Möglichkeit für Anwendungen, über Netzwerke zu kommunizieren und ermöglicht die Interoperabilität zwischen verschiedenen Systemen und Plattformen. Trotz Kritik an seiner Verbosity und Komplexität im Vergleich zu neueren Protokollen wie REST ist SOAP aufgrund seiner Zuverlässigkeit, Erweiterbarkeit und umfassenden Sicherheitsfunktionen in Unternehmensumgebungen weiterhin beliebt.
:::

:::globalTitle{:color="text-bs-green" :font="font-oswald" :size="sm" :tag="h4" .mb-5}
Sicherheitsfunktionen von SOAP
:::
::GlobalBlock{:font-size="lg" :color="text-bs-text" .ul-disk .mb-5}
  - **Sicherheit auf Nachrichtenebene**: SOAP unterstützt Sicherheit auf Nachrichtenebene, indem einzelne Nachrichten zwischen Client und Server verschlüsselt und signiert werden können. Dadurch wird die Vertraulichkeit, Integrität und Authentizität von Daten gewährleistet und das Risiko von Abhören, Manipulation und unbefugtem Zugriff auf sensible Informationen verringert. Durch die Verschlüsselung von Payloads und das Anhängen digitaler Signaturen an Nachrichten hilft SOAP Unternehmen, die Vertraulichkeit und Integrität ihrer Daten auch während der Übertragung über nicht vertrauenswürdige Netzwerke aufrechtzuerhalten.
  - **WS-Security-Standard**: SOAP integriert sich nahtlos in den WS-Security-Standard, eine weit verbreitete Spezifikation zur Sicherung von Webdiensten. WS-Security bietet einen Rahmen für die Integration verschiedener Sicherheitsmechanismen wie Verschlüsselung, digitale Signaturen und Authentifizierungstoken in SOAP-Nachrichten. Diese Standardisierung gewährleistet die Interoperabilität und Kompatibilität zwischen verschiedenen Implementierungen und ermöglicht Unternehmen, auf ein breites Ökosystem von Sicherheitstools und -lösungen zurückzugreifen, um ihre auf SOAP basierenden Dienste zu schützen.
::

:::globalTitle{:size="md" .mb-5}
Zusammenfassung
:::
:::globalParagraph
Wie du siehst, gibt es viele Möglichkeiten, eine [API](/leistungen/api-entwicklung/){.text-bs-blue .hover:underline .hover:decoration-bs-blue .hover:decoration-solid} zu implementieren, und die Wahl der richtigen Technologie kann manchmal schwierig sein. Ich hoffe, mit diesem kurzen Überblick einen Hinweis darauf geben zu können, wann man einen bestimmten Ansatz verwenden sollte, um deine API zu erstellen. Und wenn du jemals eine maßgeschneiderte Lösung brauchst, [melde dich bei uns](/kontakt){.text-bs-blue .hover:underline .hover:decoration-bs-blue .hover:decoration-solid}!
:::


:::GlobalPodcastSection{:videoId="tyvE9VlSWkE" :videoPosition="left" .mb-6}
::::GlobalPreTitle{:color="text-bs-green" .mb-3}
Unser Kubernetes-Podcast
::::
::::GlobalTitle{:tag="h3" .mb-6}
Tools for the Craft: Navigating the Kubernetes ecosystem
::::
::::globalParagraph{:font-size="lg" .mb-4}
Michael und Robert sprechen ausführlich über die Vor- und Nachteile der lokalen Kubernetes-Entwicklung und geben auch einige echte Codierungsbeispiele.
::::
::::globalParagraph{:font-size="lg" }
Weitere Ausgaben unseres Podcasts findest du hier:
::::
::::GlobalButton{:url="/kubernetes-podcast/" :label="Mehr anzeigen" :color="green"}
::::
:::

:::BlogRelatedPosts{:url='["/blog/performance-comparison-gke-vs-eks", "/blog/kubernetes-development", "/blog/minikube-vs-k3d-vs-kind-vs-getdeck-beiboot", "/blog/evolution-of-application-development-to-cloud-native", "/blog/docker-desktop-und-kubernetes"]'}
:::
