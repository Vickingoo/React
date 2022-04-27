export function Botones (){
  return (
    <div>
      <button onClick={(e) => alert("Hola")}>Hola</button>
      <button onClick={(e) => console.log("Adios")}>Adios</button>
      <button>Pregunta</button>
    </div>
  );
}