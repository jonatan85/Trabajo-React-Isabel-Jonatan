import React, { useEffect, useState} from 'react';
import MyTitle from "../../components/MyTitle/MyTittle";
import axios from 'axios';
import List from "../../components/List/List";
import getDataApi from '../../services/api';


function Listado (){
    const [ListCharacter, setListCharacter] = useState([]);
    const[next, setNext] = useState(''); 
    const[previous, setPrevious] = useState(''); 
    
    useEffect(() =>{
            axios.get('https://swapi.dev/api/planets/').then ((resp) =>{
                console.log(resp.data);
                setListCharacter(resp.data.results);
                setNext(resp.data.next);
                setPrevious(resp.data.previous);
            });
        }, []);
    
    const handleClick = (ev)=>{
        axios.get(next).then((resp)=> {
            setListCharacter(resp.data.results);
            setNext(resp.data.next);
        });

    }
        const handleClickPrevious = (ev)=>{
            axios.get(next).then((resp)=> {
                setListCharacter(resp.data.results);
                setPrevious(resp.data.previous);
            })
    
    }
    return (
        <div>
        <MyTitle name="Soy el listado" />
        <List ListCharacter ={ListCharacter} handleClick={handleClick} handleClickPrevious={handleClickPrevious}/>
        
        </div>
    )
}
export default Listado