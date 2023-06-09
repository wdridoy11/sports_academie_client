import React from 'react'
import { useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { AuthContext } from '../context/AuthProvider'

const Dashboard = () => {
  const {user} = useContext(AuthContext);
  return (
    <div>
        <div>
          <div className="drawer drawer-mobile ">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
            </div>
            <div className="drawer-side bg-[#EEEDED]">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80">
                    <Link className='text-base font-medium mb-3' to={'/dashboard/add_class'}>Add Class</Link>
                    <Link className='text-base font-medium mb-3' to={'/dashboard/my_class'}>my_class</Link>
                    <Link className='text-base font-medium mb-3' to={'/dashboard/Manage_user'}>Manage user</Link>
                    <div className="divider"></div> 
                    <Link className='text-base font-medium mb-3' to={'/'}>Home</Link>
                    <Link className='text-base font-medium mb-3' to={`/instructors`}>Instructors</Link>
                    <Link className='text-base font-medium mb-3' to={`/classes`}>Classes</Link>
                </ul>
            </div>
          </div>  
        </div>
    </div>
  )
}

export default Dashboard