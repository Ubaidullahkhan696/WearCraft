import React from 'react'
import './CSS/LoginSignup.css'
import { useNavigate } from 'react-router-dom'

const LoginSignup = () => {

    const novigate = useNavigate();

function handleLogIn(){

  novigate('/loginAready')

}


  return (
    <div className='LoginSignup'>
        <div className="LoginSignup-container">
          <div className="form-section">
          <p className='signup'>Sign Up</p>
          <form className="inputs">
            <input type="text" placeholder='Enter Fullname' required/>
            <input type="email" name="" id="" placeholder='Enter Email' required/>
            <input type="password" placeholder='Enter Password' required />
            <button type='submit'>Continue</button>
          </form>
          <p className='login'>Already have an account?<span onClick={handleLogIn}>Login here</span></p>
          <div className='terms'>
              <input type="checkbox" />
              <p>By clicking this You agree to the Terms</p>
          </div>
          </div>
        </div>
    </div>
  )
}

export default LoginSignup;