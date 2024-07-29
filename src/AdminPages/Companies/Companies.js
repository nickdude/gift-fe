import React, {useEffect, useState} from 'react'
import axios from 'axios'
import './Companies.css'
import { useNavigate } from 'react-router-dom'

const Companies = () => {
    const [company, setCompany] = useState([])
    const [refresh, setRefresh] = useState(false)
    const navigate = useNavigate()

    const baseUrl = process.env.REACT_APP_BASE_URL;
   
    useEffect(() => {
        const fetchCategories = async () => {
          try {
            const token = localStorage.getItem('token');
            const config = {
              method: 'get',
              url: `${baseUrl}/api/company`,
              headers: {
                'Authorization': `Bearer ${token}`
              }
            };
            const response = await axios(config);
            setCompany(response.data);
          } catch (error) {
            console.error('Error fetching categories:', error);
          }
        };
    
        fetchCategories();
      }, [refresh]);


  const deleteCompany =async(id)=>{
    try {
        const token = localStorage.getItem('token');
        const config = {
          method: 'delete',
          url: `${baseUrl}/api/company/${id}`,
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

  const addCompany = async()=>{
    navigate('/create-company')
  }

  const editCompany = async(id)=>{
    navigate(`/edit-company/${id}`)
  }



  return (
    <div className='comp-container'>
        <div className='comp-header'>
            Companies <button className='add-button' onClick={addCompany}>+</button>
        </div>
        <div className='comp-list-container'>
          {
            company.map((cat)=>(
              <div className='comp-card' key={cat._id}>
                 <p>{cat.name}</p>  
                 <p>{cat.email}</p> 
                 <p>{cat.contact}</p> 
                 <p>{cat.companyExtension}</p> 
                 <p>{cat.address}</p> 
                <button className='edit-button' onClick={()=>editCompany(cat._id)}>Edit</button>
                <button className='delete-button' onClick={()=>deleteCompany(cat._id)}>Delete</button>
              </div>
            ))
          } 
        </div>
    </div>
  )
}

export default Companies