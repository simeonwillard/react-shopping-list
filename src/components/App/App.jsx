import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

import Header from '../Header/Header.jsx';
import './App.css';

function App() {
  const [list, setList] = useState([]);

  useEffect(() => getShoppingList(), []);

  const getShoppingList = () => {
    axios
      .get('/list')
      .then((res) => {
        console.log(res);
        setList(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="App">
      <Header />
      <main>
        <ListItems list={list} />
      </main>
    </div>
  );
}

export default App;
