import React, { useContext, useState } from 'react';
import CartContext from '../store/auth-context';
import Modal from '../UI/Modal';
import styles from './Cart.module.css';
 const CartData=[{id:1,name:"Shushi",price:170}];
const Cart = (props) => {
   const cartCtx= useContext(CartContext);
   console.log("Cart",cartCtx.items)
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
    <React.Fragment>
        {props.isOpen&&
    <Modal>
 <ul className={styles.ul}>
  {cartCtx.items.map((ele, index) => (
    <>
   <li  key={index}>
      {ele.name} 
    </li>
    <hr/>
    </>
    
  ))}
  
</ul>

<div className={styles.content}>
  <span>Total Amount</span>
  <span>${cartCtx.totalAmount}</span>
</div>

<div className={styles.action}>
  <button onClick={handleClose}>Close</button>
  <button onClick={handleOrder}>Order</button>
</div>

    </Modal>
    }
    </React.Fragment>
  )
}

export default Cart;