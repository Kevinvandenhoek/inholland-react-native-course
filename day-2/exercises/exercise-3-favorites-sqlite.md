# Exercise 3: Favorites in SQLite

### Objective
Save favorites on the phone with SQLite. They survive a restart. The Favorites tab reads from the database and has an empty state.

### Requirements

1. `expo-sqlite` installed. `services/favorites-db.ts` with four functions: `getFavorites`, `isFavorite`, `addFavorite`, `removeFavorite`.
2. `hooks/use-favorites.ts`: a query for the list and a mutation to toggle, both through TanStack Query.
3. Heart button on the detail screen. Favorites tab shows the saved Pokémon, or "No favorites yet" when empty.
4. Kill the app, open it again: favorites are still there.

### Steps to Complete

1. **Install.**

   ```bash
   npx expo install expo-sqlite
   ```

   > **📚 Reference:** [Expo SQLite](https://docs.expo.dev/versions/latest/sdk/sqlite/)

2. **The database module.** Create `services/favorites-db.ts`. Open the database once, create the table if needed, export plain functions. No class needed.

   ```ts
   import * as SQLite from 'expo-sqlite'
   import { artworkUrl, type PokemonListItem } from './pokeapi'

   const db = SQLite.openDatabaseSync('pokedex.db')

   db.execSync(`
     CREATE TABLE IF NOT EXISTS favorites (
       id INTEGER PRIMARY KEY,
       name TEXT NOT NULL,
       created_at TEXT DEFAULT CURRENT_TIMESTAMP
     );
   `)

   type Row = { id: number; name: string }

   export async function getFavorites(): Promise<PokemonListItem[]> {
     const rows = await db.getAllAsync<Row>('SELECT id, name FROM favorites ORDER BY created_at DESC')
     return rows.map((r) => ({ ...r, imageUrl: artworkUrl(r.id) }))
   }

   export async function isFavorite(id: number): Promise<boolean> {
     const row = await db.getFirstAsync<Row>('SELECT id, name FROM favorites WHERE id = ?', [id])
     return row !== null
   }

   export async function addFavorite(id: number, name: string): Promise<void> {
     await db.runAsync('INSERT OR REPLACE INTO favorites (id, name) VALUES (?, ?)', [id, name])
   }

   export async function removeFavorite(id: number): Promise<void> {
     await db.runAsync('DELETE FROM favorites WHERE id = ?', [id])
   }
   ```

   The `?` placeholders are not decoration. Never build SQL with string concatenation.

   > **📚 Reference:** [expo-sqlite API: `runAsync`, `getAllAsync`, `getFirstAsync`](https://docs.expo.dev/versions/latest/sdk/sqlite/#sqlitedatabase)

3. **Hooks.** Create `hooks/use-favorites.ts`. The list is a query, like PokeAPI. Changing it is a mutation that invalidates the query, so every screen refreshes.

   ```ts
   import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
   import * as favoritesDb from '@/services/favorites-db'

   export const useFavorites = () =>
     useQuery({ queryKey: ['favorites'], queryFn: favoritesDb.getFavorites })

   export const useIsFavorite = (id: number) =>
     useQuery({ queryKey: ['favorites', id], queryFn: () => favoritesDb.isFavorite(id) })

   export const useToggleFavorite = () => {
     const queryClient = useQueryClient()
     return useMutation({
       mutationFn: async ({ id, name, isFavorite }: { id: number; name: string; isFavorite: boolean }) =>
         isFavorite ? favoritesDb.removeFavorite(id) : favoritesDb.addFavorite(id, name),
       onSuccess: () => queryClient.invalidateQueries({ queryKey: ['favorites'] }),
     })
   }
   ```

   Why does invalidating `['favorites']` also refresh `['favorites', 25]`? Look it up.

   > **📚 Reference:** [Mutations](https://tanstack.com/query/latest/docs/framework/react/guides/mutations) · [Query invalidation](https://tanstack.com/query/latest/docs/framework/react/guides/query-invalidation)

4. **Heart button.** On the detail screen: `useIsFavorite(id)` and `useToggleFavorite()`. A `Pressable` with a heart (`@expo/vector-icons` is in the template: `Ionicons` `heart` / `heart-outline`). Colour from the theme. Disable it while `isPending`.

   > **📚 Reference:** [Expo vector icons](https://docs.expo.dev/guides/icons/)

5. **Favorites tab.** In `app/(tabs)/favorites.tsx`, replace the slice with `useFavorites()`. Same three states. Empty array: show a friendly message and a hint to tap a heart. Reuse `PokemonList`.

6. **Test.** Favorite three Pokémon. Check the tab. Kill the app completely (swipe it away), open it again. Still three? Unfavorite one from its detail page, go back to the tab: gone, without a reload.

7. **Lint, tsc, commit.** Message: `Exercise 3: favorites in SQLite`.

### What happens natively

SQLite is a real database file on the phone, in your app's sandbox. `expo-sqlite` talks to the platform's built-in SQLite library over the bridge. The file stays until the user deletes the app. That is why your favorites survive a restart, and why an `AsyncStorage` key-value store would also have worked here. We use SQLite because you will want queries later.

### Done when

- ✅ Heart on the detail page, toggles and stays disabled while saving
- ✅ Favorites tab reads from SQLite, has loading, error and empty states
- ✅ Favorites survive killing the app
- ✅ Lint and tsc clean, committed and pushed
