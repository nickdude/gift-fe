import React from 'react'
import Button from '../Components/Button/Button'
import Footer from '../Components/Footer/Footer'
import Nav from '../Components/Nav/Nav'
import './CSS/BEShippingPage.css'

const BEShippingPage = () => {
  return (
    <>
        <Nav color='blue'/>
        <div className='shipping-container'>
            <div className='shipping-form-container'>
                <p>Shipping Address</p>
                <form>
                    <table>
                        <tr>
                            <td><label for="name">Name:</label></td>
                            <td className="input-field"><input type="text" id="name" name="name"/></td>
                        </tr>
                        <tr>
                            <td><label for="email">Email:</label></td>
                            <td className="input-field"><input type="email" id="email" name="email"/></td>
                        </tr>
                        <tr>
                            <td><label for="phone">Phone Number:</label></td>
                            <td className="input-field"><input type="tel" id="phone" name="phone"/></td>
                        </tr>
                        <tr>
                            <td><label for="billingAddress">Billing Address:</label></td>
                            <td className="input-field"><textarea id="billingAddress" name="billingAddress"></textarea></td>
                        </tr>
                        <tr>
                            <td colspan="2">
                                <label>
                                    Billing address same as shipping address.
                                    <input type="checkbox" id="sameAsShipping" name="sameAsShipping" style={{"width":"13vw"}}/>
                                </label>
                            </td>
                        </tr>
                        <tr>
                            <td><label for="shippingAddress">Shipping Address:</label></td>
                            <td className="input-field"><textarea id="shippingAddress" name="shippingAddress"></textarea></td>
                        </tr>
                        <tr>
                            <td><label for="gstDropdown">GST Number:</label></td>
                            <td className="input-field">
                                <select id="gstDropdown" name="gstDropdown">
                                    <option value="gst1">GST Number 1</option>
                                    <option value="gst2">GST Number 2</option>
                                    <option value="gst3">GST Number 3</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td><label for="gstText">GST Number (if not in dropdown):</label></td>
                            <td className="input-field"><input type="text" id="gstText" name="gstText"/></td>
                        </tr>
                    </table>
                </form>
                <div className='shipping-button'>
                    <Button label='Buy Now' color='#73A9FA'/>
                </div>
            </div>
            <div className='shipping-summary'>
                    <div className='shipping-summary-container'>
                        <div className="table-container">
                            <table className="table">
                                <tbody>
                                <tr>
                                    <td>Subtotal:</td>
                                    <td>$350</td>
                                </tr>
                                <tr>
                                    <td>Shipping:</td>
                                    <td>Enter address</td>
                                </tr>
                                </tbody>
                            </table>
                            <div className="horizontal-line"></div>
                            <table className="table">
                                <tbody>
                                <tr>
                                    <td>Your Total:</td>
                                    <td>$350</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default BEShippingPage