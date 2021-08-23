import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';

const Cart = ({ showModal }) => {
  const cartCtx = useContext(CartContext);
  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map((i) => (
        <CartItem item={i} cartCtx={cartCtx} />
      ))}
    </ul>
  );
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

  const orderHandler = () => {
    showModal();
    cartCtx.orderItems();
  };
  return (
    <Modal onClick={showModal}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount </span>
        <span>{totalAmount} </span>
      </div>
      <div className={classes.actions}>
        <button onClick={showModal} className={classes['button--alt']}>
          Close
        </button>
        {cartCtx.totalAmount > 0 && (
          <button onClick={orderHandler} className={classes['button']}>
            Order
          </button>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
