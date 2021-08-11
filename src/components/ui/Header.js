import React from 'react'
import logo from '../../img/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Header.css'
const Header = ({characterClick}) => {
    return (
        <header className="header">
            <div className='font-awesome'>
                
                <FontAwesomeIcon onClick={()=>(characterClick(false,''))}  icon="home" size="5x" color="#033f01" className='icon' />
                <h1>Home</h1>
            </div>
           <div className='logo'>
                <img src={logo}></img>
           </div>
           
        </header>
    )
}

export default Header
