import React, { useState } from 'react';
import data from './data';
import List from './List';
import { Link } from 'react';
function App() {
  const [people, setPeople] = useState(data);
  console.log('people:', people);

  return (
    <main>
      <section className='container'>

        <List people={people} />

        {/* <button onClick={() => setPeople([])}>clear all</button> */}
      </section>
    </main>
  );
}

export default App;
