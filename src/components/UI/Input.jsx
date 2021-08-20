import classes from './Input.module.css';

const Input = ({ input, label, onChange, value, errMsg }) => {
  return (
    <div className={classes.input}>
      <label htmlFor={input.id}>{label}</label>
      <input onChange={onChange} value={value} {...input} />
      {errMsg.length > 1 && <span style={{ color: 'red' }}>{errMsg}</span>}
    </div>
  );
};

export default Input;
