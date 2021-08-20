import './App.css';
import React, { useState } from 'react';

import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider';

function App() {
  const [modalState, setModalState] = useState(false);
  const showModalHandler = () => {
    setModalState(!modalState);
  };
  return (
    <CartProvider>
      {modalState && <Cart showModal={showModalHandler} />}
      <Header showModal={showModalHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
