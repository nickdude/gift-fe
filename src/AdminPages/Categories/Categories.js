import React, {useEffect,useState} from 'react'
import axios from 'axios'
import './Categories.css'
import { useNavigate } from 'react-router-dom'

const Categories = () => {
    const [categories, setCategories] = useState([])
    const [refresh, setRefresh] = useState(false)
    const navigate = useNavigate()

    const baseUrl = process.env.REACT_APP_BASE_URL;
   
    useEffect(() => {
        const fetchCategories = async () => {
          try {
            const token = localStorage.getItem('token');
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
            console.error('Error fetching categories:', error);
          }
        };
    
        fetchCategories();
      }, [refresh]);


  const deleteCategories =async(id)=>{
    try {
        const token = localStorage.getItem('token');
        const config = {
          method: 'delete',
          url: `${baseUrl}/api/category/${id}`,
          headers: {
            'Authorization': `Bearer ${token}`
          }
        };
        const response = await axios(config);
        setRefresh(!refresh)
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
  }

  const addCategories = async()=>{
    navigate('/create-category')
  }

  const editCategories = async(id)=>{
    navigate(`/edit-category/${id}`)
  }



  return (
    <div className='cate-container'>
        <div className='cate-header'>
            Categories <button className='add-button' onClick={addCategories}>+</button>
        </div>
        <div className='cate-list-container'>
          {
            categories.map((cat)=>(
              <div className='cate-card' key={cat._id}>
                <img src='/assets/product.svg'></img>
                 <p>{cat.name}</p>  
                <button className='edit-button' onClick={()=>editCategories(cat._id)}>Edit</button>
                <button className='delete-button' onClick={()=>deleteCategories(cat._id)}>Delete</button>
              </div>
            ))
          } 
        </div>
    </div>
  )
}

export default Categories