import './App.css';
import Navbar from './Components/Navbar';
import About from './pages/About';
import Home from './pages/Home';
import Login from './pages/Login';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Signin from './Components/Signin';
import SignUp from './Components/SignUp';
import Google from './Components/Google';

function App() {
  const navigate = useNavigate();
  // whenever user enter into webpage directly they need to go to Home page
  useEffect(() => {
    navigate('/home');
  }, []);

  return (
    <div className='App'>
      <Navbar />

      <Routes>
        <Route path='Home' element={<Home />} />
        <Route path='About' element={<About />} />

        <Route path='Login/*' element={<Login />} />

       

        <Route />
      </Routes>
      <div>
        {/* Note 1.rendering Sign in , sigb up , Google 
         2.'Login/*'   it means after login wtever u give it only to Login page only
         when we apply means in codition we have multilple routings */}
      </div>
    </div>
  );
}
//Note:  to give perticular location of element we will use the Rotes & Route
export default App;
