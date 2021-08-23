import React from 'react';
import classes from './CartItem.module.css';

const CartItem = ({ item, cartCtx }) => {
  return (
    <li key={item.id} className={classes['cart-item']}>
      <span>{item.name}</span>
      <button>Qty: {item.amount}</button>
      <div className='inc-dec'>
        <button onClick={() => cartCtx.removeItem(item.id)}>-</button>
        <button onClick={() => cartCtx.addItem(item)}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
