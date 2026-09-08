# InHolland React Native Course

Lesprogramma React Native voor ICT-studenten aan InHolland: vier lesdagen, met als rode draad één Pokédex-app op basis van [PokeAPI](https://pokeapi.co/) en dit [Figma-design](https://www.figma.com/design/dsgGXcu5WELIvRW90m5308/Pokemon-Code-Challenge).

| Dag | Onderwerp | |
|---|---|---|
| 0 | Introductie React Native, web vs. native | [materiaal](./day-0/README.md) |
| 1 | Fundamentals: styling, componenten, navigatie | [materiaal](./day-1/README.md) |
| 2 | Data & debugging: state, TanStack Query, SQLite | [materiaal](./day-2/README.md) |
| 3 | Productie, theming, gebruik van AI, eindopdracht | [materiaal](./day-3/README.md) |

De **eindopdracht** staat in [day-3/README.md](./day-3/README.md#end-assignment).

## Voor docenten

`specs/` bevat de specificaties per lesdag: wat een dag moet opleveren en waaraan het materiaal moet voldoen. Die specs zijn de bron; slides en oefeningen volgen daaruit.

Slides zijn [Marp](https://marp.app/)-markdown in `day-*/slides/`. De HTML wordt bij elke push naar `main` gegenereerd en op GitHub Pages gepubliceerd — commit die niet mee. Lokaal previewen:

```bash
pnpm dlx @marp-team/marp-cli@4.5.0 --html --preview day-3/slides/theming.md
```
