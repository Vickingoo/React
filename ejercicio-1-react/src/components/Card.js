import "./Card.css";

// {
//     titulo: '',
//     descripcion: '',
//     imagenUrl: '',
//     textoBoton: '',
//     enlaceBoton: ''
// }

export function Card(props) {
  return (
    <div className="container">
      <img
        alt="test"
        className="image"
        src={props.imagenUrl}
      />
      <div className="container-informacion">
        <h1>{props.titulo}</h1>
        <p>{props.descripcion}</p>
        <a className="boton" href={props.enlaceBoton}>
          {props.textoBoton}
        </a>
      </div>
    </div>
  );
}