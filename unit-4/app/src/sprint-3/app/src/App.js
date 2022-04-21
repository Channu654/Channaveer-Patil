//  
import './App.css';
import { CartProvider } from './Context/CartProvider';
import Body from './day-2/components/Body';
import Navbar from './day-2/components/Navbar';

function App() {
  return (
    <ThemeProvider>
    <div className='App'>

      <CartProvider defaultValue={100}> 
     <Navbar/>
     <Body/>
     </CartProvider>
    </div>
   </ThemeProvider>
  );
}

export default App;
