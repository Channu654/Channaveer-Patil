import React, { useState } from 'react';
import Card from './Card';
import Card1 from './Card1';
const List = ({ people }) => {
    const [data,setData] = useState({});
   const [display , setDisplay] =useState(true);
   const value = {display,setDisplay};
  return (
    <>
    {display ?<div>
        <h3>People :{people.length}</h3>
        {people.map((person) => {
          return <Card1 setData={setData} setDisplay={setDisplay} key='id' person={person} display={display}/>;
        })}
      </div>: <Card data={data} value={value}/> }
      
    </>
  );
};

export default List;
