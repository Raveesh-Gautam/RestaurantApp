import React from "react";
import styles from "./MealItem.module.css"
const MealItem = (props) => {
  return (
    <div className={styles.meal}>
      <div className={styles.meal_name}>{props.name}</div>
      
        <div className={styles.meal_ingredient}>
          {props.ingredients.map((ele, index) => (
            <span key={index}>
              {ele}
              {index !== props.ingredients.length - 1 && ", "}
            </span>
          ))}
        
      </div>
      <div className={styles.meal_price}>${props.price} </div>
      <hr />
    </div>
   
  );
};

export default MealItem;
