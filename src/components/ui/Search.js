import React from 'react'
import './Search.css'
import { useState } from 'react'

const Search = ({getQuery}) => {
    const [text,setText]=useState('');

    const onChange=(q)=>{
        setText(q)
        getQuery(q)

    }
    return (
        <div  className='search'>
            <form className="search-form">

            <input type='text' className='form-control'  value={text}  onChange={(e)=>onChange(e.target.value)}  placeholder='Search Character' ></input>
            </form>
           
        </div>
    )
}

export default Search
