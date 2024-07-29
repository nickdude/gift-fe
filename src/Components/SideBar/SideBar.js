import React from 'react';
import { Link } from 'react-router-dom';
import './SideBar.css';

const SideBar = () => {
  return (
    <div className="sidebar-container">
       <h2>Menu</h2>
      <ul>
        <li><Link to="/admin-dashboard">Dashboard</Link></li>
        <li><Link to="/companies">Companies</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/categories">Categories</Link></li>
        <li><Link to="/brands">Brands</Link></li>
        <li><Link to="/orders">Orders</Link></li>
        <li><Link to="/admin-logout">Logout</Link></li>
      </ul> 
    </div>
  );
};

export default SideBar;
