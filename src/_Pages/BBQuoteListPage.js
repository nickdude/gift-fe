import React from 'react'
import './CSS/BBQuoteListPage.css'
import Button from '../Components/Button/Button'
import Footer from '../Components/Footer/Footer'
import Nav from '../Components/Nav/Nav'

const BBQuoteListPage = () => {
  return (
    <>
          <Nav/>
        <div className='quote-container'>
            <table>
                <tr>
                    <th>SKU</th>
                    <th>Product</th>
                    <th>Product Description</th>
                    <th>MOQ</th>
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
                        <p>30</p>
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
                        <p>30</p>
                    </td>
                </tr>
            </table>
        <p className='quote-header'>To get the quote please fill your information</p>
            <div className='quote-form-container'>
                <table>
                    <tr>
                        <td className='quote-label-border'><label>Name:</label></td>
                        <td><input type='text'/></td>
                    </tr>
                    <tr>
                        <td className='quote-label-border'><label>Company Name:</label></td>
                        <td><input type='text'/></td>
                    </tr>
                    <tr>
                        <td className='quote-label-border'><label>Location:</label></td>
                        <td><input type='text'/></td>
                    </tr>
                    <tr>
                        <td className='quote-label-border'><label>E-mail:</label></td>
                        <td><input type='text'/></td>
                    </tr>
                    <tr>
                        <td className='quote-label-border'><label>Message:</label></td>
                        <td><textarea type='text'/></td>
                    </tr>
                    

                </table>
                <div className='quote-button'>
                    <Button label='Send'/>
                </div>
            </div>
        </div>
     <Footer/>
    </>
  )
}

export default BBQuoteListPage