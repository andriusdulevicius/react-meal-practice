import './App.css';
import React, { useState } from 'react';

import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';

function App() {
  const [modalState, setModalState] = useState(false);
  const showModalHandler = () => {
    setModalState(!modalState);
  };
  return (
    <div className='App'>
      {modalState && <Cart showModal={showModalHandler} />}
      <Header showModal={showModalHandler} />
      <main>
        <Meals />
      </main>
    </div>
  );
}

export default App;
