import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import './AdminLogin.css';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const baseUrl = process.env.REACT_APP_BASE_URL;

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        const userRole = decodedToken.role;

        if (userRole === 'admin') {
          navigate('/admin-dashboard');
        }
      } catch (error) {
        console.error('Error decoding token:', error);
      }
    }
  }, [navigate]);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      return setErrorMessage('Enter Email');
    }
    if (!password) {
      return setErrorMessage('Enter Password');
    }

    const data = JSON.stringify({
      email: email,
      password: password,
    });

    const config = {
      method: 'post',
      url: `${baseUrl}/api/admin/login`,
      headers: {
        'Content-Type': 'application/json',
      },
      data: data,
    };

    try {
      const response = await axios(config);
      const token = response.data.token;
      localStorage.setItem('token', token);

      const decodedToken = jwtDecode(token);
      const userRole = decodedToken.role;

      if (userRole === 'admin') {
        navigate('/admin-dashboard');
      } else {
        setErrorMessage('Not authorized');
      }
    } catch (error) {
      setErrorMessage('Invalid credentials or server error');
    }
  };

  return (
    <div className='admin-login-container'>
      <h1>Welcome</h1>
      <p>Admin Login</p>
      {errorMessage && <p className='error-message'>{errorMessage}</p>}
      <input
        type='email'
        placeholder='Email'
        className='admin-login-container-input'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <div className='password-container'>
        <input
          type={showPassword ? 'text' : 'password'}
          placeholder='Password'
          className='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <div className='eye-icon' onClick={togglePasswordVisibility}>
          {showPassword ? (
            <i className='fa-regular fa-eye-slash'></i>
          ) : (
            <i className='fa-regular fa-eye'></i>
          )}
        </div>
      </div>
      <button className='sign-in-button' onClick={handleSubmit}>
        Log In
      </button>
    </div>
  );
};

export default AdminLogin;
