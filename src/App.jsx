import './App.css';
import React, { useState } from 'react';

import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';

function App() {
  const [showModal, setShowModal] = useState(false);
  const showModalHandler = () => {
    setShowModal(!showModal);
  };
  return (
    <div className='App'>
      <Cart showModal={showModalHandler} modalState={showModal} />
      <Header showModal={showModalHandler} />
      <main>
        <Meals />
      </main>
    </div>
  );
}

export default App;
