import React, { useEffect, useState} from 'react'
import Baner from '../../../Components/Baner/Baner'
import LatestArrivals from '../../../Components/LatestArrivals/LatestArrivals'
import ProductCategories from '../../../Components/ProductCategories/ProductCategories'
import Testimonials from '../../../Components/Testimonials/Testimonials'
import GetInTouch from '../../../Components/GetInTouch/GetInTouch'
import axios from 'axios'

const B2BHomePage = () => {
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
    <Baner label='Corporate Gifting Made Easy'/>
    <LatestArrivals products={products}/>
    {/* <ProductCategories/> */}
    <Testimonials/>
    <GetInTouch/> 
   </>
  )
}

export default B2BHomePage