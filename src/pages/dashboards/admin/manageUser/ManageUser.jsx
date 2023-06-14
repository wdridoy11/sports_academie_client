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
    fetch(`https://sports-academie-server.vercel.app/users`)
    .then((res)=>res.json())
    .then((data)=>{
      setUsers(data)
    })
  },[])

  // handle make admin
  const handleMakeAdmin=(user)=>{
    fetch(`https://sports-academie-server.vercel.app/users/admin/${user._id}`,{
      method:"PATCH",
    })
    .then((res)=>res.json())
    .then((data)=>{
      console.log(data)
      if(data.matchedCount>0){
        Swal.fire(
          'Congratulation!',
          `${user.name} now admit`,
          'success'
        )
      }
    })
  }

  // handle make Instructor
  const handleMakeInstructor=(user)=>{
    fetch(`https://sports-academie-server.vercel.app/users/instructor/${user._id}`,{
      method:"PATCH",
    })
    .then((res)=>res.json())
    .then((data)=>{
      if(data.matchedCount>0){
        Swal.fire(
          'Congratulation!',
          `${user.name} now instructor`,
          'success'
        )
      }
    })
  }

  // handle user delete
  const handleDeleteUser=(id)=>{
    Swal.fire({
      title: 'Are you sure?',
      text: "You will delete your user!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://sports-academie-server.vercel.app/users/${id}`,{
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
    <div className='w-full'>
      <div className="px-5">
        <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
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
                {users.map((userInfo,index)=><tr key={index}>
                      <th>{index+1}</th>
                      <td>
                        <div className="flex items-center space-x-3">
                            <div className="mask mask-squircle w-12 h-12">
                              <img className='w-12 h-12 object-cover' src={userInfo.photoURL} alt="User" />
                            </div>
                        </div>
                      </td>
                      <td className='text-base font-medium'>
                        <p>{userInfo.name}</p>
                        <p>{userInfo.email}</p>
                      </td>
                      <td>
                       {userInfo.role === "admin" ? "admin":<>
                          <button onClick={()=>handleMakeAdmin(userInfo)} className='bg-[#05F3FF] p-3 mr-2 rounded-md' title='Admin'>
                              <FaUserShield className='text-xl'></FaUserShield>
                          </button>
                       </>
                         }
                       {userInfo.role === "instructor" ? "instructor":<>
                          <button onClick={()=>handleMakeInstructor(userInfo)} className='bg-[#05F3FF] p-3 ml-2 rounded-md' title='Instructor '>
                              <FaUsers className='text-xl'></FaUsers>
                          </button>
                       </>
                         }
                      </td>
                      <th>
                         <button onClick={()=>handleDeleteUser(userInfo._id)} className='bg-red-600 p-3 ml-1 rounded-md'>
                           <FaTrash className='text-lg text-white'></FaTrash>
                         </button>
                      </th>
                  </tr>
                  )}
              </tbody>
              </table>
          </div>
      </div>
    </div>
  )
}

export default ManageUser