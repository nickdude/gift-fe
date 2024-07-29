import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './CSS/Categories.css'
import CreateCategory from '../Components/CreateCategory/CreateCategory';
import EditCategory from '../Components/EditCategory/EditCategory';

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [addCategory, setAddCategory] = useState(false)
  const [editCategory, setEditCategory] = useState(false)
  const [refresh, setRefresh ] = useState(false)
  const [id,setId] = useState('')

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const token = localStorage.getItem('token');
        const config = {
          method: 'get',
          url: 'http://localhost:5000/api/category',
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
  }, [refresh, addCategory]);

  const handleDelete =async (id)=>{

        try {
          const token = localStorage.getItem('token');
          const config = {
            method: 'delete',
            url: `http://localhost:5000/api/category/${id}`,
            headers: {
              'Authorization': `Bearer ${token}`
            }
          };
          const response = await axios(config);
         
          setRefresh(!refresh);
        } catch (error) {
          console.error('Error fetching categories:', error);
        }
  }
  const handleEdit =async(id)=>{
    setEditCategory(true)
  }
  const addCategories =()=>{
    setAddCategory(true)
  }
  const cancelCategories =()=>{
    setAddCategory(false)
    setEditCategory(false)
  }

  return (
   <div className="categories-container">
        <p className='categories-header'>Categories List<button className='category-add-button' onClick={addCategories}>+</button></p>
        {
            categories.map(category=>(
                <div className='categories-list' key={category._id}>
                    <div className='categories-label'>
                        {category.name}
                    </div>
                    <div className='categories-buttons'>
                        <button className='categories-edit'  onClick={() => handleEdit(category._id)}>
                            Edit
                        </button>
                        <button className='categories-delete'  onClick={() => handleDelete(category._id)}>
                            Delete
                        </button>
        
                    </div>
                </div>
            ))
        }
        {addCategory && <CreateCategory  cancelCategories={cancelCategories} setAddCategory={setAddCategory}/>}
        {editCategory && <EditCategory cancelCategories={cancelCategories} setEditCategory={setEditCategory}/>}
   </div>
  );
};

export default Categories;
