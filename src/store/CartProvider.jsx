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
      // taspats tik findIndex , grazintu indeksa to itemo

      if (found) {
        const updatedIncrement = state.items.map((i) =>
          i.id === item.id ? { ...i, amount: i.amount + item.amount } : i
        );
        const updatedTotalAmount = state.totalAmount + item.price;

        return { items: updatedIncrement, totalAmount: updatedTotalAmount };
      } else {
        const updatedItems = [...state.items, item];
        const updatedTotalAmount = state.totalAmount + item.price * item.amount;

        return { items: updatedItems, totalAmount: updatedTotalAmount };
      }
    case 'REMOVE':
      const { id } = action;
      const foundItem = state.items.find((i) => i.id === id);
      const updatedItemsAfterRemove =
        foundItem.amount > 1
          ? state.items.map((i) => (i.id === id ? { ...i, amount: i.amount - 1 } : i))
          : state.items.filter((i) => i.id !== id);

      const updatedAmountRemove = state.totalAmount - foundItem.price;

      return { items: updatedItemsAfterRemove, totalAmount: updatedAmountRemove };
    case 'ORDER':
      return { items: [], totalAmount: 0 };
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
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    orderItems: orderItemsHandler,
  };
  return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>;
};

export default CartProvider;
