import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import './fonts/Roboto-Light.ttf'
import './fonts/Roboto-Regular.ttf'
import './fonts/Roboto-Medium.ttf'
import App from "./App";
import {Provider} from "react-redux";
import store from "./redux/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App/>
  </Provider>
);
