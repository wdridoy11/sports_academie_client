import React from 'react'
import AddClass from '../pages/dashboards/instructor/addClass/AddClass'
import { Link, Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>
        <div>
          {/* <AddClass></AddClass> */}
          <div className="drawer drawer-mobile ">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side bg-[#EEEDED]">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80">
                    <Link className='text-lg font-medium mb-3' to={'/dashboard/add_class'}>Add Class</Link>
                    <Link className='text-lg font-medium' to={'/dashboard/my_class'}>my_class</Link>
                </ul>
            </div>
        </div>  
        </div>
    </div>
  )
}

export default Dashboard