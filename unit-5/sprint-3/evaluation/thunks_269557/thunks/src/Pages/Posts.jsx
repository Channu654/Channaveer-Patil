import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Pagination } from '../Components/Pagination';

import { PostItem } from '../Components/PostItem';
import { getData } from '../redux/app/action';
import style from './Post.module.css';

export const Posts = () => {
  const [pages, setPages] = useState(1);

  const { isLoading, isError, Postdata } = useSelector(
    (state) => state.Postdata
  );
  console.log();
  console.log(Postdata?.data);
  const dispatch = useDispatch();
  useEffect(() => {
    getData({ pages, dispatch });
  }, [pages]);

  if (isLoading) return <div>Loading..</div>;
  if (isError) return <div>404 NOT FOUND</div>;
  return (
    <>
      {Postdata?.data.map((e) => (
        <PostItem key={e.id} {...e} />
      ))}
      <div>
        <div className={style.PaginationButton}>
          <button disabled={page === 1} onClick={() => setPage(page - 1)}>
            previous
          </button>
          <Pagination
            currentPage1={pages}
            lastPage={100 / 10}
            onPageChange={setPages}
          />
          <button onClick={() => setPages(pages + 1)}>nextpages</button>
        </div>
      </div>
    </>
  );
};
