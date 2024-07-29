import React, {useEffect,useState} from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import Button from '../../../Components/Button/Button'
import { useQuote } from '../../../contexts/QuoteContext';
import './B2BProductPage.css'
import axios from 'axios';

const B2BProductPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const { quote, addQuote, removeQuote } = useQuote();
    const [quantity, setQuantity] = useState(1);
    const navigate = useNavigate();
    const [quoteToggle, setQuoteToggle] = useState(true);
  
    useEffect(() => {
      const fetchProduct = async () => {
        const token = localStorage.getItem('token');
        const baseUrl = process.env.REACT_APP_BASE_URL;
        try {
          const response = await axios.get(`${baseUrl}/api/product/${id}`, {
            headers: { 
              'Authorization': `Bearer ${token}`
            }
          });
          setProduct(response.data);
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchProduct();
    }, [id]);
  
    useEffect(() => {
      const isInQuote = (quote || []).some(item => item._id === product?._id);
      setQuoteToggle(!isInQuote);
    }, [quote, product]);
  
    const handleAddToQuote = () => {
        addQuote({ ...product, quantity });
    };
  
    const handleRemoveFromQuote = () => {
        removeQuote(product);
    };
  
    const quoteNow = () => {
      navigate('/b2b-qoute-page');
    };
  
    if (!product) {
      return <div>Loading...</div>;
    }

  return (
    <div className='product-page-container'>
        <div className='product-page-upper-container'>
            <img src='/assets/product.svg'/>
            <div className='product-page-dis-container'>
                <p>{product.category.name}</p>
                <h1>{product.name}</h1>
                <hr/>
                <h2>Description:</h2>
                <p>{product.shortDis}</p>
                <table>
                    <tr>
                        <th>SKU:</th>
                        <td>{product.sku}</td>
                    </tr>
                    <tr>
                        <th>Category:</th>
                        <td>{product.category.name}</td>
                    </tr>
                    <tr>
                        <th>Tag:</th>
                        <td>{product.tag.join(',')}</td>
                    </tr>
                    <tr>
                        <th>Brand:</th>
                        <td>{product.brand.name}</td>
                    </tr>
                </table>
                <div className="quantity_b">
                    <a href="#" className="quantity_b__minus" onClick={() => setQuantity(prev => Math.max(1, prev - 1))}><span>-</span></a>
                    <input name="quantity_b" type="text" className="quantity_b__input" value={quantity} readOnly/>
                    <a href="#" className="quantity_b__plus" onClick={() => setQuantity(prev => prev + 1)}><span>+</span></a>
                </div>
                <div className='product-buy-now-button'>
                    <Button label='Get A Quote' color='#EBA9D7' action={quoteNow} />
                    {quoteToggle ? (
                    <Button label='Add to Quote' color='#EBA9D7' action={handleAddToQuote} />
                    ) : (
                    <Button label='Remove from Quote' color='#EBA9D7' action={handleRemoveFromQuote} />
                    )}
                </div>
            </div>
        </div>
        <div className='product-page-lower-container'>
            <h1>Additional Information</h1>
            <ul>
               {product?.additionalInfo?.length > 0 && product.additionalInfo.map((item, index) => (
                  <li key={index}>{item}</li>
               ))}
            </ul>
        </div>
    </div>
  )
}

export default B2BProductPage