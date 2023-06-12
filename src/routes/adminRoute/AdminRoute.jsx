import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'
import useAdmin from '../../hook/useAdmin';
import { Navigate, useNavigate } from 'react-router-dom';

const AdminRoute = ({children}) => {
    const {user, loading}= useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin();

    if(loading || isAdminLoading){
       return <button className="btn btn-square">
        <span className="loading loading-spinner"></span>
      </button>
    }
    if(user && isAdmin){
        return children
    }
  return <Navigate to='/' replace={true}></Navigate>
}

export default AdminRoute