import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import TApp from './TApp';
// import reportWebVitals from './reportWebVitals';


function windowSizeChanged() {
    const width =  window.innerWidth;
    const height = window.innerHeight;
    document.documentElement.style.setProperty('--screen-modal-body-height-80', (height * 0.8).toFixed(0) + "px");
    document.documentElement.style.setProperty('--screen-modal-body-width-80', (width * 0.8).toFixed(0) + "px");
    document.documentElement.style.setProperty('--screen-modal-body-height-70', (height * 0.7).toFixed(0) + "px");
    document.documentElement.style.setProperty('--screen-modal-body-width-70', (width * 0.7).toFixed(0) + "px");
    document.documentElement.style.setProperty('--screen-modal-body-height-60', (height * 0.6).toFixed(0) + "px");
    document.documentElement.style.setProperty('--screen-modal-body-width-60', (width * 0.6).toFixed(0) + "px");
}
windowSizeChanged();

window.onresize = windowSizeChanged;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
