import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from './context/DataContext';

const MainApp = () => {
  return <Router>
    <App />
  </Router>
}

ReactDOM.render(  
  <Provider>
{MainApp()}
</Provider>,
  document.getElementById('root')
);
