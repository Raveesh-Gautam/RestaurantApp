import React from "react";
import "./MealItem.css";
const MealItem = (props) => {
  return (
    <div className="meal-wrapper">
    <div className="meal">
      <div className="meal-name">{props.name}</div>
      
        <div className="meal-ingredient">
          {props.ingredients.map((ele, index) => (
            <span key={index}>
              {ele}
              {index !== props.ingredients.length - 1 && ", "}
            </span>
          ))}
        
      </div>
      <div className="meal-price">${props.price} </div>
      <hr />
    </div>
    </div>
  );
};

export default MealItem;
