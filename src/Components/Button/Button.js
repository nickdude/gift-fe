import React from 'react'
import './Button.css'

const Button = ({label,color, action}) => {
 
  return (
    <div 
       className='button-container'
       style={{'backgroundColor':`${color}`}}
       onClick={action}
       >
      {label}
    </div>
  )
}

export default Button