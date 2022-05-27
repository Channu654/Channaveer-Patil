import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthProvider'

export const RequiredLogin = ({children}) => {
  const {token}=useContext(AuthContext);
  console.log(token);
  const location=useLocation;

  
  if(token) return children
  return <Navigate to="/LoginFrom" state={{from:location}} replace/>
}
