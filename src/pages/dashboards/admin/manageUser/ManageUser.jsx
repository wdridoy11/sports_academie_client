import React, { useContext } from 'react'
import { AuthContext } from '../../../../context/AuthProvider'
import { FaTrash } from 'react-icons/fa'

const ManageUser = () => {
  const {user} = useContext(AuthContext)
  return (
    <div>
      <div>
        <div className="overflow-x-auto">
            <table className="table">
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
              <tr>
                 <th>1</th>
                 <td>
                   <div className="flex items-center space-x-3">
                     <div className="avatar">
                       <div className="mask mask-squircle w-12 h-12">
                         <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                       </div>
                     </div>
                   </div>
                 </td>
                 <td>Ridoy Sharif</td>
                 <td>
                  {user.role === "admin" ? "admin":
                    <button>
                      <FaTrash className='text-lg'></FaTrash>
                    </button>
                  }
                 </td>
                 <th>
                   <button className="btn btn-ghost btn-xs">details</button>
                 </th>
              </tr>
              </tbody>
              </table>
          </div>
      </div>
    </div>
  )
}

export default ManageUser