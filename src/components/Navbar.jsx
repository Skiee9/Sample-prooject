import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/Navbar.css"

const Navbar = () => {
  return (
    <nav className='navbar'>
    <div className='navbar-left'>
    <Link to="/" className='nav-link'>Home</Link>
    <Link to="/movies" className='nav-link'>Movies</Link>
    </div>
      
      <div className='navbar-right'>
      <Link to="/login" className='nav-link'>Login</Link>
      </div>
     

    </nav>
  )
}

export default Navbar
