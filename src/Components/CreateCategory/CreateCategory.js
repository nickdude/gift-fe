import React, { useState } from 'react';
import './CreateCategory.css'
import axios from 'axios';

const CreateCategory = ({cancelCategories, setAddCategory}) => {
  const [name, setName] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const formData = new FormData();
      formData.append('name', name);
      formData.append('image', image);

      const config = {
        method: 'post',
        url: 'http://localhost:5000/api/category',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'multipart/form-data'
        },
        data: formData
      };

      const response = await axios(config);
      setAddCategory(false)

    } catch (error) {
      console.error('Error creating category:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='create-category-container'>
      <input type="text" placeholder="Category Name" value={name} onChange={(e) => setName(e.target.value)} required />
      <input type="file" onChange={(e) => setImage(e.target.files[0])} required />
      <button type="submit">Create Category</button>
      <button onClick={cancelCategories}>Cancel</button>
    </form>
  );
};

export default CreateCategory;
