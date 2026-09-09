# Toetsing: de eindopdracht

Status: concept. Open punten staan gemarkeerd met ❓.
Volgt uit [00-koers.md](00-koers.md) §6. Alles wat hier staat moet ergens in dag 0–3 geleerd én geoefend worden (zie §8).

## 1. Waarom anders dan vorig jaar

De oude checklist meet alleen het product. Een agent bouwt die Pokédex in een middag zonder dat de student iets leert. Daarom toetsen we nu drie dingen:

1. **Product**: werkt de app en klopt de techniek?
2. **Werkwijze**: hoe heeft de student de agent aangestuurd en het werk opgedeeld?
3. **Uitleg**: begrijpt de student wat er staat?

Toetsing is op afstand. Er is geen demo op locatie.

## 2. De opdracht

Bouw een mobiele app op live data uit [PokeAPI](https://pokeapi.co/). Kies één van twee startideeën, of kom met een eigen idee.

**Startidee 1: Pokédex.** De les-app afgemaakt en uitgebreid volgens het [Figma-design](https://www.figma.com/design/dsgGXcu5WELIvRW90m5308/Pokemon-Code-Challenge). Vaste lijst met eisen, streng op design. Zie bijlage A.

**Startidee 2: Battle simulator.** Kies twee Pokémon en laat ze vechten volgens de echte spelregels: typetabel uit de API, officiële damage-formule, beurten op snelheid. Eigen design. Zie bijlage B.

**Eigen idee.** Mag, op PokeAPI of op een andere API die publiek is, zonder inlog of sleutel werkt, en genoeg data heeft voor 3–6 user stories. Voorwaarden:
- live data uit de API, geen gedownloade lijst;
- voldoet aan de technische kern (§3);
- één duidelijke kernactie voor de gebruiker (zoeken, vechten, plannen, verzamelen, ...);
- haalbaar: 3–6 user stories, niet meer;
- eigen specs (`specs/product.md`, §4) en eigen design: een schets per scherm is genoeg, geen Figma nodig.

**Goedkeuring.** Wie een startidee kiest meldt dat in Teams, klaar. Een eigen idee gaat in twee stappen. Aan het eind van dag 2 krijgt elke student een sjabloon voor een **idee-briefje** van hooguit tien regels: idee, kernactie, welke API, drie tot vijf user stories van één zin. Dat briefje staat vóór het einde van de vakantie in Teams. Kevin geeft één ronde korte feedback, op dag 3 keurt hij definitief goed. De optie wordt op dag 0 al genoemd, zodat studenten erover kunnen nadenken. Na dag 3 mag je altijd nog terug naar een startidee.

## 3. Technische kern (verplicht, geldt voor elk product)

- [ ] Draait in Expo Go via QR-code.
- [ ] Data komt live uit een publieke API (standaard PokeAPI), opgehaald met TanStack Query. Geen inlog of sleutel nodig.
- [ ] Minimaal 2 schermen met Expo Router.
- [ ] Iets wordt lokaal bewaard in SQLite en is er na herstart nog.
- [ ] Elke laadactie heeft een loading- en een error-state.
- [ ] Minimaal 1 native functie van de telefoon (Share, haptics, camera, notificaties, ...).
- [ ] TypeScript zonder errors. ESLint zonder errors.
- [ ] Logische projectstructuur: UI, data en logica staan niet door elkaar.

Dit is de kern voor elk product. De startideeën hebben daarbovenop hun eigen lijst (bijlage A en B). TabView, Expo Font en FlatList staan daarom alleen in bijlage A, niet hier. Voor een eigen idee is Expo Font optioneel (§6).

## 4. Wat je inlevert

Eén GitHub-repo met:

| Onderdeel | Wat | Toetst |
|---|---|---|
| De app | De code, draaiend in Expo Go | Product |
| `specs/product.md` | Wat de app doet: doel, 3–6 user stories met acceptatiecriteria, welke API en welke data. Bij een startidee neem je de lijst uit de bijlage over als user stories | Werkwijze |
| `.github/copilot-instructions.md` | Wat je de agent hebt verteld over je project | Werkwijze |
| GitHub Issues | Elke taak een issue, gesloten via commits (`closes #12`) | Werkwijze |
| `chat-history/` | Kopie van je Copilot-chatmap uit VS Code (zie §5) | Werkwijze |
| `docs/toelichting.md` | Max 1 A4, vier vragen (zie §5) | Uitleg |
| Demo-video | Max 3 minuten, app op je telefoon, jij vertelt erbij. Link in README | Uitleg + product |

Inleveren: link naar de repo via Teams, vóór de deadline. ❓ Deadline 2026.

## 5. Uitleg per onderdeel

**Chat-history.** VS Code bewaart Copilot-chats per project op schijf als `.jsonl`-bestanden:
- macOS: `~/Library/Application Support/Code/User/workspaceStorage/<id>/chatSessions/`
- Windows: `%APPDATA%\Code\User\workspaceStorage\<id>\chatSessions\`
- `<id>` vind je via `workspace.json` in dezelfde map; daar staat het projectpad. Wij leveren een script dat de juiste map vindt en kopieert.
De geschiedenis is bewijs, geen cijfer op zich. Hij wordt naast de commits en de toelichting gelegd.

**Toelichting.** Vier vragen, kort antwoorden. Tussen haakjes de competentie uit §7 die de vraag toetst:
1. Wat heb je gebouwd en voor wie? (product)
2. Noem twee keuzes in de code en waarom je ze zo gemaakt hebt. (aansturen)
3. Waar zat de agent fout, hoe merkte je dat, en wat deed je toen? (controleren)
4. Noem een stuk code van de agent dat je eerst niet begreep. Hoe heb je het uitgezocht, en wat doet het nu? (begrijpen)

**Demo-video.** Vervangt de live demo. Laat de app zien op een echte telefoon, loop de user stories uit je spec af, en leg één stuk code uit dat je zelf belangrijk vindt.

## 6. Cijfer

Voldoende (5.5) als **alles** hier klopt:
- Technische kern (§3) volledig.
- Alle onderdelen uit §4 aanwezig.
- Spec en app komen overeen: wat in de spec staat, doet de app.

Daarboven:

| Deel | Weging | Waar kijk je naar |
|---|---|---|
| Product | 40% | Werkt het, is het af volgens de eigen spec, kwaliteit van de code |
| Aansturen | 20% | Kleine taken, context, eigen keuzes (§7) |
| Controleren | 20% | Output gelezen, getest, gecorrigeerd (§7) |
| Begrijpen | 20% | Toelichting en video: klopt het met de code, snapt de student het (§7) |

Optioneel, +1 per item:
- Animaties.
- Dark mode via theming.
- Paginering met infinite scroll.
- Clean TypeScript: geen `any`, geen `as`, geen `@ts-ignore`.
- Pixel-perfect design (Pokédex) of eigen design met consistente stijl (battle, eigen idee).
- Eigen font via Expo Font (bij Pokédex al verplicht, telt daar niet).
- Localisatie.
- Geen bugs, geen console errors.

## 7. Criteria voor werkwijze (input voor de beoordelings-skill)

Kevin beoordeelt met een Claude Code-skill in deze repo. Deze criteria zijn de bron; de skill is ervan afgeleid.

Drie competenties (koers §4). Elk krijgt 20% van het cijfer (§6).

**Aansturen**
- **Kleine taken.** Issues en prompts vragen om één ding tegelijk. Niet: "bouw de app".
- **Context.** Prompts verwijzen naar de spec, naar bestanden, naar instructies. `copilot-instructions.md` beschrijft het project.
- **Eigen keuzes.** De student kiest, de agent voert uit. Niet andersom.

**Controleren**
- **Controle.** De student leest wat de agent maakt: vraagt door, corrigeert, wijst af, test. Zichtbaar in de chat én in de toelichting (vraag 3).
- **Samenhang.** Issues, commits, spec en app vertellen hetzelfde verhaal.

**Begrijpen**
- **Navragen.** Na een agent-taak stelt de student vragen over wat er gebouwd is, tot hij het snapt. Zichtbaar in de chat.
- **Uitleggen.** Toelichting en video kloppen met de code en gaan verder dan wat de agent zelf zei (vraag 4).

Rode vlaggen:
- Eén prompt die de hele app vraagt, daarna alleen "fix it".
- Chat-history die niet past bij de commits (te weinig, te veel, andere bestanden).
- Toelichting die de code niet kan uitleggen of ermee botst.
- Toelichting die alleen herhaalt wat de agent in de chat zei.

Chatgeschiedenis is te bewerken en te verwijderen. Daar is niets aan te doen. Daarom is hij bewijs naast commits en toelichting, geen cijfer op zich.

## 8. Dekkingsmatrix

Elk verplicht item → waar geleerd → waar geoefend. Volgens het hoog-over plan (koers §8); de dag-specs moeten dit waarmaken.

| Item | Geleerd | Geoefend |
|---|---|---|
| Expo Go | dag 0 | dag 0 |
| VS Code + Copilot Student werkend | vooraf (stappenplan) | vooraf, check dag 0 |
| Startideeën en eigen idee | dag 0 (aangekondigd), dag 2 (sjabloon idee-briefje) | vakantie: keuze of briefje in Teams, feedback Kevin, goedkeuring dag 3 |
| API-keuze (publiek, zonder sleutel, alleen eigen idee) | dag 2 (bij TanStack Query) | idee-briefje |
| Typetabel en damage-formule (alleen battle) | niet in de les; bijlage B geeft de bronnen | eindopdracht |
| Expo Router | dag 1 | dag 1 |
| Theming | dag 1 | dag 1 |
| ESLint | dag 1 | dag 1 t/m 3 (aan vanaf het begin) |
| TypeScript zonder errors | aangenomen | overal |
| TanStack Query | dag 2 | dag 2 |
| SQLite | dag 2 | dag 2 |
| Loading/error-states | dag 2 | dag 2 |
| Native functie (Share) | dag 2 | dag 2, via agent mode |
| copilot-instructions.md | dag 2 | dag 2 |
| Aansturen en controleren | dag 1 (chat), dag 2 (agent mode) | dag 2 en 3 |
| Begrijpen (vraag het na) | dag 2 | dag 2 en 3, laatste stap van elke agent-oefening |
| Projectstructuur | dag 3 | dag 3 |
| Spec schrijven | dag 3 | dag 3 |
| Issues + commits koppelen | dag 3 | dag 3 |
| Toelichting schrijven | dag 3 (uitleg) | na de course |
| Spec Driven Development (flowchart) | dag 0 (klein), dag 3 | dag 3 |

Geen item staat meer op "nergens". Zodra een dag-spec hiervan afwijkt, eerst deze tabel en koers §8 aanpassen.

## 9. Let op

- **Privacy.** Student-repos en chatgeschiedenis zijn persoonsgegevens. Afspraak: het script exporteert alleen de chats van het projectmap zelf, niets anders. Studenten horen op dag 0 dát hun chatgeschiedenis wordt beoordeeld en waarop. Kevin acht dit daarmee voldoende; niet apart bij InHolland getoetst.

## Bijlage A. Startidee Pokédex

Grotendeels de lijst van vorig jaar. Wat in de les al gebouwd is staat er ook in: het moet af en volgens design zijn. Design: het Figma-bestand, streng gevolgd (kleuren per type, font, spacing, iconen).

Lijst
- [ ] Lijst van alle Pokémon in een FlatList, live uit de API.
- [ ] Zoeken op naam.
- [ ] Gepagineerd laden met infinite scroll (50 per keer).

Detail
- [ ] Vanuit lijst en favorieten naar detail.
- [ ] Naam, nummer, afbeelding, types met de typekleur uit het design.
- [ ] Drie tabs, swipebaar (bijvoorbeeld React Native TabView): over, stats, evolutielijn.
- [ ] Evolutielijn live uit de API, klikbaar naar het volgende detail.
- [ ] Favoriet maken en weer weghalen.
- [ ] Delen via de Share API.

Favorieten
- [ ] Eigen scherm, bewaard in SQLite, blijft na herstart.
- [ ] Lege staat als er nog niets is.

Overig
- [ ] Loading- en error-state bij lijst, detail en evolutielijn.
- [ ] Het font uit het design via Expo Font (`day-3/assets/fonts.zip`).

Native functie voor de kern (§3): Share. Optioneel (§6): animaties, dark mode, localisatie, pixel-perfect.

## Bijlage B. Startidee Battle simulator

Eigen design; het Figma-bestand heeft geen battle-scherm. Houd het simpel: twee Pokémon tegenover elkaar, HP-balken, een log van de beurten.

Opzet
- [ ] Kies twee Pokémon (zoeken of willekeurig), live uit de API.
- [ ] Beide op hetzelfde level (bijvoorbeeld 50), stats uit de API.

Gevecht
- [ ] Beurten op volgorde van speed; gelijk is willekeurig.
- [ ] Elke beurt een aanval met een echte move van die Pokémon uit de API (power, type, accuracy). Geen move met power? Kies er een die het wel heeft.
- [ ] Damage volgens de officiële formule (Bulbapedia: "Damage", generatie V en later): level, attack/defense of special attack/special defense, power, random 85–100%, STAB ×1,5.
- [ ] Type-effectiviteit uit de API (`/type/{id}`, `damage_relations`), niet hardgecodeerd. Beide types van de verdediger tellen.
- [ ] Zichtbaar in de UI: "super effective", "not very effective", "no effect", raak of mis.
- [ ] Trilling (haptics) bij een treffer.
- [ ] Winnaar als een HP op nul staat.

Geschiedenis
- [ ] Elk gevecht bewaard in SQLite: wie, wie, winnaar, aantal beurten. Blijft na herstart.
- [ ] Scherm met de geschiedenis en een lege staat.

Overig
- [ ] Loading- en error-state bij zoeken, laden van Pokémon, moves en types.

Native functie voor de kern (§3): haptics. Buiten scope, bewust: abilities, items, statuseffecten, weer, meerdere Pokémon per kant. Wie dat toch bouwt: eerst de lijst af.
