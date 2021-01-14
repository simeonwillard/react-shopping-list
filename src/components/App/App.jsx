import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

import Header from '../Header/Header.jsx'
import './App.css';


function App() {
    
    const deleteItem = () => {
        axios.delete(`/list/${id}`)
        .then((response) => {
            console.log(response)
        }).catch((err) => {
            alert('ERROR IN DELETE')
        })
    }

    const clearItems = () => {
        axios.delete(`/list/clear`)
        .then((response) => {
            console.log(resposne)
        }).catch((err) => {
            alert('ERROR IN CLEAR')
        })
    }
    
    return (
        <div className="App">
            <Header />
            <main>
                <p>Under Construction...</p>
            </main>
        </div>
    );
}

export default App;
