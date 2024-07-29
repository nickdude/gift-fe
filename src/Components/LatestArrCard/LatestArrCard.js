import React from 'react'
import { useNavigate } from 'react-router-dom'
import './LatestArrCard.css'

const LatestArrCard = ({product}) => {
  const navigate = useNavigate()
  return (
    <div className='lat-arr-card-container'>
        <div className='lat-arr-img-container'>
            <img src='/assets/cat-sample.svg' className='lat-arr-img' alt='Sample' onClick={()=>navigate(`/b2b-product-page/${product?._id}`)}/>
            <button className='lat-arr-button' onClick={()=>navigate(`/b2b-product-page/${product?._id}`)}>Get a quote</button>
        </div>
        <div className='lat-arr-title'>
            {product.name}
        </div>
        <div className='lat-arr-sub-title'>
            {product.shortDis}
        </div>
    </div>
  )
}

export default LatestArrCard
