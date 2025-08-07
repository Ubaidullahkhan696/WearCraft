import React from 'react'
import './CSS/LoginSignup.css'
import { useNavigate } from 'react-router-dom'

function LoginAready() {

    const novigate = useNavigate()

    function handleSignup(){
        novigate('/login')
    }
  return (
    <div className='LoginSignup'>
        <div className="LoginSignup-container">
          <div className="form-section">
          <p className='signup'>Sign In</p>
          <form className="inputs">
            <input type="email" name="" id="" placeholder='Enter Email' required/>
            <input type="password" placeholder='Enter Password' required />
            <button type='submit'>Continue</button>
          </form>
          <p className='login'>I don't have an account?<span onClick={handleSignup}>Signup here</span></p>
          <div className='terms'>
              <input type="checkbox" />
              <p>By clicking this You agree to the Terms</p>
          </div>
          </div>
        </div>
    </div>
  )
}

export default LoginAready
