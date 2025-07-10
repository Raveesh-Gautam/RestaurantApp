import React from 'react'
import ReactDom from "react-dom";
import styles from "./Modal.module.css";
const BackDrop=(props)=>{
return <div className={styles.backdrop} />
}
const ModalOverlay=props=>{
    return <div className={styles.modal}>
        <div className={styles.content}>{props.children}</div>
    </div>
}
const portalElement=document.getElementById('overlays');
const Modal = (props) => {
  return (
    <React.Fragment>
{ReactDom.createPortal(<BackDrop/> ,portalElement)}
{ReactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,portalElement)}
    </React.Fragment>
  )
}

export default Modal