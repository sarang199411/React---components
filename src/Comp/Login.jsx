import React from 'react'
import './Login.css'
import CustomInput from './CustomInput'
import CustomBtn from './CustomBtn'
import Customh2 from './Customh2'
function Login() {
  return (
    <div className='login'>
        {/* <h2 className='h2-login'>Login</h2> */}
        <Customh2 label={'Login Page'}/>
        <CustomInput name={'User Name'} type={'text'}/>
        <CustomInput name={'Password'} type={'password'}/>
        <a className='atag' href="#personal">Creat a Account</a>
        <CustomBtn label={'Login'}/>
        
    </div>
  )
}

export default Login