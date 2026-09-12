# Exercise 1: TanStack Query

### Objective
Replace the hardcoded array with live data from PokeAPI, using TanStack Query. Every load shows a loading state and an error state.

Copilot Chat is allowed. Read before you paste. No hex codes outside the theme. Lint and tsc clean at the end.

### Requirements

1. `@tanstack/react-query` installed, `QueryClientProvider` around the app.
2. `services/pokeapi.ts`: one function that fetches the first 151 Pokémon with `fetch`. No extra API library.
3. `hooks/use-pokemon-list.ts`: a `useQuery` hook around it.
4. The Pokémons tab shows a spinner while loading, a message with a retry button on error, and the grid on success.

### Steps to Complete

1. **Install.** `expo install` picks the version that fits your SDK.

   ```bash
   npx expo install @tanstack/react-query
   ```

   > **📚 Reference:** [TanStack Query: installation](https://tanstack.com/query/latest/docs/framework/react/installation)

2. **Provide the client.** In `app/_layout.tsx`, create one `QueryClient` outside the component and wrap the `<Stack>` in `<QueryClientProvider client={queryClient}>`.

   > **📚 Reference:** [Quick start](https://tanstack.com/query/latest/docs/framework/react/quick-start)

3. **Look at the API.** Open [pokeapi.co/api/v2/pokemon?limit=151](https://pokeapi.co/api/v2/pokemon?limit=151) in your browser. You get `results`, each with a `name` and a `url`. The id is the last number in the URL. Note: no login, no key. That is what "public API" means for your final assignment.

   > **📚 Reference:** [PokeAPI docs](https://pokeapi.co/docs/v2#pokemon)

4. **Write the service.** Create `services/pokeapi.ts`:

   ```ts
   export type PokemonListItem = { id: number; name: string; imageUrl: string }

   const BASE = 'https://pokeapi.co/api/v2'

   export async function fetchPokemonList(limit = 151): Promise<PokemonListItem[]> {
     const res = await fetch(`${BASE}/pokemon?limit=${limit}`)
     if (!res.ok) throw new Error(`PokeAPI responded with ${res.status}`)
     const json: { results: { name: string; url: string }[] } = await res.json()
     return json.results.map((r) => {
       const id = Number(r.url.split('/').filter(Boolean).pop())
       return { id, name: r.name, imageUrl: artworkUrl(id) }
     })
   }

   export const artworkUrl = (id: number) =>
     `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
   ```

   The `if (!res.ok) throw` matters: `fetch` does **not** throw on a 404 or 500. Without it your error state never shows.

   > **📚 Reference:** [Using the Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)

5. **Write the hook.** Create `hooks/use-pokemon-list.ts`:

   ```ts
   import { useQuery } from '@tanstack/react-query'
   import { fetchPokemonList } from '@/services/pokeapi'

   export const usePokemonList = () =>
     useQuery({ queryKey: ['pokemon', 'list'], queryFn: () => fetchPokemonList() })
   ```

   > **📚 Reference:** [useQuery](https://tanstack.com/query/latest/docs/framework/react/reference/useQuery) · [Query keys](https://tanstack.com/query/latest/docs/framework/react/guides/query-keys)

6. **Use it.** In `app/(tabs)/index.tsx`, replace `pokemonData` with `const { data, isPending, error, refetch } = usePokemonList()`.
   - `isPending`: show an `ActivityIndicator` centred on the screen.
   - `error`: show `error.message` and a `Pressable` "Try again" that calls `refetch()`.
   - Otherwise: the grid with `data`.

   Update `PokemonCard` and `PokemonList` to the new `PokemonListItem` type and show the artwork with `<Image source={{ uri: item.imageUrl }} />`. Delete the array in `constants/pokemon.ts`; keep or move the type.

   > **📚 Reference:** [ActivityIndicator](https://reactnative.dev/docs/activityindicator) · [Image](https://reactnative.dev/docs/image)

7. **Test all three states.** Loading: restart the app and watch. Error: turn on airplane mode, pull to the tab, press "Try again", turn airplane mode off, press again. Success: the grid. Then navigate away and back: instant, from cache.

8. **Lint, tsc, commit.** Message: `Exercise 1: Pokémon list from PokeAPI`.

### What happens natively

`fetch` goes through the bridge to the platform's networking stack (`URLSession` / `OkHttp`). The JavaScript thread does not wait; the response comes back as a message. That is why the UI keeps scrolling while data loads. `<Image>` with a URL downloads and caches the picture natively as well.

### Done when

- ✅ The list comes from PokeAPI, 151 Pokémon with artwork
- ✅ Spinner while loading, message and retry on error
- ✅ `constants/pokemon.ts` no longer holds data
- ✅ Lint and tsc clean, committed and pushed
