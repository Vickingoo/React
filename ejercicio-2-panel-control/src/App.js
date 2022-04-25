import "./App.css";
import { IniciarSesion } from "./components/IniciarSesion";
import { PanelControl } from "./components/PanelControl";
import { Autenticacion } from "./components/Autenticacion";

// Crear componente IniciarSesion
// Crear componente PanelControl
// Renderizar iniciar sesion cuando isLoggedIn = false
// Renderizar PanelControl sesion cuando isLoggedIn = true
// Crear componente Autenticacion
// Si esta isLoggedIn renderizar props.children si no IniciarSesion


function App() {
  const isLoggedIn = true;

  return (
 <Autenticacion isLoggedIn={true}>
   <PanelControl />
 </Autenticacion>
  );
}



export default App;