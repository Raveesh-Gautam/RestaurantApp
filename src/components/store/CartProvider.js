import { useReducer } from 'react';
import CartContext from './auth-context';


const defaultCartState = {
  items: [],
  totalAmount: 0
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD': {
      const updatedTotal =
        state.totalAmount + action.item.price * action.item.quantity;

      const existingIndex = state.items.findIndex(
        (i) => i.id === action.item.id
      );
      let updatedItems;

      if (existingIndex !== -1) {
        updatedItems = [...state.items];
        const updatedItem = {
          ...updatedItems[existingIndex],
          quantity: updatedItems[existingIndex].quantity + action.item.quantity
        };
        updatedItems[existingIndex] = updatedItem;
      } else {
        updatedItems = state.items.concat(action.item);
      }

      return { items: updatedItems, totalAmount: updatedTotal };
    }
    case 'REMOVE': {
      const existingIndex = state.items.findIndex((i) => i.id === action.id);
      if (existingIndex === -1) return state; 

      const existingItem = state.items[existingIndex];
      const updatedTotal = state.totalAmount - existingItem.price;

      let updatedItems;
      if (existingItem.quantity === 1) {
        updatedItems = state.items.filter((i) => i.id !== action.id);
      } else {

        updatedItems = [...state.items];
        updatedItems[existingIndex] = {
          ...existingItem,
          quantity: existingItem.quantity - 1
        };
      }

      return { items: updatedItems, totalAmount: updatedTotal };
    }


    case 'CLEAR':
      return defaultCartState;

    default:
      return state;
  }
};


const CartProvider = (props) => {
  const [cartState, dispatchCart] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemHandler = (item) =>
    dispatchCart({ type: 'ADD', item });

  const removeItemHandler = (id) =>
    dispatchCart({ type: 'REMOVE', id });

  const clearCartHandler = () =>
    dispatchCart({ type: 'CLEAR' });
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
    clearCart: clearCartHandler
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
