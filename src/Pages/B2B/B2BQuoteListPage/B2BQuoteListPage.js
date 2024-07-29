import React from 'react'
import Button from '../../../Components/Button/Button'
import './B2BQuoteListPage.css'
import { useQuote } from '../../../contexts/QuoteContext';
import { useNavigate } from 'react-router-dom';


const B2BQuoteListPage = () => {
    const { quote, addQuote, removeQuote, updateQuote } = useQuote();
    const navigate = useNavigate()
        console.log(quote)
    const handleQuantityChange = (item, newQuantity) => {
          if (newQuantity > 0) {
            updateQuote({ ...item, quantity: newQuantity });
          }
      };
  
    const getTotalPrice = () => {
      return quote.reduce((total, item) => total + item.standardPrice * item.quantity, 0);
    };
  
    const shipping = ()=>{
          navigate('/b2c-shipping')
    }

  return (
        <>
                <div className='quote-container'>
                    <table>
                        <tr>
                            <th>SKU</th>
                            <th>Product</th>
                            <th style={{"width":"40vw"}}>Product Description</th>
                            <th>MOQ</th>
                        </tr>
                        { quote.map(item => (
                               <tr key={item.id}>
                               <td>
                                   <div className='table-data'>
                                       <i 
                                       className="fa-regular fa-circle-xmark"
                                       onClick={() => removeQuote(item)}
                                       ></i>
                                       <p>{item.sku}</p>
                                       <img src='/assets/product.svg'/>
                                   </div>
                               </td>
                               <td>
                                   <p>{item.name}</p>
                               </td>
                               <td>
                                   <p>{item.shortDis}</p>
                               </td>
                               <td>
                                   <p>{item.quantity}</p>
                               </td>
                           </tr>
                        ))}
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
                            <Button color='#EBA9D7' label='Send'/>
                        </div>
                    </div>
                </div>
        </>
  )
}

export default B2BQuoteListPage