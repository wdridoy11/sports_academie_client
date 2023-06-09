import React, { useContext } from 'react'
import { FaTrash, FaUserShield, FaUsers } from 'react-icons/fa'
import { useEffect, useState } from 'react';
import { AuthContext } from '../../../../context/AuthProvider'

const ManageUser = () => {

  const {user} = useContext(AuthContext);
  const [users, setUsers] = useState([]);
  // manage user data get
  useEffect(()=>{
    fetch(`http://localhost:5000/users`)
    .then((res)=>res.json())
    .then((data)=>{
      setUsers(data)
    })
  },[])

  return (
    <div className="w-full px-5">
      <div>
        <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
              {/* head */}
              <thead>
                <tr>
                  <th>#</th>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Roll</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((userInfo,index)=><>
                  <tr>
                      <th>{index+1}</th>
                      <td>
                        <div className="flex items-center space-x-3">
                            <div className="mask mask-squircle w-12 h-12">
                              <img src={userInfo.photoURL} alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                      </td>
                      <td className='text-base font-medium'>
                        <p>{userInfo.name}</p>
                        <p>{userInfo.email}</p>
                      </td>
                      <td>
                       {user.role === "admin" ? "admin":<>
                          <button className='bg-[#05F3FF] p-3 ml-1 rounded-md'>
                              <FaUserShield className='text-xl'></FaUserShield>
                          </button>
                          <button className='bg-[#05F3FF] p-3 ml-1 rounded-md'>
                              <FaUsers className='text-xl'></FaUsers>
                          </button>
                       </>
                         }
                      </td>
                      <th>
                         <button className='bg-red-600 p-3 ml-1 rounded-md'>
                           <FaTrash className='text-lg text-white'></FaTrash>
                         </button>
                      </th>
                  </tr>
                </>)}
              </tbody>
              </table>
          </div>
      </div>
    </div>
  )
}

export default ManageUser