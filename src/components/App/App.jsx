import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

import Header from '../Header/Header.jsx'
import './App.css';


function App() {



    const resetItems = (list) => {

        axios.put('/list/reset', {
            purchased: FALSE
        }).then(response => {
            console.log('the purchased items have been reset');
        }).catch((error) => {
            console.log('error in reset', error);
        })
    } // end reset

    return (
        <div className="App">
            <Header />
            <main>
                <p>Under Construction...</p>
            <div>
                <button onClick={resetItems}>Reset</button>
            </div>
            </main>
        </div>
    );
}

export default App;
