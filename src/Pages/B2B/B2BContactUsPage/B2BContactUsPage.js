import React from 'react'
import Button from '../../../Components/Button/Button'
import ContactCard from '../../../Components/ContactCard/ContactCard'
import GetInTouch from '../../../Components/GetInTouch/GetInTouch'
import './B2BContactUsPage.css'

const B2BContactUsPage = () => {
  return (
      <>
        <div className='get-in-touch-container'>
            <h1>Get in touch</h1>
            <p className='get-in-touch-container-p'>Don’t hesitate to contact us for any requests!</p>
            <ContactCard/>
                <h1>Connect With Us</h1>
                <div className='get-in-touch-form-container'>
                    <table>
                        <tr>
                            <td className='get-in-touch-label-border'><label>Name:</label></td>
                            <td><input type='text'/></td>
                        </tr>
                        <tr>
                            <td className='get-in-touch-label-border'><label>Company Name:</label></td>
                            <td><input type='text'/></td>
                        </tr>
                        <tr>
                            <td className='get-in-touch-label-border'><label>Location:</label></td>
                            <td><input type='text'/></td>
                        </tr>
                        <tr>
                            <td className='get-in-touch-label-border'><label>E-mail:</label></td>
                            <td><input type='text'/></td>
                        </tr>
                        <tr>
                            <td className='get-in-touch-label-border'><label>Message:</label></td>
                            <td><textarea type='text'/></td>
                        </tr>
                        

                    </table>
                    <div className='get-in-touch-button'>
                        <Button label='Send'/>
                    </div>
                </div>
        </div>
      </>
  )
}

export default B2BContactUsPage