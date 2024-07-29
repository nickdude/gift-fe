import React, { useState } from 'react';
import axios from 'axios';
import './AdminAddCompanies.css';
import { useNavigate } from 'react-router-dom';

const AdminAddCompanies = () => {
  const [companyData, setCompanyData] = useState({
    name: '',
    email: '',
    address: '',
    contact: '',
    companyExtension: 'company'
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate()

  const handleChange = (e) => {
    setCompanyData({
      ...companyData,
      [e.target.name]: e.target.value
    });
  };

  const validate = () => {
    let tempErrors = {};
    tempErrors.name = companyData.name ? "" : "This field is required.";
    tempErrors.email = companyData.email ? "" : "This field is required.";
    if (companyData.email) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      tempErrors.email = emailPattern.test(companyData.email) ? "" : "Email is not valid.";
    }
    tempErrors.address = companyData.address ? "" : "This field is required.";
    tempErrors.contact = companyData.contact ? "" : "This field is required.";
    if (companyData.contact) {
      const contactPattern = /^[0-9]{10}$/;
      tempErrors.contact = contactPattern.test(companyData.contact) ? "" : "Contact number is not valid.";
    }
    setErrors(tempErrors);
    return Object.values(tempErrors).every(x => x === "");
  };

  const handleSave = async () => {
    if (validate()) {
      try {
        const token = localStorage.getItem('token');
        const baseUrl = process.env.REACT_APP_BASE_URL;

        const config = {
          method: 'post',
          url: `${baseUrl}/api/company`,
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
          data: JSON.stringify(companyData)
        };

        const response = await axios(config);
        navigate('/companies')
      } catch (error) {
        console.log(error);
      }
    }
  };

  const cancel =()=>{
    navigate('/companies')
  }

  return (
    <div className='add-company-container'>
      <label>Company Name</label>
      <input type="text" name="name" value={companyData.name} onChange={handleChange} />
      {errors.name && <span className='error'>{errors.name}</span>}

      <label>Email ID:</label>
      <input type="text" name="email" value={companyData.email} onChange={handleChange} />
      {errors.email && <span className='error'>{errors.email}</span>}

      <label>Address</label>
      <input type="text" name="address" value={companyData.address} onChange={handleChange} />
      {errors.address && <span className='error'>{errors.address}</span>}

      <label>Contact Number</label>
      <input type="text" name="contact" value={companyData.contact} onChange={handleChange} />
      {errors.contact && <span className='error'>{errors.contact}</span>}

      <label>Company Extension</label>
      <input type="text" name="companyExtension" value={companyData.companyExtension} onChange={handleChange} />

      <div className='add-company-buttons'>
        <button className='save' onClick={handleSave}>Save</button>
        <button className='delete' onClick={cancel}>Cancel</button>
      </div>
    </div>
  );
};

export default AdminAddCompanies;
