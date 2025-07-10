import React, { useState } from 'react';
import Modal from './Modal'; // path as per your structure

const OrderModal = () => {
  const [showModal, setShowModal] = useState(false);
  const book = {
    name: "Margherita Pizza",
    price: 299
  };

  const openModalHandler = () => {
    setShowModal(true);
  };

  const closeModalHandler = () => {
    setShowModal(false);
  };

  return (
    <div>
      <button onClick={openModalHandler}>Show Order</button>
      {showModal && (
        <Modal
          title={book.name}
          onClose={closeModalHandler}
          onConfirm={() => {
            alert('Order Confirmed!');
            closeModalHandler();
          }}
        >
          <p>Total Amount: ₹{book.price}</p>
        </Modal>
      )}
    </div>
  );
};

export default OrderModal;
