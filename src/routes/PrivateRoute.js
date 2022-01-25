import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/auth';

const PrivateRoute = ({component: Component}) => {
const {isAuth} = useContext(AuthContext)
  return(
        isAuth ? (
            <Component/>
        ) : (
            <Navigate to="/" />
        )        
  ) 
}

export default PrivateRoute;
