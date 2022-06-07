import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [people, setPeople] = useState(data);
  //delet
  const handleremove = (id) => {
    let newPeople = people.filter((item) => item.id !== id);
    setPeople(newPeople);
  };
  // refresh
  const handleclick = () => {
    setPeople(data.data);
  };
  return (
    <main>
      <section className='container'>
        <h3> {people.length} BirthDays Today</h3>
        <List people={people} handleremove={handleremove} />
        <button onClick={() => setPeople([])}>clear</button>
        <button onClick={handleclick}>refresh</button>
      </section>
    </main>
  );
}

export default App;
