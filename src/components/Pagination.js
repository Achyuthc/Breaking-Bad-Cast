import React from 'react'
import './Pagination.css'
const Pagination = ({itemsPerPage,totalItems,paginate}) => {
    const pageNumbers=[]
    for(let i=1;i<=Math.ceil(totalItems.length/itemsPerPage);i++)
    {
        pageNumbers.push(i);
    }
    return (
        <nav>
            <ul className='pagination'>
                {pageNumbers.map((pageNumber) =>
                <li key={pageNumber}  onClick={()=> paginate(pageNumber)} className='page-item'>
                    
                    <a  className='page-link'>
                        {pageNumber}
                    </a>
                </li>
                )

                }

            </ul>
        </nav>
    )
}

export default Pagination
