import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './fonts.css';
import rootReducer from "./reducer/rootReducer";
import {configureStore} from '@reduxjs/toolkit'
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
const root = ReactDOM.createRoot(document.getElementById('root'));
const store=configureStore({
  reducer:rootReducer
})
root.render(
  <React.StrictMode>
   <Provider store={store}>
    <BrowserRouter>
      <App />
      <Toaster/>
    </BrowserRouter>
    </Provider>
   
  </React.StrictMode>
);

