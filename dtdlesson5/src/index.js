import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import DTD5App from './DTD5App';

const DTD5root = ReactDOM.createRoot(document.getElementById('DTD5root'));
DTD5root.render(
  //<React.StrictMode>
    <DTD5App/>
  //</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
