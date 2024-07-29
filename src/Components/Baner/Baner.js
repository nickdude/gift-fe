import React from 'react'
import Button from '../Button/Button'
import './Baner.css'

const Baner = ({label}) => {
  return (
    <div className='baner-container'>
        <p className='baner-title'>{label}</p>
        <Button label={`Custom Solutions`}/>
    </div>
  )
}

export default Baner