import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import configureStore from "./store/configure-store";
import './styles/index.scss';
import App from './App.js';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
