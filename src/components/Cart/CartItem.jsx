import React from 'react';
import classes from './CartItem.module.css';

const CartItem = ({ item, cartCtx }) => {
  return (
    <li key={item.id} className={classes['cart-item']}>
      <div>
        <h2>{item.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{item.price}</span>
          <span className={classes.amount}>Qty: {item.amount}</span>
        </div>
      </div>

      <div className={classes.actions}>
        <button onClick={() => cartCtx.removeItem(item.id)}>-</button>
        <button onClick={() => cartCtx.addItem(item)}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
