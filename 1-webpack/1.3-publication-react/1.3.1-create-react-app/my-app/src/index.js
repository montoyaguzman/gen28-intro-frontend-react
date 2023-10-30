import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const divRootElement = document.getElementById('root');
const root = ReactDOM.createRoot(divRootElement);

// const button = React.createElement('button', { id: 1}, 'Saludar');
// const button2 = React.createElement('button', { id: 2 }, 'Saludar');
// const button3 = React.createElement('button', null, 'Saludar');

// const app = React.createElement(React.Fragment, null, [button, button2, button3]);

/**
 * JSX JavaScript Xtended
 * <button id="1"> saluda <button>
 * <button id="2"> saluda <button>
 * <button id="3"> saluda <button>
 */

root.render(
  <React.Fragment>
    <App/>
    <App/>
    <App/>
    <App/>
  </React.Fragment>
); // custom tag / web components / componentes reutilizable

