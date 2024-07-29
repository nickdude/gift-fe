import React from 'react'
import './AdminEditProduct.css'

const AdminEditProduct = () => {
  return (
    <div className='admin-edit-product-container'>
        <div className='admin-edit-product-header'>
            <p>Puma Mens Shoes X800</p>
            <div>
                <button>Cancel</button>
                <button>Save</button>
            </div>
        </div>
        <div className='admin-edit-product-summary'>
            <div className='admin-edit-product-summary-left'>
                <img src='/assets/product.svg'></img>
            </div>
            <div className='admin-edit-product-summary-right'>
                 <input type='text'></input>
                 <textarea/>
            </div>
        </div>
        <div className='admin-edit-product-selection'>
                <select>
                     <option>Categories</option>
                </select>
                <select>
                     <option>Brands</option>
                </select>
                <input></input>
                <label>PRICE</label>
                <input></input>
                <label>SKU</label>

        </div>
        <div className='admin-edit-product-company-price'>
              <div className='admin-edit-product-company-price-upper'>
                 <button>Add Company +</button>
              </div>
              <div className='admin-edit-product-company-price-lower'>
                  <select>
                      <option>Brands</option>
                  </select>
                  <input></input>
                  <label>PRICE</label>
              </div>
        </div>
        <div className='admin-edit-product-discription'>
              <textarea placeholder='Description...'/>
        </div>
        <div className='admin-edit-product-buttons'>
              <button className='save'>Save</button>
              <button className='delete'>Delete</button>
        </div>
    </div>
  )
}

export default AdminEditProduct