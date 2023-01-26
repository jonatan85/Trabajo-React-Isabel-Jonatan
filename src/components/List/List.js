import './List.css';
import React, { useEffect, useState} from 'react';

const List = ({ListCharacter, handleClick}) =>{
        

return <div className='listContainer'>
    <ul className='list'>
        {ListCharacter.map((item,id) => (
            <li key={id}>{item.name}</li>
        ))}
    </ul>
    <div className='containerButton'>
    <button className='buttonClickPrevious' onClick={handleClick}>Previous</button>
    <button className='buttonClick' onClick={handleClick}>Next</button>
    
    </div>
</div>
};
export default List