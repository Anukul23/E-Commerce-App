import React from 'react'
import "../Navbar/Navbar.css"

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="seach-bar">
      <input type="text" placeholder='Search for rooms,guests...' />
      
        </div> 
        <div className="search">
        <span className='bi bi-search'></span>
        </div>
        <div className="bell">
            <span className='bi bi-bell'></span>
            </div>   
            <div className="pic">
                <span className='bi bi-person-circle'></span>
                </div>  
    </div>
  )
}

export default Navbar
