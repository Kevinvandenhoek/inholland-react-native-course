# Dag 0 – Intro

Status: concept. Open punten ❓. Volgt [00-koers.md](00-koers.md) §8, rij 0.
Datum: vr 25 sep 2026, ~4 uur.

## Doelen en toetsitems

- Koers §1: doel 1 (begin: project draait), doel 3 (begin: Copilot code laten uitleggen).
- Toetsitems: Expo Go werkt, VS Code + Copilot werkt, eigen idee aangekondigd.
- AI-stap: **ask mode**. Copilot legt uit, de student leest en controleert. Nog geen code laten schrijven.

## Programma

| Tijd | Blok | Vorm |
|---|---|---|
| 0:00 | Welkom, wie is Kevin, hoe de course werkt. Eindopdracht in één zin: eigen app op PokeAPI, proces telt mee. | slides, 15 min |
| 0:15 | Wat is React Native, waarom (niet), hoe werkt het, Expo, CNG, Expo Go. | slides, 30 min |
| 0:45 | Pauze | 10 min |
| 0:55 | **Oefening 1 – Setup.** Drie Copilot-tests groen. Expo-project aanmaken, starten, QR scannen, draait op eigen telefoon. Node ontbreekt? Installeren. | doen, 40 min |
| 1:35 | Web vs Native: wat is hetzelfde, wat is anders. | slides, 25 min |
| 2:00 | Pauze | 10 min |
| 2:10 | **Oefening 2 – Laat Copilot het uitleggen.** Ask mode op het gegenereerde project: wat doet `app/_layout.tsx`, waar komt de tab bar vandaan, wat is `app.json`. Daarna één kleine wijziging met de hand (tekst aanpassen), zien dat de app live herlaadt. | doen, 40 min |
| 2:50 | Eindopdracht uitgelegd: drie startideeën of eigen idee, wat je inlevert, en dat je Copilot-chats onderdeel zijn van de beoordeling. Vraag: denk vóór dag 3 na over je idee. | slides + gesprek, 25 min |
| 3:15 | Afronding, huiswerk, buffer voor wie nog niet draait. | 30 min |

Slides nooit langer dan 30 minuten achter elkaar: klopt.

## Oefeningen

`day-0/exercises/` (nieuw; dag 0 had nog geen oefeningen).

1. **01-setup.md** – Copilot-tests A/B/C, Node LTS check, `npx create-expo-app Pokedex` (default tabs-template), `npx expo start`, Expo Go op telefoon. Dit is het Pokédex-project waar dag 1 t/m 3 in verder werken. Windows: Expo Go op telefoon, Android-emulator is optioneel huiswerk. Klaar als: app draait op telefoon én Copilot antwoordt.
2. **02-ask-copilot.md** – Vaste vragen aan Copilot over het project, antwoord in eigen woorden opschrijven (3 regels per bestand). Eén handmatige wijziging. Klaar als: student kan zonder te kijken zeggen wat `app/`, `components/` en `app.json` doen.

Oefening 2 is de eerste toepassing van de regel "alles wat de agent zegt, controleer je": laat studenten één antwoord van Copilot nakijken in de Expo-docs.

## Slides

| Deck | Status |
|---|---|
| `react-native-intro.md` | Bestaand, aanpassen. "About me" (nu Levi: foto `profile.jpg`, 10+ jaar web, CMD) wordt Kevin: eigen foto en drie regels aanleveren. Teamslide: Kevin toevoegen (`kevin.png`), Levi blijft in het team staan. Showcase en demo-video's blijven (Triple/Hypersolid). "Course Overview" en "Course Exam" volgen de nieuwe toets. |
| `web-vs-native.md` | Bestaand, inkorten van 30 naar ~15 slides: dev tools en build/deployment eruit, dat komt later of niet. |
| `setup.md` | Nieuw, kort. Stappenplan Copilot Student (hieronder) + project aanmaken. Los deck zodat studenten het later terugvinden. |

## Vervalt uit Levi's materiaal

- Expo get-started als huiswerk: gebeurt nu in de les (oefening 1), omdat dag 1 al vier dagen later is.
- Detailslides dev tools en build/deployment in Web vs Native.

## Huiswerk (dag 0 → 1)

- Project draait op je telefoon, als dat in de les niet gelukt is.
- Lees de eindopdracht in `day-3/README.md`.
- Optioneel: Android-emulator opzetten (Windows).

## Open punten

- Node LTS en Expo Go-app installeren gebeuren in de les (oefening 1); de mail vooraf blijft alleen over Copilot Student gaan. Reken daar tijd voor.
- Levi staat ook als bron in dag 3 (`use-ai.md`, `project-structure.md`: "Levi, 2025"). Meenemen bij die dag-specs.

## Retro

_Na de les invullen: wat werkte, wat niet, wat verandert._

## Voorbereiding (vooraf gestuurd)

Studenten hebben dit stappenplan vóór dag 0 ontvangen. De meesten hebben het dus al gedaan; dag 0 checkt alleen kort of het werkt. De stappen komen wel in de slides, voor wie nog niet klaar is.

1. **GitHub-account.** Nog geen account? Maak er een op github.com/signup. Gebruik je persoonlijke mailadres als hoofdadres, zodat je het account na je studie kunt blijven gebruiken.
2. **Studentmail toevoegen.** Ga naar github.com/settings/emails en voeg je Inholland-adres toe (`<studentnummer>@student.inholland.nl`). Klik op de link in de bevestigingsmail.
3. **Studentenstatus aanvragen.** Ga naar github.com/settings/education/benefits → Start an application. Vraagt GitHub om bewijs? Upload bijvoorbeeld een studentenkaart met inschrijfdatum, een inschrijfbewijs of je rooster. Zorg dat zichtbaar is dat je nu bij Inholland staat ingeschreven.
4. **Copilot Student activeren.** Na goedkeuring ga je opnieuw naar github.com/settings/education/benefits en activeer je Copilot Student. Let op: goedkeuring en activeren zijn twee aparte stappen. Na goedkeuring kan het een paar dagen duren voordat Copilot Student beschikbaar is.
5. **VS Code installeren en inloggen.** Download VS Code via code.visualstudio.com. Open Copilot via het Copilot-icoon en log in met hetzelfde GitHub-account.
6. **Testen.** Maak een nieuwe map, open die in VS Code en maak een bestand `test.js`.
   - **Test A – code-suggesties.** Typ `// functie die twee getallen bij elkaar optelt` en druk op Enter. Er hoort een grijze suggestie te verschijnen. Tab accepteert. ✅
   - **Test B – chat.** Open Copilot Chat en vraag: "Wat doet deze functie?" Je hoort een antwoord te krijgen. ✅
   - **Test C – agent mode.** Kies Agent in Copilot Chat en vraag: "Maak een bestand hello.js dat 'hallo' print." ✅

Deze drie tests zijn ook de check op dag 0: wie alle drie groen heeft, is klaar.
