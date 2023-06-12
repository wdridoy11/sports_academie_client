import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'
import { Navigate } from 'react-router-dom'
import useInstructor from '../../hook/useInstructor'

const InstructorsRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext);
    const [isInstructor, isInstructorLoading] = useInstructor();

    if(loading || isInstructorLoading){
        return <button className="btn btn-square">
        <span className="loading loading-spinner"></span>
      </button>
    }
    if(user && isInstructor){
        return children
    }

  return <Navigate to={'/'} replace={true}></Navigate>
}

export default InstructorsRoute