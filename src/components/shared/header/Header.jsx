import React, { useContext } from 'react'
import { Link } from 'react-router-dom/dist'
import logo from '../../../assets/logo.png'
import { AuthContext } from '../../../context/AuthProvider';

const Header = () => {  
  const {user, logOut} = useContext(AuthContext)
  // landle logout
  const handleUserLogOut =()=>{
    logOut()
    .then((res)=>{
      const user = res.user;
      console.log(user)
    })
    .catch((err)=>{
      console.log(err.message)
    })
  }
  
  const navMenu =<>
  <li><Link className='text-base font-medium' to={`/`}>Home</Link></li>
  <li><Link className='text-base font-medium' to={`/instructors`}>Instructors</Link></li>
  <li><Link className='text-base font-medium' to={`/classes`}>Classes</Link></li>
  <li>{user && <Link className='text-base font-medium' to={`/dashboard`}>Dashboard</Link>}</li>
  <li>
      {user && 
          <div className="tooltip" data-tip={`${user?.displayName}`}>
                <img className='w-10 h-10 rounded-full cursor-pointer border border-white' src={user?.photoURL} alt="" />
          </div>
      }
  </li>
  <li>
      {
        user ? <Link className='text-base font-medium bg-[#05F3FF] rounded-full inline-block px-5' onClick={handleUserLogOut}>LogOut</Link>:
        <Link className='text-base font-medium bg-[#05F3FF] rounded-full inline-block px-5' to={`/login`}>Login</Link>
      }
  </li>

</>

  return (
    <div>
      <div className="navbar fixed z-10 bg-opacity-60 bg-base-100 text-black px-10">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                {navMenu}
            </ul>
          </div>
          <Link className='text-center'>
              <img className='w-14 block mx-auto' src={logo} alt="Logo" />
              <h3 className='text-xl font-semibold'>Sports academies</h3>
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
                {navMenu}
            </ul>
        </div>
      </div>
  </div>
  )
}

export default Header