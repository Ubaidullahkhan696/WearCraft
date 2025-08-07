import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../context/ShopContext";
import removeIcon from "../assets/cart_cross_icon.png";

const CartItems = () => {
  const {
    cartItem,
    allProduct,
    removeFromCart,
    getTotalCartAmount,
    decreaseQuantity,
    increaseQuantity,
  } = useContext(ShopContext);

  
   const isCartEmpty = Object.values(cartItem).filter((item) => item.quantity > 0).length === 0;

  if (isCartEmpty) {
    return (
      <div className="cart-items empty-cart-message">
        <h2>Your cart is empty.</h2>
        <p>Add some items to get started!</p>
      </div>
    );
  }

  return (
    <div className="cart-items">
      <div className="added-items">
        <div className="cartitems-format-main">
          <p>Products</p>
          <p className="title">Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
          <p>Size</p>
        </div>
        <hr />

        {Object.entries(cartItem).map(([key, item]) => {
          const product = allProduct.find((p) => p.id === Number(item.itemId));
          if (!product || item.quantity <= 0) return null;

          return (
            <div key={key}>
              <div className="cartitems-format cartitems-format-main">
                <img className="cartitems-image" src={product.image} alt="" />
                <p className="cartitems-name">{product.name}</p>
                <p>${product.new_price}</p>

                <div className="cartitems-quantity">
                  <button
                    className="decrease-quantity"
                    onClick={() => decreaseQuantity(key)}
                  >
                    -
                  </button>
                  {item.quantity}
                  <button
                    className="increase-quantity"
                    onClick={() => increaseQuantity(key)}
                  >
                    +
                  </button>
                </div>

                <p>${product.new_price * item.quantity}</p>

                <img
                  className="removeItem"
                  src={removeIcon}
                  alt=""
                  onClick={() => removeFromCart(key)}
                />

                <p>{item.size}</p>
              </div>
              <hr />
            </div>
          );
        })}
      </div>

      {/* Cart Summary */}
      <div className="cartCheckOut">
        <div className="checkout-left">
          <div className="subtotal">
            <p>Cart Total</p>
            <p>${getTotalCartAmount()}</p>
          </div>
          <hr />
          <div className="shipping">
            <p>Shipping Fee</p>
            <p>Free</p>
          </div>
          <hr />
          <p>Total ${getTotalCartAmount()}</p>
          <button className="checkout-button">Proceed To Checkout</button>
        </div>

        <div className="checkout-right">
          <p>If you have a promo code, Enter here</p>
          <div className="promocode">
            <input type="text" />
            <button>PROMO</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
