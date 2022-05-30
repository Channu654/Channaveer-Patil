import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';

import style from './Links.module.css';
import { Link, Navigate } from 'react-router-dom';
import { Authcontex } from '../context/Authcontext';

const User = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [isAuth] = useContext(Authcontex);

  useEffect(() => {
    setLoading(true);

    axios({
      url: 'https://reqres.in/api/users',
      method: 'GET',
    })
      .then((res) => {
        setData(res.data.data);
        setLoading(false);
      })
      .catch((err) => {});
  }, []);
  console.log(data);
  if (!isAuth) {
    return <Navigate to='/Login' />;
  }
  return (
    <div>
      <h1>users</h1>
      {loading && <div>Loading..</div>}

      {data.map((item) => {
        return (
          <div key={item.id} className={style.avatar}>
            <div>{item.email}</div>
            <div>{item.first_name}</div>
            <img src={item.avatar} alt='' className={style.img} />
            <Link to={`/User/${item.id}`}>see more</Link>
          </div>
        );
      })}
    </div>
  );
};

export default User;
