import { Children } from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
 
  return <Navigate to='/Login' />;
};

export default PrivateRoute;
