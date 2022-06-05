import React, { useEffect, useState } from 'react'
import styles from "./Github.module.css"

export const GithubRepoCard = (props) => {
    const [updated,setUpdated]=useState(0)
    const {
      avatar_url,
      login,
      language,
   
    } = props;
    // const { full_name, forks, updated_at, visibility, description ,topics} = props;
    

    // useEffect(() => {
    //   const birthday = new Date(updated_at);

    //   setUpdated(birthday.getMinutes());
    // }, [updated_at]);
    
  
  return (
    <>
    <div className={styles.container}>
      <div className={styles.profile}>
        <div>
          <img className={styles.profilepic} src={avatar_url} alt={login} />
        </div>

        <div>
          <p>{login}</p>
         
        </div>
      </div>
      </div>
    </>
  );
}
