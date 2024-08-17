import React from 'react'
import './CustomBtn.css'
function CustomBtn({label}) {
  return (
   
        <button className='customBtn'>{label ?? "Click Me"}</button>
    
  )
}

export default CustomBtn