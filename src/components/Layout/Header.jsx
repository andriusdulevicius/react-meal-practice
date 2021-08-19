import mealsImg from '../../assets/meals.jpg';
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <div>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <button>Cart</button>
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImg} alt='meals-pic' />
      </div>
    </div>
  );
};

export default Header;
