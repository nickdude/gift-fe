import React, {useState, useEffect} from 'react'
import axios from 'axios';
import './AdminOrders.css'

const AdminOrders = () => {
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
        const year = date.getFullYear();
        
        return `${day}/${month}/${year}`;
    };
    

  const [orders, setOrders] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const token = localStorage.getItem('token');
  const baseUrl = process.env.REACT_APP_BASE_URL;

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(`${baseUrl}/api/order`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        setOrders(response.data);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, [token, baseUrl]);
  
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredOrders = orders.filter(order =>
    (order.customer || '').toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='admin-orders-container'>
        <div className='admin-orders-search-container'>
            <input
                type='text'
                placeholder='Search...'
                value={searchTerm}
                onChange={handleSearchChange}
                className='admin-search-input'
            />
            <button  className='admin-search-button'>
                <i className="fa-solid fa-magnifying-glass"></i>
            </button>
        </div>
        <div className='admin-orders-table-container'>
        <table>
                <thead>
                    <tr>
                        <th>Customer</th>
                        <th>Date</th>
                        <th>Price</th>
                        <th>Product</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredOrders.map((order, index) => (
                        <tr key={index}>
                            <td>{order?.name}</td>
                            <td>{formatDate(order?.orderedAt)}</td>
                            <td>₹{order?.total}</td>
                            <td>
                                {/* <img src='/assets/product.svg' alt='Product' /> */}
                                {order?.cart[0]?.name}
                            </td>
                            <td>{order?.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
</div>
  )
}

export default AdminOrders