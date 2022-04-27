import { LoginForm } from "./components/LoginForm";

import classes from './App.module.css'

function App() {
  return (
    <div className={classes.container}>
      <div className={classes.formContainer}>
        <LoginForm titulo="Iniciar sesión" />
      </div>
    </div>
  );
}

export default App;