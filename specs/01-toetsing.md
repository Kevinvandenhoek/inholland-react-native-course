# Toetsing: de eindopdracht

Status: concept. Open punten staan gemarkeerd met ❓.
Volgt uit [00-koers.md](00-koers.md) §6. Alles wat hier staat moet ergens in dag 0–3 geleerd én geoefend worden (zie §7).

## 1. Waarom anders dan vorig jaar

De oude checklist meet alleen het product. Een agent bouwt die Pokédex in een middag zonder dat de student iets leert. Daarom toetsen we nu drie dingen:

1. **Product**: werkt de app en klopt de techniek?
2. **Werkwijze**: hoe heeft de student de agent aangestuurd en het werk opgedeeld?
3. **Uitleg**: begrijpt de student wat er staat?

Toetsing is op afstand. Er is geen demo op locatie.

## 2. De opdracht

Bouw een mobiele app op basis van de [PokeAPI](https://pokeapi.co/). Wat de app doet, bepaal je zelf. Kies een startidee of kom met een eigen idee:

1. **Pokédex** — zoeken, details, favorieten (het klassieke idee, met het Figma-design).
2. **Battle game** — kies Pokémon, vecht op basis van stats en types.
3. **Tekstavontuur** — een verhaal waarin Pokémon-data (locaties, soorten, evoluties) de keuzes bepaalt.

Een eigen idee mag. Kevin keurt het goed op dag 3. De optie wordt op dag 0 al genoemd, zodat studenten er over kunnen nadenken. Na dag 3 mag je altijd nog terug naar een van de drie startideeën.

Een eigen idee moet:
- live data uit PokeAPI gebruiken, geen gedownloade lijst;
- aan de technische kern (§3) voldoen;
- één duidelijke kernactie hebben voor de gebruiker (zoeken, vechten, kiezen, verzamelen, ...);
- haalbaar zijn: 3–6 user stories, niet meer.

## 3. Technische kern (verplicht, geldt voor elk product)

- [ ] Draait in Expo Go via QR-code.
- [ ] Data komt uit PokeAPI, opgehaald met TanStack Query.
- [ ] Minimaal 2 schermen met Expo Router.
- [ ] Iets wordt lokaal bewaard in SQLite en is er na herstart nog.
- [ ] Elke laadactie heeft een loading- en een error-state.
- [ ] Minimaal 1 native functie van de telefoon (Share, haptics, camera, notificaties, ...).
- [ ] TypeScript zonder errors. ESLint zonder errors.
- [ ] Logische projectstructuur: UI, data en logica staan niet door elkaar.

Vervallen als verplicht: TabView, Expo Font, FlatList/ScrollView. Die horen bij één specifiek product, niet in een vrije opdracht. Expo Font staat bij optioneel (§6).

## 4. Wat je inlevert

Eén GitHub-repo met:

| Onderdeel | Wat | Toetst |
|---|---|---|
| De app | De code, draaiend in Expo Go | Product |
| `specs/product.md` | Wat de app doet: doel, 3–6 user stories met acceptatiecriteria, welke PokeAPI-data | Werkwijze |
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

**Toelichting.** Vier vragen, kort antwoorden:
1. Wat heb je gebouwd en voor wie?
2. Noem twee keuzes in de code en waarom je ze zo gemaakt hebt.
3. Waar zat de agent fout, hoe merkte je dat, en wat deed je toen?
4. Wat zou je anders doen als je opnieuw begon?

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
| Werkwijze | 40% | Zie §7-criteria: kleine taken, context geven, output controleren |
| Uitleg | 20% | Toelichting en video: klopt het met de code, snapt de student het |

Optioneel, +1 per item:
- Animaties.
- Dark mode via theming.
- Paginering met infinite scroll.
- Clean TypeScript: geen `any`, geen `as`, geen `@ts-ignore`.
- Pixel-perfect design (bij Pokédex) of eigen design met consistente stijl.
- Eigen font via Expo Font.
- Localisatie.
- Geen bugs, geen console errors.

## 7. Criteria voor werkwijze (input voor de beoordelings-skill)

Kevin beoordeelt met een Claude Code-skill in deze repo. Deze criteria zijn de bron; de skill is ervan afgeleid.

Een goede werkwijze laat zien:
- **Kleine taken.** Issues en prompts vragen om één ding tegelijk. Niet: "bouw de app".
- **Context.** Prompts verwijzen naar de spec, naar bestanden, naar instructies. `copilot-instructions.md` beschrijft het project.
- **Controle.** De student leest wat de agent maakt: vraagt door, corrigeert, wijst af, test. Zichtbaar in de chat én in de toelichting (vraag 3).
- **Samenhang.** Issues, commits, spec en app vertellen hetzelfde verhaal.
- **Eigen keuzes.** De student kiest, de agent voert uit. Niet andersom.

Rode vlaggen:
- Eén prompt die de hele app vraagt, daarna alleen "fix it".
- Chat-history die niet past bij de commits (te weinig, te veel, andere bestanden).
- Toelichting die de code niet kan uitleggen of ermee botst.

Chatgeschiedenis is te bewerken en te verwijderen. Daar is niets aan te doen. Daarom is hij bewijs naast commits en toelichting, geen cijfer op zich.

## 8. Dekkingsmatrix

Elk verplicht item → waar geleerd → waar geoefend. Volgens het hoog-over plan (koers §8); de dag-specs moeten dit waarmaken.

| Item | Geleerd | Geoefend |
|---|---|---|
| Expo Go | dag 0 | dag 0 |
| VS Code + Copilot Student werkend | vooraf (stappenplan) | vooraf, check dag 0 |
| Eigen idee aangekondigd | dag 0 | huiswerk dag 2 → 3 (paar regels) |
| Expo Router | dag 1 | dag 1 |
| Theming | dag 1 | dag 1 |
| ESLint | dag 1 | dag 1 t/m 3 (aan vanaf het begin) |
| TypeScript zonder errors | aangenomen | overal |
| TanStack Query | dag 2 | dag 2 |
| SQLite | dag 2 | dag 2 |
| Loading/error-states | dag 2 | dag 2 |
| Native functie (Share) | dag 2 | dag 2, via agent mode |
| copilot-instructions.md | dag 2 | dag 2 |
| Agent aansturen en controleren | dag 1 (chat), dag 2 (agent mode) | dag 2 en 3 |
| Projectstructuur | dag 3 | dag 3 |
| Spec schrijven | dag 3 | dag 3 |
| Issues + commits koppelen | dag 3 | dag 3 |
| Toelichting schrijven | dag 3 (uitleg) | na de course |

Geen item staat meer op "nergens". Zodra een dag-spec hiervan afwijkt, eerst deze tabel en koers §8 aanpassen.

## 9. Let op

- **Privacy.** Student-repos en chatgeschiedenis zijn persoonsgegevens. Afspraak: het script exporteert alleen de chats van het projectmap zelf, niets anders. Studenten horen op dag 0 dát hun chatgeschiedenis wordt beoordeeld en waarop. Kevin acht dit daarmee voldoende; niet apart bij InHolland getoetst.
