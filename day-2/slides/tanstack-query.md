---
marp: true
theme: default
class: invert
---

# Tanstack Query
## Getting the Pokédex Data

---

# Tanstack Query
## What does it solve?

- Data fetching
- Caching
- Synchronization
- ... and more

![bg right fit](../assets/tanstack.png)

---

![bg fit](../assets/tanstack-arch.png)

---

# Traditional React Fetching

```jsx
function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
        const data = await response.json();
        setPokemon(data.results);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemon();
  }, []);
}
```

---

# With TanStack Query

```jsx
import { useQuery } from '@tanstack/react-query';

function PokemonList() {
  const { data: pokemon, isLoading, error } = useQuery({
    queryKey: ['pokemon'], // cache identifier
    queryFn: () => 
      fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
        .then(res => res.json())
        .then(data => data.results)
  });
```

---

![bg fit](../assets/tanstack-cache.png)

---

# What is a public API?

[pokeapi.co/api/v2/pokemon/25](https://pokeapi.co/api/v2/pokemon/25)

- A URL that returns **JSON**. Anyone can call it.
- **No login, no key.** Your app can call it straight from the phone.
- Documented: you can read what comes back before you write code.
- Rate limits: be polite, cache. TanStack Query does that for you.

Your final assignment runs on one of these.

---

# Choosing an API for your own idea

Check before you commit to an idea:

| Question | Why |
|---|---|
| No key or login? | A key in your app is public. A login needs a backend. |
| Enough data for 3 to 6 stories? | One endpoint with one list is too thin. |
| Stable and documented? | You have four weeks. Not the time for a moving target. |
| Returns JSON over HTTPS? | Anything else is extra work. |
| Free for this use? | Read the terms. |

Good ones: PokeAPI, Open-Meteo (weather), TheMealDB, Rijksmuseum, Open Library, SWAPI. There are lists: search "public APIs".

---

# Query anything

```jsx
useQuery({
  queryKey: ['pokemon', pokemonId],
  // fetching something from the server
  queryFn: () => someApiService.getPokemonDetails(pokemonId),
});
useQuery({
  queryKey: ['favorites'],
  // fetching something from local storage
  queryFn: () => someLocalStorage.getFavorites(),
});
```

---

![bg fit](../assets/tanstack-arch-any.png)
