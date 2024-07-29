import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './AdminCategories.css';

const AdminCategories = () => {
    const navigate = useNavigate();
    const [categories, setCategories] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const token = localStorage.getItem('token');
                const baseUrl = process.env.REACT_APP_BASE_URL;
                const config = {
                    method: 'get',
                    url: `${baseUrl}/api/category`,
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                };

                const response = await axios(config);
                setCategories(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchCategories();
    }, []);

    const addCategories = () => {
        navigate('/add-categories');
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const deleteCategory = async (id) => {
        try {
            const token = localStorage.getItem('token');
            const baseUrl = process.env.REACT_APP_BASE_URL;
            const config = {
                method: 'delete',
                url: `${baseUrl}/api/category/${id}`,
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            };

            await axios(config);
            setCategories(categories.filter(category => category._id !== id));
        } catch (error) {
            console.log(error);
        }
    };

    const editCategory = (id) => {
        navigate(`/edit-categories/${id}`);
    };

    const filteredCategories = categories.filter(category =>
        category.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className='admin-categories-container'>
            <div className='admin-categories-header'>
                <div className='admin-categories-header-left'>
                    <p>All Categories</p>
                    <button onClick={addCategories}>Add New</button>
                </div>
                <div className='admin-categories-header-right'>
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
            <div className='admin-categories-table-container'>
                <table>
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredCategories.map(category => (
                            <tr key={category._id}>
                                <td className='cat-img'><img src={category.imageUrl || '/assets/product.svg'} alt={category.name}></img></td>
                                <td className='cat-name'>{category.name}</td>
                                <td className='cat-action'>
                                    <i className="fa-solid fa-trash" onClick={() => deleteCategory(category._id)}></i>
                                    <i className="fa-solid fa-pen" onClick={() => editCategory(category._id)}></i>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminCategories;
