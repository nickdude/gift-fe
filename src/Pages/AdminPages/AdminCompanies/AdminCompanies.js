import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './AdminCompanies.css';

const AdminCompanies = () => {
    const navigate = useNavigate();
    const [companies, setCompanies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchCompanies = async () => {
            try {
                const token = localStorage.getItem('token');
                const baseUrl = process.env.REACT_APP_BASE_URL;
                const config = {
                    method: 'get',
                    url: `${baseUrl}/api/company`,
                    headers: { 
                        'Authorization': `Bearer ${token}`
                    }
                };

                const response = await axios(config);
                setCompanies(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchCompanies();
    }, []);

    const deleteCompany = async (companyId) => {
        try {
            const token = localStorage.getItem('token');
            const baseUrl = process.env.REACT_APP_BASE_URL;
            const config = {
                method: 'delete',
                url: `${baseUrl}/api/company/${companyId}`,
                headers: { 
                    'Authorization': `Bearer ${token}`
                }
            };

            await axios(config);
            setCompanies(companies.filter(company => company._id !== companyId));
        } catch (error) {
            console.log(error);
        }
    };

    const editCompany = (companyId) => {
        navigate(`/edit-companies/${companyId}`);
    };

    const addCompany = () => {
        navigate('/add-companies');
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredCompanies = companies.filter(company =>
        company.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className='admin-companies-container'>
            <div className='admin-companies-header'>
                <div className='admin-companies-header-left'>
                    <p>All Companies</p>
                    <button onClick={addCompany}>Add New</button>
                </div>
                <div className='admin-companies-header-right'>
                    <input
                        type='text'
                        placeholder='Search...'
                        value={searchTerm}
                        onChange={handleSearchChange}
                        className='admin-search-input'
                    />
                    <button className='admin-search-button'>
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                </div>
            </div>
            <div className='admin-companies-table-container'>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th style={{"textAlign":"end"}}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredCompanies.map(company => (
                            <tr key={company._id}>
                                <td className='comp-img'>{company.name}</td>
                                <td className='comp-name'>{company.email}</td>
                                <td className='comp-action'>
                                    <i className="fa-solid fa-trash" onClick={() => deleteCompany(company._id)}></i>
                                    <i className="fa-solid fa-pen" onClick={() => editCompany(company._id)}></i>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminCompanies;
