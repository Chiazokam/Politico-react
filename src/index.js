import React from 'react';
import "@babel/polyfill";
import ReactDOM from 'react-dom';
import 'react-toastify/dist/ReactToastify.min.css';
import { ToastContainer } from 'react-toastify';
import {Provider} from "react-redux";
import configureStore from "./store/configure-store";
import './styles/index.scss';
import App from './App.js';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
    <ToastContainer
      position='top-center'
      hideProgressBar
    />
  </Provider>,
  document.getElementById('root')
);
