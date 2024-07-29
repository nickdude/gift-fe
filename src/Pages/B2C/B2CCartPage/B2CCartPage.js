import React from 'react';
import Button from '../../../Components/Button/Button';
import './B2CCartPage.css';
import { useCart } from '../../../contexts/CartContext';
import { useNavigate } from 'react-router-dom';

const B2CCartPage = () => {
  const { cart, removeFromCart, updateCartItem } = useCart();
  const navigate = useNavigate()

  const handleQuantityChange = (item, newQuantity) => {
        if (newQuantity > 0) {
          updateCartItem({ ...item, quantity: newQuantity });
        }
    };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.standardPrice * item.quantity, 0);
  };

  const shipping = ()=>{
        navigate('/b2c-shipping')
  }
    
  return (
    <>
      <div className='cart-container'>
        <p className='cart-heading'>Your cart</p>
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <>
            <table>
              <thead>
                <tr>
                  <th>SKU</th>
                  <th>Product</th>
                  <th style={{"width":"40vw"}}>Product Description</th>
                  <th>Price</th>
                  <th>Quantity</th>
                </tr>
              </thead>
              <tbody>
                {cart.map(item => (
                  <tr key={item.id}>
                    <td>
                      <div className='table-data'>
                        <i
                          className='fa-regular fa-circle-xmark'
                          onClick={() => removeFromCart(item)}
                        ></i>
                        <p>{item.sku}</p>
                        <img src='/assets/product.svg' alt={item.name} />
                      </div>
                    </td>
                    <td onClick={()=>{navigate(`/b2c-product-page/${item._id}`)}}>
                      <p>{item.name}</p>
                    </td>
                    <td>
                      <p>{item.shortDis}</p>
                    </td>
                    <td>
                      <p>₹{item.standardPrice}</p>
                    </td>
                    <td>
                      <div className='table-data'>
                        <i
                          className='fa-solid fa-angle-left'
                          onClick={() =>
                            handleQuantityChange(item, item.quantity - 1)
                          }
                        ></i>
                        <p>{item.quantity}</p>
                        <i
                          className='fa-solid fa-angle-right'
                          onClick={() =>
                            handleQuantityChange(item, item.quantity + 1)
                          }
                        ></i>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <hr className='cart-line' />
            <table className='total-table'>
              <tbody>
                <tr>
                  <td>
                    <p style={{ margin: '0' }}>Your total:</p>
                    <p style={{ margin: '0' }}>({cart.length} items)</p>
                  </td>
                  <td>₹{getTotalPrice()}</td>
                </tr>
              </tbody>
            </table>
            <div className='cart-button'>
              <Button label='Proceed to checkout' color='#73A9FA' action={shipping}/>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default B2CCartPage;