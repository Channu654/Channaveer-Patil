import React from 'react';
import GithubAction from './GithubAction';



const Githubusers = (action, state) => {
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

export default Githubusers;
