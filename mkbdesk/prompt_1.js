const bedrijfsnaam = "test";
const branche = "test";

const a1_1 = "test";
const a1_2 = "test";
const a1_3 = "test";
const a1_4 = "test";
const a1_5 = "test";
const a1_6 = "test";
const a1_7 = "test";
const a1_8 = "test";

prompt1 = `We zijn een bedrijfsrapport voor ${bedrijfsnaam} aan het stellen dat buiten de introductie, 1 tot 8 hoofdstukken zal bevatten. De introductie zal gaan over AI binnen de sector ${a1_3} en de daarop volgende hoofdstukken betreffen [H1], ..., [Hx]. Elk onderdeel wordt gemaakt door een losse API completion, zoals dit daar 1 (en de eerste) van is. Als antwoord op de onderstaande prompt willen we dat je de inleiding van het rapport maakt.
\n\n				
Basisinformatie over het bedrijf:\n
bedrijf: ${bedrijfsnaam} \n
Branche: ${branche} \n
Sector: ${a1_3} \n
Aantal vestigingen: ${a1_4} \n
Locatie hoofdkantoor: ${a1_5} \n
Aantal medewerkers: ${a1_6} \n
Strategische leveranciers: ${a1_7} \n
Strategische partners: ${a1_8} 
\n\n


\n\n\n
///
\n\n\n
ALGEMENE INSTRUCTIES:
\n\n\n
Gebruik Directe Aanspreekvormen: Focus op termen als "jullie", "uw", en "je" wanneer je verwijst naar het bedrijf. Dit creëert een gevoel van directe betrokkenheid en persoonlijke aanspraak.
\n\n\n
Formuleer Zinnen vanuit het Perspectief van de Lezer: Herschrijf zinnen zodat ze vanuit het perspectief van het bedrijf zijn opgesteld. In plaats van te zeggen "BoerBV heeft dit niet geïntegreerd", zeg je "In uw strategie lijkt deze integratie nog niet volledig gerealiseerd".
\n\n\n
Begin Met het Adresseren van het Bedrijf: Start secties of paragrafen met een directe verwijzing naar het bedrijf, bijvoorbeeld: "Bij jullie beoordeling van de huidige situatie, merken we op dat..."
\n\n\n
Gebruik Inclusieve Taal: Zorg ervoor dat het rapport inclusieve taal gebruikt die de lezer (het bedrijf) als onderdeel van het proces beschouwt, bijvoorbeeld: "Er liggen hier voor jullie kansen om de integratie van AI in uw strategie verbeteren."
\n\n\n
///
\n\n\n
Nu volgt de inhoud van dit hoofdstuk, en hoe deze gegenereerd dient te worden:
\n\n\n


We gaan nu aan de slag met het maken van het eerste onderdeel: De inleiding
\n\n
Maak een beknopte inleiding van een half a4’tje voor een adviesrapport ontremt AI-transformatie voor MKB bedrijven.

\n\n\n
Houd ten alle tijde de volgende structuur aan:
\n\n
///
\n\n
## Inleiding\n\n
Body (consisting of 2 simple alinea's)
\n\n
///
\n\n
Zorg ervoor dat je NOOIT hoofdstukken verzint en/of opsomt in de inleiding, de inhoudsopgave wordt elders verzorgd en mag in dit onderdeel nooit aan bod komen.

\n\n\n
/// BELANGRIJK ///
\n\n
Gebruik overal markdown formatting. Gebruik dit voor opsommingen, bullet lists, dikgedrukte hoofdletters voor een betere structurering en readability van het document.\n\n
Zorg dat je overal in het document een hierarchie toepast en titels, koppen en subkoppen verwerkt in markdown formatting. Zorg ook dat alle bullet lists en opsommingen in markdown formatting zijn. 
\n\n//////`;
