import React, { useEffect,useState } from 'react'
import { useNavigate, NavLink } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const handleLogout = () => {
    fetch('http://localhost:4001/user/logout', {
      method: 'GET',
      credentials: 'include',
    })
    .then(() => {
      navigate('/logpage');
    })
    .catch((error) => {
      console.log('Error during logout:', error);
    });
  };
  const [sticky, setsticky] = useState(false);
  useEffect(()=>{
    const handleScroll=()=>{
       if(window.scrollY > 0) setsticky(true);
       else setsticky(false);
    }
    window.addEventListener("scroll",handleScroll);
    return()=>{
      window.removeEventListener("scroll",handleScroll);
    };
  },[]);
  return (
    <>
      <div className={` navbar lg:px-10 fixed top-0 left-0 right-0 transition-all duration-300 ease-out z-50 ${sticky?'bg-base-300 shadow-base-200 bg-gradient-to-t from-base-100 ':'bg-base-100'}`}>
    <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><a>Home</a></li>
        <li><a>Course</a></li>
        <li><a>Contant</a></li>
        <li><a>Community</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">
      <img src="/public/logo.png" alt="Logo" className='w-14 ' />
    </a>
  </div>
  <div className="navbar-center hidden lg:flex gap-5">
    <NavLink to='/' className={({ isActive }) => (isActive ? 'text-purple-700 focus:text-purple-800 font-bold' : '')}>Home</NavLink>
    <NavLink to='/course' className={({ isActive }) => (isActive ? 'text-purple-700 focus:text-purple-800 font-bold' : '')}>Course</NavLink>
    <NavLink to='/contact' className={({ isActive }) => (isActive ? 'text-purple-700 focus:text-purple-800 font-bold' : '')}>Contant</NavLink>
    <NavLink to='/Community' className={({ isActive }) => (isActive ? 'text-purple-700 focus:text-purple-800 font-bold' : '')}>Community</NavLink>
  </div>
  <div className="navbar-end space-x-2">
  <input type="text" placeholder="Search" className="input input-bordered focus:outline-0  max-w-xs w-28 lg:w-40" />
    <button onClick={handleLogout} className="btn bg-purple-800">Login</button>
  </div>
</div>
    </>
  )
}

export default Navbar
