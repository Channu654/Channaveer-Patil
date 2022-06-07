import React from 'react';

const List = ({ people, handleremove }) => {
  console.log('people:', people);

  return (
    <>
      <h2>list component</h2>
      {people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <article key={id} className='person'>
            <img src={image} alt='' />
            <div>
              {name}
              {age}year
            </div>
            <button onClick={() => handleremove(id)}>Delete</button>
          </article>
        );
      })}
    </>
  );
};

export default List;
