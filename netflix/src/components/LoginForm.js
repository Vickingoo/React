import classes from './LoginForm.module.css'
import PropTypes from 'prop-types'
<<<<<<< HEAD
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
=======
import { useState } from "react";

const credenciales = {
  email: "test@gmail.com",
  password: "test"
}

export function LoginForm(props) {
  const [formValues, setFormValues] = useState({ email: "", password: "" });

  const onSubmit = (e) => {
    e.preventDefault();

    const { email, password } = formValues
    if (email === credenciales.email && password === credenciales.password) {
      props.handleAuth(true)
    } else {
      props.handleAuth(false)
    }
  };

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  }

  return (
    <>
      <h3>{props.title}</h3>
      <form className={classes.container} onSubmit={onSubmit}>
>>>>>>> hasta el evento hook con useState y useEffect
        <label htmlFor="email" className={classes.label}>
          Correo electrónico
        </label>
        <input
          id="email"
          type="email"
<<<<<<< HEAD
        //   value={correo}
        //   onChange={e => setCorreo(e.target.value)}
=======
          name="email"
          value={formValues.email}
          onChange={handleChange}
>>>>>>> hasta el evento hook con useState y useEffect
          className={`${classes.field} ${classes.formSpacing}`}
        />
        <label htmlFor="password" className={classes.label}>
          Contraseña
        </label>
        <input
          id="password"
          type="password"
<<<<<<< HEAD
        //   value={password}
        //   onChange={e => setPassword(e.target.value)}
          className={`${classes.field} ${classes.formSpacing}`}
        />
        <div className={classes.formSpacing}>
          <input id="remember" type="checkbox" />
          <label htmlFor="remember">Recuerdame</label>
        </div>
=======
          name="password"
          value={formValues.password}
          onChange={handleChange}
          className={`${classes.field} ${classes.formSpacing}`}
        />

>>>>>>> hasta el evento hook con useState y useEffect
        <button type="submit" className={classes.button}>
          Iniciar sesión
        </button>
      </form>
    </>
  );
}

LoginForm.propTypes = {
<<<<<<< HEAD
    titulo: PropTypes.string.isRequired,
}

LoginForm.defaultProps = {
    titulo: "Formulario general"
=======
    title: PropTypes.string.isRequired,
    handleAuth: PropTypes.func.isRequired  
}

LoginForm.defaultProps = {
  title: "Formulario general"
>>>>>>> hasta el evento hook con useState y useEffect
}