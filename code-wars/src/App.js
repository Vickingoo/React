import { useEffect, useState } from "react";
import Efectos from "./components/Efectos";

function App() {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      {visible ? <Efectos /> : null}
      <button onClick={() => setVisible(!visible)}>Toggle</button>
    </div>
  )
}

export default App;
