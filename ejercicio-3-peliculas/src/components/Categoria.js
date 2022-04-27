export function Categoria(props) {
  return (
    <div>
      <h1>{props.info.categoria}</h1>
      <ol>
        {props.info.peliculas.map((pelicula) => (
          <li>{pelicula}</li>
        ))}
      </ol>
    </div>
  );
}
