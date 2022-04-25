import { IniciarSesion } from "./IniciarSesion";

export function Autenticacion(props) {
  return props.isLoggedIn ? props.children : <IniciarSesion />;
}
