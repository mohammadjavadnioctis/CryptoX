import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from './sideBar/reportWebVitals'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './sideBar/redux/reducers'

import './sideBar/assets/boxicons-2.0.7/css/boxicons.min.css'
import './sideBar/assets/css/grid.css'
import './sideBar/assets/css/theme.css'
import './sideBar/assets/css/index.css'


import App from "./App";
import { TransactionsProvider } from "./context/TransactionContext";
import "./index.css";




const store = createStore(
  rootReducer
)





ReactDOM.render(
  <Provider store={store}>
      <React.StrictMode>
        <TransactionsProvider>
          <App />
        </TransactionsProvider>
    </React.StrictMode>
    </Provider>,
  document.getElementById("root"),
);
