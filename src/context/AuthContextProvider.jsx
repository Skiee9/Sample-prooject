import React,{createContext, useState} from 'react'
import { useNavigate } from 'react-router-dom'

 export const AuthContext=createContext()
const AuthContextProvider = ({children}) => {
    const [isAuthenticated, setAuthenticated]=  useState(false)
    const [token, setToken] = useState(null)
    const navigate= useNavigate()

    const login=(authToken)=>{
        console.log(token)
        setAuthenticated(true)
        setToken(authToken)
        navigate("/")

    }
    const logout=()=>{

    }

  return (
    <AuthContext.Provider value={{token, isAuthenticated,login,logout}}>
   {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider;
