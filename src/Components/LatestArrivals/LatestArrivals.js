import React from 'react'
import './LatestArrivals.css'
import LatestArrCard from '../LatestArrCard/LatestArrCard'

const LatestArrivals = ({products}) => {
  return (
    <div className='latest-arrival-container'>
        <div className='latest-arrival-title'>
            Latest Arrivals
        </div>
        <div className='latest-arrival-card-container'>
          {products.map(product => (
                <LatestArrCard key={product._id} product={product} />
            ))}
        </div>
    </div>
  )
}

export default LatestArrivals