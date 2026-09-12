# Koers: React Native + agentic development (2026)

Status: concept. Open punten staan gemarkeerd met ❓.
Dit document staat boven de dag-specs. Elke dag-spec verwijst hiernaar en mag er niet mee botsen.

## 1. Doel

Na vier lesdagen kan een student:

1. Een mobiele app bouwen met Expo en React Native die data ophaalt, lokaal opslaat en tussen schermen navigeert.
2. Uitleggen waarom de app zo is opgebouwd (state, data, structuur), niet alleen dat hij werkt. Ook de delen die de agent schreef.
3. Een coding agent (Copilot in VS Code) een duidelijke opdracht en context geven, en het resultaat kritisch beoordelen.
4. Werk opdelen in kleine, controleerbare taken en die één voor één afmaken.
5. Fouten vinden en oplossen, met en zonder AI.

## 2. Doelgroep

- ICT-studenten InHolland. Hebben net React, TypeScript en Git gehad.
- Ga toch uit van beginnersniveau: veel studenten snappen React nog niet echt.
- Gevolg voor de lessen: elk nieuw begrip eerst zelf laten doen, dan pas met de agent. Anders leren ze alleen de agent kennen.

## 3. Randvoorwaarden

- 4 lesdagen van ~4 uur. Praktische opdrachten verweven door de dag; nooit langer dan ~30 minuten alleen slides.
- Groep van 10 tot 20 studenten.
- Data 2026: dag 0 vr 25 sep, dag 1 di 29 sep, dag 2 vr 2 okt, dag 3 vr 23 okt. Tussen dag 0–1–2 zitten maar een paar dagen, tussen dag 2 en 3 zit een vakantie. Huiswerk blijft dus overal klein.
- Tooling: VS Code + GitHub Copilot, Expo Go. Geen betaalde tooling. Windows-studenten: Android-emulator of Expo Go op eigen telefoon.
- Licentie: Copilot Student via GitHub Education (Student Developer Pack). Agent mode en ruim genoeg verzoeken. Studenten hebben vóór dag 0 een stappenplan gekregen om dit te regelen (staat in [dag-0.md](dag-0.md)). Dag 0 controleert kort of het werkt; de stappen blijven in de slides voor wie het nog niet af heeft.
- Toetsing: eindopdracht, cijfer 1–10, 5.5 = voldoende. Er is een herkansingsmoment, datum volgt nog.
- Geen toetsmoment op locatie. Alles wat beoordeeld wordt, wordt op afstand ingeleverd.
- AI is onderdeel van de toetsing, niet iets wat ernaast bestaat.
- Inleveren via GitHub.
- Slides: Marp in deze repo, gepubliceerd via GitHub Pages.

## 4. De AI-draad

Stelling van de course: **"De agent schrijft, jij blijft verantwoordelijk."** Alles wat in je repo staat moet je kunnen uitleggen en verdedigen.

Hoe je AI moet zien, in twee zinnen die op dag 0 en dag 3 terugkomen:

- **Nog een abstractie** (Levi). Assembly → C → JavaScript → React Native → een agent die het schrijft. Elke laag verbergt werk, maar de laag eronder blijft bestaan en blijft jouw probleem als het misgaat.
- **Veel kennis, iets minder intelligentie** (Kevin). Een model heeft meer gelezen dan wie ook, maar kennis is niet hetzelfde als intelligentie. Het weet alles en snapt jouw situatie net niet. Dat verklaart waarom het foutloos een API-call schrijft en vervolgens een verkeerde aanname doet over wat jij wilde. Daarom: context geven (Aansturen), nakijken (Controleren) en zelf begrijpen (Begrijpen).

Per dag komt er één manier van werken met de agent bij:

| Dag | Student doet | Met Copilot |
|---|---|---|
| 0 | Installatie afronden (meeste al vooraf gedaan) | Copilot instellen. Code laten uitleggen (ask mode). |
| 1 | Eerste schermen zelf bouwen | Autocomplete en chat. Eén oefening eerst zelf, dan met Copilot; verschil bespreken. |
| 2 | Data ophalen en opslaan | Agent mode voor één afgebakende taak (Share-knop). Agent laten debuggen. `copilot-instructions.md` aanmaken. |
| 3 | Eigen product starten | Spec → issues → agent laat bouwen → reviewen. |

Drie competenties, waar de toetsing op stuurt (uitwerking in `01-toetsing.md` §7):

1. **Aansturen.** Klein werken, één taak per keer. Context geven: spec, instructies, voorbeelden. Zelf kiezen, de agent voert uit.
2. **Controleren.** Alles wat de agent maakt lees je, test je en corrigeer je. Fout gezien? Dan grijp je in.
3. **Begrijpen.** Werken met een agent gaat snel, en je verliest even snel het overzicht. Daarom na elke agent-taak: **vraag het na**. Stel de agent vragen over wat hij bouwde tot je het in eigen woorden kunt uitleggen. Vanaf dag 2 is dit de vaste laatste stap van elke agent-oefening.

Wat we bewust niet doen: MCP's, skills, subagents, orchestratieplatforms. Eén agent goed leren aansturen is genoeg voor vier dagen.

Vragen en twijfels over AI in het algemeen (werk, betrouwbaarheid, wat leer ik nog zelf) krijgen ruimte in de les, bij de afsluiting van dag 3. Geen apart vragenuur na de course.

## 5. De app

- In de les: Pokédex op basis van PokeAPI en het Figma-design. De bestaande oefeningen blijven bruikbaar.
- Eindopdracht: app op live data uit PokeAPI. Twee startideeën met vaste lijst (Pokédex volgens Figma-design, battle simulator volgens de spelregels), of een eigen idee met eigen specs en design, ook op een andere API zonder inlog of sleutel. Uitwerking in `01-toetsing.md`.

Staat van de les-app aan het eind van elke dag (contract tussen de dagen):

| Na dag | De app |
|---|---|
| 0 | Leeg Expo-project draait op de telefoon van de student. |
| 1 | Lijst en detailpagina, gestyled met thema, met navigatie. ESLint aan. |
| 2 | Data via TanStack Query, favorieten in SQLite, loading- en error-states, Share-knop. |
| 3 | Eigen product gestart: spec, issues, eerste user story werkt. |

## 6. Toetsing (principe)

Uitwerking in `01-toetsing.md`. Uitgangspunten:

- "De app werkt" alleen is niet genoeg. Dat kan de agent zonder de student.
- Beoordeel proces én product: spec, issues, gebruik van de agent, uitleg van de student.
- De eindopdracht mag creatief zijn; de technische kern ligt vast.
- Elk toetsitem wordt ergens in de course geleerd én geoefend. De dekkingsmatrix in `01-toetsing.md` bewaakt dat.

## 7. Werkwijze voor het materiaal

- Spec eerst, dan slides en oefeningen. Slides zijn afgeleid, nooit de bron.
- Elke dag-spec noemt welke doelen (§1) en toetsitems hij dekt.
- Na elke lesdag een korte retro in de dag-spec: wat werkte, wat niet, wat verandert.
- Taal: materiaal voor studenten in het Engels (zoals nu). Specs in het Nederlands.
- Schrijfstijl: kort, direct, simpel taalgebruik, zo min mogelijk jargon.

## 8. Hoog-over plan

Eén tabel die §4, §5 en de toetsitems bij elkaar zet. Elke dag-spec werkt zijn rij uit en mag er niet van afwijken zonder deze tabel aan te passen.

| Dag | Onderwerpen | AI-stap | App na de dag | Toetsitems die hier landen |
|---|---|---|---|---|
| 0 Intro | Wat is RN, web vs native, Expo Go. Vast blok "onder de motorkap": JS-thread, bridge, native views, in één plaatje. Setup checken (3 tests). Project aanmaken en op telefoon draaien. Eindopdracht aankondigen met de flowchart spec → issues → agent → review in het klein, eigen-idee-optie, en dat chats beoordeeld worden. | Ask mode: Copilot laat het gegenereerde project uitleggen. | Leeg project draait op telefoon. | Expo Go, Copilot werkend, eigen idee aangekondigd |
| 1 Fundamentals | Componenten, styling + theming, navigatie. Bij elk onderwerp: wat gebeurt er native (een View wordt een native view, een stack is een echte native stack). ESLint aan vanaf het begin. | Autocomplete en chat. Eén oefening eerst zelf, dan met Copilot. | Lijst + detail, gestyled met thema, navigatie. | Expo Router, TypeScript, ESLint, theming |
| 2 Data | State, TanStack Query, SQLite, loading/error. Dev tools kort. | Agent mode voor één afgebakende taak: Share-knop. Agent laten debuggen. `copilot-instructions.md` maken. Afsluiten met "vraag het na". | Data via Query, favorieten in SQLite, loading/error, delen. | TanStack, SQLite, loading/error, native functie, copilot-instructions, agent aansturen |
| 3 Eigen product | Projectstructuur, dependencies. Korte uitleg Spec Driven Development met één flowchart (spec → issues → agent → review → commit), Pokédex als voorbeeld. Spec schrijven (user stories), issues maken, eerste story met agent bouwen, reviewen, navragen. Kevin keurt ideeën definitief goed. Inleveren: toelichting, video, exportscript. Afsluiting: Use of AI, met ruimte voor vragen en twijfels. | Spec → issues → agent → review → vraag het na. | Eigen product gestart: spec, issues, eerste story werkt. | Projectstructuur, spec, issues + commits, toelichting, agent aansturen |

Verschuivingen ten opzichte van Levi's materiaal, om dag 3 te ontlasten:

- Theming van dag 3 naar dag 1 (bij styling).
- Native functie (Share) als agent-mode oefening op dag 2.
- Dev tools (Rozenite, Proxyman) op dag 2 ingekort; agent-debugging neemt een deel over.
- "Use of AI" is geen losse sessie meer maar de rode draad (§4); de discussie zelf hoort bij de afsluiting van dag 3.

Huiswerk: tussen alle dagen alleen "les-app afmaken tot het contract van §5". Dag 2 → 3 is vakantie; daar komt alleen de keuze bij. Startidee: even melden in Teams. Eigen idee: een **idee-briefje** van hooguit tien regels volgens een sjabloon (idee, kernactie, welke API, drie tot vijf user stories van één zin). Vóór het einde van de vakantie in Teams. Kevin geeft één ronde korte feedback, op dag 3 keurt hij definitief goed. De spec zelf wordt op dag 3 geschreven.
