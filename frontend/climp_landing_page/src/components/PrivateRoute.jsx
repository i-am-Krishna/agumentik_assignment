import React from 'react'
import {Navigate, useLocation} from 'react-router-dom'
const PrivateAuth = ({children}) => {
  const location = useLocation();
  const isAuth = localStorage.getItem("userId");

  if(!isAuth){
    return <Navigate to='/auth' state={{from:location}} replace/>
  }

  return children;
}
export default PrivateAuth