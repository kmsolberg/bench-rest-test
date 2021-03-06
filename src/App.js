import React from 'react';
import Header from './components/Header/Header';
import Transactions from './components/Transactions/Transactions';
import './App.scss';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Transactions />
    </div>
  );
}

export default App;
