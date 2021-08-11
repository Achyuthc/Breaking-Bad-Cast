import React from 'react'
import reactDom from 'react-dom'
import Character from './Character'
import './Charactergrid.css';
const Charactergrid = ({items,characterClick}) => {
    return (
        <section className='character-grid'>
           { items.map((item) =>
           
           <Character key={item.char_id} item={item} characterClick={characterClick}/>
           
           )}
        </section>

            
    
    )
}

export default Charactergrid
