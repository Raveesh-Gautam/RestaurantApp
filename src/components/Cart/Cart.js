import React from 'react'
import Modal from '../UI/Modal';
import styles from './Cart.module.css'
 const CartData=[{id:1,name:"Shushi",price:170}];
const Cart = () => {

    const handleClose=()=>{

    }
    const handleOrder=()=>{

    }
  return (
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

    </Modal>
  )
}

export default Cart