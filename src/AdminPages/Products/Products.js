import React, {useEffect,useState} from 'react'
import axios from 'axios'
import './Products.css'
import { useNavigate } from 'react-router-dom'

const Products = () => {
    const [products, setProducts] = useState([])
    const [refresh, setRefresh] = useState(false)
    const navigate = useNavigate()

    const baseUrl = process.env.REACT_APP_BASE_URL;
   
    useEffect(() => {
        const fetchCategories = async () => {
          try {
            const token = localStorage.getItem('token');
            const config = {
              method: 'get',
              url: `${baseUrl}/api/product`,
              headers: {
                'Authorization': `Bearer ${token}`
              }
            };
            const response = await axios(config);
            setProducts(response.data);
          } catch (error) {
            console.error('Error fetching categories:', error);
          }
        };
    
        fetchCategories();
      }, [refresh]);


  const deleteProduct =async(id)=>{
    try {
        const token = localStorage.getItem('token');
        const config = {
          method: 'delete',
          url: `${baseUrl}/api/product/${id}`,
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

  const addProducts = async()=>{
    navigate('/create-product')
  }

  const editProduct = async(id)=>{
    navigate(`/edit-product/${id}`)
  }



  return (
    <div className='product-container'>
        <div className='product-header'>
            Products <button className='add-button' onClick={addProducts}>+</button>
        </div>
       {products.length && products.map((item)=>(
        <div className='product-list-container' key={item._id}>
            <div className="product-detail-header">{item.name}</div>
            <div className='product-card-container'>
                <div className='product-details-container'>
                    <h1>Product Info</h1>
                    {item.additionalInfo.map((info)=>(
                        <p>{info}</p>
                    ))}
                     <h1>SKU</h1>
                    {item.sku.map((info)=>(
                        <p>{info}</p>
                    ))}
                      <h1>Tags</h1>
                     {item.tag.map((info)=>(
                        <p>{info}</p>
                    ))}
                </div>
                <div className='price-details-container'>
                    <h1>Category- <span className='value'>{item?.category?.name}</span></h1>
                    <h1>Brand- <span className='value'>{item?.brand?.name}</span></h1>
                    <h1>Standard Price- <span className='value'>{item?.standardPrice}</span></h1>
                    <button className='edit-button' onClick={()=>editProduct(item._id)}>Edit</button>
                    <button className='delete-button' onClick={()=>deleteProduct(item._id)}>Delete</button>
                </div>
                <div className='additional-info-details-container'>
                    <h1>Price By Company</h1>
                        {item.priceByCompany.map((price)=>(
                            <p>{price?.companyId?.name}-{price.price}</p>
                        ))}
                </div>
            </div>
        </div>
       ))}
       
    </div>
  )
}

export default Products