import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import gravatar from '../utils/gravatar'
import { logoutRequest } from '../actions'
import '../assets/css/components/header.css'
import logo from '../assets/img/logo-platzi-video-BW2.png'
import userIcon from '../assets/img/user-icon.png'
function Header(props) {
  const { user } = props
  const hasUser = Object.keys(user).length > 0
  const handleLogout = () => {

    props.logoutRequest({})


  }
  return <><header className="header">
    <Link to='/'>
      <img className="header__img" src={logo} alt="" /></Link>
    <div className="header__menu">
      <div className="header__menu--profile">
        {
          hasUser ? <img src={gravatar(user.email)} alt={user.email} />
            :
            <img src={userIcon} alt="" />
        }


        <p>Perfil</p>
      </div>
      <ul>
        {
          hasUser ? 
          <li><a href=" ">{user.name}</a></li> 
          : 
          null

        }
        {
          hasUser ?
            <li><a href="#logout" onClick={handleLogout}>Cerrar Secion</a></li> 
            :
            <li><Link to="/login">Iniciar Secion</Link></li>}

       
      </ul>
    </div>
  </header> </>
}
const mapStateToProps = state => {

  return {
    user: state.user,
  }
}
const mapDispatchToProps = {

  logoutRequest,
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)