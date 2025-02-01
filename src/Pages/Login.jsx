import React, {useContext, useState} from 'react'
import axios from 'axios'
import { AuthContext } from '../context/AuthContextProvider'

const Login = () => {
    const [username,setUsername]= useState("")
    const [password,setPassword]= useState("")
    const [error,setError] = useState(null)
    // const [token, setToken]= useState(null)
    const {login}= useContext(AuthContext)

    const handleLogin =async (e)=>{
        e.preventDefault()
        try{
           const response = await axios({
            method: 'POST',
            url:'https://achieved-colossal-skink.glitch.me/login',
            data:{
              username,password
            }
           })
           if(response.data.success){
            console.log(response.data.token,"response")
            const {token}=response.data
            Login(token)
            // setToken(response.data.token)
           } 
           }catch(err){
            // setError(err)
            setError(err.response.data.token,"response")

        }
    }


  return (
   <>
<form onSubmit= {handleLogin}>
    <input type="text" placeholder="enter your username" value={username} onChange={(e)=>setUsername(e.target.value)}/>
    <input type="password" placeholder="enter your password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
    <input type="submit" value="Login"/>
</form>
   </>
  )
}

export default Login
