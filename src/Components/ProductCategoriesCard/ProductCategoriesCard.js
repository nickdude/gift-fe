import React from 'react'
import './ProductCategoriesCard.css'

const ProductCategoriesCard = ({category}) => {
  return (
    <div className='product-cate-card'>
        <div className='product-cate-img-container'>
              <img src='/assets/cat-sample.svg' className='product-cate-img' alt='Sample' />
        </div>
        <div className='product-cate-title'>
            {category.name}
        </div>
    </div>
  )
}

export default ProductCategoriesCard