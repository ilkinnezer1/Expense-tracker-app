import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom"
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './Redux/Store/Store';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';

ReactDOM.render(

<Provider store={store}>
  <PersistGate persistor={persistor}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </PersistGate>
</Provider>
,
  document.getElementById('root')
);

