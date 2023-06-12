import React, { useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'
import { Navigate } from 'react-router-dom';

const PrivetRoute = ({children}) => {

    const {user, loading} = useState(AuthContext);
    if(loading){
        return <button className="btn btn-square">
        <span className="loading loading-spinner"></span>
      </button>
    }
    if(user){
        return children
    }

  return <Navigate to={"/login"} replace={true}></Navigate>
}

export default PrivetRoute