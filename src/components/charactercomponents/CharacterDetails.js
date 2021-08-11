import React from 'react'
import { useState,useEffect } from 'react';
import './CharacterDetails.css'
import axios from 'axios';
const CharacterDetails = ({item}) => {
 const[quotes,setQuotes]=useState([]);
    
    useEffect(()=>{
        const fetchItems =async () =>{
            const ans=await axios(`https://www.breakingbadapi.com/api/quote?author=${item.name}`);
            console.log(1);
            console.log(ans.data)
            setQuotes(ans.data);
        }
        fetchItems();
        
            



    },[])
    
    return (
        <div className="character-details">
            <h1 className='name-of-item'>{item.name}</h1>
            <div className='img-of-item'>
                <img className='item-img' src={item.img} ></img>
           
            </div>
            
            <div className="detail">
                <h2 className="perticular">Date Of Birth:</h2><p className="describe" >{item.birthday}</p>
            </div>
            <div className="detail">
                <h2 className="perticular">Occupation:</h2><p className="describe" >{item.occupation}</p>
            </div>
            <div className="detail">
                <h2 className="perticular" >Status:</h2><p className="describe" >{item.status}</p>
            </div>
            <div className="detail">
                <h2 className="perticular" >Nickname:</h2><p className="describe" >{item.nickname}</p>
            </div>

            <div className="detail">
                <h2 className="perticular" >Actor Name:</h2><p className="describe" >{item.portrayed}</p>
            </div>

            <div className="detail">
                <h2 className="perticular" >Seasons:</h2><p className="describe" >{item.appearance.map((season)=><span>{season}</span>)}</p>
            </div>

            
                <h2 className="quotes" >Quotes:</h2><div className="quote" >{quotes.map((q)=><div className="a">{q.quote}</div>)} </div>
            
        </div>
    )
}

export default CharacterDetails
