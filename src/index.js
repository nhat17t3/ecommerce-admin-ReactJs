import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import { BrowserRouter as Router } from 'react-router-dom';
import store from "./store";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import 'rc-pagination/dist/rc-pagination.css';

window.store = store;
ReactDOM.render(
  
  <Provider store={store}>
    <Router>
      <React.StrictMode>
        <App />
        <ToastContainer />
      </React.StrictMode>
    </Router>
  </Provider>,
  document.getElementById("root")
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
