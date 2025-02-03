import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/Navbar.css"

const Navbar = () => {
  return (
    <>
       <nav className='navbar'>
    <div className='navbar-left'>
    <Link to="/" className='nav-link'>Home</Link>
    <Link to="/movies" className='nav-link'>Movies</Link>
    </div>
      
      <div className='navbar-right'>
      <Link to="/login" className='nav-link'>Logout</Link>
      </div>
     

    </nav>
    
    {/* <h2>Welcome to Movie Explorer</h2>
    <div className='img'>
    <img src='https://i.pinimg.com/736x/29/95/00/2995008486e78b6ff55f9789cb9adb5a.jpg'/>
    <img src='https://i.pinimg.com/736x/49/15/e1/4915e18e92bc3b8d0083c0439ac48a8d.jpg'/>
    </div>
     */}
    </>
   
   
  )
}

export default Navbar
