import React, {  createContext, useState } from "react";
export const ThemeContext = createContext();
export const ThemeContextProvider = ({ Children }) => {
    const [isState,setIsState]=useState("light")
    const toggleTheme=()=>
    {
     isState==="light"?setIsState("dark"):setIsState("light") 
    }
  return (
    <div>
      <ThemeContext.Provider value={[isState, toggleTheme]}>
        {Children}
      </ThemeContext.Provider>
    </div>
  );
};
