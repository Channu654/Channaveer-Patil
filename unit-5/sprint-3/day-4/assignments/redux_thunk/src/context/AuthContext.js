
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const AuthContext = React.createContext();

const AuthContextProvider = ({ children }) => {
  const [tokens, setToken] = useState("");

  const {token}=useSelector((state)=>state.token);
let tokk=token.token
 
  useEffect(()=>
  {
    setToken(tokk)
  },[tokk])
 
   
      
  

  return <AuthContext.Provider value={{tokens}} >{children}</AuthContext.Provider>;
};

export { AuthContext, AuthContextProvider };
