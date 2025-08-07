import React from "react";
import Navbar from "../src/components/navbar/Navbar";
import Shop from "../src/pages/Shop";
import Product from "../src/pages/Product";
import ShopCategory from "../src/pages/ShopCategory";
import Cart from "../src/pages/Cart";
import LoginSignup from "../src/pages/LoginSignup";
import LoginAready from "../src/pages/LoginAready";
import { Route, Routes } from "react-router-dom";
import Footer from "../src/components/Footer/Footer";
import menBanner from "../src/components/assets/banner_mens.png";
import womenBanner from '../src/components/assets/banner_women.png';
import kidsBanner from  '../src/components/assets/banner_kids.png';



const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/men" element={<ShopCategory banner={menBanner} category="men" />} />
        <Route path="/women" element={<ShopCategory banner={womenBanner} category="women" />} />
        <Route path="/kids" element={<ShopCategory banner={kidsBanner} category="kids" />} />

        <Route path="/product" element={<Product />}>
          <Route path=":productId" element={<Product />} />
        </Route>
        
        <Route path="/cart" element={<Cart />} />
        
        <Route path="/login" element={<LoginSignup />} />
        <Route path="/loginAready" element={<LoginAready/>} />

      </Routes>
       <Footer />
    </>
  );
};

export default App;
