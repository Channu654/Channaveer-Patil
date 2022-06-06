import React, { useState ,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Pagination } from '../Components/Pagination';


import { PostItem } from '../Components/PostItem'
import { getData } from '../redux/app/action';
import style from "./Post.module.css"

export const Posts = () => {
    const [page,setPage]=useState(1)
  
    const {isLoading,isError,Postdata}=useSelector((state)=>state.Postdata);
    console.log()
    console.log(Postdata?.data);
    const dispatch=useDispatch();
    useEffect(() => {
    getData({page,dispatch})
    
    }, [page])
   
if(isLoading)
return <div>Loading....</div>
if(isError)
return <div>404 NOT FOUND</div>
  return (
      <>
      



    {Postdata?.data.map((item)=>(
        
      <PostItem key={item.id} {...item} />
        ))}
        <div>
         <div className={style.PaginationButton}>
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>
          prev
        </button>
        <Pagination
          currentPage1={page}
          lastPage={100 / 10}
          onPageChange={setPage}
        />
        <button onClick={() => setPage(page + 1)}>next</button>
      </div>
      </div>
        </>
  )
}
