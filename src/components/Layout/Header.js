import React,{useState} from "react";
import styles from './Header.module.css'
const Header = (props) => {
const handleCart=(event)=>{
props.setIsOpen(prev => !prev); 
}
  return (
    <div className={styles.main_h}>
      <div className={styles.main_div}>
        <div className={styles.main_div_left}>ReactMeals</div>
        <div className={styles.main_div_right}>
          <div className={styles.icon} onClick={handleCart}></div>
          <div className={styles.cart}>Your Cart</div>
          <div className={styles.count}>0</div>
        </div>
      </div>
      <div className={styles.main_food}></div>
    </div>
  );
};

export default Header;
