import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile drawer-side">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
        <button  className="text-4xl text-center bg-gray-800 text-white">  Welcome to your Dashboard</button>
            <Outlet></Outlet>
          {/* <!-- Page content here --> */}
          
          <label for="my-drawer" className="btn btn-primary drawer-button    lg:hidden">Open Dashboard</label>
        </div> 
        <div className="drawer-side ">
        <label for="my-drawer" className="drawer-overlay" ></label>
          
          <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li><Link to='/dashboard'>My Orders</Link></li>
            <li><Link to='/dashboard/addreview'>Add A Review</Link></li>
            <li><Link to='/dashboard/myprofile'>My Profile</Link></li>
            <li><Link to='/dashboard/allusers'>All User</Link></li>
            
          </ul>
        </div>
      </div>
    );
};

export default Dashboard;
