# Dag 1 – Fundamentals

Status: uitgewerkt, slides en oefeningen staan in `day-1/`. Open punten ❓. Volgt [00-koers.md](00-koers.md) §8, rij 1.
Datum: di 29 sep 2026, ~4 uur.

## Doelen en toetsitems

- Koers §1: doel 1 (schermen, styling, navigatie), doel 2 (weten wat er native gebeurt), doel 3 (chat gebruiken en het antwoord beoordelen), doel 5 (lint- en type-fouten zelf oplossen).
- Toetsitems: Expo Router, TypeScript zonder errors, ESLint, theming.
- AI-stap: **autocomplete en chat**. Nog geen agent mode. Eén oefening doen studenten eerst zelf en daarna met Copilot; het verschil bespreken we klassikaal.

## Programma

| Tijd | Blok | Vorm |
|---|---|---|
| 0:00 | Terugblik dag 0. Wie draait nog niet? Huiswerkvragen. | gesprek, 10 min |
| 0:10 | Brief history of hybrid development. | slides, 25 min |
| 0:35 | **Oefening 1 – ESLint en TypeScript aan.** `npx expo lint`, `npx tsc --noEmit`, alle meldingen weg. Copilot chat: "wat betekent deze melding?" | doen, 20 min |
| 0:55 | Pauze | 10 min |
| 1:05 | Fundamentals deel 1: View, Text, Pressable, FlatList, StyleSheet, theming met design tokens. Bij elk component één regel: wat wordt dit native (View → UIView / android.view.View, FlatList → native lijst met hergebruik). | slides, 20 min |
| 1:25 | **Oefening 2 – Styling en theming.** Pokémon-tab, kleuren uit Figma in `constants/theme.ts`, geen losse hexcodes in componenten. Zelf, zonder chat. | doen, 40 min |
| 2:05 | Pauze | 10 min |
| 2:15 | **Oefening 3 – Componenten, twee keer.** Eerst: PokemonCard met de hand (20 min). Dan: Copilot chat laat de FlatList-grid maken (15 min). Klassikaal: wat deed Copilot anders, wat is beter, wat snap je niet? (10 min) | doen + gesprek, 45 min |
| 3:00 | Fundamentals deel 2: Expo Router, tabs, stack, `[id]`-routes. Een stack en een tab bar zijn echte native navigatie, geen nagemaakte web-pagina's; daarom voelt terug-swipen goed. | slides, 15 min |
| 3:15 | **Oefening 4 – Navigatie.** Lijst → detail via `/pokemon/[id]`, favorieten-tab. Autocomplete mag. | doen, 40 min |
| 3:55 | Afronding, huiswerk. | 5 min |

Slides max 25 minuten achter elkaar: klopt. Dag zit vol; oefening 4 mag doorlopen in het huiswerk.

## Oefeningen

`day-1/exercises/`, bestaand, aanpassen:

1. **exercise-1-lint-and-types** – Was "setup" (verwijderd). Lint en typecheck draaien, iets bewust kapotmaken, Copilot laat de melding uitleggen, student fixt zelf. Klaar als: beide commando's geven nul meldingen. Vanaf nu elke oefening afsluiten met deze twee commando's.
2. **exercise-2-styling** – Explore-tab weg, index-tab wordt "Pokémons". Theming: `constants/theme.ts` van het template uitbreiden (Colors.light én dark, zelfde waarden) plus `Spacing` en `Radius`; kleuren via `useThemeColor`. Klaar als: geen hexcode buiten dat bestand.
3. **exercise-3-components** – Deel A: `components/pokemon-card.tsx` met de hand (20 min). Deel B: Copilot chat maakt de FlatList-grid, student leest en corrigeert vóór het plakken, één vervolgvraag (15 min). Deel C: drie zinnen in `docs/day-1.md` (10 min, klassikaal). Drie commits. Klaar als: grid werkt én deel C staat in de repo.
4. **exercise-4-navigation** – Herschreven maar inhoudelijk gelijk: `components/pokemon-list.tsx`, favorieten-tab (eerste twee), `app/pokemon/[id].tsx` met not-found-tekst, header-titel. Data blijft een hardcoded array; PokeAPI komt dag 2.

De stijl Objective → Requirements → Steps → Done when met 📚-links blijft. Elke oefening heeft een blokje "What happens natively".

## Slides

| Deck | Status |
|---|---|
| `brief-history-of-hybrid-development.md` | Bestaand, houden. |
| `fundamentals.md` | Nieuw, 21 slides in twee delen: deel 1 (View, Text, Pressable, ScrollView vs FlatList, StyleSheet, safe area, theming-probleem, tokens, tokens gebruiken, lint en tsc) en deel 2 (bestanden zijn routes, tabs in stack, navigeren, native navigatie). Opent met het motorkap-plaatje van dag 0 (`../../day-0/assets/under-the-hood.svg`). Elk component één regel "Native:". |

Theming: **design tokens in één bestand**, geen ThemeProvider of presets. Levi's theming-deck (dag 3, context + presets) is te zwaar voor beginners en het Expo-template heeft al `constants/theme.ts` met `useThemeColor`; daar bouwen we op voort. Levi's deck vervalt. Uitgewerkt als aangenomen akkoord; Kevin heeft de spec gereviewd zonder bezwaar.

## Vervalt uit Levi's materiaal

- Exercise 1 "setup": project bestaat al sinds dag 0.
- Theming-deck dag 3 (zie boven).

## Huiswerk (dag 1 → 2)

- Oefening 1–4 af: lijst, detail, favorieten-tab, thema, lint en tsc schoon.
- Zoekbalk met `TextInput` die de lijst filtert (bestaand huiswerk, blijft).

## Open punten

- Theming als tokens-bestand: uitgewerkt, zie boven. Zeg het als je toch Levi's aanpak wilt.
- Figma-kleuren staan als voorbeeldwaarden in de slides (`#E8F0FE`, `#5B3DF5`, `#1D1F4A`), afgelezen van de screenshot. De oefening laat studenten de echte waarden uit Figma halen.

## Retro

_Na de les invullen._
