import React, { useContext } from 'react'
import CartItems from '../components/CartItems/CartItems'
import './CSS/Cart.css'
import { ShopContext } from '../context/ShopContext'

const Cart = () => {
  return (
    <div>
      <CartItems />
    </div>
  )
}


export default Cart;