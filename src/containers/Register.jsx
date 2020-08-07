import React, { useState } from 'react'
import { connect } from 'react-redux'
import { registerRequest } from '../actions'
import '../assets/css/register.css'
import { Link } from 'react-router-dom'
function Register(props) {

  const [form, setValues] = useState({
    email: '',
    name: '',
    password: '',

  })

  const handleInput = event => {
    setValues({
      ...form,
      [event.target.name]: event.target.value
    })
  }
  const handleSubmit = event => {

    event.preventDefault()
    props.registerRequest(form)
    props.history.push('/')
  }
  return <>
    <section className="login">
      <section className="login__container">
        <h2>Registrarte</h2>
        <form action="" className="login__container--form" onSubmit={handleSubmit}>
          <input name='name' type="text" className="input" placeholder="Nombre" onChange={handleInput} />
          <input name='email' type="text" className="input" placeholder="Correo" onChange={handleInput} />
          <input name='password' type="password" className="input" placeholder="Contrasena" onChange={handleInput} />
          <button className="button">Iniciar sesion</button>
          <div className="login__container--remember-me ">
            <Link to="/">Iniciar sesion</Link>

          </div>
        </form>


      </section>
    </section></>

}

const envio = {
  registerRequest,
}
export default connect(null, envio)(Register)