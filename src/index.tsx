import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/App';

// /* //Dentro desse Id root que é jogado o react */
// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
