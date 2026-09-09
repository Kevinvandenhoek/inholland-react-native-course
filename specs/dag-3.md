# Dag 3 – Eigen product

Status: concept. Open punten ❓. Volgt [00-koers.md](00-koers.md) §8, rij 3.
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
| 3:35 | Use of AI: poll, wat Kevin ervan vindt, wat de studenten na vier dagen ervan vinden. Daarna open ruimte voor vragen en twijfels over AI in het algemeen: werk, betrouwbaarheid, wat leer ik nog zelf. Dit is het AI-vragenuur, in de les. Sluit af met "De agent schrijft, jij blijft verantwoordelijk." | slides + gesprek, 25 min |
| 4:00 | Einde. | |

Slides max 20 minuten achter elkaar: klopt.

## Oefeningen

`day-3/exercises/` (nieuw; dag 3 had geen oefeningen):

1. **exercise-1-repo.md** – Eigen repo, feature-structuur, instructions bijgewerkt. Klaar als: repo op GitHub, app draait, lint en tsc schoon.
2. **exercise-2-spec.md** – `specs/product.md` volgens template, issues aangemaakt, peer review gehad. Klaar als: elke story is een issue met acceptatiecriteria.
3. **exercise-3-first-story.md** – Eén issue van begin tot eind met de agent, afgesloten met vraag het na. Klaar als: commit sluit het issue, student kan elke regel uitleggen, antwoorden staan in `docs/`.

Templates in `day-3/templates/`: `product.md`, `copilot-instructions.md`, `toelichting.md`. Dit zijn de bestanden die ingeleverd worden (toetsing §4).

## Slides

| Deck | Status |
|---|---|
| `course-3.md` | Bestaand, agenda vervangen. |
| `project-structure.md` | Bestaand, houden. "Levi, 2025" als bron: ❓ Kevins eigen mening ervoor, of laten staan met naam. |
| `dependencies.md` | Bestaand, houden. |
| `theming.md` | Vervalt, is dag 1 geworden. |
| `spec-and-issues.md` | Nieuw, ~12 slides. Opent met de SDD-flowchart, hetzelfde plaatje als dag 0 (`../../day-0/assets/sdd-flow.png`, werkt omdat de hele repo gedeployed wordt). Voorbeeldspec voor de Pokédex erbij zodat het concreet wordt. |
| `hand-in.md` | Nieuw, ~8 slides. Deliverables, drie competenties met weging, toelichting, video, exportscript, deadline. Los deck zodat het terug te vinden is. |
| `use-ai.md` | Bestaand, herschrijven: Levi's perspectief wordt Kevins, kapotte `ai-perspective.png` eruit of vervangen, poll blijft. Eén slide met open vragen als aanzet voor het gesprek. Geen vooruitblik op MCP's, tools of platforms. Sluit af met de stelling van de course. |

## day-3/README.md

De oude eindopdracht (checklist, deadline 2 november 2025) wordt vervangen door de nieuwe opdracht uit [01-toetsing.md](01-toetsing.md), in het Engels: twee startideeën met hun lijst (bijlage A en B), eigen idee met voorwaarden, technische kern, deliverables, drie competenties en cijferopbouw, inleveren. Templates gelinkt. Figma-link en `assets/fonts.zip` blijven.

## Vervalt uit Levi's materiaal

- Theming-deck (naar dag 1).
- Oude checklist-eindopdracht (TabView, Expo Font, pixel perfect etc. worden optioneel of vervallen; zie toetsing §6).

## Na dag 3

Studenten werken zelfstandig door tot de deadline. Geen lesmoment meer. Vragen over het product via Teams. Geen apart vragenuur: AI-vragen zijn in de les behandeld.

## Open punten

- ❓ Deadline.
- ❓ "Levi, 2025"-bronnen in project-structure en use-ai.
- Exportscript en beoordelingsskill moeten af vóór 23 okt: [02-tooling.md](02-tooling.md), nog te schrijven.

## Retro

_Na de les invullen._
