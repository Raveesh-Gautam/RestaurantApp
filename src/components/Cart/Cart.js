import React, { useContext, useState } from "react";
import CartContext from "../store/auth-context";
import Modal from "../UI/Modal";
import styles from "./Cart.module.css";
//  const CartData=[{id:1,name:"Shushi",price:170}];
const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  console.log("Cart", cartCtx.items);
  const [cartOpen, setCartOpen] = useState();
  const handleClose = () => {
    if (props.isOpen) {
      setCartOpen(false);
      props.setIsOpen(false);
    } else {
      setCartOpen(true);
      props.setIsOpen(true);
    }
  };
  const handleOrder = () => {};

  const handleIncrease = (item) => {
  cartCtx.addItem({
    ...item,
    quantity: 1,
  });
};


console.log("ravish",cartCtx.items);
const handleDecrease = (id) => {
  cartCtx.removeItem(id);
};

  return (
    <React.Fragment>
      {props.isOpen && (
        <Modal>
          <ul className={styles.ul}>
            {cartCtx.items.map((ele, index) => (
              <>
                <div className={styles.handleCardPrice}>
                  <div className={styles.nameAndPrice}>
                    <li className={styles.name} key={index}>
                      {ele.name}
                    </li>
                    <div className={styles.price}>${(ele.price*(ele.quantity)).toFixed(3)}</div>
                  </div>
                  <div className={styles.quantity_handle}>x{ele.quantity}</div>
                  <div className={styles.handle_button}>
                    <button
                      className={styles.buttonCal}
                      onClick={()=>handleDecrease(ele.id)}
                    >
                      -
                    </button>
                    <button
                      className={styles.buttonCal}
                      onClick={()=>handleIncrease(ele)}
                    >
                      +
                    </button>
                  </div>
                </div>

                <hr />
              </>
            ))}
          </ul>

          <div className={styles.content}>
            <span>Total Amount</span>
            <span>${cartCtx.totalAmount.toFixed(3)}</span>
          </div>

          <div className={styles.action}>
            <button className={styles.buttonAction} onClick={handleClose}>
              Close
            </button>
            <button className={styles.buttonAction} onClick={handleOrder}>
              Order
            </button>
          </div>
        </Modal>
      )}
    </React.Fragment>
  );
};

export default Cart;
