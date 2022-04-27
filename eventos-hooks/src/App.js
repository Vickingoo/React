import { useState } from "react";
import { Bombilla } from "./components/Bombilla";
import { Button } from "./components/Button";

function App() {
  const [idLampara, setIdLampara] = useState();
    
  const bucleSemaforo = () => {
      switch (idLampara) {
        case "rojo":
          setIdLampara("verde")
          break;
        case "verde":
          setIdLampara("naranja")
          break
        case "naranja":
          setIdLampara("rojo")
          break;
        default:
          setIdLampara("verde")
          break;
      }
    }

  return (
    <div>
      <Bombilla color="rojo" encendida={idLampara === "rojo"} />
      <Bombilla color="naranja" encendida={idLampara === "naranja"} />
      <Bombilla color="verde" encendida={idLampara === "verde"} />
      <Button onClick={bucleSemaforo} />
    </div>
  );
}

export default App;