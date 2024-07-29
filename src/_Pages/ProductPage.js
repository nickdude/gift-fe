import React from 'react'
import Button from '../Components/Button/Button'
import Footer from '../Components/Footer/Footer'
import Nav from '../Components/Nav/Nav'
import './CSS/ProductPage.css'

const ProductPage = () => {
  return (
    <>
    <Nav color='blue'/>
    <div className='product-page-container'>
        <div className='product-page-upper-container'>
            <img src='/assets/product.svg'/>
            <div className='product-page-dis-container'>
                <p>Fitness and Sports</p>
                <h1>Puma shoe</h1>
                <hr/>
                <h2>Description:</h2>
                <p>Classic Finish, Made in India Product, Apt for giving awards</p>
                <table>
                    <tr>
                        <th>SKU:</th>
                        <td>FCS0030</td>
                    </tr>
                    <tr>
                        <th>Category:</th>
                        <td>FCS0030</td>
                    </tr>
                    <tr>
                        <th>Tag:</th>
                        <td>Unisex Product</td>
                    </tr>
                    <tr>
                        <th>Brand:</th>
                        <td>CareSmith</td>
                    </tr>
                </table>
                <div className="quantity">
                    <a href="#" className="quantity__minus"><span>-</span></a>
                    <input name="quantity" type="text" className="quantity__input" value="1"/>
                    <a href="#" className="quantity__plus"><span>+</span></a>
                </div>
                <h1>₹1,499.00</h1>
                <div className='product-buy-now-button'>
                    <Button label='Buy Now' color='#73A9FA'/>
                    <Button label='Add to cart' color='#73A9FA'/>
                </div>
            </div>
        </div>
        <div className='product-page-lower-container'>
            <h1>Additional Information</h1>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default ProductPage