import React from 'react';
import Products from './components/Products';
import './App.css';

function App() {
    return React.createElement('div', { className: 'App' }, React.createElement(Products));
}

export default App;
