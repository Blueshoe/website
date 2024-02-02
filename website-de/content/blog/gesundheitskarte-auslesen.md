---
src: '/blog/gesundheitskarte-auslesen'
img: '/img/blogs/design_ohne_titel_1.jpg'
alt: 'design_ohne_titel_1'
preTitle: "Digitalisierung im Gesundheitssystemwesen:"
title: "Auslesen der Gesundheitskarte (eGK) mit Python"
description: 'Wie man die Versicherungsstammdaten der elektronische Gesundheitskarte (eGK) mit einem Python Skript ausliest erklären wir dir hier.'
date: '30.01.2020'
autor:
  - Robert Stein
technologie: 
  - Python
marketing: []
sonstiges: []
---
::globalParagraph
Mit der Einführung der ePA (elektronische Patientenakte) schreitet die Digitalisierung des deutschen Gesundheitssystems mit großen Schritten voran. Einer der wichtigsten Schritte im Rahmen des Rollouts ist die Ausgabe der elektronische Gesundheitskarte (eGK) an alle Kunden der gesetzlichen Krankenkassen. Wofür die eGK verwendet wird, welche Daten auf ihr gespeichert sind und wie man die Versicherungsstammdaten mit einem Python Skript ausliest, soll in diesem Blogpost behandelt werden.
::
<!--more-->

![design_ohne_titel](/img/blogs/design_ohne_titel_1.jpg){.object-cover .max-w-full .mb-5}

:::globalTitle{:size="lg" .mb-5}
WAS IST EINE ELEKTRONISCHE PATIENTENAKTE/GESUNDHEITSKARTE?
:::
:::globalParagraph
Im Gegensatz zu ihrem Vorgänger, der KVK (Krankenversicherungskarte), kann die eGK mehr als nur für die Abrechnung verwendet zu werden. Sie dient zur Authentifizierung von Patienten in Praxen und Kliniken. Mithilfe der Karte und einer zugehörigen PIN ist es Patienten möglich, ihrem behandelnden Mediziner Zugriff auf die eigene ePA zu geben.
:::
:::globalParagraph
Hierbei wird es zu Beginn so sein, dass ein Arzt Zugriff auf die komplette Akte bekommt, später ist ein beschränkter denkbar. Außerdem können vom behandelnden Mediziner Daten bzw. Dokumente wie Röntgenbilder, MRTs oder Arztbriefe in der elektronischen Akte des Patienten gespeichert werden. Die eigene Akte kann der Patient dann beispielsweise bei einer Überweisung an einen anderen Arzt auch via Gesundheitskarte freigeben.
:::
:::globalParagraph
Die elektronischen Patientenakten werden in der Telematikinfrastruktur (TI) gespeichert. Zugriff auf diese erhält man nur mit entsprechendem Heilberufsausweis. Dieser kommt wie die eGK in Form einer Chipkarte und dient zur Identifizierung eines Arztes.
:::
:::globalParagraph
Mehr Details zu dem Aufbau, der Funktionsweise und den Problemen der TI sind anschaulich in diesen beiden Vorträgen erklärt:
:::

:::globalTitle{:size="sm" :tag="h4" .mb-5}
„Hacker hin oder her“: Die elektronische Patientenakte kommt!
:::
:::globalParagraph
[https://www.youtube.com/embed/q6l_B2fgJjM](https://www.youtube.com/embed/q6l_B2fgJjM){.bs-link-blue :target="_blank"}
:::
:::globalParagraph
(Quelle: YouTube-Kanal media.ccc.de; Martin Tschirsich cbro, Dr. med. Christian Brodowski, Dr. André Zilch)
:::

:::globalTitle{:size="sm" :tag="h4" .mb-5}
15 Jahre deutsche Telematikinfrastruktur (TI)
:::
:::globalParagraph
[https://www.youtube.com/watch?v=lHdXeH9ROog](https://www.youtube.com/watch?v=lHdXeH9ROog){.bs-link-blue :target="_blank"}
:::
:::globalParagraph
(Quelle: YouTube-Kanal media.ccc.de; Christoph Saatjohann)
:::

:::globalTitle{:size="lg" .mb-5}
TECHNISCHE BETRACHTUNG DER EGK
:::
:::globalParagraph
Vor der Implementierung eines Python Skripts zum Auslesen der Gesundheitskarte sollte ein Verständnis über die technischen Grundlagen entwickelt werden. Betrachtet werden also die physische Karte sowie die Datenstrukturen auf dem Chip selbst.
:::

:::globalTitle{:size="md" .mb-5}
**ÄUSSERLICHKEITEN**
:::
:::globalParagraph
Die elektronische Gesundheitskarte ist eine einfache Chipkarte, eine sogenannte „Smart Card“ oder ICC (Integrated Circuit Card). Neben dem Chip sind Informationen über den Karteninhaber auf die Oberfläche gedruckt.
:::
:::globalParagraph
Ein weitere interessante Information stellt das kleine „G2“ in der oberen rechten Ecke der Karte da. Dieses steht für „Generation 2“ und stellt somit die Version der Karte dar. Darüber hinaus befindet sich auf der Vorderseite sichtbar der Chip, auf welchem alle Daten gespeichert sind.
:::
:::globalParagraph
**So sieht beispielsweise eine Vorderseite und eine Rückseite aus:**
:::

![muster-elektronische-gesundheitskarte](/img/blogs/muster-elektronische-gesundheitskarte.jpg){.object-cover .max-w-full .mb-5}

:::globalParagraph
Auf der Rückseite findet man den Namen des Besitzers, den Firmennamen der Versicherung, eine Kennziffer für Besitzer und eine für die Karte, sowie das Geburtsdatum des Besitzers und das Ablaufdatum der Karte.
:::

:::globalTitle{:size="lg" .mb-5}
DATEN AUF DER EGK
:::
:::globalParagraph
Wie bereits erwähnt handelt es sich im eine sogenannte „Smart Card“. Diese werden hauptsächlich als ROM (Read Only Memory) verwendet - also um Zugriff auf Daten zu geben, nicht jedoch um neu beschrieben zu werden. Die elektronische Gesundheitskarte ist jedoch nicht nur als ROM ausgelegt, sondern kann auch neu beschrieben werden, beispielsweise um die Versicherungsstammdaten des Besitzers zu aktualisieren (z. B. bei Umzug oder nach Namensänderung).
:::
:::globalParagraph
Daten auf der eGK sind hierarchisch abgelegt. Dabei wird in Verzeichnisse (DF) und Datenspeicher (EF) unterschieden. Interessant ist an dieser Stelle vorrangig das Verzeichnis HCA (Health Care Application). In diesem befinden sich die Datenspeicher PD (persönliche Versichertendaten) und VD (Versicherungsdaten). (Quelle: <a href="https://fachportal.gematik.de/fileadmin/user_upload/fachportal/files/Spezifikationen/Basis-Rollout/Elektronische_Gesundheitskarte/gemLF_Impl_eGK_V160.pdf" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">Fachportal gematik</a> )
:::
:::globalParagraph
Neben diesen sind noch weitere Datenspeicher und Verzeichnisse verfügbar - diese sind hervorragend in einem Artikel des Fraunhofer-Instituts für offene Kommunikationssysteme erklärt: <a href="http://ask.fokus.fraunhofer.de/grundlagen/" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">BMG AsK</a>
:::

![egk-pythonblog](/img/blogs/egk-pythonblog.jpg){.object-cover .max-w-full .mb-5}

:::globalTitle{:size="lg" .mb-5}
DATEN VON SMART CARDS LESEN
:::
:::globalParagraph
Um Daten von einer Smart Card zu lesen, benötigt man zunächst ein Kartenlesegerät. Man benötigt jedoch kein spezielles Lesegerät für die Gesundheitskarte - eine kurze Suche im Internet nach einem „Chipkartenleser“ oder einem „Smart Card Reader“ liefert viele Ergebnisse.
:::
:::globalParagraph
Die Kommunikation zwischen dem Lesegerät und der Karte erfolgt mittels APDU (Application Protocol Data Unit). Die Struktur von APDU ist in der Norm ISO/IEC 7816-4 definiert. Man unterscheidet zwischen Command APDU und Response APDU.
:::globalParagraph
Command APDU übertragen ein Kommando oder einen Befehl von dem Kartenlesegerät an die Chipkarte. Dieser besteht aus einem Header und einem optionalen Body. Response APDU dienen als Antwort der Karte auf ein Command APDU. Dieser besteht wiederum aus einem Trailer und einem optionalen Body. Der Aufbau im Detail ist im folgenden Wikipedia Artikel gut erklärt: <a href="https://de.wikipedia.org/wiki/Application_Protocol_Data_Unit" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">Application Protocol Data Unit – Wikipedia</a>
:::

:::globalTitle{:size="lg" .mb-5}
AUSLESEN VIA PYTHON SKRIPT
:::
:::globalParagraph
Zum Auslesen der elektronischen Gesundheitskarte wird ein Kartenlesegerät sowie ein funktionstüchtiger Python Interpreter benötigt. Zudem legen wir uns den „Implementierungsleitfaden zur Einbindung der eGK in die Primärsysteme der Leistungserbringer“ der gematik parat: <a href="https://fachportal.gematik.de/fileadmin/user_upload/fachportal/files/Spezifikationen/Basis-Rollout/Elektronische_Gesundheitskarte/gemLF_Impl_eGK_V160.pdf" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">Fachportal gematik</a>
:::

:::globalTitle{:size="lg" .mb-5}
APDU VIA PYTHON
:::
:::globalParagraph
Sucht man nach Paketen, um APDU Kommandos via Python abzusetzen oder mit Smart Cards zu kommunizieren, kommt man nicht an dem Paket pyscard <a href="https://pyscard.sourceforge.io/" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">Python Smart Card Library</a> vorbei. Die Bibliothek ermöglicht uns genau das, was wir wollen - via Python APDU Kommandos abzusenden und zu empfangen. Also erstellen wir ein virtuelle Umgebung (VirtualEnv) und installieren das Paket dort.
:::
:::BlogCode{.mb-5}
```docker
virtualenv -p python3 ~/egk
pip3 install pyscard
```
:::
:::globalParagraph
Nach der Installation erzeugen wir eine Python Datei - /egk.py/:
:::
:::BlogCode{.mb-5}
```docker
touch egk.py
```
:::
:::globalParagraph
In dieser wird nun der Code zum Auslesen der Karte untergebracht. Als erstes gilt es nun die Verbindung zu Lesegerät herzustellen
:::
:::BlogCode{.mb-5}
```docker
from smartcard.System import readers
```
:::
:::BlogCode{.mb-5}
```docker
class HealthCardReader:
    def init(self):
        r = readers()
        if len(r) < 1:
        raise Exception('No reader found.')
        self.reader = r[0]
        self.connection = self.reader.createConnection()

        self.connection.connect()

healthcard_reader = HealthCardReader()
```
:::
:::globalParagraph
An dieser Stelle nutzen wir die 'readers' Funktion der pyscard-Bibliothek. Sie gibt uns eine Liste von verfügbaren Kartenlesegeräten zurück. Sollte keines verfügbar sein, wird eine Exception ausgelöst. Ansonsten erhält unser 'HealthCardReader' Objekt eine 'connection'. Mithilfe dieser können wir nun Command APDUs an die Karte übertragen:
:::
:::BlogCode{.mb-5}
```docker
...
healthcard_reader = HealthCardReader()
healthcard_reader.connection.transmit(apdu)
```
:::

:::globalTitle{:size="lg" .mb-5}
DAS WEITERE VORGEHEN ERGIBT SICH AUS DER SPEZIFIKATION DER GEMATIK:
:::
:::globalParagraph
Dieses Diagramm stellt den Programmablauf zum Auslesen von persönlichen Daten bzw. Versicherungsdaten dar.
:::

![image3-egk-pythonblog](/img/blogs/image3-egk-pythonblog.jpg){.object-cover .max-w-full .mb-5}

:::globalParagraph
Die entsprechenden APDU- Kommandos können ebenfalls aus der Spezifikation entnommen werden:
:::

:::BlogCode{.mb-5}
```docker
COMMANDS = {
    'SELECT_MF': [0x00, 0xA4, 0x04, 0x0C, 0x07, 0xD2, 0x76, 0x00, 0x01, 0x44, 0x80, 0x00],
    'SELECT_HCA': [0x00, 0xA4, 0x04, 0x0C, 0x06, 0xD2, 0x76, 0x00, 0x00, 0x01, 0x02],
    'EF_VERSION_1': [0x00, 0xB2, 0x01, 0x84, 0x00],
    'EF_VERSION_2': [0x00, 0xB2, 0x02, 0x84, 0x00],
    'EF_VERSION_3': [0x00, 0xB2, 0x03, 0x84, 0x00],
    'SELECT_FILE_PD': [0x00, 0xB0, 0x81, 0x00, 0x02],
    'SELECT_FILE_VD': [0x00, 0xB0, 0x82, 0x00, 0x08]
}
```
:::
:::globalParagraph
Die Begriffe Root und MF (Masterfile) können hier als äquivalent angesehen werden. Zuerst erweitern wir unsere Klasse um ein paar Utilities:
:::

:::BlogCode{.mb-5}
```docker
class HealthCardReader:
    def init(self):
        r = readers()
        if len(r) < 1:
        raise Exception('No reader found.')
        self.reader = r[0]
        self.connection = self.reader.createConnection()
        self.connection.connect()

  def create_read_command(self, pos, length):
    bpos = [pos >> 8 & 0xFF, pos & 0xFF]
    return [0x00, 0xB0, bpos[0], bpos[1], length]

    def read_file(self, offset, length):
    data = []
    max_read = 0xFC
    pointer = offset
    while len(data) < length:
        bytes_left = length - len(data)
        readlen = bytes_left if bytes_left < max_read else max_read
        data_chunk = self.run_command(self.create_read_command(pointer, readlen))
        pointer += readlen
        data.extend(data_chunk)
    return data

    def run_command(self, apdu):
        data, sw1, sw2 = self.connection.transmit(adpu)
        if (sw1, sw2) == (0x90, 0x00):
            return data
        raise Exception('Bad Status')
```
:::
:::globalParagraph
Mithilfe der neuen Utils können wir bequem Kommandos absetzen und Dateien von der Karte lesen. 'create_read_command' erlaubt es uns ein Command APDU zu erstellen, um einen bestimmten Bereich einer Datei zu lesen. 'read_file' wiederum erlaubt es uns eine komplette Datei auszulesen. 'run_command' erlaubt es uns jedes mal automatisch zu testen, ob unser Kommando erfolgreich war und wenn dies der Fall ist, das Ergebnis zurückzugeben. Nun können wir loslegen, um die Version der Karte zu erkennen und die PD auszulesen:
:::

:::BlogCode{.mb-5}
```docker
healthcard_reader = HealthCardReader()
healthcard_reader.run_command(COMMANDS['SELECT_MF'])
ef_v_1 = healthcard_reader.run_command(COMMANDS['EF_VERSION_1'])
ef_v_2 = healthcard_reader.run_command(COMMANDS['EF_VERSION_2'])
ef_v_3 = healthcard_reader.run_command(COMMANDS['EF_VERSION_3'])

if ef_v_1 == '3.0.0' and ef_v_2 == '3.0.0' and ef_v_3 == '3.0.2':
    generation = 'G1'
elif ef_v_1 == '3.0.0' and ef_v_2 == '3.0.1' and ef_v_3 == '3.0.3':
    generation = 'G1 plus'
elif ef_v_1 == '4.0.0' and ef_v_2 == '4.0.0' and ef_v_3 == '4.0.2':
    generation = 'G2'

# Selektieren der PD
healthcard_reader.run_command(COMMANDS['SELECT_HCA'])
healthcard_reader.run_command(COMMANDS['SELECT_FILE_PD'])

# Auslesen der ersten beiden Bytes - diese enthalten die Länge der PD
data = healthcard_reader.run_command(healthcard_reader.create_read_command(0x00, 0x02))
pd_length = (data[0] << 8) + data[1]
# Abziehen der ersten beiden Bytes
pd_length -= 0x02

# Nochmaliges Selektieren der PD
healthcard_reader.run_command(COMMANDS['SELECT_MF'])
healthcard_reader.run_command(COMMANDS['SELECT_HCA'])
healthcard_reader.run_command(COMMANDS['SELECT_FILE_PD'])

# Auslesen der komprimierten Daten nach den ersten beiden Bytes, mit der emittelten Länge
patient_data_compressed =  healthcard_reader.read_file(0x02, pd_length)
```
:::

:::globalTitle{:size="lg" .mb-5}
ENTPACKEN DER DATEN MIT PYTHON-STANDARDFUNKTIONEN
:::
:::globalParagraph
Nachdem Rohdaten von der Karte extrahiert sind müssen diese noch entpackt werden, da diese aktuell noch via gzip komprimiert vorliegen.
:::
:::BlogCode{.mb-5}
```docker
# Vorbeugen von zlib.error (truncated stream)
patient_data_compressed.extend([0x00] * 16)
patient_data_compressed = bytearray(patient_data_compressed)
patient_data_compressed = bytes(patient_data_compressed)
# Dekomprimieren der Rohdaten
patient_data_xml = zlib.decompress(patient_data_compressed, 15 + 16)
```
:::
:::globalParagraph
Damit liegen die persönlichen Daten des Patienten im XML-Format vor. Diese können nun nach belieben via 'lxml' oder einer anderen XML-Bibliothek verarbeitet werden.
:::

:::globalTitle{:size="lg" .mb-5}
BLUESHOE VERÖFFENTLICHT PYTHON-HEALTHCARD
:::
:::globalParagraph
Alle Erfahrungen, die wir als Blueshoe während unserer Arbeit mit der elektronischen Gesundheitskarte gemacht haben sowie alle zu beachtenden Tücken, haben wir in einem Paket zum Auslesen der elektronischen Gesundheitskarte zusammengefasst. Das Paket python-healthcard ist OpenSource aus dem Hause Blueshoe und wird auch fortlaufend betreut. Damit habt ihr vielleicht genau die Hilfe, die ihr in eurem nächsten Software-Entwicklungsprojekt braucht.
:::
:::globalParagraph
python-healthcard gewährt dem Benutzer Zugang zu den persönlichen Daten sowie den Versicherungsdaten, welche auf einer eGK gespeichert sind. In unserem Projekt “Ofa Smart Scan” - einem digitalen Körperscanner für den Sanitätsfachhandel - findet die python-healthcard aktuell bereits Anwendung. Die Technologie erlaubt es, neue Kunden eines Sanitätshauses mitsamt ihrer persönlichen Daten innerhalb von Sekunden anzulegen und direkt einen Messvorgang für beispielsweise Kompressionsstrümpfe anzustoßen.
:::
:::globalParagraph
Wir freuen uns über Verbesserungsvorschläge, Lob und Kritik - gerne via GitHub oder per Mail an [healthcard@blueshoe.de](mailto:healthcard@blueshoe.de){.bs-link-blue}
:::