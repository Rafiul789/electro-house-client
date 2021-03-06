import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../assets/images/Electro House-logo1.png';
import auth from '../firebase.init';
import { signOut } from 'firebase/auth';
const Navbar = ({children}) => {

  const navigate=useNavigate()
  const [user, loading, error] = useAuthState(auth);

  const logout = () => {
    signOut(auth);
    localStorage.removeItem('token');
  };
    return (
        <div className="drawer drawer-end ">
  <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
  <div className="drawer-content flex flex-col">
   
    <div className="w-full navbar bg-gray-800 lg:px-10 py-5 ">
    <div className="flex-1 px-2 mx-2 "> <img  className="w-fit  pb-2 " src={logo} alt="logo"></img></div>

      <div className="flex-none lg:hidden   ">
        <label    htmlFor="my-drawer-3" className="btn btn-square btn-primary">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg>
        </label>
      </div> 
      
      <div className="flex-none hidden text-white  lg:block">
        <ul className="menu menu-horizontal  ">
          
          <li><NavLink className="rounded-lg"  to='/' >Home</NavLink></li>
          <li><NavLink className="rounded-lg"  to='/blog' >Blog</NavLink></li>
          <li><NavLink className="rounded-lg"  to='/myportfolio' >My Portfolio</NavLink></li>
         
          <li> {user? <NavLink className="rounded-lg"  to='/dashboard' class="btn btn-active text-white">Dashboard</NavLink>  : ''}</li>
          <li> {user?<button onClick={logout}  class="btn btn-active">Sign Out</button> :  <NavLink className="rounded-lg"   to='/login'  >Login</NavLink> }</li> 
          
        
        </ul>
      </div>
    </div>
    {children} 
   
  </div> 
  <div className="drawer-side  ">
    <label htmlFor="my-drawer-3" className="drawer-overlay"></label> 
    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100">
      
          <li><NavLink className="rounded-lg"   to='/'  >Home</NavLink></li>
          <li><NavLink className="rounded-lg"  to='/blog' >Blog</NavLink></li>
          <li><NavLink className="rounded-lg"  to='/myportfolio'  >My Portfolio</NavLink></li>
          
         <li> {user? <NavLink className="rounded-lg"  to='/dashboard' class="btn btn-active text-white">Dashboard</NavLink>  : ''}</li>
          <li> {user?<button onClick={logout}  class="btn btn-active text-white">Sign Out</button> :  <NavLink className="rounded-lg"   to='/login'  >Login</NavLink> }</li> 
          
    </ul>
    
  </div>
  

</div>
    );
};

export default Navbar;