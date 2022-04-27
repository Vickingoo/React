import { Categoria } from "./components/Categoria";

const listado = [
  {
    categoria: "Superheroes", // Titulo de categoria
    peliculas: ["Los Vengadores", "Spiderman", "Batman", "Superman"], // Listado de peliculas
  },
  {
    categoria: "Terror",
    peliculas: ["Saw", "Scream", "Hellraiser", "The Ring", "Insidious"],
  },
  {
    categoria: "Animación",
    peliculas: [
      "Tarzan",
      "El Viaje de Chihiro",
      "Castillo Ambulante",
      "Rey Leon",
      "Mulan",
    ],
  },
];

// 1. Crear un component Categoria, que acepte por props, titulo y listado de peliculas
// 2. Dentro del componente Categoria, crear una lista con <ol> y <li> de cada pelicula en esa categoria
// 3. En App.js hacer un map sobre el listado completo


function App() {
  return (
    <div>
      {listado.map((info) => (
        <Categoria info={info} titulo={info.categoria} peliculas={info.peliculas}/>
      ))}
    </div>
  );
}

export default App;
