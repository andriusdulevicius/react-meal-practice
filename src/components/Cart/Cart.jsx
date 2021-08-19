import classes from './Cart.module.css';
import Modal from '../UI/Modal';

const Cart = ({ modalState, showModal }) => {
  const cartItems = (
    <ul className={classes['cart-items']}>
      {[{ id: 'c1', name: 'sushi', amount: 2, price: 12.99 }].map((i) => (
        <li key={i.id}>{i.name}</li>
      ))}
    </ul>
  );
  return (
    <>
      {modalState && (
        <Modal>
          {cartItems}
          <div className={classes.total}>
            <span>Total Amount </span>
            <span>$39.99 </span>
          </div>
          <div className={classes.actions}>
            <button onClick={showModal} className={classes['button--alt']}>
              Close
            </button>
            <button className={classes['button']}>Order</button>
          </div>
        </Modal>
      )}
    </>
  );
};

export default Cart;
