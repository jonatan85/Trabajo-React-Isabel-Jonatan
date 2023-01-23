import { useState, useEffect, useContext } from "react"
import axios from "axios";
import MyTitle from "../../components/MyTitle/MyTittle"
import { LoginContext } from "../../state/context";
import './login.css'

function Login () {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const {
        state,
        dispatch,
    } = useContext(LoginContext)


    function sendLogin (event){
        event.preventDefault()

        // username:'johnd',
        // password:'m38rmF$',

        dispatch({ token: 'eyJhbGciOiJIUzI1NiIsInR' })

        // fetch('https://fakestoreapi.com/auth/login', {
        //     method: 'POST',
        //     body: JSON.stringify({
        //         username: email,
        //         password: password,
        //     })
        // })
        //     .then((res) => {
        //         return res.json()
        //     })
        //     .then((res) => {
        //         dispatch({ token: res.token })
        //     })
    }


    function changeEmailValue (event) {
        setEmail(event.target.value)
    }

    function changePasswordValue (event) {
        setPassword(event.target.value)
    }

    return (
        <div className="login">
            
        <form className="formBox" onSubmit={sendLogin}>
        <MyTitle name="Accede a tu cuenta" /> 
           <input className="emailBox" type="text" placeholder="email" value={email} onChange={changeEmailValue} ></input>
           <input className="passwordBox" type="text" placeholder="password" value={password} onChange={changePasswordValue}></input>
           <button className="buttonBox">Iniciar sesión</button>
        </form>
        </div>
    )
}
export default Login