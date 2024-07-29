import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import './EditBrand.css'

const EditBrand = () => {
    const [name, setName] = useState('');
    const [image, setImage] = useState(null);
    const [brand,setBrand] = useState({})
    const {id} = useParams()
    const navigate = useNavigate()

    const baseUrl = process.env.REACT_APP_BASE_URL;

    useEffect(() => {
        const fetchCategories = async () => {
            try {
              const token = localStorage.getItem('token');
              const config = {
                method: 'get',
                url: `${baseUrl}/api/brand/${id}`,
                headers: {
                  'Authorization': `Bearer ${token}`
                }
              };
              const response = await axios(config);
              setBrand(response.data);
              setImage(brand.image)
              setName(brand.name)

            } catch (error) {
              console.error('Error fetching categories:', error);
            }
          };
      
          fetchCategories();
        },[id])

    const handleSubmit =async(e)=>{
        e.preventDefault();
        try {
          const token = localStorage.getItem('token');
          const formData = new FormData();
          formData.append('name', name);
          formData.append('image', image);
    
          const config = {
            method: 'put',
            url: `${baseUrl}/api/brand/${id}`,
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'multipart/form-data'
            },
            data: formData
          };
    
          const response = await axios(config);
          navigate('/brands')
        } catch (error) {
          console.error('Error creating category:', error);
        }
    }
  
  return (
    <div className='edit-create-cate-container'>
        <div className='edit-field-container'>
            <input type="text" placeholder="Brand Name" value={name} onChange={(e) => setName(e.target.value)} required />
            <input type="file" onChange={(e) => setImage(e.target.files[0])} required />
        </div>
        <div className='edit-create-cat-button-container'>
            <button type="submit" onClick={handleSubmit}>Edit Brand</button>
            <button onClick={()=>navigate('/brands')}>Cancel</button> 
        </div>
    </div>
  )
}

export default EditBrand