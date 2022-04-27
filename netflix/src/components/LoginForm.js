import classes from './LoginForm.module.css'
import PropTypes from 'prop-types'
// import { useState } from 'react';

export function LoginForm(props) {
    // const [correo, setCorreo] = useState("")
    // const [password, setPassword] = useState("")

    // const onSubmit = (e) => {
    //     e.preventDefault()
    //     alert(JSON.stringify({correo, password}, null, 2))
    // }

  return (
    <>
      <h3>{props.titulo}</h3>
      {/* <form className={classes.container} onSubmit={onSubmit}> */}
      <form className={classes.container}>
        <label htmlFor="email" className={classes.label}>
          Correo electrónico
        </label>
        <input
          id="email"
          type="email"
        //   value={correo}
        //   onChange={e => setCorreo(e.target.value)}
          className={`${classes.field} ${classes.formSpacing}`}
        />
        <label htmlFor="password" className={classes.label}>
          Contraseña
        </label>
        <input
          id="password"
          type="password"
        //   value={password}
        //   onChange={e => setPassword(e.target.value)}
          className={`${classes.field} ${classes.formSpacing}`}
        />
        <div className={classes.formSpacing}>
          <input id="remember" type="checkbox" />
          <label htmlFor="remember">Recuerdame</label>
        </div>
        <button type="submit" className={classes.button}>
          Iniciar sesión
        </button>
      </form>
    </>
  );
}

LoginForm.propTypes = {
    titulo: PropTypes.string.isRequired,
}

LoginForm.defaultProps = {
    titulo: "Formulario general"
}