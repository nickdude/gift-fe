import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AdminAddProduct.css';

const AdminAddProduct = () => {
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [companies, setCompanies] = useState([]);

  const fetchCategories = async () => {
    const token = localStorage.getItem('token');
    const baseUrl = process.env.REACT_APP_BASE_URL;

    try {
      const response = await axios.get(`${baseUrl}/api/category`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setCategories(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchBrands = async () => {
    const token = localStorage.getItem('token');
    const baseUrl = process.env.REACT_APP_BASE_URL;

    try {
      const response = await axios.get(`${baseUrl}/api/brand`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setBrands(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchCompanies = async () => {
    const token = localStorage.getItem('token');
    const baseUrl = process.env.REACT_APP_BASE_URL;

    try {
      const response = await axios.get(`${baseUrl}/api/company`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setCompanies(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCategories();
    fetchBrands();
    fetchCompanies();
  }, []);

  return (
    <div className='admin-add-product-container'>
      <div className='admin-add-product-header'>
        <p>Puma Mens Shoes X800</p>
        <button>Save</button>
      </div>
      <div className='admin-add-product-summary'>
        <div className='admin-add-product-summary-left'>
          <img src='/assets/product.svg' alt='Product' />
          <div className='admin-add-product-small'>
            <img src='/assets/product.svg' alt='Product' />
            <img src='/assets/product.svg' alt='Product' />
            <img src='/assets/product.svg' alt='Product' />
          </div>
        </div>
        <div className='admin-add-product-summary-right'>
          <input type='text' placeholder='Product Name' />
          <textarea placeholder='Product Description'></textarea>
        </div>
      </div>
      <div className='admin-add-product-selection'>
        <select>
          <option>Categories</option>
          {categories.map(category => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
        <select>
          <option>Brands</option>
          {brands.map(brand => (
            <option key={brand.id} value={brand.id}>
              {brand.name}
            </option>
          ))}
        </select>
        <input type='text' placeholder='SKU' />
        <label>PRICE</label>
        <input type='text' placeholder='Price' />
        <label>SKU</label>
        <input type='text' placeholder='Stock' />
        <label>STOCK</label>
      </div>
      <div className='admin-add-product-company-price'>
        <div className='admin-add-product-company-price-upper'>
          <button>Add Company +</button>
        </div>
        <div className='admin-add-product-company-price-lower'>
          <select>
            <option>Company</option>
            {companies.map(company => (
              <option key={company.id} value={company.id}>
                {company.name}
              </option>
            ))}
          </select>
          <input type='text' placeholder='Company Price' />
          <label>PRICE</label>
        </div>
      </div>
      <div className='admin-add-product-discription'>
              <textarea placeholder='Description...'/>
      </div>
      <div className='admin-add-product-buttons'>
        <button className='save'>Save</button>
        <button className='delete'>Delete</button>
      </div>
    </div>
  );
};

export default AdminAddProduct;