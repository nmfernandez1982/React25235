import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import { Children } from 'react';


const PrivateRoute =({children}) =>{
    const {token} =useAuth();
    return token ? children : <Navigate to ="/login"/>
};


export default PrivateRoute;