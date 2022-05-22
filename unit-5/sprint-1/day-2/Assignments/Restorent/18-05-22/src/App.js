import { useState } from 'react';
import './App.css';
import RestaurantDetails from './component/RestaurantDetails';
import data from './db';

function App() {
  const [alldata, setData] = useState(data);

  return (
    <div className='App'>

      {alldata.map((elem, index, arr) => {
        const { image, name, rating, cost } = elem;

        return (
          <RestaurantDetails
            key={index}
            image={image}
            name={name}
            rating={rating}
            cost={cost}
          />
        );
      })}
    </div>
  );
}

export default App;
