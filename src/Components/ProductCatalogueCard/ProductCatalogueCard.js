import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../../contexts/CartContext';
import './ProductCatalogueCard.css'

const ProductCatalogueCard = ({color,product}) => {
  const [cartToggle, setCartToggle] = useState(true);
  const { cart, addToCart, removeFromCart } = useCart();
  const navigate = useNavigate()

  useEffect(() => {
    const isInCart = cart.some(item => item._id === product?._id);
    setCartToggle(!isInCart);
  }, [cart, product]);

  const handleAddToCart = () => {
    addToCart({ ...product, quantity: 1 });
  };

  const handleRemoveFromCart = () => {
    removeFromCart(product);
  };

  return (
    <div className='cat-card'>
        <img src='/assets/cat-sample.svg' className='cat-card-img' onClick={()=>{navigate(`/b2c-product-page/${product?._id}`)}}></img>
       {cartToggle ? <button className='cat-button' style={{'backgroundColor':`${color}`}} onClick={handleAddToCart}>Add to Cart</button>:
        <button className='cat-button' style={{'backgroundColor':`${color}`}} onClick={handleRemoveFromCart}>Remove from Cart</button>}
       <div className='cat-title-container'>
          <div>
              <p className='cat-pro-sub-title'>{product?.name}</p>
              <p className='cat-pro-title'>{product?.shortDis}</p>
            </div>
            <div className='cat-price'>
                <p>₹{product?.standardPrice}</p>
            </div>
       </div>
    </div>
  )
}

export default ProductCatalogueCard