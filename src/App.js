
import './App.css';

import Header from './components/ui/Header';
import React, { useState,useEffect } from 'react'
import './components/FontAwesomeIcons/Index'

import Search from './components/ui/Search';
import Contact from './components/Contact';
import Charactergrid from './components/charactercomponents/Charactergrid';
import CharacterDetails from './components/charactercomponents/CharacterDetails';
import axios from 'axios';
import Pagination from './components/Pagination';

const App=() => {
    const [items,setItems]=useState([])
    const [loading,setLoading]=useState(true)
    const [currentPage,setCurrentPage]=useState(1);
    const [itemsPerPage,setItemsPerPage]=useState(10);
    const [query,setQuery]=useState('');
    const [characterClicked,setCharacterClicked]=useState(false);
    const [characterItem,setCharacterItem]=useState('')
    useEffect(() => {
      const fetchItems =async () =>
      {
        const result=await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)
        
        setItems(result.data)
        setLoading(false)

      }
      fetchItems()
    },[query])

    //get currentItems
    const indexOfLastItem=itemsPerPage*currentPage;
    const indexOfFirstItem=indexOfLastItem-itemsPerPage;
    const currentItems=items.slice(indexOfFirstItem,indexOfLastItem);

    //change Page
    const paginate=(pageNumber) =>(
      
      setCurrentPage(pageNumber)
      
    )

    //search query
    const getQuery=(q)=>{
      setQuery(q);
    }

    //character Click
    const characterClick=(click,item)=>
    (
      setCharacterClicked(click),
      setCharacterItem(item)
      
    )
    
      return (
        (characterClicked) ?(<div>
        <div className="container">
        
        <Header characterClick={characterClick} />
        <br></br>
        <CharacterDetails item={characterItem}/>
        
        </div>
        <Contact />
        </div>
        ):(<div>
          <div className="container">
        
        <Header characterClick={characterClick} />
        <br></br>
        
        
          <>
          <Search   getQuery={getQuery}   />
          <br></br>
          <Charactergrid items={currentItems} characterClick={characterClick} />

          <Pagination itemsPerPage={itemsPerPage} totalItems={items} paginate={paginate} />
         
          </>
        

        
        </div>
          <Contact />
      </div>
        
      )
      )
}

export default App;
