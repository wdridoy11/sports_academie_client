import React from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { AuthContext } from '../context/AuthProvider'

const useAdmin = () => {
    const {user} = useContext(AuthContext)
    useEffect(()=>{
        fetch(`http://localhost:5000/users/admin/${user?.email}`)
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data)
        })
    },[])
  return (
    <div>useAdmin</div>
  )
}

export default useAdmin