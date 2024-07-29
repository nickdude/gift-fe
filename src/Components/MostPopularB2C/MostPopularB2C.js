import React from 'react'
import ProductCatalogueCard from '../ProductCatalogueCard/ProductCatalogueCard'
import './MostPopularB2C.css'

const MostPopularB2C = ({color}) => {
  const theme = color != 'blue'? '#EBA9D7':'#73A9FA'
  
  return (
   <>
    <div className='most-popular-b2c-container'>
        <div className='most-popular-b2c-title'>
            Most Popular
        </div>
        <div className='most-popular-b2c-card-container'>
            <ProductCatalogueCard  color={theme}/>
            <ProductCatalogueCard  color={theme}/>
            <ProductCatalogueCard  color={theme}/>
            <ProductCatalogueCard  color={theme}/>
        </div>
    </div>
    
   </>
  )
}

export default MostPopularB2C