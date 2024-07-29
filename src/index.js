import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext';
import { QuoteProvider } from './contexts/QuoteContext';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <CartProvider>
        <QuoteProvider>
          <App />
        </QuoteProvider>
      </CartProvider>,
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
