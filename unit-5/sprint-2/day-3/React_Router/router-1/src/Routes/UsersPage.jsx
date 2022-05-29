import axios from 'axios';
import React, { useEffect, useState } from 'react';
import style from './Links.module.css';
import { Link, useParams } from 'react-router-dom';

const UserPage = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const params = useParams();
  console.log('params:', params);

  useEffect(() => {
    setLoading(true);
    const { id } = params;
    axios({
      url: `https://reqres.in/api/users/${id}`,
      method: 'GET',
    })
      .then((res) => {
        setData(res.data.data);
        setLoading(false);
      })
      .catch((err) => {});
  }, [params.id]);
  console.log('data', data);

  return (
    <div>
      {loading && <div>Loading..</div>}
      <div key={data?.id} className={style.avatar}>
        <div>email:{data?.email}</div>
        <div>Name:{data?.first_name}</div>
        <div>Last_name{data?.last_name}</div>
        <img src={data?.avatar} alt='' className={style.img} />
      </div>
      {/* {data.map((item) => {
        return (
          <div className={style.avatar}>
            <div>{data?.data?.email}</div>
            <div>{data?.data?.first_name}</div>
            <img src={data?.data?.avatar} alt='' className={style.img} />
            <Link to={`/users/${item.id}`}>see more</Link>
          </div>
        );
      })} */}
    </div>
  );
};

export default UserPage;
