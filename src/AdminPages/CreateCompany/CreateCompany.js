import React, { useState } from 'react';
import axios from 'axios';
import './CreateCompany.css';
import { useNavigate } from 'react-router-dom';

const CreateCompany = () => {
  const [companyDetails, setCompanyDetails] = useState({
    name: '',
    address: '',
    email: '',
    contact: '',
    companyExtension: ''
  });
  const navigate = useNavigate();

  const baseUrl = process.env.REACT_APP_BASE_URL;
  const token = localStorage.getItem('token');

  const handleCompanySubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${baseUrl}/api/company`, companyDetails, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      navigate('/companies');
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="company-form-container">
      <form className="company-form" onSubmit={handleCompanySubmit}>
        <label>Name:
          <input
            type="text"
            value={companyDetails.name}
            onChange={e => setCompanyDetails({ ...companyDetails, name: e.target.value })}
          />
        </label>
        <label>Address:
          <input
            type="text"
            value={companyDetails.address}
            onChange={e => setCompanyDetails({ ...companyDetails, address: e.target.value })}
          />
        </label>
        <label>Email:
          <input
            type="email"
            value={companyDetails.email}
            onChange={e => setCompanyDetails({ ...companyDetails, email: e.target.value })}
          />
        </label>
        <label>Contact:
          <input
            type="text"
            value={companyDetails.contact}
            onChange={e => setCompanyDetails({ ...companyDetails, contact: e.target.value })}
          />
        </label>
        <label>Company Extension:
          <input
            type="text"
            value={companyDetails.companyExtension}
            onChange={e => setCompanyDetails({ ...companyDetails, companyExtension: e.target.value })}
          />
        </label>
        <button type="submit">Create Company</button>
      </form>
    </div>
  );
};

export default CreateCompany;
