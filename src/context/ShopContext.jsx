import React, { createContext, useEffect, useState } from "react";
import allProduct from "../components/assets/all_product";
import CartItems from "../components/CartItems/CartItems";
import all_product from "../components/assets/all_product";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let Cart = {};
  for (let index = 0; index < allProduct.length + 1; index++) {
    Cart[index] = 0;
  }
  return Cart;
};


const ShopContextProvider = (props) => {
  const [cartItem, setCartItem] = useState(getDefaultCart());

  const addToCart = (itemId, size) => {
    const key = `${itemId}_${size}`; // 👈 unique key for product-size pair
    setCartItem((prev) => ({
      ...prev,
      [key]: {
        quantity: prev[key]?.quantity + 1 || 1,
        size,
        itemId, // optional: helps you fetch product details later
      },
    }));
  };
  const removeFromCart = (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const increaseQuantity = (itemId) => {
    setCartItem((prev) => ({
      ...prev,
      [itemId]: {
        ...prev[itemId],
        quantity: (prev[itemId]?.quantity || 0) + 1,
      },
    }));
  };

  const decreaseQuantity = (itemId) => {
    setCartItem((prev) => {
      const currentQty = prev[itemId]?.quantity || 0;
      if (currentQty <= 1) return prev; // prevent going below 1

      return {
        ...prev,
        [itemId]: {
          ...prev[itemId],
          quantity: currentQty - 1,
        },
      };
    });
  };

  const getTotalCartItems = () => {
    let totalCart = 0;
    for (const item in cartItem) {
      if (cartItem[item].quantity > 0) {
        totalCart += cartItem[item].quantity;
      }
    }
    return totalCart;
  };

  const getTotalCartAmount = () => {
    return Object.values(cartItem).reduce((total, entry) => {
      const product = allProduct.find((p) => p.id === Number(entry.itemId));
      return product ? total + entry.quantity * product.new_price : total;
    }, 0);
  };

  const contextValue = {
    getTotalCartAmount,
    getTotalCartItems,
    allProduct,
    cartItem,
    addToCart,
    removeFromCart,
    setCartItem,
    increaseQuantity,
    decreaseQuantity,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
