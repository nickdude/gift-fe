import React, {useState,useEffect} from 'react'
import Button from '../../../Components/Button/Button'
import { useCart } from '../../../contexts/CartContext';
import axios from 'axios';
import './B2CShipping.css'

const B2CShipping = () => {
    const { cart } = useCart();
    const token = localStorage.getItem('token');
    const baseUrl = process.env.REACT_APP_BASE_URL;

    const [form, setForm] = useState({
      name: '',
      email: '',
      number: '',
      billingAddress: '',
      shippingAddress: '',
      gstNumber: '',
      sameAsShipping: false,
    });

    const [subtotal, setSubtotal] = useState(0);
    const [shipping, setShipping] = useState(50); // Example fixed shipping rate
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const calculatedSubtotal = cart.reduce((acc, item) => acc + item.standardPrice * item.quantity, 0);
        setSubtotal(calculatedSubtotal);
        setTotal(calculatedSubtotal + shipping);
    }, [cart, shipping]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm({
          ...form,
          [name]: type === 'checkbox' ? checked : value,
          ...(name === 'sameAsShipping' && { shippingAddress: form.billingAddress }),
        });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        
        const orderData = {
          ...form,
          total,
          cart: cart.map((item) => ({
            productId: item._id,
            name: item.name,
            quantity: item.quantity,
            price: item.standardPrice,
            additionalInfo: item.additionalInfo,
            sku: item.sku,
          })),
          status: 'Ordered'
        };
    
        try {
          const response = await axios.post(`${baseUrl}/api/order`, orderData, {
            headers: {
              'Authorization': `Bearer ${token}`, // Replace with your actual token
              'Content-Type': 'application/json'
            }
          });
          console.log('Order Response:', response.data);
        } catch (error) {
          console.error('Error placing order:', error);
        }
      };
  
  return (
    <>
        <div className='shipping-container'>
            <div className='shipping-form-container'>
                <p>Shipping Address</p>
                <form>
                    <table>
                        <tr>
                            <td><label for="name">Name:</label></td>
                            <td className="input-field"><input type="text" id="name" name="name" value={form.name} onChange={handleChange} /></td>
                        </tr>
                        <tr>
                            <td><label for="email">Email:</label></td>
                            <td className="input-field"><input type="email" id="email" name="email" value={form.email} onChange={handleChange}/></td>
                        </tr>
                        <tr>
                            <td><label for="phone">Phone Number:</label></td>
                            <td className="input-field"><input type="tel" id="number" name="number" value={form.number} onChange={handleChange}/></td>
                        </tr>
                        <tr>
                            <td><label for="billingAddress">Billing Address:</label></td>
                            <td className="input-field"><textarea id="billingAddress" name="billingAddress" value={form.billingAddress} onChange={handleChange}></textarea></td>
                        </tr>
                        <tr>
                            <td colspan="2">
                                <label>
                                    Billing address same as shipping address.
                                    <input type="checkbox" id="sameAsShipping" name="sameAsShipping" style={{"width":"13vw"}} checked={form.sameAsShipping} onChange={handleChange}/>
                                </label>
                            </td>
                        </tr>
                        <tr>
                            <td><label for="shippingAddress">Shipping Address:</label></td>
                            <td className="input-field"><textarea id="shippingAddress" name="shippingAddress" value={form.sameAsShipping ? form.billingAddress : form.shippingAddress} onChange={handleChange} disabled={form.sameAsShipping}></textarea></td>
                        </tr>
                        <tr>
                            <td><label for="gstDropdown">GST Number:</label></td>
                            <td className="input-field">
                                <select id="gstDropdown" name="gstDropdown" value={form.gstNumber} onChange={handleChange}>
                                    <option value="gst1">GST Number 1</option>
                                    <option value="gst2">GST Number 2</option>
                                    <option value="gst3">GST Number 3</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td><label for="gstText">GST Number (if not in dropdown):</label></td>
                            <td className="input-field"><input type="text" id="gstText" name="gstNumber" value={form.gstNumber} onChange={handleChange} /></td>
                        </tr>
                    </table>
                </form>
                <div className='shipping-button'>
                    <Button label='Buy Now' color='#73A9FA' action={handleSubmit}/>
                </div>
            </div>
            <div className='shipping-summary'>
                    <div className='shipping-summary-container'>
                        <div className="table-container">
                            <table className="table">
                                <tbody>
                                <tr>
                                    <td>Subtotal:</td>
                                    <td>${subtotal}</td>
                                </tr>
                                <tr>
                                    <td>Shipping:</td>
                                    <td>${shipping}</td>
                                </tr>
                                </tbody>
                            </table>
                            <div className="horizontal-line"></div>
                            <table className="table">
                                <tbody>
                                <tr>
                                    <td>Your Total:</td>
                                    <td>${total}</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
            </div>
        </div>
    </>
  )
}

export default B2CShipping