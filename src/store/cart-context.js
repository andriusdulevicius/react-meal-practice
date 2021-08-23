import React from 'react';

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  totalQty: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

CartContext.displayname = 'CartContext';
export default CartContext;
