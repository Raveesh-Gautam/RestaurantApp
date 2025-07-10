import React, { useState } from "react";
import styles from "./FormItem.module.css";
const FormItem = (props) => {
  const [quantity, setQuantity] = useState(1);
  const submitHandler = (e) => {
    e.preventDefault();
props.onAddToCart(+quantity);
  };
  return (
    <form onSubmit={submitHandler} className={styles.meal_form}>
      <label  className={styles.amount_label} htmlFor="qty">Amount</label>
      <input
        type="number"
        name="qty"
        min={1}
        onChange={(e) => setQuantity(e.target.value)}
        value={quantity}
        className={styles.input}
      ></input>
      <button className={styles.button}>+Add</button>
    </form>
  );
};

export default FormItem;
