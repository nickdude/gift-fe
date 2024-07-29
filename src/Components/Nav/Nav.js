import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import './Nav.css';

//const Nav = ({color, links, contacts}) => {
const Nav = ({color}) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const theme = color != 'blue'? '#EBA9D7':'#73A9FA'
  const navigate = useNavigate()
  const cartCount = 5;

  const links = color !== 'blue' ? [
    { to: "/product-range-page", text: "Product Range" },
    { to: "/link1", text: "By Brands" },
    { to: "/contact-us-page", text: "Contact Us" },
    { to: "/shop", text: "Shop" }
  ] : [
    { to: "/categories", text: "Categories" },
    { to: "/link1", text: "By Brands" },
    { to: "/by-price", text: "By Price" },
    { to: "/contact-us-page", text: "Contact Us" },
    { to: "/shop", text: "Shop" }
  ]


  const contacts = [
    { to: "/time", text: "10:00 - 07:00", iconClass: "fas fa-clock space" },
    { to: "/contact", text: "+91 9920334444", iconClass: "fas fa-phone space" },
    { to: "/mail", text: "Mail", iconClass: "fas fa-envelope space" }
  ];

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };


  return (
    <>
     <div className='nav-logo-container'>
           <div className="hamburger" onClick={toggleNav}>
             <i className="fas fa-bars icon-size"></i>
           </div>
           <img src="assets/logo.svg"></img>
     </div>
     <div className={`navbar ${isNavOpen ? 'open' : ''}`}>
        <div className="menu">
             {links.map((link, index) => (
                <Link key={index} to={link.to}>{link.text}</Link>
              ))}
        </div>
        <div className="search-bar" style={{'border':`1px solid ${theme}`}}>
            <input type="text"/>
            <svg style={{"width":"24px","height":"24px"}} viewBox="0 0 24 24"><path fill="#666666" d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
            </svg>
        </div>
        <div className="menu">
             {contacts.map((link, index) => (
                // <a key={index} href={link.href}>
                //   <i className={link.iconClass}></i> {link.text}
                // </a>
                <Link key={index} to={link.to}>
                  <i className={link.iconClass}></i> {link.text}
                </Link>
              ))}
            {color =='blue'? 
            <>
              <div className="carts-container">
                  <i className="fa-solid fa-cart-shopping cart-icon"></i>
                  {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
                </div>
              <i className="fa-solid fa-user" onClick={()=>navigate('/admin-login')}></i>
            </>
            :
            <> <Button label={'Quote list'} color='#EBA9D7'/> </>}

        </div>
    </div>
    </>
   
  );
}

export default Nav;