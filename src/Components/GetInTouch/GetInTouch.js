import React from 'react'
import Button from '../Button/Button'
import './GetInTouch.css'

const GetInTouch = ({color}) => {
    const theme = color != 'blue'? '#FFE8F2':'#D1E4FF'
  return (
    <div className='get-in-touch-comp-container'>
        <p className='get-in-touch-comp-header'>Get in Touch</p>
            <div className='get-in-touch-comp-sub-container'>
                <div className='get-in-touch-comp-dis'>
                    <p className='get-in-touch-comp-title'>Request A Free Consultation</p>
                    <p className='get-in-touch-comp-sub-title'>Take Advantage of Our free consultation with our expert and get the best gift for your business</p>
                </div>
                <div className='get-in-touch-comp-form-container'>
                    <div className='get-in-touch-comp-field-container'>
                        <div className='get-in-touch-comp-row'>
                            <input type='text' placeholder='Name' style={{'backgroundColor':`${theme}`}}/>
                            <input type='text' placeholder='Email' style={{'backgroundColor':`${theme}`}}/>
                        </div>
                        <div className='get-in-touch-comp-row'>
                            <input type='text' placeholder='Company Name' style={{'backgroundColor':`${theme}`}}/>
                            <input type='text' placeholder='Location' style={{'backgroundColor':`${theme}`}}/>
                        </div>
                        <div className='get-in-touch-comp-row' style={{"height":"12vh"}}>
                            <textarea type='text' placeholder='Message....' style={{'backgroundColor':`${theme}`}}/>
                        </div>
                    </div>
                    <div className='get-in-touch-comp-button-container'>
                         <Button label='Send' color={color != 'blue'? '#EBA9D7': '#73A9FA'}/>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default GetInTouch