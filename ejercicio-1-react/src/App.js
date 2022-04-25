import "./App.css";
import { Card } from "./components/Card";

function App() {
  return (
    <div className="wrapper">
      <Card
        titulo="Titulo"
        descripcion="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac neque varius, sollicitudin ex blandit, luctus tortor. Fusce mauris quam, condimentum ut porta at, rutrum eget dolor. Fusce rhoncus mi."
        textoBoton="Texto boton"
        enlaceBoton="https://google.com"
        imagenUrl="https://image.api.playstation.com/vulcan/ap/rnd/202109/1317/slykemANZWRwM0bPnBERnAiY.jpg"
      />
    </div>
  );
}

export default App;
