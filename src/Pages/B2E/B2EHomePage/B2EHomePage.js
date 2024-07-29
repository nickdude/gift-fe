import React,{ useEffect, useState} from 'react'
import Baner from '../../../Components/Baner/Baner'
import ProductCategories from '../../../Components/ProductCategories/ProductCategories'
import Testimonials from '../../../Components/Testimonials/Testimonials'
import GetInTouch from '../../../Components/GetInTouch/GetInTouch'
import LatestArrivalsB2C from '../../../Components/LatestArrivalsB2C/LatestArrivalsB2C'
import MostPopularB2C from '../../../Components/MostPopularB2C/MostPopularB2C'
import axios from 'axios'

const B2EHomePage = () => {

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const token = localStorage.getItem('token');
  const baseUrl = process.env.REACT_APP_BASE_URL;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${baseUrl}/api/product`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
  
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${baseUrl}/api/category`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
    fetchCategories();
  }, [baseUrl, token]);


  return (
   <>
    <Baner label='Welcome to prima gifting'/>
    <LatestArrivalsB2C color="blue" products={products}/>
    <ProductCategories categories={categories}/>
    {/* <MostPopularB2C color="blue"/> */}
    <Testimonials color="blue"/>
    <GetInTouch color="blue"/>
   </>
  )
}

export default B2EHomePage