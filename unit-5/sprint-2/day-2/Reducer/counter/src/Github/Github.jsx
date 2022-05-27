// working on dtat we just retriving data error loading
import Githubusers from './Githubusers';
import { useEffect, useReducer } from 'react';
import GithubAction from './GithubAction';
import axios from 'axios';

const initialstate = {
  loading: true,
  error: false,
  data: null,
};

function Github() {
  const [{ loading, error, data, dispatch }] = useReducer(
    Githubusers,
    initialstate
  );
   console.log('hi');
  // data fetching
  useEffect(() => {
    dispatch({
      type: GithubAction.fetch,
    });
 
    axios({
      url: 'https://api.github.com/users',
      method: 'GET',
      params: {
        q: 'masai',
      },
    }).then((res) => {
  

      dispatch({
        type: GithubAction.success,
        payload: res.data,
      }).catch((err) => {
        dispatch({
          type: GithubAction.failure,
        });
      });
    });
  }, []);
  console.log(data);
  return (
    <div>
      {loading && <div>...loading</div>}
      {error && <div>...Error</div>}
      {data.item.map((items) => (
        

        <div key={items.id}>{items.login} </div>
      ))}
    </div>
  );
}

export default Github;
