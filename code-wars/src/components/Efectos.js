import { useEffect, useState } from "react";

interface Film {
  title: string;
  director: string;
  episode_id: number;
}

function Videos() {
  const [isLoading, setIsLoading] = useState(true);
  const [films, setFilms] = useState<Film[]>([]);

  const obtenerDatos = () => {
    setIsLoading(true);
    fetch("https://swapi.dev/api/films")
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        setFilms(data.results);
      });
  };

  useEffect(() => {
    obtenerDatos();
  }, []);

  return (
    <ul>
      {isLoading ? (
        <li>Cargando...</li>
      ) : (
        films.map((film) => (
          <li>
            {film.episode_id} - {film.title} - {film.director}
          </li>
        ))
      )}
    </ul>
  );
}

export default Videos;