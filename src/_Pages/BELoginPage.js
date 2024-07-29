import React from 'react'
import { useState } from 'react'
import Footer from '../Components/Footer/Footer'
import Nav from '../Components/Nav/Nav'
import './CSS/BELogin.css'

const BELoginPage = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
      };

  return (
    <>
    <Nav color='blue'/>
     <div className='login-container'>
        <h1>Welcome</h1>
        <p>Please register with your business email</p>
        <input type='email' placeholder='Email' className='login-container-input'/>
        <div className='password-container'>
            <input
                type={showPassword ? 'text' : 'password'}
                placeholder='Password'
                className='password'
            />
            <div className='eye-icon' onClick={togglePasswordVisibility}>
                {showPassword?
                <i className="fa-regular fa-eye-slash"></i>
                :<i className="fa-regular fa-eye"></i>}
             </div>
        </div>
        <button className='login-button'>Log In</button>
        <button className='sign-in-button'>Sign Up</button>
    </div>
    <Footer/>
    </>
  )
}

export default BELoginPage