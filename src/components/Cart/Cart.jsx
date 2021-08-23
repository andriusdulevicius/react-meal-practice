import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';

const Cart = ({ showModal }) => {
  const cartCtx = useContext(CartContext);

  const cartItemAddHandler = (item) => {
    cartCtx.addItem(item);
  };
  const onRemoveItem = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map((i) => (
        // budas prideti funkcijai argumenta kai jo paprastai negalime prideti
        <CartItem
          onAddItem={cartItemAddHandler.bind(null, i)}
          onRemove={onRemoveItem.bind(null, i.id)}
          key={i.id}
          {...i}
        />
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
