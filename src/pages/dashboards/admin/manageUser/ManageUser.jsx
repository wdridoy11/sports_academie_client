import React, { useContext } from 'react'
import { useEffect, useState } from 'react';
import { FaTrash, FaUserShield, FaUsers } from 'react-icons/fa'
import { AuthContext } from '../../../../context/AuthProvider'
import Swal from 'sweetalert2';

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

  const handleDeleteToy=(id)=>{
    Swal.fire({
      title: 'Are you sure?',
      text: "You will delete your toy!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/users/${id}`,{
          method:"DELETE",
          headers:{
            "content-type":"application/json"
          }
        })
        .then((res)=>res.json())
        .then((data)=>{
          if(data.deletedCount>0){
            Swal.fire("Deleted!", "User deleted successfully", "success");
          }
          const remaining = users.filter((user)=>user._id !== id);
          setUsers(remaining);
        })
      }
    })
  }



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
                  <th>Info</th>
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
                         <button onClick={()=>handleDeleteToy(userInfo._id)} className='bg-red-600 p-3 ml-1 rounded-md'>
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