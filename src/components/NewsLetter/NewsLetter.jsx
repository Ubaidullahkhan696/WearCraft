import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Exclusive Offers On Email</h1>
        <p>Subscribe to ur Email Service and Never Miss an Collections</p>
        <div className='email'>
            <input type="email" name="email" id="" placeholder='Fashionweb@mail.com' />
            <button type='submit'>Subscribe</button>

        </div>
    </div>
  )
}


export default NewsLetter