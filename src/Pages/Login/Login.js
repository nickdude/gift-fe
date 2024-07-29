import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css'

const Login = () => {
    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
      };

    const handleLogin = async () => {
        const data = {
          email,
          password
        };
    
        try {
          const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/api/user/login`, data, {
            headers: {
              'Content-Type': 'application/json'
            }
          });
          
          const token = response.data.token;
          localStorage.setItem('token', token);
          
          navigate('/');
        } catch (error) {
          console.error(error);
          alert('Login failed');
        }
    };

  return (
    <>
     <div className='login-container'>
        <h1>Welcome</h1>
        <p>Please register with your business email</p>
        <input type='email' 
               placeholder='Email' 
               className='login-container-input'
               value={email}
               onChange={(e) => setEmail(e.target.value)}
               />
        <div className='password-container'>
            <input
                type={showPassword ? 'text' : 'password'}
                placeholder='Password'
                className='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <div className='eye-icon' onClick={togglePasswordVisibility}>
                {showPassword?
                <i className="fa-regular fa-eye-slash"></i>
                :<i className="fa-regular fa-eye"></i>}
             </div>
        </div>
        <button className='login-button' onClick={handleLogin}>Log In</button>
        <button className='sign-in-button' onClick={()=>navigate('/register')}>Sign Up</button>
    </div>
    </>
  )
}

export default Login