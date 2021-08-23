import React from 'react';
import classes from './CartItem.module.css';

const CartItem = ({ name, amount, id, price, cartCtx, onRemove, onAddItem }) => {
  const priceAdj = `$${price.toFixed(2)}`;
  return (
    <li key={id} className={classes['cart-item']}>
      <div>
        <h2>{name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{priceAdj}</span>
          <span className={classes.amount}>Qty: {amount}</span>
        </div>
      </div>

      <div className={classes.actions}>
        <button onClick={onRemove}>-</button>
        <button onClick={onAddItem}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
