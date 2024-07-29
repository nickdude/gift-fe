import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import './CreateBrand.css'

const CreateBrand = () => {
    const [name, setName] = useState('');
    const [image, setImage] = useState(null);
    const navigate = useNavigate()

    const baseUrl = process.env.REACT_APP_BASE_URL;

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const token = localStorage.getItem('token');
          const formData = new FormData();
          formData.append('name', name);
          formData.append('image', image);
    
          const config = {
            method: 'post',
            url: `${baseUrl}/api/brand`,
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
      };

  return (
    <div className='create-cate-container'>
        <div className='field-container'>
             <input type="text" placeholder="Brand Name" value={name} onChange={(e) => setName(e.target.value)} required />
             <input type="file" onChange={(e) => setImage(e.target.files[0])} required />
        </div>
        <div className='create-cat-button-container'>
             <button type="submit" onClick={handleSubmit}>Create Brand</button>
             <button onClick={()=>navigate('/brands')}>Cancel</button> 
        </div>
    </div>
  )
}

export default CreateBrand