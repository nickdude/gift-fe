import React, {useEffect,useState} from 'react'
import axios from 'axios'
import './Brands.css'
import { useNavigate } from 'react-router-dom'

const Brands = () => {
    const [brandes, setBrandes] = useState([])
    const [refresh, setRefresh] = useState(false)
    const navigate = useNavigate()

    const baseUrl = process.env.REACT_APP_BASE_URL;
   
    useEffect(() => {
        const fetchCategories = async () => {
          try {
            const token = localStorage.getItem('token');
            const config = {
              method: 'get',
              url: `${baseUrl}/api/brand`,
              headers: {
                'Authorization': `Bearer ${token}`
              }
            };
            const response = await axios(config);
            setBrandes(response.data);
          } catch (error) {
            console.error('Error fetching categories:', error);
          }
        };
    
        fetchCategories();
      }, [refresh]);


  const deleteBrand =async(id)=>{
    try {
        const token = localStorage.getItem('token');
        const config = {
          method: 'delete',
          url: `${baseUrl}/api/brand/${id}`,
          headers: {
            'Authorization': `Bearer ${token}`
          }
        };
        const response = await axios(config);
        setRefresh(!refresh)
      } catch (error) {
        console.error('Error fetching Brand:', error);
      }
  }

  const addBrand = async()=>{
    navigate('/create-brand')
  }

  const editBrand = async(id)=>{
    navigate(`/edit-brand/${id}`)
  }



  return (
    <div className='cate-container'>
        <div className='cate-header'>
            Brands <button className='add-button' onClick={addBrand}>+</button>
        </div>
        <div className='cate-list-container'>
          {
            brandes.map((cat)=>(
              <div className='cate-card' key={cat._id}>
                <img src='/assets/product.svg'></img>
                 <p>{cat.name}</p>  
                <button className='edit-button' onClick={()=>editBrand(cat._id)}>Edit</button>
                <button className='delete-button' onClick={()=>deleteBrand(cat._id)}>Delete</button>
              </div>
            ))
          } 
        </div>
    </div>
  )
}

export default Brands