import { useContext } from "react";
import CartContext from "../store/auth-context";
import styles from './Header.module.css';

const Header = (props) => {
const handleCart=(event)=>{
props.setIsOpen(prev => !prev); 
}
const cartCtx=useContext(CartContext);
const numberOfItems=cartCtx.items.reduce((cardNumber,item)=>{
  return cardNumber+item.quantity;
},0)

  return (
    <div className={styles.main_h}>
      <div className={styles.main_div}>
        <div className={styles.main_div_left}>ReactMeals</div>
        <div className={styles.main_div_right}>
          <div className={styles.icon} onClick={handleCart}></div>
          <div className={styles.cart}>Your Cart</div>
          <div className={styles.count}>{cartCtx.items.length}</div>
        </div>
      </div>
      <div className={styles.main_food}></div>
    </div>
  );
};

export default Header;
