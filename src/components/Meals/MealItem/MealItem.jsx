import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';
import { useContext } from 'react';
import CartContext from '../../../store/cart-context';

const MealItem = ({ meal }) => {
  const cartContext = useContext(CartContext);
  const addToCartHandler = (itemQty) => {
    const newItem = { id: meal.id, amount: itemQty, name: meal.name, price: meal.price };
    cartContext.addItem(newItem);
  };
  const price = `$${meal.price.toFixed(2)} `;
  return (
    <li className={classes.meal}>
      <div>
        <h3>{meal.name}</h3>
        <div className={classes.description}>{meal.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm onAddItem={addToCartHandler} id={meal.id} item={meal} />
      </div>
    </li>
  );
};

export default MealItem;
