import React, { useContext, useState } from "react";
import "./ProductDisplay.css";
import starIcon from "../assets/star_icon.png";
import starDullIcon from "../assets/star_dull_icon.png";
import { ShopContext } from "../../context/ShopContext";
import CartItems from "../CartItems/CartItems";


const ProductDisplay = (props) => {
  const { product } = props;

  const [selectedSize, setSelectedSize] = useState("");

  // console.log(product);
  const { addToCart } = useContext(ShopContext);

  const handleClick = (size) => {
    // console.log("Selected size:", size);
    setSelectedSize(size);
  };

  return (
    <div className="product-description">
      <div className="product-left">
        <div className="image-gallery">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="single-image">
          <img src={product.image} alt="" />
        </div>
      </div>
      <div className="product-right">
        <h2>{product.name}</h2>
        <div className="rating">
          <img src={starIcon} alt="" />
          <img src={starIcon} alt="" />
          <img src={starIcon} alt="" />
          <img src={starIcon} alt="" />
          <img src={starDullIcon} alt="" />
        </div>
        <div className="price">
          <p>${product.old_price}</p>
          <p>${product.new_price}</p>
        </div>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
          labore cumque nostrum reprehenderit doloremque veniam mollitia
          repudiandae molestiae repellat et! Quisquam libero corporis quibusdam
          optio reiciendis consequatur earum. Ipsum, beatae!
        </p>
        <div className="size">
          <p>Select Size</p>
          <div className="size-list">
            <button onClick={() => handleClick("S")}>S</button>
            <button onClick={() => handleClick("M")}>M</button>
            <button onClick={() => handleClick("L")}>L</button>
            <button onClick={() => handleClick("XL")}>XL</button>
            <button onClick={() => handleClick("XXL")}>XXL</button>
          </div>
        </div>
        <div className="add-to-cart">
          <button
            onClick={() => {
              if (!selectedSize) {
                alert("Please select a size");
                return;
              }
              if (selectedSize) {
                addToCart(product.id, selectedSize);
                alert("added to the cart");
              }
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
