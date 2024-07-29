import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import './AdminEditCompanies.css';

const AdminEditCompanies = () => {
    const navigate = useNavigate();
    const { id } = useParams(); // Assuming you are passing the company ID as a URL parameter
    const [companyData, setCompanyData] = useState({
        name: '',
        email: '',
        address: '',
        contact: '',
        companyExtension: 'company'
    });

    useEffect(() => {
        const fetchCompanyData = async () => {
            try {
                const token = localStorage.getItem('token');
                const baseUrl = process.env.REACT_APP_BASE_URL;
                const config = {
                    method: 'get',
                    url: `${baseUrl}/api/company/${id}`,
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                };

                const response = await axios(config);
                setCompanyData(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchCompanyData();
    }, [id]);

    const handleChange = (e) => {
        setCompanyData({
            ...companyData,
            [e.target.name]: e.target.value
        });
    };

    const handleSave = async () => {
        try {
            const token = localStorage.getItem('token');
            const baseUrl = process.env.REACT_APP_BASE_URL;
            const config = {
                method: 'put',
                url: `${baseUrl}/api/company/${id}`,
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                data: JSON.stringify(companyData)
            };

            const response = await axios(config);
            console.log(JSON.stringify(response.data));
            navigate('/companies'); 
        } catch (error) {
            console.log(error);
        }
    };

    const handleCancel = () => {
        navigate('/companies'); 
    };

    return (
        <div className='edit-company-container'>
            <label>Company Name</label>
            <input
                type="text"
                name="name"
                value={companyData.name}
                onChange={handleChange}
            />
            <label>Email ID:</label>
            <input
                type="text"
                name="email"
                value={companyData.email}
                onChange={handleChange}
            />
            <label>Address</label>
            <input
                type="text"
                name="address"
                value={companyData.address}
                onChange={handleChange}
            />
            <label>Contact Number</label>
            <input
                type="text"
                name="contact"
                value={companyData.contact}
                onChange={handleChange}
            />
            <label>Company Extension</label>
            <input
                type="text"
                name="companyExtension"
                value={companyData.companyExtension}
                onChange={handleChange}
            />
            <div className='edit-company-buttons'>
                <button className='save' onClick={handleSave}>Save</button>
                <button className='cancel' onClick={handleCancel}>Cancel</button>
            </div>
        </div>
    );
};

export default AdminEditCompanies;
