import React from 'react'
import './CustomInput.css'
function CustomInput({name,type}) {
  return (
    <div className='custInpDiv'>
        <label className='labelCustom' htmlFor="">{name}</label>
        <input className='customInp' type={type} value="" />
    </div>
  )
}

export default CustomInput