import React from 'react'
import './AdminDashboard.css'

const AdminDashboard = () => {
  return (
    <div className='admin-dashboard-container'>
        <div className='admin-dashboard-search-container'>
            <input
                type='text'
                placeholder='Search...'
                // value={searchTerm}
                // onChange={handleSearchChange}
                className='admin-search-input'
            />
            <button  className='admin-search-button'>
                 <i className="fa-solid fa-magnifying-glass"></i>
            </button>
        </div>
        <div className='admin-dashboard-card-container'>
            <div className='admin-dashboard-card'>
                <i className="fa-solid fa-arrow-trend-up"></i>
                <p>Total Revenue</p>
                <p>₹1550192</p>
            </div>
            <div className='admin-dashboard-card'>
                <i className="fa-solid fa-cart-shopping"></i>
                <p>Daily Sales</p>
                <p>₹10192</p>
            </div>
            <div className='admin-dashboard-card'>
                <i className="fa-solid fa-cart-shopping"></i>           
                <p>Products</p>
                <p>40009</p>
            </div>
        </div>
        <div className='admin-dashboard-table-container'>
            <p>Last Orders</p>
            <table>
                <tr>
                    <th>Customer</th>
                    <th>Date</th>
                    <th>Price</th>
                    <th>Product</th>
                    <th>Status</th>
                </tr>
                <tr>
                    <td>Ranjit Rakesh</td>
                    <td>19/2/2024</td>
                    <td>₹600</td>
                    <td><img src='/assets/product.svg'></img>Puma Mens </td>
                    <td>Ongoing</td>
                </tr>
                <tr>
                    <td>Ranjit Rakesh</td>
                    <td>19/2/2024</td>
                    <td>₹600</td>
                    <td><img src='/assets/product.svg'></img>Puma Mens </td>
                    <td>Ongoing</td>
                </tr>
                <tr>
                    <td>Ranjit Rakesh</td>
                    <td>19/2/2024</td>
                    <td>₹600</td>
                    <td><img src='/assets/product.svg'></img>Puma Mens </td>
                    <td>Ongoing</td>
                </tr>
                 <tr>
                    <td>Ranjit Rakesh</td>
                    <td>19/2/2024</td>
                    <td>₹600</td>
                    <td><img src='/assets/product.svg'></img>Puma Mens </td>
                    <td>Ongoing</td>
                </tr>
            </table>
        </div>
    </div>
  )
}

export default AdminDashboard