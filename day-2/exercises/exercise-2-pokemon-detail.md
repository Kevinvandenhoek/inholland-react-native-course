# Exercise 2: Detail page from PokeAPI

### Objective
The detail screen loads its own Pokémon from PokeAPI: artwork, types and stats. With loading and error states.

### Requirements

1. `services/pokeapi.ts`: `fetchPokemon(id)` returning name, id, artwork, types and stats.
2. `hooks/use-pokemon.ts`: `usePokemon(id)` with query key `['pokemon', id]`.
3. `app/pokemon/[id].tsx` shows loading, error and the data. Types get a badge with a token colour.

### Steps to Complete

1. **Look at one Pokémon.** Open [pokeapi.co/api/v2/pokemon/25](https://pokeapi.co/api/v2/pokemon/25). Find `name`, `id`, `types[].type.name`, `stats[].base_stat` with `stats[].stat.name`, and `sprites.other["official-artwork"].front_default`. The response is big. You only type the part you use.

   > **📚 Reference:** [PokeAPI: Pokémon](https://pokeapi.co/docs/v2#pokemon)

2. **Type only what you need.** Add to `services/pokeapi.ts`:

   ```ts
   export type Pokemon = {
     id: number
     name: string
     imageUrl: string
     types: string[]
     stats: { name: string; value: number }[]
   }

   type PokemonResponse = {
     id: number
     name: string
     types: { type: { name: string } }[]
     stats: { base_stat: number; stat: { name: string } }[]
   }

   export async function fetchPokemon(id: number): Promise<Pokemon> {
     const res = await fetch(`${BASE}/pokemon/${id}`)
     if (!res.ok) throw new Error(`Pokémon ${id} not found (${res.status})`)
     const p: PokemonResponse = await res.json()
     return {
       id: p.id,
       name: p.name,
       imageUrl: artworkUrl(p.id),
       types: p.types.map((t) => t.type.name),
       stats: p.stats.map((s) => ({ name: s.stat.name, value: s.base_stat })),
     }
   }
   ```

   Mapping the response to your own shape in the service keeps the API's naming out of your screens.

3. **The hook.** `hooks/use-pokemon.ts`:

   ```ts
   export const usePokemon = (id: number) =>
     useQuery({ queryKey: ['pokemon', id], queryFn: () => fetchPokemon(id), enabled: Number.isFinite(id) })
   ```

   Why does the key contain the id? Ask Copilot, then check the docs.

   > **📚 Reference:** [Query keys](https://tanstack.com/query/latest/docs/framework/react/guides/query-keys) · [Dependent queries and `enabled`](https://tanstack.com/query/latest/docs/framework/react/guides/dependent-queries)

4. **The screen.** In `app/pokemon/[id].tsx`, read the param, convert with `Number(id)`, call `usePokemon`. Same three states as exercise 1. On success:
   - artwork large at the top, in a card
   - name and formatted id
   - one badge per type, colour from the theme (one token `typeBadge` is fine; a colour per type is bonus)
   - stats as a list: name and value. A `ScrollView` is fine here, it is a short fixed list.

   Set the header title to the name with `<Stack.Screen options={{ title: pokemon.name }} />`.

   > **📚 Reference:** [ScrollView](https://reactnative.dev/docs/scrollview) · [Stack.Screen options](https://docs.expo.dev/router/advanced/stack/#configure-header-bar)

5. **Test.** Open a few Pokémon. Open `/pokemon/9999` by changing a card's id temporarily: the error state must show, not a crash. Open the same Pokémon twice: the second time is instant.

6. **Lint, tsc, commit.** Message: `Exercise 2: detail from PokeAPI`.

### Done when

- ✅ Detail loads live per Pokémon, with artwork, types and stats
- ✅ Loading and error states, no crash on an unknown id
- ✅ Second visit comes from cache
- ✅ Lint and tsc clean, committed and pushed
