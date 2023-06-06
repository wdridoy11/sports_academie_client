import React, { useContext } from 'react'
import { Link } from 'react-router-dom/dist'

const Header = () => {  
  
  //const {user} = useContext(Authco)
  
  const navMenu =<>
  <li><Link className='text-lg font-medium' to={`/`}>Home</Link></li>
  <li><Link className='text-lg font-medium' to={`/`}>Instructors</Link></li>
  <li><Link className='text-lg font-medium' to={`/`}>Classes</Link></li>
  <li><Link className='text-lg font-medium' to={`/`}>Secret</Link></li>
</>

  return (
    <div>
      <div className="navbar fixed z-10 bg-opacity-30 bg-base-100 text-black px-10">
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
          <Link>
              <h3 className='text-3xl font-semibold'></h3>
              <p className='text-2xl font-medium'></p>
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