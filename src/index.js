import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import '@ionic/react/css/core.css';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';

import './assets/fonts/Poppins-Bold.ttf'

ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  document.querySelector('#root')
);
