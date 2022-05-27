import React, { useContext } from 'react'
import { AuthContext } from '../contexts/AuthProvider'

function Home() {
    const {logout}=useContext(AuthContext)
    const handleClick=()=>
    {
      logout()
    }
  return (
    <div><h1>Home</h1>
          <button colorScheme='blue' onClick={handleClick} >LogOut</button> 
   </div>
  )
}

export default Home