import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile ">
        <input id="my-drawer" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content">
        <button  className="text-4xl text-center bg-gray-800 text-white">  Welcome to your Dashboard</button>
            <Outlet></Outlet>
          {/* <!-- Page content here --> */}
          
          <label for="my-drawer" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
        </div> 
        <div class="drawer-side">
        <label for="dashboard-sidebar" class="drawer-overlay"></label>
          
          <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li><Link to='/dashboard'>My Orders</Link></li>
            <li><Link to='/dashboard/addreview'>Add A Review</Link></li>
            <li><Link to='/dashboard/myprofile'>My Profile</Link></li>
            
          </ul>
        </div>
      </div>
    );
};

export default Dashboard;
