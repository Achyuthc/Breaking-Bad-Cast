import React from 'react'
import'./Character.css'
const Character = ({item,characterClick}) => {
    const click=true;
    return (
        
            <div className='character-detail'>
               <img className='character-img' src={item.img} ></img>
               <div className='overlay'  onClick={()=>(
                   
                   characterClick(click,item))} ></div>

               <div className='description' onClick={()=>(
                   
                   characterClick(click,item))} >
                    <div className='property'>
                        <strong className='over-strong'>Name:</strong><p className='over-p'>{item.name}</p>
                    </div>

                    <div className='property'>
                        <strong className='over-strong' >Occupation:</strong><p className='over-p' >{item.occupation}</p>
                    </div>
                   
                    <div className='property'>
                        <strong className='over-strong' >Date Of Birth:</strong><p className='over-p' >{item.birthday}</p>
                    </div>

                    <div className='property'>
                        <strong className='over-strong' >Status:</strong><p  className='over-p' >{item.status}</p>
                    </div>
               </div>
            </div>
         
        
    )
}

export default Character
