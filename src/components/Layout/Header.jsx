import mealsImg from '../../assets/meals.jpg';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
  return (
    <div>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCartButton showModal={props.showModal} />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImg} alt='meals-pic' />
      </div>
    </div>
  );
};

export default Header;
