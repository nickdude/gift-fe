import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './AdminBrands.css';

const AdminBrands = () => {
  const [brands, setBrands] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const token = localStorage.getItem('token');
        const baseUrl = process.env.REACT_APP_BASE_URL;

        const config = {
          method: 'get',
          url: `${baseUrl}/api/brand`,
          headers: {
            'Authorization': `Bearer ${token}`,
          }
        };

        const response = await axios(config);
        setBrands(response.data);
      } catch (error) {
        console.error('Error fetching brands:', error);
      }
    };

    fetchBrands();
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredBrands = brands.filter(brand =>
    brand.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const addBrand = () => {
    navigate('/add-brand');
  };

  const editBrand = (id) => {
    navigate(`/edit-brand/${id}`);
  };

  const deleteBrand = async (id) => {
    try {
      const token = localStorage.getItem('token');
      const baseUrl = process.env.REACT_APP_BASE_URL;

      const config = {
        method: 'delete',
        url: `${baseUrl}/api/brand/${id}`,
        headers: {
          'Authorization': `Bearer ${token}`,
        }
      };

      await axios(config);
      setBrands(brands.filter(brand => brand._id !== id));
    } catch (error) {
      console.error('Error deleting brand:', error);
    }
  };

  return (
    <div className='admin-brands-container'>
      <div className='admin-brands-header'>
        <div className='admin-brands-header-left'>
          <p>All Brands</p>
          <button onClick={addBrand}>Add New</button>
        </div>
        <div className='admin-brands-header-right'>
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
      <div className='admin-brands-table-container'>
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredBrands.map(brand => (
              <tr key={brand?._id}>
                <td className='brand-img'>
                  <img src={brand?.imageURL || '/assets/product.svg'} alt={brand?.name} />
                </td>
                <td className='brand-name'>{brand?.name}</td>
                <td className='brand-action'>
                  <i className="fa-solid fa-pen" onClick={() => editBrand(brand?._id)}></i>
                  <i className="fa-solid fa-trash" onClick={() => deleteBrand(brand?._id)}></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminBrands;
