import React, { useEffect, useState } from "react";

interface Pokemon {
  name: string;
  url: string;
}

function App() {
  const [page, setPage] = useState(0);
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${page * 20}`)
      .then((res) => res.json())
      .then((data) => setPokemons(data.results));
  }, [page]);

  return (
    <ul>
      {pokemons.map((pokemon) => (
        <li key={pokemon.name}>{pokemon.name}</li>
      ))}
      <button onClick={() => setPage(page - 1)}>Anterior</button>
      <button onClick={() => setPage(page + 1)}>Siguiente</button>
    </ul>
  );
}

export default App;