import classes from './Modal.module.css';
import reactDom from 'react-dom';

const Backdrop = (props) => {
  return <div onClick={props.onClick} className={classes.backdrop} />;
};
const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalEl = document.getElementById('overlays');

const Modal = (props) => {
  return (
    <>
      {reactDom.createPortal(<Backdrop onClick={props.onClick} />, portalEl)}
      {reactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalEl)}
    </>
  );
};

export default Modal;
