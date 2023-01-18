
import React from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { LoginContext } from "../../state/context";
import './menu.css';


function Menu() {

  const navigate = useNavigate()

  function goesToHome () {
    navigate('/')
  }
  function goesToSignUp () {
    navigate('/signup')
  }

  function goesToLogin() {
    navigate('/login')
  }
  function goesToListado(){
    navigate('/listado')
  }
  function goesToContacto(){
    navigate('/contacto')
  }

  function logOut () {
    dispatch({ token: null })
  }

  const {
    state,
    dispatch,
  } = useContext(LoginContext)

    return (
      <>
      <div className='menu'>
        <div onClick={() => goesToHome()}>
          <img className="logo" src="logo.jpeg" alt='logo'/></div>
        <div>
       <span onClick={() => goesToSignUp()}>Darse de Alta</span>
       <span>|</span>
       { state.token && <span onClick={() => logOut() } >Finalizar Sesión</span>}
       { !state.token && <span onClick={() => goesToLogin() } >Iniciar Sesión</span>}
       <span>|</span>

       <span onClick={()=> goesToListado()}> <i className="fa-solid fa-heart"></i></span>
       <span onClick={() => goesToContacto()}> Cart</span>
       </div>
      </div>
      </>
    )
}

export default Menu