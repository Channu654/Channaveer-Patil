import React, { useEffect, useState } from 'react';
import axios from 'axios';

// fetching data from
const getGithubuser = (q = 'Channu') => {
  return axios('https://api.github.com/search/users', {
    method: 'GET',
    params: {
      q: q,
    },
  });
};

// ******* //
const Github = () => {
  const [Loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);
  const [query, setquery] = useState('masai');

  useEffect(() => {
    getGithubuser(query)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        setError(true);
        console.log(err);
      });
  }, []);
  console.log(data);
  const handleclick = (query) => setquery(query);
  return (
    <div>
      <h2>Github Users </h2>
      {Loading && <h3>....loading</h3>}
      <button onClick={() => setLoading(!Loading)}> Toggle</button>
      <Searchbar handleclick={handleclick} />
      {data?.items?.map((item) => {
        return <GithubCard key={item.id} {...item} />;
      })}
    </div>
  );
};
// search repo
const Searchbar = ({ handleclick }) => {
  const [text, setText] = useState('');

  return (
    <div>
      <input
        type='text'
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={() => handleclick(text)}> Serach</button>
    </div>
  );
};

// rendering
const GithubCard = ({ avatar_url, login }) => {
  return (
    <div style={{ display: 'flex', gap: '2rem' }}>
      <div>
        <img src={avatar_url} alt='' className='image' />
        <div>{login}</div>
      </div>
    </div>
  );
};

export default Github;
