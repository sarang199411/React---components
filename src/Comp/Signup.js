import React from 'react'
import CustomInput from './CustomInput'
import './Signup.css'
import CustomBtn from './CustomBtn'
import Customh2 from './Customh2'

function Signup() {
  return (
    <div className='signup'>
        <Customh2 label={'Signup Page'}/>
        <CustomInput name={'First Name'} type={'name'}/>
        <CustomInput name={'E-Mail'} type={'email'}/>
        <CustomInput name={'Number'} type={'number'}/>
        <CustomInput name={'Password'} type={'password'}/>
        <CustomInput name={'Confirm Password'} type={'password'}/>
        <a className='atag' href="#personal2">Already have account?</a>
        <CustomBtn label={'Signup'}/>
    </div>
  )
}

export default Signup