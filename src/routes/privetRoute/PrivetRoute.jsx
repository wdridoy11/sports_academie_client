import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider'
import { useContext } from 'react';

const PrivetRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
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