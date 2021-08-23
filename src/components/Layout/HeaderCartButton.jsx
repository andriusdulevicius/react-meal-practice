import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import CartContext from '../../store/cart-context';
import { useContext } from 'react';

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  return (
    <button onClick={props.showModal} className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{cartCtx.totalQty}</span>
    </button>
  );
};

export default HeaderCartButton;
