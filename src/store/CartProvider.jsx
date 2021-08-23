import { useReducer } from 'react';
import CartContext from './cart-context';

const defaultCartState = {
  items: [],
  totalAmount: 0,
  totalQty: 0,
};

// PAGRINDINE REDUCER FUNKCIJA
const cartReducer = (state, action) => {
  // state = cartState
  switch (action.type) {
    case 'ADD':
      const { item } = action;
      const found = state.items.find((i) => i.id === item.id);

      console.log(state.items);

      if (found) {
        const updateIncrement = state.items.map((i) => (i.id === item.id ? { ...i, amount: i.amount + 1 } : i));
        const updatedAmount = state.totalAmount + item.price;
        const updatedQuantity = updateIncrement.reduce((acc, val) => acc + val.amount, 0);
        return { items: updateIncrement, totalAmount: updatedAmount, totalQty: updatedQuantity };
      }
      const updatedItems = [...state.items, item];
      const updatedAmount = state.totalAmount + item.price * item.amount;
      const updatedQuantity = updatedItems.reduce((acc, val) => acc + val.amount, 0);
      return { items: updatedItems, totalAmount: updatedAmount, totalQty: updatedQuantity };
    case 'REMOVE':
      const { id } = action;
      const foundItem = state.items.find((i) => i.id === id);
      const updatedItemsAfterRemove =
        foundItem.amount > 1
          ? state.items.map((i) => (i.id === id ? { ...i, amount: i.amount - 1 } : i))
          : state.items.filter((i) => i.id !== id);

      const updatedAmountRemove = state.totalAmount - foundItem.price;
      const newQuantity = updatedItemsAfterRemove.reduce((acc, val) => acc + val.amount, 0);

      return { items: updatedItemsAfterRemove, totalAmount: updatedAmountRemove, totalQty: newQuantity };
    case 'ORDER':
      return { items: [], totalAmount: 0, totalQty: 0 };
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
  const orderItemsHandler = () => {
    dispatchCartAction({ type: 'ORDER' });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    totalQty: cartState.totalQty,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    orderItems: orderItemsHandler,
  };
  return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>;
};

export default CartProvider;
