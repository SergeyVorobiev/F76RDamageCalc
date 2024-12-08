import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import TApp from './TApp';
import reportWebVitals from './reportWebVitals';


/*
    <App />
    <TApp />
*/

// Setup some screen mesures to use them in css
document.documentElement.style.setProperty('--screen-modal-body-height', (window.innerHeight * 0.8).toFixed(0) + "px");
document.documentElement.style.setProperty('--screen-modal-body-width', (window.innerWidth * 0.8).toFixed(0) + "px");

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
