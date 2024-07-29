import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminLogout.css'

const AdminLogout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear the token from local storage
    localStorage.removeItem('token');
    // Redirect to the login page
    navigate('/admin-login');
  }, [navigate]);

  return (
    <div className='admin-logout-container'>
      <h1>Logging Out...</h1>
    </div>
  );
};

export default AdminLogout;
