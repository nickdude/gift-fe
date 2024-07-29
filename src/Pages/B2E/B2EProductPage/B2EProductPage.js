import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Button from '../../../Components/Button/Button';
import './B2EProductPage.css';
import { useCart } from '../../../contexts/CartContext';

const B2EProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { cart, addToCart, removeFromCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();
  const [cartToggle, setCartToggle] = useState(true);

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
    const isInCart = cart.some(item => item._id === product?._id);
    setCartToggle(!isInCart);
  }, [cart, product]);

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
  };

  const handleRemoveFromCart = () => {
    removeFromCart(product);
  };

  const buyNow = () => {
    navigate('/b2c-cart-page');
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className='product-page-container'>
      <div className='product-page-upper-container'>
        <img src='/assets/product.svg' alt={product?.name} />
        <div className='product-page-dis-container'>
          <p>{product?.category?.name}</p>
          <h1>{product?.name}</h1>
          <hr/>
          <h2>Description:</h2>
          <p>{product?.shortDis}</p>
          <table>
            <tbody>
              <tr>
                <th>SKU:</th>
                <td>{product?.sku}</td>
              </tr>
              <tr>
                <th>Category:</th>
                <td>{product?.category?.name}</td>
              </tr>
              <tr>
                <th>Tag:</th>
                <td>{product?.tag}</td>
              </tr>
              <tr>
                <th>Brand:</th>
                <td>{product?.brand?.name}</td>
              </tr>
            </tbody>
          </table>
          <div className="quantity">
            <a href="#" className="quantity__minus" onClick={() => setQuantity(prev => Math.max(1, prev - 1))}><span>-</span></a>
            <input name="quantity" type="text" className="quantity__input" value={quantity} readOnly />
            <a href="#" className="quantity__plus" onClick={() => setQuantity(prev => prev + 1)}><span>+</span></a>
          </div>
          <h1>₹{product.standardPrice}</h1>
          <div className='product-buy-now-button'>
            <Button label='Buy Now' color='#73A9FA' action={buyNow} />
            {cartToggle ? (
              <Button label='Add to cart' color='#73A9FA' action={handleAddToCart} />
            ) : (
              <Button label='Remove from cart' color='#73A9FA' action={handleRemoveFromCart} />
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
  );
};

export default B2EProductPage;