import React from 'react'
import { FaUsers, FaCheckSquare, FaUserTie} from 'react-icons/fa';
import { AiFillFileAdd } from "react-icons/ai";
import { Link, Outlet } from 'react-router-dom'
import useAdmin from '../hook/useAdmin';
import useInstructor from '../hook/useInstructor';
import useStudent from '../hook/useStudent';

const Dashboard = () => {
// import user role
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  const [isStudent] = useStudent();
  
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
                  {isAdmin && <>
                      <Link className='text-base font-medium mb-3 flex gap-2 items-center' to={'/dashboard/manage_user'}> 
                          <FaUsers></FaUsers> Manage user
                      </Link>
                      <Link className='text-base font-medium mb-3 flex gap-2 items-center' to={'/dashboard/manage_class'}> 
                          <FaUsers></FaUsers> Manage Classes
                      </Link>
                     </>
                  }
                  {
                    isInstructor && <>
                    <Link className='text-base font-medium mb-3 flex gap-2 items-center' to={'/dashboard/add_class'}>
                       <AiFillFileAdd></AiFillFileAdd> Add Class
                    </Link>
                    <Link className='text-base font-medium mb-3 flex gap-2 items-center' to={'/dashboard/my_class'}>
                       <FaUserTie></FaUserTie> my_class
                    </Link>
                    </>
                  }
                    {
                      isStudent && <>
                        <Link className='text-base font-medium mb-3 flex gap-2 items-center' to={'/dashboard/my_selecte_class'}>
                           <FaCheckSquare></FaCheckSquare> My Selecte Class 
                        </Link>
                        <Link className='text-base font-medium mb-3 flex gap-2 items-center' to={'/dashboard/my_enroll_class'}>
                           <FaCheckSquare></FaCheckSquare> My Enroll Class
                        </Link>
                    </>
                    }
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