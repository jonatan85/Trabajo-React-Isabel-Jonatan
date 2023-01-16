import { useState } from "react"
import axios from "axios";
import MyTitle from "../../components/MyTitle/MyTittle"

function Login () {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [titulo, setTitulo] = useState('Titulo')
    // let titulo = 'Login'

   // const[msj, setMsj] =useState('');
    function sendLogin (event){
        event.preventDefault()
        // titulo = 'NUEVO TITULO'
        // setTitulo('NUEVO TITULO')
        // TODO: Llamada a la API con los datos del correo y de la clave
        console.log(email, password)
    }


    function changeEmailValue (event) {
        setEmail(event.target.value)
    }

    function changePasswordValue (event) {
        setPassword(event.target.value)
    }

    

   /* function handleCreate (event) {
        event.preventDefault();
        axios.post('https://jsonplaceholder.typicode.com/post', email).then((resp) => {
            if (resp.data.id) {
                setMsj('Se ha enviado con éxito');
            } 
        });
    }*/

    return (
        <div className="login">
            <MyTitle name="Soy el login" /> 
        <form className="formBox" onSubmit={sendLogin}>
           <input className="emailBox" type="text" placeholder="email" value={email} onChange={changeEmailValue} ></input>
           <input className="passwordBox" type="text" placeholder="password" value={password} onChange={changePasswordValue}></input>
           <button className="buttonBox">Enviar</button>
        </form>
        </div>
    )
}
export default Login