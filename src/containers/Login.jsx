import React ,{useState}from "react";
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { loginRequest} from '../actions'
import '../assets/css/login.css'
import googleIcon from '../assets/img/icons8-google-plus-50.png'
import twitterIcon from '../assets/img/icons8-twitter-50.png'
function Login(props) {

const [form,setValues]=useState({
  email:'',
})
const handleInput =event =>{
  setValues({
    ...form,[event.target.name]:event.target.value,

  })
}
const handleSubmint = event=>{
event.preventDefault()
console.log(form)
props.loginRequest(form)
props.history.push('/')
}
  return (
    <section className="login">
      <section className="login__container">
        <h2>Iniciar sesion</h2>
        <form action="" className="login__container--form" onSubmit={handleSubmint}>
          <input name='email'type="text" className="input" placeholder="Correo"  onChange={handleInput }/>
          <input name='password' type="password" className="input" placeholder="Contrasena" onChange={handleInput } />
          <button className="button" a>
            {" "}
            <a href="home.html">Iniciar sesion</a>{" "}
          </button>
          <div className="login__container--remember-me ">
            <label for="">
              <input type="checkbox" name="" id="cbx1" /> Recuerdame
            </label>
            <a href="">Olvide mi Contrasena</a>
          </div>
        </form>
        <section className="login__container--social-media">
          <div>
            <img src={googleIcon} alt="" />
            Inicia sesión con Google
          </div>
          <div>
            <img src={twitterIcon} alt="" />
            Inicia sesión con Twitter
          </div>
        </section>
        <p className="login__container--register">
          No tienes ninguna cuenta <Link to="/register"> Registrate</Link>{" "}
        </p>
      </section>
    </section>
  );
}
const mapDispatchToProps ={
  loginRequest,

}
export default connect(null,mapDispatchToProps)(Login);

