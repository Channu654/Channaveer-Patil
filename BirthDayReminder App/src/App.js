import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [people, setPeople] = useState(data);
  const handleclick = () => {
    setPeople(data);
  };
  return (
    <main>
      <section className='container'>
        <h3> {people.length} BirthDays Today</h3>
        <List people={people} />
        <button onClick={() => setPeople([])}>clear</button>
        <button onClick={handleclick}>refresh</button>
      </section>
    </main>
  );
}

export default App;
