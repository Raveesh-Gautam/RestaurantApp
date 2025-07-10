import ReactDOM from 'react-dom';
import classes from './Modal.module.css';

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.header}>{props.title}</div>
      <div className={classes.content}>{props.children}</div>
      <div className={classes.actions}>
        <button onClick={props.onClose}>Close</button>
        <button onClick={props.onConfirm}>Confirm</button>
      </div>
    </div>
  );
};

const portalElement = document.getElementById('overlays');

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay title={props.title} onClose={props.onClose} onConfirm={props.onConfirm}>
          {props.children}
        </ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
