import React from "react";
import "./Popular.css";
import data from "../assets/data";
import Item from "../item/Item";


const Popular = () => {
  console.log(data)
  return (
    <div className="popular">
      <h1 className="heading">POPULAR IN WOMEN </h1>
      <hr />
      <div className="item-list">
        {data.map((item) => {
          return (
            <Item
              className="item-inside"
              key={item.id}
              id={item.id}
              name={item.name}
              image={item.image}
              old_price={item.old_price}
              new_price={item.new_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Popular;
