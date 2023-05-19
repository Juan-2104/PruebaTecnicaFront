import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/components/app/App';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <App />
  </Router>
);