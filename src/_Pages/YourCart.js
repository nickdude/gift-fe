import React from 'react'
import Button from '../Components/Button/Button'
import Footer from '../Components/Footer/Footer'
import Nav from '../Components/Nav/Nav'
import './CSS/YourCart.css'

const YourCart = () => {
  return (
    <>
     <Nav color='blue'/>
        <div className='cart-container'>
            <p className='cart-heading'>Your cart</p>
            <table>
                <tr>
                    <th>SKU</th>
                    <th>Product</th>
                    <th>Product Description</th>
                    <th>Price</th>
                    <th>Quantity</th>
                </tr>
                <tr>
                    <td>
                        <div className='table-data'>
                            <i className="fa-regular fa-circle-xmark"></i>
                            <p>FCS0030</p>
                            <img src='/assets/product.svg'/>
                        </div>
                    </td>
                    <td>
                        <p>Puma Shoe</p>
                    </td>
                    <td>
                        <p>Classic Finish, Made in India Product, Apt for giving awards</p>
                    </td>
                    <td>
                        <p>₹1,499.00</p>
                    </td>
                    <td>
                        <div className='table-data'>
                            <i className="fa-solid fa-angle-left"></i>
                                <p>2</p>
                            <i className="fa-solid fa-angle-right"></i>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className='table-data'>
                            <i className="fa-regular fa-circle-xmark"></i>
                            <p>FCS0030</p>
                            <img src='/assets/product.svg'/>
                        </div>
                    </td>
                    <td>
                        <p>Puma Shoe</p>
                    </td>
                    <td>
                        <p>Classic Finish, Made in India Product, Apt for giving awards</p>
                    </td>
                    <td>
                        <p>₹1,499.00</p>
                    </td>
                    <td>
                        <div className='table-data'>
                            <i className="fa-solid fa-angle-left"></i>
                                <p>2</p>
                            <i className="fa-solid fa-angle-right"></i>
                        </div>
                    </td>
                </tr>
            </table>
            <hr className='cart-line'/>
            <table className='total-table'>
                <tr>
                    <td>
                        <p style={{"margin":"0"}}>Your total:</p>
                        <p style={{"margin":"0"}}>(3 items)</p>
                    </td>
                    <td>₹1,499.00</td>
                </tr>
            </table>
            <div className='cart-button'>
                <Button label={`Proceed to checkout`} color='#73A9FA'/>
            </div>
        </div>
     <Footer/>
    </>
  )
}

export default YourCart

/*
  <i className="fa-solid fa-angle-left"></i>
  <i className="fa-solid fa-angle-right"></i>
*/