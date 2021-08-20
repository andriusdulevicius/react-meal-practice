import classes from './MealItemForm.module.css';
import Input from '../../UI/Input';
import { useState, useContext } from 'react';
import CartContext from '../../../store/cart-context';

const MealItemForm = ({ id, item }) => {
  const [inputValue, setInputValue] = useState(0);
  const [errMsg, setErrMsg] = useState('');
  const cartContext = useContext(CartContext);

  const submitHandler = (e) => {
    e.preventDefault();
    if (inputValue < 1 || inputValue > 5) return setErrMsg('Iveskite tinkama kieki!');
    console.log(inputValue);
    const newItem = { id: id, amount: inputValue, name: item.name, price: item.price };
    cartContext.addItem(newItem);
    setErrMsg('');
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <Input
        errMsg={errMsg}
        onChange={(e) => setInputValue(+e.target.value)}
        value={inputValue}
        label='Amount'
        input={{
          id: id,
          type: 'number',
          // min: 1,
          // max: 5,
          step: 1,
        }}
      />
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;
