import React, { useState } from 'react'
import './CSS/LoginSignup.css'
import { useNavigate } from 'react-router-dom'

function LoginAready() {

    const novigate = useNavigate()
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    function handleSignup(){
        novigate('/login')
    }
    
    const handleChangeEmail=(e)=>{
      setEmail(e.target.value)
    }
    const handleChangePassword=(e)=>{
      setPassword(e.target.value)
    }
  return (
    <div className='LoginSignup'>
        <div className="LoginSignup-container">
          <div className="form-section">
          <p className='signup'>Sign In</p>
          <form className="inputs">
            <input type="email" name='Email' value={email} onChange={handleChangeEmail} placeholder='Enter Email'  required/>
            <input type="password" name='Password' value={password} onChange={handleChangePassword} placeholder='Enter Password' required />
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

export default LoginAready;
