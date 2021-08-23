import classes from './MealItemForm.module.css';
import Input from '../../UI/Input';
import { useState } from 'react';

const MealItemForm = ({ id, onAddItem }) => {
  const [inputValue, setInputValue] = useState(1);
  const [errMsg, setErrMsg] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    setErrMsg('');
    if (inputValue < 1 || inputValue > 5) return setErrMsg('Iveskite tinkama kieki (1-5)!');

    onAddItem(+inputValue);
    setInputValue(1);
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
          min: 1,
          max: 5,
          step: 1,
        }}
      />
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;
