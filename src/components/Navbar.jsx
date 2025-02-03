import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import "../styles/Navbar.css"

const Navbar = () => {

  useEffect(() => {
    alert('Click on the Home!'); // This will show an alert when the component mounts
  }, []);


  const handleHomeClick = () => {
    alert('Welcome!');
  };

  const handleMoviesClick = () => {
    alert('Please log in to view movies!');
  };

  return (
    <>
       <nav className='navbar'>
    <div className='navbar-left'>
    <Link to="/" className='nav-link' onClick={handleHomeClick}>Home</Link>
    <Link to="/movies" className='nav-link' onClick={handleMoviesClick}>Movies</Link>
    </div>
      
      <div className='navbar-right'>
      <Link to="/login" className='nav-link'>Logout</Link>
      </div>
     

    </nav>
   <h2>Movieessss!!!!!</h2>
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
