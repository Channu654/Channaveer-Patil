import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
const Users = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const params = useParams();
  console.log('params:', params);

  useEffect(() => {
    setLoading(true);
    axios({
      url: ' https://api.github.com/users/',
      method: 'GET',
    })
      .then((res) => {
        console.log('res:', res);
        setData(res.data.data);
      })
      .catch((err) => {
        console.log('err:', err);
        setLoading(false);
      });
  }, []);
  return <div>{loading && <div>loading...</div>}</div>;
};

export default Users;
