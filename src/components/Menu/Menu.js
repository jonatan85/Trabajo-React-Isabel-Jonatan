
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
        <div  onClick={() => goesToHome()}>
        <ul className="menu-left">
        <li className="fa-solid fa-bars"></li>
        <li><img className="logo" src="logo_store.png" alt='logo'/></li>
        </ul>
        </div>
          
        <div className="menu-right">
       <span  onClick={() => goesToSignUp()}>Darse de Alta</span>
       
       { state.token && <span  onClick={() => logOut() } >Finalizar Sesión</span>}
       { !state.token && <span  className="span1" onClick={() => goesToLogin() } >Iniciar Sesión</span>}
       

       <span className="span1" onClick={()=> goesToListado()}> <i className="fa-solid fa-heart"></i></span>
       <span onClick={() => goesToContacto()}> <i className="fa-regular fa-cart-shopping"></i></span>
       </div>
      </div>
      </>
    )
}

export default Menu