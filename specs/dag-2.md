# Dag 2 – Data

Status: concept. Open punten ❓. Volgt [00-koers.md](00-koers.md) §8, rij 2.
Datum: vr 2 okt 2026, ~4 uur.

## Doelen en toetsitems

- Koers §1: doel 1 (data ophalen en opslaan), doel 2 (uitleggen waarom Query en SQLite, én wat de agent bouwde), doel 3 en 4 (agent één afgebakende taak geven), doel 5 (fouten vinden met en zonder AI).
- Toetsitems: TanStack Query, SQLite, loading/error-states, native functie (Share), `copilot-instructions.md`, aansturen en controleren, begrijpen (vraag het na), API-keuze.
- AI-stap: **agent mode**, voor het eerst. Eén kleine taak, met context uit `copilot-instructions.md`, de student leest elke regel van de diff, en sluit af met **vraag het na**: vragen stellen aan de agent tot je de code in eigen woorden kunt uitleggen. Vanaf nu de vaste laatste stap van elke agent-oefening.

## Programma

| Tijd | Blok | Vorm |
|---|---|---|
| 0:00 | Terugblik, huiswerk laten zien (zoekbalk). | gesprek, 10 min |
| 0:10 | State management: vijf soorten state, waar server state thuishoort. | slides, 15 min |
| 0:25 | TanStack Query: waarom, `useQuery`, loading/error. Kort: wat is een publieke API, PokeAPI als voorbeeld, en waar je op let als je voor je eigen idee een andere kiest (geen inlog of sleutel, genoeg data). | slides, 15 min |
| 0:40 | **Oefening 1 – TanStack Query.** Pokémon-lijst uit PokeAPI in plaats van de array. Loading en error zichtbaar. Chat mag. | doen, 40 min |
| 1:20 | Pauze | 10 min |
| 1:30 | **Oefening 2 – Detailpagina uit PokeAPI.** Eigen query per Pokémon, loading en error. | doen, 25 min |
| 1:55 | Local storage: soorten opslag, wanneer SQLite, CRUD in `expo-sqlite`. | slides, 20 min |
| 2:15 | **Oefening 3 – Favorieten in SQLite.** Toevoegen, verwijderen, lijst; blijft staan na herstart. Chat mag. | doen, 40 min |
| 2:55 | Pauze | 10 min |
| 3:05 | Debuggen zonder en met AI: React Native DevTools (`j`), netwerk-tab. Dan agent mode: taak afbakenen, context geven via `copilot-instructions.md`, diff reviewen. Tot slot cognitive debt: met een agent gaat het snel en verlies je snel het overzicht; daarom altijd navragen. | slides, 20 min |
| 3:25 | **Oefening 4 – Agent mode.** A: `copilot-instructions.md` schrijven (stack, mappen, regels; ~10 regels). B: agent laat een Share-knop op de detailpagina maken. Elke regel lezen, lint en tsc, testen op telefoon. C: agent laat een fout oplossen die je nog hebt; geen fout? Gebruik de bug uit de oefening. Tijd op? C wordt huiswerk. D: **vraag het na**, altijd in de les: drie vragen aan de agent over de Share-code, antwoorden in eigen woorden in `docs/dag-2.md`. | doen, 30 min |
| 3:55 | Afronding, huiswerk. Sjabloon voor het idee-briefje uitreiken en kort toelichten. | 5 min |

Slides max 20 minuten achter elkaar: klopt. Volle dag; oefening 4C mag in het huiswerk.

## Oefeningen

`day-2/exercises/`, bestaand, aanpassen:

1. **exercise-1** – TanStack toevoegen en lijst uit PokeAPI. Klaar als: lijst laadt live, spinner en foutmelding zichtbaar (test met vliegtuigstand).
2. **exercise-2** – Detail uit PokeAPI. Klaar als: elke Pokémon opent met eigen data, loading en error.
3. **exercise-3** – Favorieten in SQLite. Klaar als: favoriet blijft na app herstarten; lint en tsc schoon.
4. **exercise-4** (nieuw) – Agent mode in vier delen: instructions, Share-knop, bug laten fixen, vraag het na. Klaar als: Share werkt op telefoon, `copilot-instructions.md` staat in de repo, de student kan van elke regel in de diff zeggen wat hij doet, en de antwoorden van deel D staan in `docs/dag-2.md`.

Bij oefening 4B hoort een reviewlijstje in de oefening: wat heeft de agent toegevoegd dat je niet vroeg? Klopt het met je instructions? Wat zou je zelf anders doen?

Bij deel D horen drie voorbeeldvragen in de oefening: waarom deze import, wat gebeurt er als het delen mislukt, waar zou dit stuk in mijn mappenstructuur horen. Studenten mogen eigen vragen kiezen.

Sjabloon idee-briefje: `day-2/templates/idea.md`, max tien regels: idee, kernactie, welke API, drie tot vijf user stories van één zin. Zie toetsing §2.

## Slides

| Deck | Status |
|---|---|
| `intro.md` | Bestaand, houden (huiswerkreview). |
| `state-management.md` | Bestaand, SQLite CRUD-slides eruit. |
| `tanstack-query.md` | Bestaand, SQLite CRUD-slides eruit. Twee slides erbij: wat is een publieke API, waar let je op bij een eigen keuze. |
| `local-storage.md` | Bestaand. De SQLite CRUD-slides komen hier, één keer. |
| `dev-tools.md` | Vervalt als deck. Rozenite en Proxyman eruit; RN DevTools wordt twee slides in het nieuwe deck. |
| `debugging-and-agent-mode.md` | Nieuw, ~14 slides: debuggen zonder AI, dan agent mode, `copilot-instructions.md`, hoe je een diff reviewt, cognitive debt en "vraag het na" (2 slides). |

## Vervalt uit Levi's materiaal

- Dubbele SQLite CRUD-slides in drie decks (staan nog maar in één).
- Rozenite en Proxyman.
- Huiswerk About/Stats/Evolution-tabs: hoorde bij de oude Pokédex-eindopdracht. Wie de Pokédex als eigen product kiest, pakt dit daar op.

## Huiswerk (dag 2 → 3, vakantie)

- Les-app af tot het contract: Query, favorieten in SQLite, loading/error, Share. Lint en tsc schoon.
- Idee-briefje voor de eindopdracht: sjabloon `day-2/templates/idea.md`, max tien regels. Vóór het einde van de vakantie in Teams. Kevin geeft één ronde korte feedback, dag 3 keurt hij definitief goed. Wie geen eigen idee heeft, vult het sjabloon in voor een startidee. Meer huiswerk is er niet: het is vakantie.
- Wie oefening 4C niet af had: bug laten fixen door de agent.

## Open punten

- ❓ Welke "bug uit de oefening" voor 4C? Voorstel: een klein bestand met een query-key die verkeerd staat, zodat de lijst niet ververst.

## Retro

_Na de les invullen._
