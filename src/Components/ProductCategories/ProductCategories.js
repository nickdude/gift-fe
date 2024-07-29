import React from 'react'
import ProductCategoriesCard from '../ProductCategoriesCard/ProductCategoriesCard'
import './ProductCategories.css'

const ProductCategories = ({categories}) => {
  return (
    <div className='prod-categ-container'>
        <div className='prod-categ-title'>
             Product Categories
        </div>
        <div className='prod-categ-card-container'>
           {categories.map(category => (
                <ProductCategoriesCard key={category._id} category={category} />
            ))}
        </div>
    </div>
  )
}

export default ProductCategories