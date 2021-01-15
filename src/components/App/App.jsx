import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import swal from 'sweetalert';

import Header from '../Header/Header';
import ListForm from '../ListForm/ListForm';
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
      .then((res) => setList(res.data))
      .catch((err) => console.log(err));
  };

  const editItem = (item) => {
      setNewItemName(item.name);
      setNewItemQuantity(item.quantity);
      setNewItemUnit(item.unit);
      deleteItem(item);
  }

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
        purchased: 'FALSE',
      })
      .then((response) => {
        console.log('the purchased items have been reset');
        getShoppingList();
      })
      .catch((error) => {
        console.log('error in reset', error);
      });
  }; // end reset

  const deleteItem = (item) => {
    console.log('clicked ID:', item.id);
    axios
      .delete(`/list/${item.id}`)
      .then((response) => {
        console.log(response);
        getShoppingList();
      })
      .catch((err) => {
        console.log(err);
        alert('ERROR IN DELETE');
      });
  };

  const clearItems = () => {
    console.log('in clear items');

    swal({
      title: 'Remove all items from your shopping list?',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal('All items have been removed from your shopping list.', {
          icon: 'success',
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

        swal({
            title: "Are you sure you want to reset purchase status?",
            icon: "warning",
            buttons: ['No', 'Yes'],
            dangerMode: true,
        }).then((willDelete) => {
            if (willDelete) {
                swal("Purchase status has been reset", {
                    icon: "success",
                })
                axios
                    .put('/list/reset', {
                        purchased: 'FALSE',
                    })
                    .then((response) => {
                        console.log('the purchased items have been reset');
                        getShoppingList();
                    })
                    .catch((error) => {
                        console.log('error in reset', error);
                    });
            }
        })



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

        swal({
            title: "Remove all items from your shopping list?",
            icon: "warning",
            buttons: ['No', 'Yes'],
            dangerMode: true,
        }).then((willDelete) => {
            if (willDelete) {
                swal("All items have been removed from your shopping list.", {
                    icon: "success",
                })
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
            }
        })


    };

    const purchaseItem = (item) => {
        console.log('clicked buy!!!!!!!!!!');
        axios.put(`/list/${item.id}`, {
            purchased: 'TRUE'
        }).then((response) => {
            getShoppingList();
          })
          .catch((err) => {
            console.log(err);
            alert('ERROR IN CLEAR');
          });
      }
    });
  };

  const purchaseItem = (item) => {
    console.log('clicked buy!!!!!!!!!!');
    axios
      .put(`/list/${item.id}`, {
        purchased: 'TRUE',
      })
      .then((response) => {
        getShoppingList();
      })
      .catch((error) => {
        console.log(error);
        alert('error in purchasing item');
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
          resetItems={resetItems}
          clearItems={clearItems}
        />
        <DisplayList
          list={list}
          purchaseItem={purchaseItem}
          deleteItem={deleteItem}
          editItem={editItem}
        />
      </main>
    </div>
  );
}

export default App;
