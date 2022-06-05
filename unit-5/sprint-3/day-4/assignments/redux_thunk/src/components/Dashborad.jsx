import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { GithubRepoCard } from './GithubRepoCard';
import { GithubUser } from './GithubUser';

export const Dashborad = () => {
  const [data,setData]=useState([])
  const {users}=useSelector((state)=>state.token);
  console.log(users.data)
  useEffect(()=>
  {
    setData(users.data)
  },[users.data])
  
  console.log(users);
  return (
    <div>
      

  
      <>
      <h1>Github Search</h1>
<GithubUser />
{data?.map((item) => (
        <GithubRepoCard key={item.id} {...item} />
        ))}
       
        </>
  
    </div>
  )
}
