import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="main-h">
      <div className="main-div">
        <div className="main-div-left ">ReactMeals</div>
        <div className="main-div-right">
          <div className="icon"></div>
          <div className="cart">Your Cart</div>
          <div className="count">0</div>
        </div>
      </div>
      <div className="main-food"></div>
    </div>
  );
};

export default Header;
