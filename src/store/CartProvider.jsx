import { useReducer } from 'react';
import CartContext from './cart-context';

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

// PAGRINDINE REDUCER FUNKCIJA
const cartReducer = (state, action) => {
  // state = cartState
  switch (action.type) {
    case 'ADD':
      const { item } = action;
      const updatedItems = [...state.items, item];
      const updatedAmount = state.totalAmount + item.price * item.amount;
      return { items: updatedItems, totalAmount: updatedAmount };
    case 'REMOVE':
      const updatedItemsAfterRemove = [...state.items].filter((i) => i.id !== action.id);
      const removedItem = [...state.items].filter((i) => i.id === action.id);
      const updatedAmountRemove = state.totalAmount - removedItem.price;

      return { items: updatedItemsAfterRemove, totalAmount: updatedAmountRemove };
    default:
      return state;
  }
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: 'ADD', item });
  };
  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: 'REMOVE', id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>;
};

export default CartProvider;
