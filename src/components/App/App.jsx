import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

import Header from '../Header/Header.jsx';
import ListForm from '../ListForm/ListForm.jsx';
import DisplayList from '../DisplayList/DisplayList';
import './App.css';

function App() {
  const [newItemName, setNewItemName] = useState('');
  const [newItemQuantity, setNewItemQuantity] = useState('');
  const [newItemUnit, setNewItemUnit] = useState('');
  const [list, setList] = useState([]);

  useEffect(() => getShoppingList(), []);

  const getShoppingList = () => {
    axios
      .get('/list')
      .then((res) => {
        setList(res.data);
      })
      .catch((err) => console.log(err));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('in handle submit, received', {
      name: newItemName,
      quantity: newItemQuantity,
      unit: newItemUnit,
    });
    axios
      .post('/list', {
        name: newItemName,
        quantity: newItemQuantity,
        unit: newItemUnit,
      })
      .then((response) => {
        setNewItemName('');
        setNewItemQuantity('');
        setNewItemUnit('');
        getShoppingList();
      })
      .catch((error) => {
        alert('Error adding food');
        console.log(error);
      });
  };

  const resetItems = (list) => {
    axios
      .put('/list/reset', {
        purchased: FALSE,
      })
      .then((response) => {
        console.log('the purchased items have been reset');
      })
      .catch((error) => {
        console.log('error in reset', error);
      });
  }; // end reset

  const deleteItem = (item) => {
      console.log('clicked ID:', item.id)
    axios
      .delete(`/list/${item.id}`)
      .then((response) => {
        console.log(response);
        getShoppingList()
      })
      .catch((err) => {
          console.log(err)
        alert('ERROR IN DELETE');
      });
  };

  const clearItems = () => {
      console.log('in clear items')
    axios
      .delete('/clear')
      .then((response) => {
        console.log(response);
        getShoppingList()
      })
      .catch((err) => {
          console.log(err)
        alert('ERROR IN CLEAR');
      });
  };

  return (
    <div className="App">
      <Header />
      <main>
        <ListForm
          handleSubmit={handleSubmit}
          newItemName={newItemName}
          setNewItemName={setNewItemName}
          newItemQuantity={newItemQuantity}
          setNewItemQuantity={setNewItemQuantity}
          newItemUnit={newItemUnit}
          setNewItemUnit={setNewItemUnit}
        />
        <DisplayList 
            list={list}
            deleteItem={deleteItem} />
        <p>Under Construction...</p>
        <button onClick={resetItems}>Reset</button>
        <button onClick={clearItems}>Clear</button>
      </main>
    </div>
  );
}

export default App;
