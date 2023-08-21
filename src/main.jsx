import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
// import { RouterProvider } from "react-router-dom";
// import { Leva } from "leva";

import { store } from './store';
// import { router } from "./routes/Routes";

import './index.scss';
import App from './App.jsx'

/* <RouterProvider router={router} /> */
// {/* <Leva /> */}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
