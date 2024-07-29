import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer-container'>
        <div className='footer-logo-container'>
            <div className='footer-logo'>

            </div>
            <div className='footer-dis'>
                PrimaGifting is the best gifting company we have more than 2000+ products we are here to solve all your gifting needs
            </div>
        </div>
        <hr className='line'/>
        <div className='footer-links-container'>
            <p className='footer-header'>Usefull Links</p>
            <p className='footer-link'>Acrylic Products</p>
            <p className='footer-link'>Awards & Rewards</p>
            <p className='footer-link'>Caps, Shirts , Tshirt</p>
            <p className='footer-link'>Desktop Products</p>
            <p className='footer-link'>More</p>
        </div>
        <hr className='line'/>
        <div className='footer-links-container'>
            <p className='footer-header'>Newsletter</p>
            <p className='footer-link'>Subscribe to our newsletter to receive the latest promotions and news!</p>
            <input type='text' className='footer-text'/>
            <button className='footer-button'>Send</button>
        </div>
        <div className='footer-links-container'>
            <p className='footer-header'>Social Links</p>
            <p className='footer-link'><i className="fas fa-envelope big"></i>  <i className="fas fa-envelope big"></i>  <i className="fas fa-envelope big"></i>  </p>
        </div>
    </div>
  )
}

export default Footer