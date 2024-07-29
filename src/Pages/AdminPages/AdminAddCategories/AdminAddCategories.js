import React, { useState } from 'react';
import axios from 'axios';
import './AdminAddCategories.css';
import { useNavigate } from 'react-router-dom';

const AdminAddCategories = () => {
  const [categoryData, setCategoryData] = useState({
    name: '',
    image: null,
  });
  const [imagePreview, setImagePreview] = useState(null);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCategoryData({
      ...categoryData,
      [name]: value
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setCategoryData({
      ...categoryData,
      image: file
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
    tempErrors.name = categoryData.name ? "" : "This field is required.";
    tempErrors.image = categoryData.image ? "" : "This field is required.";
    setErrors(tempErrors);
    return Object.values(tempErrors).every(x => x === "");
  };

  const handleSave = async () => {
    if (validate()) {
      try {
        const formData = new FormData();
        formData.append('name', categoryData.name);
        formData.append('image', categoryData.image);

        const token = localStorage.getItem('token');
        const baseUrl = process.env.REACT_APP_BASE_URL;

        const config = {
          method: 'post',
          url: `${baseUrl}/api/category`,
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
          data: formData,
        };

        const response = await axios(config);
        navigate('/categories');
      } catch (error) {
        console.error('Error saving category:', error);
      }
    }
  };

  const handleCancel = () => {
    navigate('/categories');
  };

  return (
    <div className='admin-add-container'>
      <label>Category Name</label>
      <input type='text' name='name' value={categoryData.name} onChange={handleChange} />
      {errors.name && <span className='error'>{errors.name}</span>}

      <label>Category Image</label>
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

export default AdminAddCategories;
