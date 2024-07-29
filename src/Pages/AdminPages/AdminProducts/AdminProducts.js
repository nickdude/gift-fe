import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './AdminProducts.css';

const AdminProducts = () => {
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const token = localStorage.getItem('token');
                const baseUrl = process.env.REACT_APP_BASE_URL;

                const config = {
                    method: 'get',
                    url: `${baseUrl}/api/product`,
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    },
                };

                const response = await axios(config);
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    const addProduct = () => {
        navigate('/add-product');
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className='admin-products-container'>
            <div className='admin-product-header'>
                <div className='admin-product-header-left'>
                    <p>All Products</p>
                    <button onClick={addProduct}>Add New</button>
                </div>
                <div className='admin-product-header-right'>
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
            <div className='admin-product-table-container'>
                <table>
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>SKU</th>
                            <th>Stock</th>
                            <th>Price</th>
                            <th>Category</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredProducts.map(product => (
                            <tr key={product?.id}>
                                <td><img src={product?.image || '/assets/product.svg'} alt={product?.name} /></td>
                                <td>{product?.name}</td>
                                <td>{product?.sku}</td>
                                <td>{product?.stock}</td>
                                <td>₹{product?.standardPrice}</td>
                                <td>{product?.category?.name}</td>
                                <td>
                                    <i className="fa-solid fa-trash"></i>
                                    <i className="fa-solid fa-pen"></i>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminProducts;
