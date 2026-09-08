# Koers: React Native + agentic development (2026)

Status: concept. Open punten staan gemarkeerd met ❓.
Dit document staat boven de dag-specs. Elke dag-spec verwijst hiernaar en mag er niet mee botsen.

## 1. Doel

Na vier lesdagen kan een student:

1. Een mobiele app bouwen met Expo en React Native die data ophaalt, lokaal opslaat en tussen schermen navigeert.
2. Uitleggen waarom de app zo is opgebouwd (state, data, structuur), niet alleen dat hij werkt.
3. Een coding agent (Copilot in VS Code) een duidelijke opdracht en context geven, en het resultaat kritisch beoordelen.
4. Werk opdelen in kleine, controleerbare taken en die één voor één afmaken.
5. Fouten vinden en oplossen, met en zonder AI.

## 2. Doelgroep

- ICT-studenten InHolland. Hebben net React, TypeScript en Git gehad.
- Ga toch uit van beginnersniveau: veel studenten snappen React nog niet echt.
- Gevolg voor de lessen: elk nieuw begrip eerst zelf laten doen, dan pas met de agent. Anders leren ze alleen de agent kennen.

## 3. Randvoorwaarden

- 4 lesdagen van ~4 uur. Praktische opdrachten verweven door de dag; nooit langer dan ~30 minuten alleen slides.
- Groep van 10 tot 20 studenten. ❓ Hoeveel tijd zit er tussen de lesdagen?
- Tooling: VS Code + GitHub Copilot, Expo Go. Geen betaalde tooling. Windows-studenten: Android-emulator of Expo Go op eigen telefoon.
- Licentie: Copilot Student via GitHub Education (Student Developer Pack). Agent mode en ruim genoeg verzoeken. Studenten hebben vóór dag 0 een stappenplan gekregen om dit te regelen (staat in [dag-0.md](dag-0.md)). Dag 0 controleert kort of het werkt; de stappen blijven in de slides voor wie het nog niet af heeft.
- Toetsing: eindopdracht, cijfer 1–10, 5.5 = voldoende. Herkansing bestaat; details ❓.
- Geen toetsmoment op locatie. Alles wat beoordeeld wordt, wordt op afstand ingeleverd.
- AI is onderdeel van de toetsing, niet iets wat ernaast bestaat.
- Inleveren via GitHub.
- Slides: Marp in deze repo, gepubliceerd via GitHub Pages.

## 4. De AI-draad

Stelling van de course: **"De agent schrijft, jij blijft verantwoordelijk."** Alles wat in je repo staat moet je kunnen uitleggen en verdedigen. (Levi's "AI is just another abstraction" kan blijven als context, maar zegt niets over hoe je ermee werkt.)

Per dag komt er één manier van werken met de agent bij:

| Dag | Student doet | Met Copilot |
|---|---|---|
| 0 | Installatie afronden (meeste al vooraf gedaan) | Copilot instellen. Code laten uitleggen (ask mode). |
| 1 | Eerste schermen zelf bouwen | Autocomplete en chat. Eén oefening eerst zelf, dan met Copilot; verschil bespreken. |
| 2 | Data ophalen en opslaan | Agent mode voor een afgebakende taak. Agent laten debuggen. `copilot-instructions.md` aanmaken. |
| 3 | Eigen product starten | Spec schrijven, agent laten bouwen, resultaat reviewen. Werk opdelen in issues. |

Regels die elke dag gelden:

- Alles wat de agent maakt lees je, en kun je uitleggen.
- Klein werken: één taak per keer.
- Geef context: een spec, instructies, voorbeelden. Geen context = slechte code.

## 5. De app

- In de les: Pokédex op basis van PokeAPI en het Figma-design. De bestaande oefeningen blijven bruikbaar.
- Eindopdracht: eigen product op PokeAPI. Een Pokédex mag, maar hoeft niet. Uitwerking in `01-toetsing.md`.

Staat van de les-app aan het eind van elke dag (contract tussen de dagen):

| Na dag | De app |
|---|---|
| 0 | Leeg Expo-project draait op de telefoon van de student. |
| 1 | Lijst en detailpagina, gestyled, met navigatie. |
| 2 | Data via TanStack Query, favorieten in SQLite, loading- en error-states. |
| 3 | Theming en projectstructuur. Eigen product gestart. |

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
