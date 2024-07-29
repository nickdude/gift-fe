import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './EditCompany.css';
import { useNavigate, useParams } from 'react-router-dom';

const EditCompany = () => {
  const [companyDetails, setCompanyDetails] = useState({
    name: '',
    address: '',
    email: '',
    contact: '',
    companyExtension: ''
  });
  const navigate = useNavigate();
  const { id } = useParams();

  const baseUrl = process.env.REACT_APP_BASE_URL;
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchCompanyDetails = async () => {
      try {
        const config = {
          method: 'get',
          url: `${baseUrl}/api/company/${id}`,
          headers: {
            'Authorization': `Bearer ${token}`
          }
        };
        const response = await axios(config);
        setCompanyDetails(response.data);
      } catch (error) {
        console.error('Error fetching company details:', error);
      }
    };

    fetchCompanyDetails();
  }, [id, baseUrl, token]);

  const handleCompanySubmit = async (e) => {
    e.preventDefault();

    try {
      const config = {
        method: 'put',
        url: `${baseUrl}/api/company/${id}`,
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        data: companyDetails
      };
      const response = await axios(config);
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
        <button type="submit">Update Company</button>
      </form>
    </div>
  );
};

export default EditCompany;
