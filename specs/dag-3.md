# Dag 3 – Eigen product

Status: uitgewerkt. Open punten ❓. Volgt [00-koers.md](00-koers.md) §8, rij 3.
Datum: vr 23 okt 2026, ~4 uur. Na de vakantie.

## Doelen en toetsitems

- Koers §1: doel 2 (structuur uitleggen, ook wat de agent bouwde), doel 3 (agent aansturen met een spec), doel 4 (werk opdelen in issues en één voor één afmaken).
- Toetsitems: projectstructuur, spec schrijven, issues + commits koppelen, toelichting schrijven, alle drie competenties (aansturen, controleren, begrijpen), Spec Driven Development.
- AI-stap: **spec → issues → agent → review → vraag het na.** De werkwijze die de student na vandaag zelfstandig doorzet tot de deadline.

## Programma

| Tijd | Blok | Vorm |
|---|---|---|
| 0:00 | Terugblik. Ideeënrondje: iedereen zegt in één zin zijn idee. Kevin heeft de briefjes van de eigen ideeën in de vakantie gelezen en feedback gegeven; nu de definitieve goedkeuring. Wie niets heeft: een startidee. | gesprek, 20 min |
| 0:20 | Projectstructuur (feature-based, bike shedding) en dependencies (geldig, compatibel, gezond). | slides, 20 min |
| 0:40 | **Oefening 1 – Eigen repo.** Nieuwe GitHub-repo vanuit de les-app of leeg Expo-project. Mappen naar features. `copilot-instructions.md` bijwerken voor het eigen product. | doen, 30 min |
| 1:10 | Pauze | 10 min |
| 1:20 | Spec Driven Development in het kort: de flowchart spec → issues → agent → review → commit, nu groot, met de Pokédex als voorbeeld. Dan: wat een spec is, user stories, `specs/product.md`, van story naar issue, commit die een issue sluit. | slides, 20 min |
| 1:40 | **Oefening 2 – Spec en issues.** `specs/product.md` schrijven: kernactie, 3–6 user stories, technische kern afgevinkt. Elke story wordt een issue. Buurman leest je spec en stelt twee vragen. | doen + peer review, 45 min |
| 2:25 | Pauze | 10 min |
| 2:35 | **Oefening 3 – Eerste story met de agent.** Issue kiezen, prompt met context (spec + instructions), agent laten bouwen, diff lezen, lint en tsc, testen, commit met `closes #1`. Afsluiten met vraag het na. | doen, 45 min |
| 3:20 | Inleveren: alle deliverables, de drie competenties en hoe ze wegen, de vier vragen van de toelichting, video, exportscript voor de chats, deadline. | slides, 15 min |
| 3:35 | Use of AI: poll, wat Kevin ervan vindt (koers §4: nog een abstractie, veel kennis en iets minder intelligentie), wat de studenten na vier dagen ervan vinden. Daarna open ruimte voor vragen en twijfels over AI in het algemeen: werk, betrouwbaarheid, wat leer ik nog zelf. Dit is het AI-vragenuur, in de les. Sluit af met "De agent schrijft, jij blijft verantwoordelijk." | slides + gesprek, 25 min |
| 4:00 | Einde. | |

Slides max 20 minuten achter elkaar: klopt.

## Oefeningen

`day-3/exercises/` (nieuw; dag 3 had geen oefeningen):

1. **exercise-1-repo.md** – Eigen repo, structuur, instructions bijgewerkt. Uitgewerkt: starten vanuit de les-app of `create-expo-app`, repo aanmaken (met `gh` of via github.com), mappen, template overnemen en herschrijven, lint en tsc, commit. Feature-mappen genoemd als optie voor wie meer bouwt dan lijst + detail; de regel die telt is scherm rendert / hook haalt data / service praat met API of database.
2. **exercise-2-spec.md** – `specs/product.md` volgens template, issues aangemaakt, peer review gehad. Uitgewerkt: spec invullen (20 min), stories naar issues met criteria als checkboxes (10 min), buurman stelt twee vragen en het antwoord gaat terug de spec in (10 min), commit. Startidee: de lijst uit de bijlage overschrijven als stories.
3. **exercise-3-first-story.md** – Eén issue van begin tot eind met de agent. Uitgewerkt in acht stappen: issue kiezen, prompt met wat/waar-context/wat-niet, meekijken, diff regel voor regel tegen de criteria, lint + tsc + telefoon + vliegtuigmodus, drie vragen navragen in `docs/day-3.md`, commit met `closes #1`, volgende issue.

Templates in `day-3/templates/`: `product.md` (doel, kernactie, stories met criteria, data, technische kern, buiten scope), `copilot-instructions.md` (tien tot twintig regels, doorontwikkeld uit dag 2) en `toelichting.md` (de vier vragen). Dit zijn de bestanden die ingeleverd worden (toetsing §4).

## Slides

| Deck | Status |
|---|---|
| `course-3.md` | Agenda vervangen. 4 slides: titel, programma van 8 punten, ideeënrondje, "na vandaag werk je zelfstandig door". |
| `project-structure.md` | Levi's deck gehouden, 5 slides erachter: de mappen van de les-app, wanneer je naar features gaat, de regel die telt (scherm rendert, hook haalt data, service praat met API of database), zet het in je instructions, oefening 1. "Levi, 2025" bij bike shedding blijft staan met naam: ❓ Kevins eigen mening ervoor. |
| `dependencies.md` | Levi's deck gehouden, 3 slides erachter: de agent voegt zelf dependencies toe, `npx expo install` en wat niet in Expo Go past, zo min mogelijk dependencies. |
| `theming.md` | Vervallen, is dag 1 geworden. Deck en de zeven theming-assets verwijderd; staan in de geschiedenis. |
| `spec-and-issues.md` | Nieuw, 13 slides. Opent met de SDD-flowchart van dag 0 (`../../day-0/assets/sdd-flow.svg`). Waarom een spec (koppelt aan "veel kennis, iets minder intelligentie"), wat erin staat, user story met criteria, vaag versus scherp als tabel, voorbeeldspec Pokédex, story naar issue, prompt met context, reviewen, `closes #3`, de loop, oefening 2. |
| `hand-in.md` | Nieuw, 8 slides. Deliverables als tabel, technische kern, weging 40/20/20/20 met optionele items, de vier vragen, video, chatgeschiedenis, deadline. |
| `use-ai.md` | Herschreven, 15 slides. Drie polls blijven. "Twee manieren om ernaar te kijken": Levi's abstractie (met `programming-abstractions.png`) en Kevins veel kennis / iets minder intelligentie. Voorbeeld: de bug van oefening 4C op dag 2, waar de agent `invalidateQueries` perfect kende maar de eigen sleutel niet, en sommigen een `useFocusEffect`-workaround kregen. Daarna waar het helpt, waar het pijn doet, een slide open vragen voor het gesprek, en de stelling. De kapotte `ai-perspective.png` is eruit; "How I use AI" met Cursor en MCP's is eruit. |

## day-3/README.md

Herschreven. De oude checklist-eindopdracht (deadline 2 november 2025) is vervangen door de opdracht uit [01-toetsing.md](01-toetsing.md), in het Engels: drie routes, technische kern, deliverables met links naar de templates, de vier vragen, chatgeschiedenis, cijfer met weging en optionele items, bijlage A (Pokédex) en bijlage B (battle simulator). Figma-link en `assets/fonts.zip` blijven; de battle-video blijft als link. Deadline staat als `<date>` met een HTML-comment voor Kevin, ook op de laatste slide van `hand-in.md`.

## Vervalt uit Levi's materiaal

- Theming-deck (naar dag 1).
- Oude checklist-eindopdracht (TabView, Expo Font, pixel perfect etc. worden optioneel of vervallen; zie toetsing §6).

## Na dag 3

Studenten werken zelfstandig door tot de deadline. Geen lesmoment meer. Vragen over het product via Teams. Geen apart vragenuur: AI-vragen zijn in de les behandeld.

## Open punten

- ❓ Deadline. Staat nu als `<date>` op de laatste slide van `hand-in.md` en bovenin `day-3/README.md`, beide met een comment.
- ❓ "Levi, 2025" bij bike shedding in `project-structure.md`. In `use-ai.md` is dit opgelost: Levi's quote staat er met naam, die van Kevin ernaast.
- Exportscript en beoordelingsskill moeten af vóór 23 okt: [02-tooling.md](02-tooling.md), nog te schrijven. `hand-in.md` en de README verwijzen er al naar ("een script in deze repo").

## Retro

_Na de les invullen._
