import React from 'react'
import './ContactCard.css'

const contactMethods = [
    {
      imgSrc: '/assets/call.svg',
      title: 'Call Us',
      subtitle: 'Talk to our team',
      contactInfo: '9900992323'
    },
    {
      imgSrc: '/assets/whatsapp.svg',
      title: 'Whatsapp',
      subtitle: 'Message us',
      contactInfo: '9900992323'
    },
    {
      imgSrc: '/assets/mail.svg',
      title: 'Email',
      subtitle: 'Email our team',
      contactInfo: '9900992323'
    },
    {
      imgSrc: '/assets/loc.svg',
      title: 'Address',
      subtitle: 'R80, RNA Arcade, 1st Floor, Lokhandwala Complex, Andheri West, Mumbai 400053'
    }
  ];
  

const ContactCard = () => {
  return (
    <>
        <div className='contact-container'>
            {contactMethods.map((method, index) => (
                <div className="contact-card-container" key={index}>
                <img src={method.imgSrc} className="contact-img" alt={method.title} />
                <p className="contact-card-title">{method.title}</p>
                <p className="contact-card-sub-title">{method.subtitle}</p>
                {method.contactInfo && <p className="contact-card-title">{method.contactInfo}</p>}
                </div>
            ))}
        </div>
    </>
  )
}

export default ContactCard