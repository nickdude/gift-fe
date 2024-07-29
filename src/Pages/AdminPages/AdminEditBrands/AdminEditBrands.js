import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AdminEditBrands.css';
import { useNavigate, useParams } from 'react-router-dom';

const AdminEditBrands = () => {
  const { id } = useParams();
  const [brandData, setBrandData] = useState({
    name: '',
    image: null,
  });
  const [imagePreview, setImagePreview] = useState(null);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBrandData = async () => {
      try {
        const token = localStorage.getItem('token');
        const baseUrl = process.env.REACT_APP_BASE_URL;
        const config = {
          method: 'get',
          url: `${baseUrl}/api/brand/${id}`,
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        };

        const response = await axios(config);
        setBrandData({
          name: response.data.name,
          image: response.data.image,
        });
        setImagePreview(response.data.image);
      } catch (error) {
        console.error('Error fetching brand data:', error);
      }
    };

    fetchBrandData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBrandData({
      ...brandData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setBrandData({
      ...brandData,
      image: file,
    });

    // Preview the image
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const validate = () => {
    let tempErrors = {};
    tempErrors.name = brandData.name ? '' : 'This field is required.';
    tempErrors.image = brandData.image ? '' : 'This field is required.';
    setErrors(tempErrors);
    return Object.values(tempErrors).every((x) => x === '');
  };

  const handleSave = async () => {
    if (validate()) {
      try {
        const formData = new FormData();
        formData.append('name', brandData.name);
        formData.append('image', brandData.image);

        const token = localStorage.getItem('token');
        const baseUrl = process.env.REACT_APP_BASE_URL;

        const config = {
          method: 'put',
          url: `${baseUrl}/api/brand/${id}`,
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
          data: formData,
        };

        const response = await axios(config);
        navigate('/brands');
      } catch (error) {
        console.error('Error updating brand:', error);
      }
    }
  };

  const handleCancel = () => {
    navigate('/brands');
  };

  return (
    <div className='admin-add-container'>
      <label>Brand Name</label>
      <input type='text' name='name' value={brandData.name} onChange={handleChange} />
      {errors.name && <span className='error'>{errors.name}</span>}

      <label>Brand Image</label>
      <input type='file' name='image' onChange={handleFileChange} />
      {errors.image && <span className='error'>{errors.image}</span>}

      {imagePreview && (
        <img src={imagePreview} alt='Preview' style={{ maxWidth: '200px', maxHeight: '200px' }} />
      )}

      <div className='admin-add-product-buttons'>
        <button className='save' onClick={handleSave}>Save</button>
        <button className='delete' onClick={handleCancel}>Cancel</button>
      </div>
    </div>
  );
};

export default AdminEditBrands;
