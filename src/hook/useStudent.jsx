import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

// user student check
const useStudent = () => {
    const {user} = useContext(AuthContext);
    const [axiosSecure]= useAxiosSecure();
    const {data:isStudent, isLoading:isStudentLoading}=useQuery({
        queryKey:["isStudent",user?.email],
        queryFn:async()=>{
          const res = await axiosSecure.get(`users/student/${user?.email}`)
          return res.data.admin
        }
      })
      return [isStudent, isStudentLoading]
      
}

export default useStudent