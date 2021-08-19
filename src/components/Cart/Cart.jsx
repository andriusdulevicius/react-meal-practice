import classes from './Cart.module.css';

const Cart = (props) => {
  const cartItems = (
    <ul className={classes['cart-items']}>
      {[{ id: 'c1', name: 'sushi', amount: 2, price: 12.99 }].map((i) => (
        <li>{i.name}</li>
      ))}
    </ul>
  );
  return (
    <div>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount </span>
        <span>${cartItems.price} </span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']}>Close</button>
        <button className={classes['button']}>Order</button>
      </div>
    </div>
  );
};

export default Cart;
