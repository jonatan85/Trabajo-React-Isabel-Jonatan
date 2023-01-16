
import React from "react";
import { useNavigate } from "react-router-dom";

import './menu.css';


function Menu() {

  const navigate = useNavigate()

  function goesToHome () {
    navigate('/')
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

    return (
      <>
      <div className='menu'>
       <div onClick={() => goesToHome()}>Home</div>
       <div onClick={() => goesToLogin() } >Login</div>
       <div onClick={()=> goesToListado()}> Listado</div>
       <div onClick={() => goesToContacto()}> Contacto</div>
      </div>
      </>
    )
}

export default Menu