import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import CartContext from '../../store/cart-context';
import { useContext, useEffect, useState } from 'react';

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const [btnClasses, setBtnClasses] = useState(classes.button);

  useEffect(() => {
    setBtnClasses(`${classes.button} ${classes.bump}`);
    setTimeout(() => {
      setBtnClasses(classes.button);
    }, 300);
  }, [cartCtx.items]);

  return (
    <button onClick={props.showModal} className={btnClasses}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{cartCtx.totalQty}</span>
    </button>
  );
};

export default HeaderCartButton;
