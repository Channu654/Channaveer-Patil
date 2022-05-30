import { Children } from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  if (isAuth) {
    return Children;
  }
  return <Navigate to='/Login' />;
};

export default PrivateRoute;
