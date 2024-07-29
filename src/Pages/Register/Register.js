import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import './Register.css'
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
      };
    
    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    const handleRegister = async () => {
        if (password !== confirmPassword) {
          alert('Passwords do not match');
          return;
        }
    
        const data = {
          username,
          email,
          password
        };
    
        try {
          const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/api/user/register`, data, {
            headers: {
              'Content-Type': 'application/json'
            }
          });
          
          navigate('/')
        } catch (error) {
          console.error(error);
          alert('Registration failed');
        }
      };
    
  return (
    <>
     <div className='register-container'>
        <h1>Welcome</h1>
        <p>Please register with your email</p>
         <input type='text' 
                placeholder='Username' 
                className='register-container-input' 
                value={username}
                onChange={(e) => setUsername(e.target.value)}/>
         <input type='email' 
                placeholder='Email' 
                className='register-container-input'
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
        <div className='password-container'>
            <input
                type={showConfirmPassword ? 'text' : 'password'}
                placeholder='Re-enter Password'
                className='password'
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}    
            />
            <div className='eye-icon' onClick={toggleConfirmPasswordVisibility}>
                {showConfirmPassword?
                <i className="fa-regular fa-eye-slash"></i>
                :<i className="fa-regular fa-eye"></i>}
             </div>
        </div>
        
       
        <button className='sign-in-button' onClick={handleRegister}>Sign Up</button>
        <button className='login-button' onClick={()=>navigate('/login')}>Log In</button>
    </div>
    </>
  )
}

export default Register