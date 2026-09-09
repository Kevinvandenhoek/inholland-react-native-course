# Dag 2 – Data

Status: concept. Open punten ❓. Volgt [00-koers.md](00-koers.md) §8, rij 2.
Datum: vr 2 okt 2026, ~4 uur.

## Doelen en toetsitems

- Koers §1: doel 1 (data ophalen en opslaan), doel 2 (uitleggen waarom Query en SQLite), doel 3 en 4 (agent één afgebakende taak geven), doel 5 (fouten vinden met en zonder AI).
- Toetsitems: TanStack Query, SQLite, loading/error-states, native functie (Share), `copilot-instructions.md`, agent aansturen en controleren.
- AI-stap: **agent mode**, voor het eerst. Eén kleine taak, met context uit `copilot-instructions.md`, en de student leest elke regel van de diff.

## Programma

| Tijd | Blok | Vorm |
|---|---|---|
| 0:00 | Terugblik, huiswerk laten zien (zoekbalk). | gesprek, 10 min |
| 0:10 | State management: vijf soorten state, waar server state thuishoort. | slides, 15 min |
| 0:25 | TanStack Query: waarom, `useQuery`, loading/error. | slides, 15 min |
| 0:40 | **Oefening 1 – TanStack Query.** Pokémon-lijst uit PokeAPI in plaats van de array. Loading en error zichtbaar. Chat mag. | doen, 40 min |
| 1:20 | Pauze | 10 min |
| 1:30 | **Oefening 2 – Detailpagina uit PokeAPI.** Eigen query per Pokémon, loading en error. | doen, 25 min |
| 1:55 | Local storage: soorten opslag, wanneer SQLite, CRUD in `expo-sqlite`. | slides, 20 min |
| 2:15 | **Oefening 3 – Favorieten in SQLite.** Toevoegen, verwijderen, lijst; blijft staan na herstart. Chat mag. | doen, 40 min |
| 2:55 | Pauze | 10 min |
| 3:05 | Debuggen zonder en met AI: React Native DevTools (`j`), netwerk-tab. Dan agent mode: taak afbakenen, context geven via `copilot-instructions.md`, diff reviewen. | slides, 20 min |
| 3:25 | **Oefening 4 – Agent mode.** A: `copilot-instructions.md` schrijven (stack, mappen, regels; ~10 regels). B: agent laat een Share-knop op de detailpagina maken. Elke regel lezen, lint en tsc, testen op telefoon. C: agent laat een fout oplossen die je nog hebt; geen fout? Gebruik de bug uit de oefening. | doen, 30 min |
| 3:55 | Afronding, huiswerk, wijs vooruit naar dag 3: kies je idee. | 5 min |

Slides max 20 minuten achter elkaar: klopt. Volle dag; oefening 4C mag in het huiswerk.

## Oefeningen

`day-2/exercises/`, bestaand, aanpassen:

1. **exercise-1** – TanStack toevoegen en lijst uit PokeAPI. Klaar als: lijst laadt live, spinner en foutmelding zichtbaar (test met vliegtuigstand).
2. **exercise-2** – Detail uit PokeAPI. Klaar als: elke Pokémon opent met eigen data, loading en error.
3. **exercise-3** – Favorieten in SQLite. Klaar als: favoriet blijft na app herstarten; lint en tsc schoon.
4. **exercise-4** (nieuw) – Agent mode in drie delen: instructions, Share-knop, bug laten fixen. Klaar als: Share werkt op telefoon, `copilot-instructions.md` staat in de repo, en de student kan van elke regel in de diff zeggen wat hij doet.

Bij oefening 4B hoort een reviewlijstje in de oefening: wat heeft de agent toegevoegd dat je niet vroeg? Klopt het met je instructions? Wat zou je zelf anders doen?

## Slides

| Deck | Status |
|---|---|
| `intro.md` | Bestaand, houden (huiswerkreview). |
| `state-management.md` | Bestaand, SQLite CRUD-slides eruit. |
| `tanstack-query.md` | Bestaand, SQLite CRUD-slides eruit. |
| `local-storage.md` | Bestaand. De SQLite CRUD-slides komen hier, één keer. |
| `dev-tools.md` | Vervalt als deck. Rozenite en Proxyman eruit; RN DevTools wordt twee slides in het nieuwe deck. |
| `debugging-and-agent-mode.md` | Nieuw, ~12 slides: debuggen zonder AI, dan agent mode, `copilot-instructions.md`, hoe je een diff reviewt. |

## Vervalt uit Levi's materiaal

- Dubbele SQLite CRUD-slides in drie decks (staan nog maar in één).
- Rozenite en Proxyman.
- Huiswerk About/Stats/Evolution-tabs: hoorde bij de oude Pokédex-eindopdracht. Wie de Pokédex als eigen product kiest, pakt dit daar op.

## Huiswerk (dag 2 → 3, vakantie)

- Les-app af tot het contract: Query, favorieten in SQLite, loading/error, Share. Lint en tsc schoon.
- Kies je idee voor de eindopdracht: één van de drie startideeën of iets eigens. Schrijf het in een paar regels op, meer niet. Dag 3 begint hiermee.

## Open punten

- ❓ Welke "bug uit de oefening" voor 4C? Voorstel: een klein bestand met een query-key die verkeerd staat, zodat de lijst niet ververst.

## Retro

_Na de les invullen._
