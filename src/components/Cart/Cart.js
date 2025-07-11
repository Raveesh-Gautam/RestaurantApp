import React, { useState } from 'react'
import Modal from '../UI/Modal';
import styles from './Cart.module.css'
 const CartData=[{id:1,name:"Shushi",price:170}];
const Cart = (props) => {
const [cartOpen ,setCartOpen]=useState();
    const handleClose=()=>{
if(props.isOpen){
    setCartOpen(false);
    props.setIsOpen(false);
}else{
    setCartOpen(true);
     props.setIsOpen(true);
}
    }
    const handleOrder=()=>{

    }
  return (
    <React.Fragment>{props.isOpen&&
    <Modal>
 <ul className={styles.ul}>
  {CartData.map((ele, index) => (
    <li key={index}>
      {ele.name} - ${ele.price}
    </li>
  ))}
</ul>

<div className={styles.content}>
  <span>Total Amount</span>
  <span>35.22</span>
</div>

<div className={styles.action}>
  <button onClick={handleClose}>Close</button>
  <button onClick={handleOrder}>Order</button>
</div>

    </Modal>}
    </React.Fragment>
  )
}

export default Cart