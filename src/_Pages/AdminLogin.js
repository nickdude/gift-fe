// import React, {useState} from 'react'
// import axios from 'axios'
// import { useNavigate } from 'react-router-dom';
// import { jwtDecode } from "jwt-decode";

// const AdminLogin = () => {

//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [showPassword, setShowPassword] = useState(false);
//     const navigate = useNavigate()
    
//     const baseUrl = process.env.REACT_APP_BASE_URL;
  
//     const togglePasswordVisibility = () => {
//         setShowPassword(!showPassword);
//       };

//       const handleSubmit = async (e) => {
//         e.preventDefault();
//         const data = JSON.stringify({
//           email: email,
//           password: password,
//         });
    
//         const config = {
//             method: 'post',
//             url: `${baseUrl}/api/admin/login`,
//             headers: { 
//             'Content-Type': 'application/json',
//             },
//             data: data,
//         };

//         try {
//             const response = await axios(config);
//             const token = response.data.token; 
//             localStorage.setItem('token', token);
          
//             const decodedToken = jwtDecode(token);
//             const userRole = decodedToken.role;
      
//             if (userRole === 'admin') {
//               navigate('/admin-dashboard');
//             } else {
//               console.log('Not authorized');
//             }
//         } catch (error) {
//             console.log(error);
//         }
//     };

//   return (
//     <div className='login-container'>
//         <h1>Welcome</h1>
//         <p>Admin Login</p>
//             <input 
//                 type='email' 
//                 placeholder='Email' 
//                 className='login-container-input'
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//                 />
//         <div className='password-container'>
//             <input
//                 type={showPassword ? 'text' : 'password'}
//                 placeholder='Password'
//                 className='password'
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//             />
//             <div className='eye-icon' onClick={togglePasswordVisibility}>
//                 {showPassword?
//                 <i className="fa-regular fa-eye-slash"></i>
//                 :<i className="fa-regular fa-eye"></i>}
//              </div>
//         </div>
//         <button className='sign-in-button' onClick={handleSubmit}>Log In</button>
//     </div>
//   )
// }

// export default AdminLogin