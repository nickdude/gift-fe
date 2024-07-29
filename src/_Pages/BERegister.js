import React from 'react'
import { useState } from 'react'
import Footer from '../Components/Footer/Footer'
import Nav from '../Components/Nav/Nav'
import './CSS/BERegister.css'

const BERegister = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
      };
    
    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };
    
  return (
    <>
    <Nav color='blue'/>
     <div className='register-container'>
        <h1>Welcome</h1>
        <p>Please register with your business email</p>
        <input type='text' placeholder='Name' className='register-container-input'/>
        <input type='email' placeholder='Email' className='register-container-input'/>
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
        <div className='password-container'>
            <input
                type={showConfirmPassword ? 'text' : 'password'}
                placeholder='Re-enter Password'
                className='password'
            />
            <div className='eye-icon' onClick={toggleConfirmPasswordVisibility}>
                {showConfirmPassword?
                <i className="fa-regular fa-eye-slash"></i>
                :<i className="fa-regular fa-eye"></i>}
             </div>
        </div>
        
       
        <button className='sign-in-button'>Sign Up</button>
        <button className='login-button'>Log In</button>
    </div>
    <Footer/>
    </>
  )
}

export default BERegister