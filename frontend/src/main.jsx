import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { configureStore } from "@reduxjs/toolkit";
import globalReducer from "./state/index.js";
// import { setupListeners } from "@reduxjs/toolkit/query";
import { Provider } from "react-redux";
import './index.css'
// import { api } from "state/api";


const store = configureStore({
  reducer: {
    global: globalReducer,
  },
});
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
