// working on dtat we just retriving data error loading
import React from 'react';
import { useEffect, useReducer } from 'react';
import axios from 'axios';

// initial state
const initialstate = {
  loading: true,
  error: false,
  data: null,
};

//action
const GithubAction = {
  success: 'success',
  fetch: 'fetch',
  failure: 'failure',
};

// reducer
const Githubreducer = (action, state) => {
  switch (action.type) {
    case GithubAction.fetch: {
      return {
        ...state,
        loading: true,
        error: false,
        data: null,
      };
    }
    case GithubAction.success: {
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload,
      };
    }
    case GithubAction.failure: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    default:
      return state;
  }
};

// github

const Github = () => {
  const [{ loading, error, data }, dispatch] = useReducer(
    Githubreducer,
    initialstate
  );

  useEffect(() => {
    getdata();
  }, []);

 

  // data fetching
  const getdata = () => {
    dispatch({
      type: GithubAction.fetch,
    });

    axios({
      url: 'https://api.github.com/search/users',
      method: 'GET',
      params: {
        q: 'masai',
      },
    })
      .then((res) => {
        dispatch({
          type: GithubAction.success,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: GithubAction.failure,
        });
      });
  };

  console.log(data);

  return (
    <div>
      {loading && <div>...loading</div>}
      {error && <div>...Error</div>}
      {data?.items.map((item) => (
        <div key={item.id}>{item.login} </div>
      ))}
    </div>
  );
};

export default Github;
