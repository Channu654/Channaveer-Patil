import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(false);
  const [isState, setIsState] = useState("light");
  const toggleTheme = () => {
    isState === "light" ? setIsState("dark") : setIsState("light");
  };
  const login = async (formData) => {
    console.log(formData);
    console.log(formData.email);
    try {
      let res = await fetch(`https:/reqres.in/api/login`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
          //     "email": "eve.holt@reqres.in",
          // "password": "cityslicka"
        }),
      });
      let data = await res.json();

      setToken(data.token);
    } catch (error) {
      console.log(error);
    }
    //
  };
  const logout = () => {
    setToken("");
  };
  return (
    <AuthContext.Provider value={{token,isState, login, logout, toggleTheme}}>
      {children}
    </AuthContext.Provider>
  );
};
