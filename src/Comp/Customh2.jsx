import React from 'react'
import './Customh2.css'
function Customh2({label}) {
  return (
    <div className='custh2'>
        <h2>{label ?? 'Custom'}</h2>
    </div>
  )
}

export default Customh2