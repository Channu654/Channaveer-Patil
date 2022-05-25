import React, { useEffect, useState } from 'react';
import Button from './components/Button';
import CandidateCard from './components/CandidateCard';
import './styles.css';
import axios from 'axios';

export default function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState('Asc');
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios(
      {
        method: 'GET',
        url: ' http://localhost:3000/candidates',
        params: {
          _page: page,
          _limit: 5,
          _sort: 'salary',
          _order: sort,
        },
      },
      [page, sort]
    )
      .then((res) => {
        console.log('res:', res);

        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(true);
        setLoading(false);
      });
  });

  return (
    <div className='App'>
      <div>
        {loading && <div id='loading-container'>...Loading</div>}
        {sort === 'DESC' ? (
          <Button
            id='SORT_BUTTON'
            onClick={() => setSort('ASC')}
            title={`Sort by Ascending Salary`}
          />
        ) : (
          <Button
            id='SORT_BUTTON'
            onClick={() => setSort('DESC')}
            title={`Sort by Dscending Salary`}
          />
        )}

        <Button title='PREV' id='PREV' onClick={() => setPage(page - 1)} />
        <Button id='NEXT' title='NEXT' onClick={() => setPage(page +1)}/>
      </div>
      {data.map((item) => {
        return <CandidateCard key={item.id} {...item} />;
      })}
    </div>
  );
}
