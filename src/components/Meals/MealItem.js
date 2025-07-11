import React from "react";
import styles from "./MealItem.module.css";
import FormItem from "./FormItem";
const MealItem = (props) => {
  const addToCartHandler = (quantity, id) => {
    props.onAddItemData(quantity,id);
    console.log("fyhjyiiiiiiiiii", quantity, id);
  };
  return (
    <div>
      <div className={styles.meal_manage}>
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
        </div>
        <div className={styles.form_item_data}>
          <FormItem id={props.id} onAddToCart={addToCartHandler} />
        </div>
      </div>
      <hr />
    </div>
  );
};

export default MealItem;
