import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import { Dashborad } from "./components/Dashborad";
import { Registration } from "./components/Registration";
import { Login } from "./components/Login";
import { RequiredAuth } from "./components/RequiredAuth";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/Regitration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={
        <RequiredAuth ><Dashborad /></RequiredAuth>
        } />
      </Routes>
    </div>
  );
}

export default App;
