import React from 'react'
import ProductCatalogueCard from '../ProductCatalogueCard/ProductCatalogueCard'
import './LatestArrivalsB2C.css'

const LatestArrivalsB2C = ({color, products}) => {
  const theme = color != 'blue'? '#EBA9D7':'#73A9FA'
    console.log(products)
  return (
   <>
    <div className='latest-arrival-b2c-container'>
        <div className='latest-arrival-b2c-title'>
            Latest Arrivals
        </div>
        <div className='latest-arrival-b2c-card-container'>
            {products.map(product => (
                <ProductCatalogueCard key={product._id} product={product} color={theme} />
            ))}
        </div>
    </div>
    
   </>
  )
}

export default LatestArrivalsB2C