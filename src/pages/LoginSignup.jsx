import React, { useState } from 'react'
import './CSS/LoginSignup.css'
import { useNavigate } from 'react-router-dom'

const LoginSignup = () => {

    const novigate = useNavigate();

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [name,setName] = useState("")

function handleLogIn(){

  novigate('/loginAready')

}

const handleChangeEmail=(e)=>{
      setEmail(e.target.value)
    }
const handleChangeName=(e)=>{
      setName(e.target.value)
    }
    const handleChangePassword=(e)=>{
      setPassword(e.target.value)
    }


  return (
    <div className='LoginSignup'>
        <div className="LoginSignup-container">
          <div className="form-section">
          <p className='signup'>Sign Up</p>
          <form className="inputs">
            <input type="text" name='Fullname' value={name} onChange={handleChangeName} placeholder='Enter Fullname' required/>
            <input type="email" name='Email' value={email} onChange={handleChangeEmail} placeholder='Enter Email' required/>
            <input type="password" name='Password' value={password} onChange={handleChangePassword} placeholder='Enter Password' required />
            <button type='submit' name='Continue button'>Continue</button>
          </form>
          <p className='login'>Already have an account?<span onClick={handleLogIn}>Login here</span></p>
          <div className='terms'>
              <input type="checkbox"  />
              <p>By clicking this You agree to the Terms</p>
          </div>
          </div>
        </div>
    </div>
  )
}

export default LoginSignup;