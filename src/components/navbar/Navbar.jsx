import React, { useContext, useState } from "react";
import "./Navbar.css";
import navbarLogo from "../assets/logo.png";
import cartLogo from "../assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext";

const Navbar = () => {
  const [hamburger, setHamburger] = useState(false);
  const {getTotalCartItems} = useContext(ShopContext)
 

  const handleMenu = () => {
    setHamburger(!hamburger);
    console.log(hamburger);
  };
  

  const handleClose =()=>{
     setHamburger(false)

  }
  const [menu, setMenu] = useState("shop");
  const menuItems = [
    {
      id: 1,
      name: "shop",
    },
    {
      id: 2,
      name: "men",
    },
    {
      id: 3,
      name: "women",
    },
    {
      id: 4,
      name: "kids",
    },
  ];
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src={navbarLogo} alt="" />
        <h1>WearCraft</h1>
      </div>
      <div
        className={`navbar-mid-right ${
          hamburger ? "navbar-mid-right-show" : ""
        }`}
      >
        <button onClick={handleClose} className="close-button">X</button>
        <ul className="navbar_menu">
          {menuItems.map((item) => {
            return (
              <li key={item.id} onClick={() => setMenu(item.name)}>
                {item.name === "shop" ? (
                  <Link className="link" to={"/"}>
                    {item.name}
                  </Link>
                ) : (
                  <Link className="link" to={`/${item.name}`}>
                    {item.name}
                  </Link>
                )}
                {menu === item.name ? <hr /> : <></>}
              </li>
            );
          })}
        </ul>
        <div className="login">
          <Link className="link" to="/login">
            <button className="login_button">Login</button>
          </Link>
          <div className="cart">
            <Link className="link" to="/cart">
              <img className="cartLogo" src={cartLogo} alt="cart" />
            </Link>
            <div className="nav-cart-count">{getTotalCartItems()}</div>
          </div>
        </div>
      </div>
      <div onClick={handleMenu} className="hamburger-menu">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Navbar;
