import "./App.css";
import { AuthContext } from "./contexts/AuthProvider";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { useContext, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Navbar from "./compnents/Navbar";

import SingnUpForm from "./compnents/SingnUpForm";
import LoginFrom from "./compnents/LoginFrom";
import { RequiredLogin } from "./compnents/RequiredLogin";
import { Button, styled } from "@chakra-ui/react";
import { ThemeContext } from "./contexts/ThemeContextProvider ";
import style from "./Application.module.css"
function App() {
    const { token} = useContext(AuthContext);
     const { isState } = useContext(AuthContext);
  //const [theme,toggleTheme] = useContext(ThemeContext);
//console.log(isState);
  return (
    <div
      
      className={`${style.buttonLight} ${
        isState === "light" ? style.buttonLight : style.buttonDark
      }`}
    >
      <Navbar />
      <div>{token ? <Home /> : <LoginFrom />}</div>
    </div>
  );
}

export default App;
