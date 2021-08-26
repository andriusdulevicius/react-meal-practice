import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import CartContext from '../../store/cart-context';
import { useContext, useEffect, useState } from 'react';

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const [btnClasses, setBtnClasses] = useState(classes.button);

  useEffect(() => {
    if (cartCtx.items.length === 0) return;
    setBtnClasses(`${classes.button} ${classes.bump}`);
    const timer = setTimeout(() => {
      setBtnClasses(classes.button);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [cartCtx.items]);

  const totalQty = cartCtx.items.reduce((acc, cur) => acc + cur.amount, 0);
  return (
    <button onClick={props.showModal} className={btnClasses}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{totalQty}</span>
    </button>
  );
};

export default HeaderCartButton;
