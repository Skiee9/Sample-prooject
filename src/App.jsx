import React from 'react'
import {Routes, Route} from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./Pages/Home"
import Movies from "./Pages/Movies"
import Login from "./Pages/Login"

const App=()=>{
  return(
    <div>
    <Navbar/>
     <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/movies" element={<Movies/>}/>
    <Route path="/login" element={<Login/>}/>
     </Routes>
    <Footer/>
    </div>
   
  )
}
export default App;