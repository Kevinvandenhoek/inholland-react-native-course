# Dag 2 – Data

Status: uitgewerkt, slides, oefeningen en sjabloon staan in `day-2/`. Open punten ❓. Volgt [00-koers.md](00-koers.md) §8, rij 2.
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
| 3:25 | **Oefening 4 – Agent mode.** A: `copilot-instructions.md` schrijven (stack, mappen, regels; ~10 regels). B: agent laat een Share-knop op de detailpagina maken. Elke regel lezen, lint en tsc, testen op telefoon. C: agent laat een fout oplossen die je nog hebt; geen fout? Gebruik de bug uit de oefening. Tijd op? C wordt huiswerk. D: **vraag het na**, altijd in de les: drie vragen aan de agent over de Share-code, antwoorden in eigen woorden in `docs/day-2.md`. | doen, 30 min |
| 3:55 | Afronding, huiswerk. Keuze eindopdracht: startidee melden in Teams, of eigen idee via het idee-briefje. Sjabloon uitreiken en kort toelichten. | 5 min |

Slides max 20 minuten achter elkaar: klopt. Volle dag; oefening 4C mag in het huiswerk.

## Oefeningen

`day-2/exercises/`, herschreven in de korte stijl van dag 0 en 1 (Levi's versies waren copy-paste-tutorials van 250–500 regels):

1. **exercise-1-tanstack-query** – TanStack via `npx expo install`, `services/pokeapi.ts` met gewone `fetch` (geen pokenode-ts: minder dependencies, en de student ziet de JSON zelf), `hooks/use-pokemon-list.ts`, drie states op de lijst met retry. Klaar als: lijst laadt live met artwork, spinner en foutmelding zichtbaar (test met vliegtuigstand).
2. **exercise-2-pokemon-detail** – `fetchPokemon(id)` met eigen type (alleen wat gebruikt wordt), `usePokemon(id)` met key `['pokemon', id]`, detail met artwork, types en stats. Klaar als: elke Pokémon opent met eigen data, loading en error, onbekend id crasht niet.
3. **exercise-3-favorites-sqlite** – `services/favorites-db.ts` als module met vier functies (`openDatabaseSync`, placeholders), `hooks/use-favorites.ts` met query en mutation + invalidate, hart op detail, favorieten-tab met empty state. Klaar als: favoriet blijft na app herstarten; lint en tsc schoon.
4. **exercise-4-agent-mode** – Vier delen: A instructions (voorbeeld van ~10 regels in de oefening), B Share-knop met reviewlijst, C bug (zie hieronder), D vraag het na met drie voorbeeldvragen, antwoorden in `docs/day-2.md`. Klaar als: Share werkt op telefoon, `copilot-instructions.md` staat in de repo, de student kan van elke regel in de diff zeggen wat hij doet, en de antwoorden van deel D staan in `docs/day-2.md`.

Bij oefening 4B hoort een reviewlijstje in de oefening: wat heeft de agent toegevoegd dat je niet vroeg? Klopt het met je instructions? Wat zou je zelf anders doen?

Bij deel D horen drie voorbeeldvragen in de oefening: waarom deze import, wat gebeurt er als het delen mislukt, waar zou dit stuk in mijn mappenstructuur horen. Studenten mogen eigen vragen kiezen.

Sjabloon idee-briefje: `day-2/templates/idea.md`, max tien regels: idee, kernactie, welke API, drie tot vijf user stories van één zin. Zie toetsing §2.

## Slides

| Deck | Status |
|---|---|
| `intro.md` | Bestaand, agenda en huiswerkvragen aangepast (zoekbalk: waar leeft de query?). |
| `state-management.md` | SQLite CRUD-slides eruit. Form-state-voorbeeld was web (`<form>`, `<input>`); is nu een `TextInput` met `useState`, gekoppeld aan de zoekbalk van het huiswerk. |
| `tanstack-query.md` | SQLite CRUD-slides eruit. Twee slides erbij: wat is een publieke API (PokeAPI als voorbeeld), en een checklist voor een eigen keuze (geen sleutel, genoeg data, stabiel, JSON, gratis) met een paar voorbeelden. |
| `local-storage.md` | Eerste helft (soorten opslag, quiz) ongewijzigd. SQLite-deel herschreven naar de module-aanpak van oefening 3 (`openDatabaseSync`, vier functies, placeholders) plus één slide SQLite + TanStack Query (query, mutation, invalidate). Was één slide met vijf `##`-koppen die van het scherm liep. |
| `dev-tools.md` | Verwijderd. Rozenite en Proxyman eruit; dev menu en RN DevTools zijn twee slides in het nieuwe deck. |
| `debugging-and-agent-mode.md` | Nieuw, 14 slides: dev menu, RN DevTools, debuggen zonder AI in vijf stappen, ask vs agent, kleine taken, `copilot-instructions.md`, diff reviewen, lint/tsc/telefoon, agent laten debuggen (oorzaak vs workaround), cognitive debt, vraag het na, oefening 4, keuze eindopdracht. |

## Vervalt uit Levi's materiaal

- Dubbele SQLite CRUD-slides in drie decks (staan nog maar in één).
- Rozenite en Proxyman.
- Huiswerk About/Stats/Evolution-tabs: hoorde bij de oude Pokédex-eindopdracht. Wie de Pokédex als eigen product kiest, pakt dit daar op.

## Huiswerk (dag 2 → 3, vakantie)

- Les-app af tot het contract: Query, favorieten in SQLite, loading/error, Share. Lint en tsc schoon.
- Idee-briefje voor de eindopdracht: sjabloon `day-2/templates/idea.md`, max tien regels. Vóór het einde van de vakantie in Teams. Kevin geeft één ronde korte feedback, dag 3 keurt hij definitief goed. Wie een startidee kiest meldt alleen welk, in Teams. Meer huiswerk is er niet: het is vakantie.
- Wie oefening 4C niet af had: bug laten fixen door de agent.

## Open punten

- Bug voor 4C: de student verandert zelf de key in `invalidateQueries` van `['favorites']` naar `['favourites']` in `hooks/use-favorites.ts`. De favorieten-tab ververst dan niet meer na een hart. Staat in de oefening, met de waarschuwing dat een `refetch`-on-focus een workaround is en geen fix. Uitgewerkt als aangenomen akkoord met het voorstel.
- Geen pokenode-ts meer; oefeningen gebruiken `fetch`. Dat is één dependency minder en past bij de org-regel. Wil je pokenode-ts toch, dan zijn oefening 1 en 2 het enige dat verandert.

## Retro

_Na de les invullen._
