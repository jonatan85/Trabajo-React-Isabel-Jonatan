import { useState, useContext } from "react"
import MyTitle from "../../components/MyTitle/MyTittle"
import { LoginContext } from "../../state/context";
import './signup.css'

function Login () {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUserName] = useState('');


    // const {
    //     state,
    //     dispatch,
    // } = useContext(LoginContext)


    function signUp (event){
        event.preventDefault()

        // username:'johnd',
        // password:'m38rmF$',

        // dispatch({ token: 'eyJhbGciOiJIUzI1NiIsInR' })

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

    function changeUsername (event) {
        setUserName(event.target.value)
    }

    return (
        <div className="signup">
        <form className="formBox" onSubmit={signUp}>
            <MyTitle name="Soy el SignUp" /> 
            <input className="user" type="text" placeholder="username" value={username} onChange={changeUsername}></input>
            <input className="emailBox" type="text" placeholder="email" value={email} onChange={changeEmailValue} ></input>
            <input className="passwordBox" type="text" placeholder="password" value={password} onChange={changePasswordValue}></input>
            <button className="buttonBox">Dar de alta</button>
        </form>
        </div>
    )
}
export default Login